"use client";

import { useEffect } from "react";

export function SecurityGuard() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable common developer shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
      }
      // Ctrl+Shift+I / Cmd+Option+I (Inspect)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
      }
      // Ctrl+Shift+J / Cmd+Option+J (Console)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "j") {
        e.preventDefault();
      }
      // Ctrl+U / Cmd+Option+U (View Source)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "u") {
        e.preventDefault();
      }
      // Ctrl+S / Cmd+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
      }
      // Ctrl+Shift+C (Inspect Element)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "c") {
        e.preventDefault();
      }
    };

    const handleDragStart = (e: DragEvent) => e.preventDefault();
    const handleSelectStart = (e: Event) => e.preventDefault();

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);
    // document.addEventListener("selectstart", handleSelectStart); // Optional, might be too restrictive

    // Console warning message
    const style = "background-color: #020617; color: #38bdf8; font-size: 20px; font-weight: bold; padding: 10px; border-radius: 5px; border: 2px solid #38bdf8;";
    console.log("%c STOP! This is a secure system. ", style);
    console.log("%c Unauthorized attempts to copy code or access the source are logged. ", "color: #f87171; font-weight: bold;");

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return null;
}
