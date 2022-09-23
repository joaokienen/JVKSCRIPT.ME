import styles from '../../../styles/zipo/Zipo.module.scss';
import $ from "jquery";

export default function Phrase1 () {
    if (typeof window === 'object') {
        setTimeout(() => {$("#fakeLetsGo").css("opacity", "1");}, 18000);
        setTimeout(() => {$("#btnLetsGo").css("opacity", "1");}, 18000);
        setTimeout(() => {$("#cursorA").css("opacity", "0.2");}, 13000);
        setTimeout(() => {$("#cursorB").css("opacity", "0.2");}, 15000);
        setTimeout(() => {$("#cursorC").css("opacity", "0.2");}, 17000);
        setTimeout(() => {$("#cursorD").css("opacity", "0.2");}, 19000);
    }
    return (
        <>
            <p id="cursorA" className={styles.line2}>[-] Zipo Content here<span className={styles.cursor2}>_</span></p>
            <p id="cursorB" className={styles.line3}>[-] Zipo Content here<span className={styles.cursor3}>_</span></p>
            <p id="cursorC" className={styles.line4}>[-] Zipo Content here<span className={styles.cursor4}>_</span></p>
            <p id="cursorD" className={styles.line5}>[-] Zipo Content here<span className={styles.cursor5}>_</span></p>
            <p id="cursorE" className={styles.line6}>[-] Zipo Content here<span className={styles.cursor6}>_</span></p>
        </>
    )
}
