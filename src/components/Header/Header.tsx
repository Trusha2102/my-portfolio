import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/about" className={styles.link}>
                    About
                </Link>
                <Link href="/contact" className={styles.link}>
                    Contact Me
                </Link>
                <Link href="/experience" className={styles.link}>
                    Experience
                </Link>
                <Link href="/education" className={styles.link}>
                    Education
                </Link>
                <Link href="/skills" className={styles.link}>
                    Skills
                </Link>
                <Link href="/projects" className={styles.link}>
                    Projects
                </Link>
            </nav>
        </header>
    );
}
