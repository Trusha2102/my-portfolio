import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <a href="#about" className={styles.link}>About</a>
                <a href="#contact" className={styles.link}>Contact Me</a>
                <a href="#experience" className={styles.link}>Experience</a>
                <a href="#education" className={styles.link}>Education</a>
                <a href="#skills" className={styles.link}>Skills</a>
                <a href="#projects" className={styles.link}>Projects</a>
            </nav>
        </header>
    );
}
