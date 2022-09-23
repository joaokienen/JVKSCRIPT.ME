import Head from 'next/head';
import nookies from 'nookies'
import stylesMain from '../styles/zipo/Home.module.scss';
import Image from 'next/image';
import { stealth, journy, karm, coder } from '../components/home/consts';
import globalStyles from '../components/all/stylehome';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const MainX = dynamic(() => import('../components/home/mainx'), {
  suspense: true,
})

export default function ZipoHome () {
  return (
    <> 
      <style jsx global> {globalStyles} </style>

      <Head>
        <meta charSet='utf-8' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        <meta name='author' content='João Kienen' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>JvkScript: Home</title>
      </Head>

      <div id="containerMain" className={stylesMain.containerZipoMain}>
          <main className={'main'}>
            <Image priority src="/jvk_zipo.gif" alt="JvkScript_Zipo" width={300} height={310} loading="eager"/>
            <Suspense fallback={`Loading...`}>
              <MainX />
            </Suspense>
            <div id="ButtonScr0" className={'ButtonScr0'}>
                <div id="ButtonScr1" className={'ButtonScr1'} onClick={stealth}>
                    <p className={'pear1'}>-----</p>
                </div>
                <button id="journy" className={stylesMain.journy} onClick={journy}>Jornada {'->'}</button>
                <button id="karm" className={stylesMain.karm} onClick={karm}>Karma {'<-'}</button>
                <button id="coder" className={stylesMain.coder} onClick={coder}>Código-Fonte {'->'}</button>
            </div>
          </main>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  nookies.destroy(context, 'CODEKEYMain');
  nookies.destroy(context, 'CODEKEYConsts');
  return { props: {} }
}
