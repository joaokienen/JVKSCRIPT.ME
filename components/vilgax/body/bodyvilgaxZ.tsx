import styles from '../../../styles/zipo/Vilgax.module.scss';
import { destiny } from "../consts";

export default function VilgaxZ () {
    return (
        <>
            <div className={styles.fakeScr1}>
                <label className={"hero"} onClick={destiny}>Emocional</label>
                <label className={"hero"} onClick={destiny}>Espiritual</label>
                <label className={"hero"} onClick={destiny}>Intelectual</label>
                <label className={"hero"} onClick={destiny}>Material</label>
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
