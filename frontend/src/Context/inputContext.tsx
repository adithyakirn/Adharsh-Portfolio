"use client";
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useRef,
} from "react";

export type InputContextType = {
  value: React.ReactNode;
  setValue: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  cursorRef: React.RefObject<HTMLSpanElement | null>;
  measureRef: React.RefObject<HTMLSpanElement | null>;
};

const InputContext = createContext<InputContextType | undefined>(undefined);
type InputContextProviderProps = {
  children: ReactNode;
};

export const InputContextProvider = ({
  children,
}: InputContextProviderProps) => {
const [value, setValue] = useState<React.ReactNode>("");
  const cursorRef = useRef<HTMLSpanElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  return (
    <InputContext.Provider value={{ value, setValue, cursorRef, measureRef }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error(
      "useInputContext must be used within an InputContextProvider"
    );
  }
  return context;
};
