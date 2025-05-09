import Link from "next/link";
import { Tiro_Devanagari_Hindi } from "next/font/google";

const hindi = Tiro_Devanagari_Hindi({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <div>
      <div className="space-x-34 text-center underline">
        <Link href={"/Home"}>Home</Link>
        <Link href={"/blogs"}>Blogs</Link>
        <Link href={"/photos"}>Photos</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/about"}>About Me</Link>
      </div>


      <div className="flex flex-col items-center mt-10 px-4">
        <div className="text-left w-full max-w-2xl border-b-2">
          <div className="font-bold text-5xl text-left">Shubhang Sharma</div>
          <div className={`${hindi.className} font-bold text-5xl mt-10`}>नमस्ते,</div>
          <div className="mt-4 text-lg">I am a student at UPES Dehradun, currently pursuing a B.Tech in Computer Science and Engineering.</div>
          <div className="font-bold text-1xl">I create cool software. My work can be seen on my git</div>
          <div>I specialize in Python and Full Stack Development.</div>
          <div className="mb-4">I am currently learning and developing in Go and Rust.</div>
        </div>
      </div>
    </div>
  );
}
