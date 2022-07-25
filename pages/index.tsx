import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Skills from "../components/Skills";
import create from "zustand";

const useAlertsStore = create<{
  alerts: Array<{ title: string; message?: string }>;
}>((set) => ({
  alerts: [],
}));

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
