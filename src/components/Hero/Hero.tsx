import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>Trushaba B. Jadeja</h1>
                <p>Delivering impactful solutions that push the boundaries of technology and drive success in an ever-evolving digital landscape.</p>
            </div>
        </section>
    );
}
