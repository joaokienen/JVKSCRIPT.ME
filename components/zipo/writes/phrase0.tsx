import styles from '../../../styles/zipo/Zipo.module.scss';
import $ from "jquery";

export default function Phrase0 () {
    if (typeof window === 'object') {
        setTimeout(() => {$("#fakeLetsGo").css("opacity", "1");}, 13000);
        setTimeout(() => {$("#btnLetsGo").css("opacity", "1");}, 13000);
        setTimeout(() => {$("#cursorA").css("opacity", "0.2");}, 13000);
        setTimeout(() => {$("#cursorB").css("opacity", "0.2");}, 15000);
    }
    return (
        <>
            <p id="cursorA" className={styles.line2}>[-] Zipo Content here<span className={styles.cursor2}>_</span></p>
            <p id="cursorB" className={styles.line3}>[-] Zipo Content here<span className={styles.cursor3}>_</span></p>
            <p id="cursorE" className={styles.line4}>[-] Zipo Content here<span className={styles.cursor4}>_</span></p>
        </>
    )
}
