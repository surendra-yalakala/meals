import Link from "next/link";

import logoImg from "@/assets/icons/logo.png";
import Image from "next/image";

export default function MainHeader() {
  return (
    <div className="flex flex-row items-center justify-between h-32">
      <header className="m-4 float-left">
        <Link href={"/"}>
          <Image
            src={logoImg}
            alt="A Plate with food with it"
            height={100}
            width={100}
            priority
          />
        </Link>
      </header>
      <nav>
        <ul className="flex m-5">
          <li>
            <Link className="m-6" href={"/meals"}>
              Browse the meals
            </Link>
          </li>
          <li>
            <Link className="m-6" href={"/community"}>
              Foodies
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
