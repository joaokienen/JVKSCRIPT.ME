import Head from 'next/head';
import styles from '../../styles/zipo/Aurora.module.scss';
import { returnd, contnext } from "../../components/all/consts";
import nookies from 'nookies';
import '../../components/aurora/consts';
import globalStyles from '../../components/all/styleglobal';
import { FaBackward } from "react-icons/fa";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const BodyAurora = dynamic(() => import('../../components/aurora/bodymain'), {
  suspense: true,
})

export default function Aurora () {  

    return (
      <>  
          <style jsx global> {globalStyles} </style>
  
            <Head>
              <meta charSet='utf-8' />
              <meta name='robots' content='noindex, nofollow' />
              <meta name="googlebot" content="noindex, nofollow" />
              <meta name='author' content='João Kienen' />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <title>JvkScript: Aurora</title>
            </Head>

            <div id='container' className={"container"}>

              <div className={"fakeMenu"}>
                <div id="fakeButtonsA" className={"fakeButtonsX"}></div>
                <div id="fakeButtonsX" className={"fakeButtons"}></div>
                <div id="fakeButtonsB" className={"fakeButtons"}></div>
                <button id="btn" className={"btn"} onClick={returnd}><FaBackward /></button>
              </div>
    
              <div id="fakeScr0" className={"fakeScr0"}>
                <p id="cursorZipo00" className={styles.line00}>$ Zipo<span className={styles.cursor00}>_</span></p>
                <p id="cursorZipo01" className={styles.line01}>&gt; start ./Aurora<span className={styles.cursor01}>_</span></p>
                
                <div id="fakeScr00" className={"fakeScr00"}>
                  <p id="cursorAurora" className={styles.line1}>$ Aurora<span className={styles.cursor1}>_</span></p>
                  
                  <div id="opacyt" className={"opacyt"}>
                    
                    <Suspense fallback={`Loading...`}>
                      <BodyAurora />
                    </Suspense>
    
                    <div id="fakeS" className={styles.fakeScr1}>
                      <label id="demo_oraculo"></label>
                    </div>
    
                  </div>
                  
                  <div id="fakeLetsGo" className={"fakeLetsGo"}>
                    <button id="btnLetsGo" className={"btnLetsGo"} onClick={contnext}>{'->'}</button>
                  </div>
    
                </div>
              </div>
            </div>
      </>
    )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const codekeyx = 'XLR8aurora';
  const codekeyz = cookies.CODEKEYConsts;
  const isAuth = codekeyx === codekeyz;

  const codekeyW = 'CODEKEYEX';
  const codekeyQ = cookies.CODEKEYEX;
  const isAuthQ = codekeyW === codekeyQ;

  if(isAuthQ) {
    return {
      redirect: {
        permanent: false,
        destination: '/home'
      }
    }
  }
  
  else if (!isAuth) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  }

  return { props: {} };
}



             