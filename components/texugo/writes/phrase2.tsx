import styles from '../../../styles/zipo/Texugo.module.scss';

export default function Phrase2 () {
    return (
        <>
            <p id="cursorA" className={styles.line2}>[*] Texugo Content here<span className={styles.cursor2}>_</span></p>
            <p id="cursorB" className={styles.line3}>[*] Texugo Content here<span className={styles.cursor3}>_</span></p>
            <p id="cursorC" className={styles.line4}>[*] Texugo Content here<span className={styles.cursor4}>_</span></p>
            <p id="cursor0A" className={styles.line5}>[?] Zipo Content here<span className={styles.cursor5}>_</span></p>
            <p id="cursorD" className={styles.line6}>[*] Texugo Content here<span className={styles.cursor6}>_</span></p>
        </>
    )
}