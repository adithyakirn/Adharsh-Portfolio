import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Main } from "@/components/Main";

export default function Page() {
  return (
    <div className="terminal w-screen h-screen pt-5 pl-5 flex flex-col">
      <Header />
      <Main />
      <Input />
    </div>
  );
}
