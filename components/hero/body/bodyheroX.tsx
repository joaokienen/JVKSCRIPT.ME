import styles from '../../../styles/zipo/Hero.module.scss';
import { destiny } from "../consts";
import { useEffect, useState } from 'react';
import { neuroZx1, neuroZx2, neuroZx3, neuroZx4, neuroZx5, neuroZx6 } from '../varneuro';

export default function HeroX () {

    const [he1, setWild1] = useState("---");
    const [he2, setWild2] = useState("---");
    const [he3, setWild3] = useState("---");
    const [he4, setWild4] = useState("---");
    const [he5, setWild5] = useState("---");
    const [he6, setWild6] = useState("---");
    useEffect(() => {setWild1(neuroZx1), setWild2(neuroZx2), setWild3(neuroZx3), setWild4(neuroZx4), setWild5(neuroZx5), setWild6(neuroZx6)}, []);

    return (
        <>
            <div className={styles.fakeScr1}>
                <label className={"hero"} onClick={destiny}>{he1}</label>
                <label className={"hero"} onClick={destiny}>{he2}</label>
                <label className={"hero"} onClick={destiny}>{he3}</label>
                <label className={"hero"} onClick={destiny}>{he4}</label>
                <label className={"hero"} onClick={destiny}>{he5}</label>
                <label className={"hero"} onClick={destiny}>{he6}</label>
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
