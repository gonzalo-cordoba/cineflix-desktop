"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button as UIButton } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import logovisa from "../../../public/visa-svgrepo-com.svg";
import logomastercard from "../../../public/mastercard-svgrepo-com.svg";
import logopaypal from "../../../public/paypal-svgrepo-com.svg";
import { useRouter } from "next/router";

// Esquema de validación usando Zod
const formSchema = z.object({
  email: z.string().email({ message: "Introduce un email válido" }),
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  cardNumber: z
    .string()
    .min(16, { message: "El número de tarjeta debe tener 16 dígitos" }),
  securityCode: z
    .string()
    .min(3, { message: "El código de seguridad debe tener 3 dígitos" }),
  expirationDate: z
    .string()
    .min(5, { message: "La fecha de vencimiento debe tener el formato MM/AA" }),
  paymentMethod: z.enum(["Visa", "MasterCard", "PayPal"], {
    errorMap: () => ({ message: "Selecciona un método de pago válido" }),
  }),
});

interface ProfileFormProps {
  onSubmit: SubmitHandler<z.infer<typeof formSchema>>;
}

export function ProfileForm({ onSubmit }: ProfileFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      cardNumber: "",
      securityCode: "",
      expirationDate: "",
      paymentMethod: "Visa",
    },
  });

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Visa");

  const getPaymentLogo = () => {
    switch (selectedPaymentMethod) {
      case "Visa":
        return logovisa;
      case "MasterCard":
        return logomastercard;
      case "PayPal":
        return logopaypal;
      default:
        return null;
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Campo de Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl
                style={{
                  backgroundColor: "#F2EBFB",
                  color: "black",
                  borderRadius: "7px",
                  border: "none",
                }}
              >
                <Input placeholder="tuemail@example.com" {...field} />
              </FormControl>
              {/* Mensaje de error personalizado con estilo */}
              {form.formState.errors.email && (
                <FormMessage style={{ color: "red", fontSize: "14px" }}>
                  {form.formState.errors.email.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* Campo de Nombre */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl
                style={{
                  backgroundColor: "#F2EBFB",
                  color: "black",
                  borderRadius: "7px",
                  border: "none",
                }}
              >
                <Input placeholder="Tu nombre completo" {...field} />
              </FormControl>
              {form.formState.errors.name && (
                <FormMessage style={{ color: "red", fontSize: "14px" }}>
                  {form.formState.errors.name.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* Campo de Número de Tarjeta */}
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de Tarjeta</FormLabel>
              <FormControl
                style={{
                  backgroundColor: "#F2EBFB",
                  color: "black",
                  borderRadius: "7px",
                  border: "none",
                }}
              >
                <Input
                  placeholder="1234 5678 9012 3456"
                  {...field}
                  maxLength={19}
                  onChange={(e) => {
                    let value = e.target.value;

                    // Elimino todo lo que no sea dígito
                    value = value.replace(/[^\d]/g, "");

                    // Agrupo en bloques de 4 dígitos con espacios
                    value = value.replace(/(.{4})/g, "$1 ").trim();

                    // Limite de 16 dígitos
                    if (value.replace(/\s/g, "").length <= 16) {
                      field.onChange(value);
                    }
                  }}
                />
              </FormControl>
              {form.formState.errors.cardNumber && (
                <FormMessage style={{ color: "red", fontSize: "14px" }}>
                  {form.formState.errors.cardNumber.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* Campo de Código de Seguridad */}
        <FormField
          control={form.control}
          name="securityCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Código de Seguridad</FormLabel>
              <FormControl
                style={{
                  backgroundColor: "#F2EBFB",
                  color: "black",
                  borderRadius: "7px",
                  border: "none",
                }}
              >
                <Input
                  placeholder="123"
                  {...field}
                  maxLength={3}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      field.onChange(value);
                    }
                  }}
                />
              </FormControl>
              {form.formState.errors.securityCode && (
                <FormMessage style={{ color: "red", fontSize: "14px" }}>
                  {form.formState.errors.securityCode.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* Campo de Fecha de Vencimiento */}
        <FormField
          control={form.control}
          name="expirationDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de Vencimiento (MM/AA)</FormLabel>
              <FormControl
                style={{
                  backgroundColor: "#F2EBFB",
                  color: "black",
                  borderRadius: "7px",
                  border: "none",
                }}
              >
                <Input
                  placeholder="MM/AA"
                  {...field}
                  maxLength={5}
                  onChange={(e) => {
                    let value = e.target.value;

                    value = value.replace(/[^\d]/g, "");

                    if (value.length >= 3) {
                      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
                    }

                    field.onChange(value);
                  }}
                />
              </FormControl>
              {form.formState.errors.expirationDate && (
                <FormMessage style={{ color: "red", fontSize: "14px" }}>
                  {form.formState.errors.expirationDate.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* Selección de Método de Pago con logo */}
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Método de Pago</FormLabel>
              <div className="flex items-center gap-2">
                {/* Logo dinámico */}
                {getPaymentLogo() && (
                  <Image
                    src={getPaymentLogo()}
                    alt={`Logo ${selectedPaymentMethod}`}
                    width={50}
                    height={50}
                  />
                )}
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    setSelectedPaymentMethod(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl
                    style={{
                      backgroundColor: "#F2EBFB",
                      color: "black",
                      borderRadius: "7px",
                      border: "none",
                    }}
                  >
                    <SelectTrigger style={{ backgroundColor: "#F2EBFB" }}>
                      <SelectValue placeholder="Selecciona un método de pago" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent
                    style={{
                      backgroundColor: "#F2EBFB",
                      border: "none",
                      borderRadius: "7px",
                      color: "black",
                    }}
                  >
                    <SelectItem value="Visa">Visa</SelectItem>
                    <SelectItem value="MasterCard">MasterCard</SelectItem>
                    <SelectItem value="PayPal">PayPal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {form.formState.errors.paymentMethod && (
                <FormMessage style={{ color: "red", fontSize: "14px" }}>
                  {form.formState.errors.paymentMethod.message}
                </FormMessage>
              )}
            </FormItem>
          )}
        />

        {/* Botón para Enviar el Formulario */}
        <UIButton type="submit" style={{ display: "none" }}>
          Enviar
        </UIButton>
      </form>
    </Form>
  );
}
