import styles from '../../../styles/zipo/Fauno.module.scss';
import { destiny } from "../consts";

export default function FaunoZ () {
    return (
        <>
            <div className={styles.fakeScr1}>
              <label className={"hero"} onClick={destiny}>Norte</label>
              <label className={"hero"} onClick={destiny}>Sul</label>
              <label className={"hero"} onClick={destiny}>Leste</label>
              <label className={"hero"} onClick={destiny}>Oeste</label>
            </div>  

            <div className={styles.fakeScr2}>
              <label id="demo_name"></label>
            </div>

            <div className={styles.fakeScr2}>
              <label id="demo_frase"></label>
            </div>

            <div className={styles.fakeScr2}>
              <label id="demo_visao"></label>
            </div>
        </>
    )
}
