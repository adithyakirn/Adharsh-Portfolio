import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

export default function Page() {
  return(
    <div className="terminal w-screen h-screen p-5 flex flex-col">
      <Header/>
      <Main/>
    </div>
  )
}