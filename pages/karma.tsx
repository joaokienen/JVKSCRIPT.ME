import Head from 'next/head';
import styles from '../styles/zipo/Karma.module.scss';
import globalStyles from '../components/all/styleglobal';
import { karm } from '../components/karma/consts';

//
export default function Hero () {
  
  return (
    <>  
        <style jsx global> {globalStyles} </style>

          <Head>
            <meta charSet='utf-8' />
            <meta name='robots' content='noindex, nofollow' />
            <meta name="googlebot" content="noindex, nofollow" />
            <meta name='author' content='João Kienen' />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>JvkScript: Karma</title>
          </Head>

          <div id='container' className={"container"}>

            <div className={"fakeMenu"}>
              <div id="fakeButtonsA" className={"fakeButtonsX"}></div>
              <div id="fakeButtonsX" className={"fakeButtons"}></div>
              <div id="fakeButtonsB" className={"fakeButtons"}></div>
            </div>

            <div id="fakeScr0" className={"fakeScr0"}>
              <p id="cursorZipo00" className={styles.line00}>$ Zipo<span className={styles.cursor00}>_</span></p>
              <p id="cursorZipo01" className={styles.line01}>&gt; start ./Kamr<span className={styles.cursor01}>_</span></p>
              
              <div id="fakeScr00" className={"fakeScr00"}>
                <p id="cursorKamr" className={styles.line1}>$ Kamr<span className={styles.cursor1}>_</span></p>
                
                <div id="opacyt" className={"opacyt"}>
                    <p id="cursorA" className={styles.line2}>[$] Aumente o seu Karma<span className={styles.cursor2}>_</span></p>
                    <p id="cursorB" className={styles.line3}>[$] Você só precisa pensar: E se fosse comigo?<span className={styles.cursor3}>_</span></p>
                </div>

                <div id="fakeLetsGo" className={"fakeLetsGo"}>
                  <button id="btnLetsGo" style={{fontSize: "10px"}} className={"btnLetsGo"} onClick={karm}>Elevar consciência</button>
                </div>

              </div>
            </div>
          </div>
    </>
  )
}

