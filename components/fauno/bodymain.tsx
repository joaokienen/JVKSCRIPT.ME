import { useEffect, useState } from 'react';
import { mixZ1 } from '../all/bodymain';
import Phrase0 from './writes/phrase0';
import Phrase1 from './writes/phrase1';
import Phrase2 from './writes/phrase2';
import Phrase3 from './writes/phrase3';
import Phrase4 from './writes/phrase4';
import Phrase5 from './writes/phrase5';
import Phrase6 from './writes/phrase6';

export default function BodyFauno () {

  const [bumber, setWild1] = useState("---");
  useEffect(() => {setWild1(mixZ1)}, [bumber]);

    if (bumber == '0') {return <Phrase0 />}
    if (bumber == '1') {return <Phrase1 />}
    if (bumber == '2') {return <Phrase2 />}
    if (bumber == '3') {return <Phrase3 />}
    if (bumber == '4') {return <Phrase4 />}
    if (bumber == '5') {return <Phrase5 />}
    else {return <Phrase6 />} 
}