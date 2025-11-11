// event
/*
-form
-제출 초기화
-마우스 이벤트
-클릭, 더블클릭,마우스 이동
-키보드 이벤트
-키다운이벤트, 키프레스, 키 업 버튼

on+이벤트 타입

이벤트 핸들러

let el = document.querySelector('클래스 또는 id')
function sayHi(){
    alert("Hello!!")
}
el.addEventListener("click", myFunc)
*/

let el = document.querySelector('#hi');
function sayHi(){
    alert("Hello!!")
}
el.addEventListener("click", sayHi)
