import Image from "next/image";
import styles from "./page.module.css";
import Home from "@/app/pages/home/home";

export default function index() {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
}
