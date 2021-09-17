import Image from "next/image";
import Link from "next/link";
import { LayoutContent } from "../Layout/LayoutContent";
import HeaderImage from "~/public/images/assets/Header-Image.png";

export default function HeaderHomePage() {
  return (
    <LayoutContent>
      <div className="flex flex-col items-center md:flex-row-reverse md:justify-between">
        <div className="max-w-lg">
          <Image src={HeaderImage} />
        </div>
        <div className="flex flex-col my-4 md:my-0">
          <h1 className="text-orange font-poppins text-2xl font-bold md:w-96 md:text-4xl">
            ScaleUp your skills with our platform
          </h1>
          <span className="text-grey font-poppins text-base font-normal mt-2 mb-4 md:max-w-md md:text-lg">
            Learning from the best mentor with high quality. Lets{" "}
            <span className="text-orange font-poppins text-base font-normal">
              scale up
            </span>{" "}
            our skills and intellegent, for the better future
          </span>
          <Link href="/">
            <a className="bg-blue text-center p-2 rounded-md text-white font-poppins md:w-32">
              Register Now!
            </a>
          </Link>
        </div>
      </div>
    </LayoutContent>
  );
}
