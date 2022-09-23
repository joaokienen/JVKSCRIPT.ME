import styles from '../../../styles/zipo/Hero.module.scss';
import HeroX from '../body/bodyheroX';

export default function Phrase4 () {
    return (
        <>
            <p id="cursorA" className={styles.line2}>[+] Hero Content here<span className={styles.cursor2}>_</span></p>
            <p id="cursorB" className={styles.line3}>[+] Hero Content here<span className={styles.cursor3}>_</span></p>
            <p id="cursorC" className={styles.line4}>[+] Hero Content here<span className={styles.cursor4}>_</span></p>
            <p id="cursor0A" className={styles.line02}>[-] Zipo Content here<span className={styles.cursor02}>_</span></p>
            <p id="cursorD" className={styles.line5}>[?] Hero Content here<span className={styles.cursor5}>_</span></p>

            <HeroX />
        </>
    )
}
