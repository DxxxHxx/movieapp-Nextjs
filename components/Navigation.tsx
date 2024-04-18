"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  // console.log('hello');

  return (
    <div>
      <ul>
        <Link href={"/"}>
          <li>Home {path === "/" && <span>😊</span>}</li>
        </Link>
        <Link href={"/about"}>
          <li>About {path === "/about" && <span>😊</span>}</li>
        </Link>
      </ul>
    </div>
  );
}
