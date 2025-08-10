"use client";
import React, { useState } from 'react'

export const Input = () => {
    const [value, setValue] = useState<string>('')
    const baseOffset: number = 148
    const charwidth: number = 8
    return (
        <div className="flex items-center relative">
            <div className="text-terminal">user@portfolio:~$</div>
            <input onChange={(e) => setValue(e.target.value)} type="text" spellCheck="false" className='bg-transparent border-none outline-none text-white flex-1 ml-[5px] caret-transparent' />
            <span className='absolute bg-[#00ff00] animate-[blink_1s_step-start_infinite] w-[1ch] h-[1em] pointer-none ' style={{ left: `${baseOffset + charwidth * value.length}px` }}>&nbsp;</span>
        </div>
    )
}
