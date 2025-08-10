import { Input } from "./Input"

export const Main = () => {
    return (
        <div className="flex-1 overflow-y-auto pb-5" id="content">
            <div className="text-[#61dafb] leading-[1.1] whitespace-pre text-[13px] mb-[5px] break-words">
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
                <Input/>
        </div>
    )
}
