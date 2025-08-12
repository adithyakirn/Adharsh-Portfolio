"use client";
import { InputContextType, useInputContext } from "@/Context/inputContext";
import React, { useEffect, useRef, useState } from "react";
import { about, contact, date, experience, help, ls, notFound } from "./Codes";

export const Input = () => {
  const { setValue, cursorRef, measureRef } =
    useInputContext() as InputContextType;
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
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
    if (historyIndex !== null && history[historyIndex]) {
      setInputText(history[historyIndex]);
    }
  }, [historyIndex, history]);

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

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
      } else if (inputText.trim() === "projects") {
        output = "wait im adding projects";
      } else if (inputText.trim() === "ls") {
        output = ls;
      } else if (inputText.trim() === "date") {
        output = date;
      } else if (inputText.trim() === "experience") {
        output = experience;
      } else {
        output = notFound;
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
      setHistory((prev) => [...prev, inputText]);
      setHistoryIndex(null);
      setInputText("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      setHistoryIndex((prev) => (prev === null ? history.length - 1 : Math.max(prev - 1, 0)));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (history.length === 0) return;
      setHistoryIndex((prev) => {
        if (prev === null) return null;
        const newIndex = Math.min(prev + 1, history.length - 1);
        if (newIndex === history.length - 1) {
          setHistoryIndex(null);
          return null;
        }
        return newIndex;
      });
    }
  };

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
        onKeyDown={onKeyDown}
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
