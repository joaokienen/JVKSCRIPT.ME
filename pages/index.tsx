import Head from 'next/head';
import styles from '../styles/zipo/Zipo.module.scss';
import { returnd, contnext } from "../components/zipo/consts";
import globalStyles from '../components/all/styleglobal';
import nookies from 'nookies';
import { FaHome } from "react-icons/fa";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const BodyZipo = dynamic(() => import('../components/zipo/bodymain'), {
  suspense: true,
})

export default function Zipo () {

  return (
    <>  
        <style jsx global> {globalStyles} </style>

          <Head>
            <meta charSet='utf-8' />
            <meta name='robots' content='noindex, nofollow' />
            <meta name="googlebot" content="noindex, nofollow" />
            <meta name='author' content='João Kienen' />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>JvkScript: Zipo</title>
          </Head>
          <div id='container' className={"container"}>
            <div className={"fakeMenu"}>
              <div id="fakeButtonsX" className={"fakeButtons"}></div>
              <div id="fakeButtonsA" className={"fakeButtons"}></div>
              <div id="fakeButtonsB" className={"fakeButtons"}></div>
              <button id="btn" className={"btn"} onClick={returnd}><FaHome /></button>
            </div>
            <div id="fakeScr0" className={"fakeScr0"}>
              <p id="cursorZipo" className={styles.line0}>$ Zipo<span className={styles.cursor0}>_</span></p>
              <p className={styles.line1}>-&gt;<span className={styles.cursor1}>_</span></p>
              <div id="opacyt" className={"opacyt"}>
                <Suspense fallback={`Loading...`}>
                  <BodyZipo />
                </Suspense>
              </div>
              <div id="fakeLetsGo" className={"fakeLetsGo"}>
                <button id="btnLetsGo" className={"btnLetsGo"} onClick={contnext}>{'->'}</button>
              </div>
            </div>
          </div>  
    </>
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const codekeyx = 'CODEKEYEX';
  const codekeyz = cookies.CODEKEYEX;
  const isAuth = codekeyx === codekeyz;
  
  if (isAuth) {
    return {
      redirect: {
        permanent: false,
        destination: '/home'
      }
    }
  }

  return { props: {} };
}
