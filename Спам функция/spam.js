let spam = ['спам', 'макароны', 'машина']
let str = "Случайное предложение которое содержит спам и спам и макароны и машина и ещё раз машина";
let q = 0;
let w = 0;
let e = 0;
function searchSpam(str, spam) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++){
        if (spam.includes(str[i])){
            if (str[i] === spam[0]){
                q += 1;
            }else if (str[i] === spam[1]){
                w += 1;
            }else if (str[i] === spam[2]){
                e += 1;
            }
            }


        }
    return console.log(`Слово ${spam[0]} встречается ${q} раз, слово ${spam[1]} встречается ${w} раз, слово ${spam[2]} встречается ${e} раз`)
}

searchSpam(str, spam);