import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" container mx-auto px-4">
      <Navbar />
      <Hero />
      <Projects />
      <Contacts />
    </div>
  );
}
