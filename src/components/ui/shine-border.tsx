"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { DIcons, ValidIcon } from "dicons";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string | string[]; // Backwards compatibility
  gradient?: string;
  className?: string;
  children: React.ReactNode;
}

const ShineBorder = ({
  children,
  className,
  borderWidth = 2,
  duration = 3,
  gradient = "from-[#38bdf8] via-[#818cf8] to-[#c084fc]",
  color, // Ignored in new version but kept for types
  borderRadius = 24,
}: ShineBorderProps) => {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ padding: borderWidth, borderRadius }}
    >
      {/* Animated Gradient Layer */}
      <div className="absolute inset-0 overflow-hidden" style={{ borderRadius }}>
        <div
          className={cn(
            "absolute -inset-[100%] blur-sm animate-spin bg-conic",
            gradient
          )}
          style={{ animationDuration: `${duration}s` }}
        />
      </div>

      {/* Content Layer */}
      <div className={cn(
        "relative h-full w-full overflow-hidden",
        className?.includes("!bg-transparent") ? "bg-transparent" : "bg-[var(--bg-card)]"
      )} style={{ borderRadius: Math.max(0, borderRadius - borderWidth) }}>
        {children}
      </div>
    </div>
  );
};

export function TimelineContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex max-w-md flex-col justify-center gap-3 md:order-2">
      {children}
    </div>
  );
}

interface TimelineEventData {
  label: string;
  message: string;
  icon: {
    name: ValidIcon;
    textColor: string;
    borderColor: string;
  };
}

export function TimelineEvent({
  label,
  message,
  icon,
  isLast = false,
}: TimelineEventData & {
  isLast?: boolean;
}) {
  const Icon = (DIcons as any)[icon.name];
  return (
    <div className="group relative -m-2 flex gap-4 border border-transparent p-2">
      <div className="relative">
        <div
          className={cn(
            "rounded-full border bg-background p-2",
            icon.borderColor
          )}
        >
          {Icon ? (
            <Icon className={cn("h-4 w-4", icon.textColor)} />
          ) : (
            <div className="h-4 w-4" />
          )}
        </div>
        {!isLast ? (
          <div className="absolute inset-x-0 mx-auto h-full w-[2px] bg-muted" />
        ) : null}
      </div>
      <div className="mt-1 flex flex-1 flex-col gap-1">
        <div className="flex items-center justify-between gap-4">
          <p className="text-lg font-semibold">{label}</p>
        </div>
        <p className="text-xs text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <div className="w-full max-w-3xl">
      <TimelineContainer>
        {timeline.map((event, i) => (
          <TimelineEvent
            key={event.message}
            isLast={i === timeline.length - 1}
            {...event}
          />
        ))}
      </TimelineContainer>
    </div>
  );
}

const timeline: TimelineEventData[] = [
  {
    label: "01 Understand",
    message:
      "Understand project requirements, real-world context and the core technical problem.",
    icon: {
      name: "Shapes",
      textColor: "text-sky-500",
      borderColor: "border-sky-500/40",
    },
  },
  {
    label: "02 Analyse",
    message: "Analyse data, workflows, systems, data sources and technical requirements.",
    icon: {
      name: "Send",
      textColor: "text-indigo-500",
      borderColor: "border-indigo-500/40",
    },
  },
  {
    label: "03 Build",
    message: "Develop the required GIS, data processing, automation, AI or web solution.",
    icon: {
      name: "Check",
      textColor: "text-blue-500",
      borderColor: "border-blue-500/40",
    },
  },
  {
    label: "04 Test & Refine",
    message:
      "Validate outputs, test end-to-end functionality and continuously optimize performance.",
    icon: {
      name: "Repeat",
      textColor: "text-amber-500",
      borderColor: "border-amber-500/40",
    },
  },
  {
    label: "05 Deliver",
    message: "Document, deploy, provide operational technical manuals and hand over the final solution.",
    icon: {
      name: "Download",
      textColor: "text-emerald-500",
      borderColor: "border-emerald-500/40",
    },
  },
];

export { ShineBorder };
