"use client"
import { useRef, useEffect } from "react";
import { InputContextType, useInputContext } from "@/Context/inputContext";

export const Main = () => {
  const { value, measureRef } = useInputContext() as InputContextType;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [value]);

  return (
    <div className="flex-1 min-h-0 overflow-hidden w-screen">
      <div ref={scrollRef} className="h-full overflow-y-auto pb-5">
        <div className="text-[#61dafb] leading-[1.1] whitespace-pre text-[13px] mb-[5px] text-wrap">
          <pre>
            {`┌───────────────────────────────────────────────┐
│                                               │
│   ╔═══════════════════════════════════════╗   │
│   ║         Welcome to My Portfolio       ║   │
│   ╚═══════════════════════════════════════╝   │
│                                               │
│    Hi, I'm Adharsh CB                         │
│    ML Developer                               │
│    Passionate Problem Solver                  │
│                                               │
│   Type "help" to explore my work              │
│                                               │
└───────────────────────────────────────────────┘`}
          </pre>
        </div>
        <div className="text-[#cccccc] ml-0 mb-[5px] break-words">{`Type 'help' to see available commands`}</div>
        <span
          ref={measureRef}
          className="relative flex-col whitespace-pre text-white ml-[5px] w-[80%] flex"
          style={{ textWrap: "balance" }}
        >
          {value}
        </span>
        <span ref={measureRef} className="invisible absolute whitespace-pre">
          {value}
        </span>
      </div>
    </div>
  );
};