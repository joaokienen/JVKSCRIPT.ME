import styles from '../../../styles/zipo/Fauno.module.scss';
import FaunoX from '../body/bodyfaunoX';

export default function Phrase6 () {
    return (
        <>
            <p id="cursorA" className={styles.line2}>[+] Fauno Content Here<span className={styles.cursor2}>_</span></p>
            <p id="cursorB" className={styles.line3}>[+] Fauno Content Here<span className={styles.cursor3}>_</span></p>

            <FaunoX />
        </>
    )
}
