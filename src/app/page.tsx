import Image from "next/image";
import styles from "./page.module.css";
import Home from "@/app/pages/home/home";

export default function Index() {
  
  return (
    
    <main className={styles.main}>
      <Home />
    </main>
  );
}
