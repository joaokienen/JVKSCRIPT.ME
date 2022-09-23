const sorted = [];
while(sorted.length < 7){
const r = Math.floor(Math.random() * 7);
if(sorted.indexOf(r) === -1) {sorted.push(r)};
}

const mixZ1 = sorted[0];

export { mixZ1 }