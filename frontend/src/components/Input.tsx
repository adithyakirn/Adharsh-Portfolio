"use client";
import { InputContextType, useInputContext } from "@/Context/inputContext";
import React, { useEffect, useRef, useState } from "react";
import { about, contact, help } from "./Codes";

export const Input = () => {
  const { setValue, cursorRef, measureRef } =
    useInputContext() as InputContextType;
  const [hasMount, setHasMount] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const baseOffset: number = 148;
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (hasMount && measureRef.current && cursorRef.current) {
      const textWidth = measureRef.current.offsetWidth;
      cursorRef.current.style.left = `${baseOffset + textWidth}px`;
    }
  }, [inputText, hasMount, cursorRef, measureRef]);

  useEffect(() => {
    setHasMount(true);
  }, []);

  useEffect(() => {
    const focusInput = () => {
      inputRef.current?.focus();
    };
    focusInput();
    window.addEventListener("click", focusInput);

    return () => {
      window.removeEventListener("click", focusInput);
    };
  });

  return (
    <div className="flex items-center w-full background sticky bottom-0 h-[40px]">
      <div className="text-terminal">user@portfolio:~$</div>
      <input
        ref={inputRef}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        spellCheck="false"
        className="bg-transparent border-none outline-none text-white flex-1 ml-[5px] caret-transparent"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            let output: React.ReactNode = "";
            if (inputText.trim() === "help") {
              output = help;
            } else if (inputText.trim() === "about") {
              output = about;
            } else if (inputText.trim() === "clear") {
              setValue("");
              setInputText("");
              return;
            } else if (inputText.trim() === "contact") {
              output = contact;
            } else if (inputText.trim() === "whoami") {
              output = "user";
            } else {
              output = `command not found, Try Typing help`;
            }
            setValue((prev) => {
              return (
                <>
                  {prev}
                  {`\n$ ${inputText}\n`}
                  {typeof output === "string" ? output : <>{output}</>}
                </>
              );
            });
            setInputText("");
          }
        }}
      />
      <span
        className="absolute bg-[#00ff00] animate-[blink_1s_step-start_infinite] w-[1ch] h-[1em] pointer-none "
        ref={cursorRef}
      >
        &nbsp;
      </span>
      <span className="invisible absolute whitespace-pre" ref={measureRef}>
        {inputText}
      </span>
    </div>
  );
};
