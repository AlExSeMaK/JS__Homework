let a = 11;
let b = [];
let q = 0;
let w = 0;
let e = 0;
let r = 0;
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 0; i < a; i++){
    r = getRandom(-1, 1);
    if (r === -1){
        q += 1;
    }else if (r === 0){
        w += 1;
    }else {
        e +=1;
    }
    b.push(r);

}

console.log(b);

if (q > w && q > e){
    console.log(`${q} = количество 1`);
}else if (w > q && w > e){
    console.log(`${w} = количество 0`)
}else {
    console.log(`${e} = количество -1`);
}

