import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Check, X, AlertTriangle, Info } from "lucide-react";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertsProps {
  type: AlertType;
  title?: string;
  description: string;
}

const iconComponents = {
  success: (
    <Check
      style={{ color: "white", backgroundColor: "green" }}
      className="h4 w-4"
    />
  ),
  error: <X style={{ color: "red" }} className="h4 w-4" />,
  warning: <AlertTriangle style={{ color: "yellow" }} className="h4 w-4" />,
  info: <Info className="h4 w-4" />,
};

export const Alerts: React.FC<AlertsProps> = ({ type, title, description }) => {
  const icon = iconComponents[type];

  const alertStyles = {
    success: {
      backgroundColor: "#e6ffed",
      color: "#1f7a1f",
      borderColor: "#b5e7b5",
    },
    error: {
      backgroundColor: "#ffe6e6",
      color: "#a30000",
      borderColor: "#e0b3b3",
    },
    warning: {
      backgroundColor: "#fff8e1",
      color: "#856404",
      borderColor: "#ffe8a1",
    },
    info: {
      backgroundColor: "#e7f3fe",
      color: "#0056b3",
      borderColor: "#b3d7f2",
    },
  };

  return (
    <Alert
      style={{
        border: `1px solid ${alertStyles[type].borderColor}`,
        backgroundColor: alertStyles[type].backgroundColor,
        color: alertStyles[type].color,
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "0.5rem",
        display: "flex",
        alignItems: "start",
      }}
      className={`p-4 mb-4 rounded-lg flex items-start`}
    >
      <div className="mr-4">{icon}</div>
      <div>
        {title && <AlertTitle className="font-bold">{title}</AlertTitle>}
        <AlertDescription>{description}</AlertDescription>
      </div>
    </Alert>
  );
};
