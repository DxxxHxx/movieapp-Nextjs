"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  // console.log('hello');

  return (
    <div className={styles.nav}>
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
