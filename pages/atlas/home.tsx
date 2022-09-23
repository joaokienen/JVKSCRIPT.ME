import Head from 'next/head';
import stylesMain from '../../styles/atlas/Home.module.scss';
import Image from 'next/image';
import { stealth, journy, karm, coder } from '../../components/home/consts';
import globalStyles from '../../components/all/stylehome';
import nookies from 'nookies';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const MainX = dynamic(() => import('../../components/home/mainx'), {
  suspense: true,
})

setTimeout(() => {nookies.set(null, 'CODEKEYEX', 'CODEKEYEX', {maxAge: 1000, path: '/'});}, 2000);

export default function AtlasHome () {

  return (
    <> 
      <style jsx global> {globalStyles} </style>

      <Head>
        <meta charSet='utf-8' />
        <meta name='robots' content='noindex, nofollow' />
        <meta name='googlebot' content='noindex, nofollow' />
        <meta name='author' content='João Kienen' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>JvkScript: Home</title>
      </Head>

      <div id="containerMain" className={stylesMain.containerAtlasMain}>
          <main className={'main'}>
            <Image priority src="/jvk_atlas.gif" alt="JvkScript_Atlas" width={300} height={310} loading="eager"/>
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
  const cookies = nookies.get(context);
  const codekeyx = 'XLR8atlas';
  const codekeyz = cookies.CODEKEYMain;
  const isAuth = codekeyx === codekeyz;

  if (!isAuth) {
    return {
      redirect: {
        permanent: false,
        destination: '/home'
      }
    }
  }

  return { props: {} };
}
