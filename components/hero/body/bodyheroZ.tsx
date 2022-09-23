import styles from '../../../styles/zipo/Hero.module.scss';
import { destiny } from "../consts";

export default function HeroZ () {
    return (
        <>
                <div className={styles.fakeScr1}>
                  <label className={"hero"} onClick={destiny}>Alegres</label>
                  <label className={"hero"} onClick={destiny}>Neutros</label>
                  <label className={"hero"} onClick={destiny}>Tristes</label>
                  <label className={"hero"} onClick={destiny}>---</label>
                </div>  

                <div className={styles.fakeScr2}>
                  <label id="demo_name"></label>
                </div>

                <div className={styles.fakeScr2}>
                  <label id="demo_visao"></label>
                </div>

                <div className={styles.fakeScr2}>
                  <label id="demo_frase"></label>
                </div>

                <div className={styles.fakeScr2}>
                  <label id="demo_acao"></label>
                </div>
        </>
    )
}
