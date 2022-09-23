import styles from '../../../styles/zipo/Fauno.module.scss';
import { destiny } from "../consts";
import { useEffect, useState } from 'react';
import { animalZ1, animalZ2, animalZ3, animalZ4 } from '../varanimalx';

export default function FaunoX () {

    const [an1, setWild1] = useState("---");
    const [an2, setWild2] = useState("---");
    const [an3, setWild3] = useState("---");
    const [an4, setWild4] = useState("---");
    useEffect(() => {setWild1(animalZ1), setWild2(animalZ2), setWild3(animalZ3), setWild4(animalZ4)}, []);

    return (
        <>
            <div className={styles.fakeScr1}>
                <label className={"hero"} onClick={destiny}>{an1}</label>
                <label className={"hero"} onClick={destiny}>{an2}</label>
                <label className={"hero"} onClick={destiny}>{an3}</label>
                <label className={"hero"} onClick={destiny}>{an4}</label>
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
