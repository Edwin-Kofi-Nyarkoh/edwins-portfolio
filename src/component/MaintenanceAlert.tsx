"use client";

import { useEffect } from "react";

export default function MaintenanceAlert() {
  useEffect(() => {
    const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

    if (isMaintenance) {
      alert("🚧 This site is currently under maintenance. Some features may not work properly.");
    }
  }, []);

  return null;
}