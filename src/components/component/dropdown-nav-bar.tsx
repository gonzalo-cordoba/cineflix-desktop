"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import LocationIcon from "../../../public/LocationIcon";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

export function DropdownNavBar() {
  const [selectedCine, setSelectedCine] = useState("Elige un cine");

  const handleSelect = (cine: string) => {
    setSelectedCine(cine);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            <div className="flex items-center">
              <LocationIcon className="w-4 h-4 mr-2" />
              <span className="font-extrabold">{selectedCine}</span>
            </div>
            <ChevronDownIcon className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full p-4 space-y-2 bg-custom-purple">
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={() => handleSelect("Cineflix Abasto")}>
              <div
                className="flex items-center justify-between"
                style={{ color: "#FBFAFF" }}
              >
                <span className="font-semibold">Cineflix Abasto</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator
              className="my-2 border-t border-gray-600"
              style={{ color: "#FBFAFF" }}
            />
            <DropdownMenuItem
              onSelect={() => handleSelect("Cineflix Avellaneda")}
            >
              <div
                className="flex items-center justify-between text-white"
                style={{ color: "#FBFAFF" }}
              >
                <span className="font-semibold">Cineflix Avellaneda</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator
              className="my-2 border-t border-gray-600"
              style={{ color: "#FBFAFF" }}
            />
            <DropdownMenuItem onSelect={() => handleSelect("Cineflix Dot")}>
              <div
                className="flex items-center justify-between"
                style={{ color: "#FBFAFF" }}
              >
                <span className="font-semibold">Cineflix Dot</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator
              className="my-2 border-t border-gray-600"
              style={{ color: "#FBFAFF" }}
            />
            <DropdownMenuItem
              onSelect={() => handleSelect("Cineflix Malvinas Argentinas")}
            >
              <div
                className="flex items-center justify-between"
                style={{ color: "#FBFAFF" }}
              >
                <span className="font-semibold">
                  Cineflix Malvinas Argentinas
                </span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator
              className="my-2 border-t border-gray-600"
              style={{ color: "#FBFAFF" }}
            />
            <DropdownMenuItem onSelect={() => handleSelect("Cineflix Moreno")}>
              <div
                className="flex items-center justify-between"
                style={{ color: "#FBFAFF" }}
              >
                <span className="font-semibold">Cineflix Moreno</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
