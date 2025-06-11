import Link from "next/link";
import TypedBios from "./TypedBios";

export default function AboutCard() {
  return (
<div className="rounded-lg border-1 border-dashed border-gray-600 p-5 ">
  <TypedBios />
  <p className="hover text-2xl leading-7 text-black dark:text-gray-400 ">
    I am a web developer, security researcher, and UI/UX designer. This is <br />
    my first personal website.
    <br />
    <Link href="/about">
      <span className="text-blue-500 hover:text-blue-700">Click here to learn more about me</span>
    </Link>
  </p>
</div>
  );
}