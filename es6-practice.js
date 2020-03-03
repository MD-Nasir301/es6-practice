
const first = 5;
const last = 6;

const full = `${first+last+50} ${last} is a good boy all time. `;
console.log(full);


function add (num, num2=2){
    return num + num2
}
console.log(add(5,5));