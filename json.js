

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);
console.log(typeof json);

json = JSON.stringify(['aaa','bbb','ccc']);
console.log(json); // ["aaa", "bbb", "ccc"]
console.log(typeof json); // string type

const rabbit = {
    name : 'toto',
    color : 'white',
    size: null,
    birthDate : new Date(),
    jump: ()=>{
        console.log(`${name} can jump`)
    },
}

json = JSON.stringify(rabbit);
console.log(json); 
// {"name":"toto","color":"white","size":null,"birthDate":"2023-05-02T15:14:55.126Z"}
console.log(typeof json); // string type

json = JSON.stringify(rabbit,['name','color']);
console.log(json); // { "name" : "toto"}
console.log(typeof json); // string type

json = JSON.stringify(rabbit,(key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});
console.log(typeof json); // string type



///////////////////////다음///////
console.clear(); // 정리~~~~~


// 2.json parse

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === "birthDate" ? new Date(value) : value;
    	// key가 birthDate일때, String타입이었던 value를 date()로 변경하고, 
		// birthDate가 아니면 기존의 value그대로 return하겠다.
});
console.log(obj);

rabbit.jump(); // can jump -> jump()실행됨.
//obj.jump(); // json.js:51 Uncaught TypeError: obj.jump is not a function at json.js:51:5



console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

