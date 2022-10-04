import styles from '../../../styles/zipo/Vilgax.module.scss';
import VilgaxX from '../body/bodyvilgaxZ';

export default function Phrase5 () {
    return (
        <>
            <p id="cursorA" className={styles.line2}>[+] Vilgax Content here<span className={styles.cursor2}>_</span></p>
            <p id="cursorB" className={styles.line3}>[+] Vilgax Content here<span className={styles.cursor3}>_</span></p>
            <p id="cursorC" className={styles.line4}>[+] Vilgax Content here<span className={styles.cursor4}>_</span></p>
            <p id="cursor0A" className={styles.line02}>[-] Zipo Content here<span className={styles.cursor02}>_</span></p>
            <p id="cursor0B" className={styles.line03}>[-] Zipo Content here<span className={styles.cursor03}>_</span></p>
            <p id="cursorD" className={styles.line5}>[+] Vilgax Content here<span className={styles.cursor5}>_</span></p>
            <p id="cursorE" className={styles.line6}>[+] Vilgax Content here<span className={styles.cursor6}>_</span></p>    

            <VilgaxX />
        </>
    )
}
