import styles from '../../../styles/zipo/Vilgax.module.scss';
import { destiny } from "../consts";

export default function VilgaxX () {
    return (
        <>
            <div className={styles.fakeScr1}>
                <label className={"hero"} onClick={destiny}>0</label>
                <label className={"hero"} onClick={destiny}>1</label>
                <label className={"hero"} onClick={destiny}>2</label>
                <label className={"hero"} onClick={destiny}>3</label>
            </div> 

            <div className={styles.fakeScr2}>
                <label id="demo_setor"></label>
            </div>

            <div className={styles.fakeScr2}>
                <label id="demo_name"></label>
            </div>
            
            <div className={styles.fakeScr2}>
                <label id="demo_frase"></label>
            </div>
            
            <div className={styles.fakeScr2}>
                <label id="demo_main"></label>
            </div>
        </>
    )
}
