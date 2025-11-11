// primitiveType
/* -Number
 -string
 -boolean
 -undefined
 -null
 -symbol
*/ 

// Object

/* 
    1.Object
    2.oop
*/

var student = {
    name : "hey",
    age : 90,
};


console.log(typeof(student));
console.log(student.name);
console.log(Object.keys(student)[0]);

let sentence = "I like chicken";

// 문자열이 시작되는 위치
console.log(sentence.indexOf("chicken"));
console.log(sentence.indexOf("I"));

// 문자열의 일부를 잘라낼 때
let sl = sentence.slice(0,7);
console.log(sl);

//대소문자 변경

let upper = sentence.toUpperCase();
let lower = sentence.toLocaleLowerCase();
console.log(upper);
console.log(lower);

// 시작하는 문자열 확인 대소문자 구분

console.log(sentence.startsWith('I'));
console.log(sentence.startsWith('i'));

//끝나는 문자열 확인

console.log(sentence.endsWith('chicken'));

// 포함되어있는지

console.log(sentence.includes("like"));

// 배열

let mbti = ["ISFP","ISTJ","INFP","ENFP"];
console.log(mbti[0]);
mbti[4] = "ESTP";
console.log(mbti.length);
mbti[1] = "INTP";

mbti.push("abcd",'assd');
console.log(mbti.length);

// spread문법 활용

console.log(...mbti);
let mbti2 = [...mbti,"asdd"]; 
// pop
console.log(mbti.pop());
console.log(mbti);

// 앞쪽추가

console.log(mbti2.unshift("asdf"));
console.log(mbti2);
console.log(mbti2.shift());
console.log(mbti2);

// 정렬

console.log(mbti2.sort());
console.log(mbti2.sort().reverse());

// 예외처리
try{
    throw new Error("에러");
}catch(err){
    console.log("에러발생");
    console.log(err);
}finally{
    console.log("무조건 실행");
}

// 함수

function multifly(a,b){
    return a*b;
}

// arrow

let sum = (a,b)=>{
    return a+b;
}