import styles from '../../../styles/zipo/Fauno.module.scss';
import FaunoZ from '../body/bodyfaunoZ';

export default function Phrase1 () {
    return (
        <>
            <p id="cursorA" className={styles.line2}>[+] Fauno Content Here<span className={styles.cursor2}>_</span></p>
            <p id="cursorB" className={styles.line3}>[+] Fauno Content Here<span className={styles.cursor3}>_</span></p>
                
            <FaunoZ />
        </>
    )
}
