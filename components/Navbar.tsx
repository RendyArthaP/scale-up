import Link from "next/link";
import { Hamburger } from "~/public/images/icons/Hamburger";

export default function Navbar() {
  return (
    <div className="w-full h-20">
      <div className="max-w-6xl flex flex-row items-center justify-between mx-auto p-4">
        <div className="flex flex-row items-center">
          <h1 className="text-orange text-4xl font-poppins font-bold">
            ScaleUp
          </h1>
          <div className="hidden md:flex flex-row mx-4">
            <Link href="/">
              <a className="font-poppins text-orange mx-2 text-base font-normal">
                Video Tutorial
              </a>
            </Link>
            <Link href="/">
              <a className="font-poppins text-orange mx-2 text-base font-normal">
                Blog
              </a>
            </Link>
            <Link href="/">
              <a className="font-poppins text-orange mx-2 text-base font-normal">
                Mentoring
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex">
          <Link href="/">
            <a className="font-poppins text-orange mx-2 font-normal">Login</a>
          </Link>
        </div>
        <div className="flex md:hidden">
          <Hamburger />
        </div>
      </div>
    </div>
  );
}
