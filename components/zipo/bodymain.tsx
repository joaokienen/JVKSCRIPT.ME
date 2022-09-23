import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { mixZ1 } from '../all/bodymain';
import Phrase0 from './writes/phrase0';
import Phrase1 from './writes/phrase1';
import Phrase2 from './writes/phrase2';

export default function BodyZipo () {

    const [bumber, setWild1] = useState("---");
    useEffect(() => {setWild1(mixZ1)}, [bumber]);

    const cookies = parseCookies()
    const codekeyZipo1 = cookies.CODEKEYZipo;
    const codekeyZipoMain1 = 'XLR8zipo';
    const [codekey, setS] = useState("---");
    const [codekeyZipoMain, setS1] = useState("--");
    useEffect(() => {setS(codekeyZipo1)}, [codekey]);
    useEffect(() => {setS1(codekeyZipoMain1)}, [codekeyZipoMain]);

    if (codekey === codekeyZipoMain) {return <Phrase0 />} 
    else if (bumber == '0' || bumber == '1' || bumber == '2') {return <Phrase1 />}
    else {return <Phrase2 />} 
}
