import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="space-x-34 text-center">
        <Link href={"/Home"}>Home</Link>
        <Link href={"/blogs"}>Blogs</Link>
        <Link href={"/photos"}>Photos</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/about"}>About Me</Link>
      </div>


      <div className="flex flex-col items-center mt-10 px-4">
        <div className="text-left w-full max-w-xl">
          <div className="font-bold text-5xl text-left">Shubhang Sharma</div>
          <div className="font-bold mt-4">Namaste,</div>
          <div>I am a student at UPES Dehradun currently persuing Btech Computer Science.</div>
        </div>
      </div>
    </div>
  );
}
