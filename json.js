




// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);
console.log(typeof json);

json = JSON.stringify(['aaa','bbb','ccc']);
console.log(json);
console.log(typeof json); // string type

const rabbit ={
    name : 'toto',
    color : 'white',
    size: null,
    birthDate : new Date(),
    jump: (){
        console.log(`${name} can jump`)
    }

}