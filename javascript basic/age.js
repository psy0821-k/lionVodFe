let el = document.getElementById('birth');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');

const today = new Date();

function calculatorAge() {
    let birhtDate = new Date(el.value);

    let age;

    if (today.getMonth() > birhtDate.getMonth ||
        today.getMonth() == birhtDate.getMonth &&
        today.getDate() >= birhtDate.getDate()
    ) {
        age = today.getFullYear() - birhtDate.getFullYear();
    }else{
        age = today.getFullYear() - birhtDate.getFullYear()-1;
    }

    elResult.innerText = `귀하의 만 나이는 ${age} 세 입니다.`;

    return age;
}


elSubmit.addEventListener("click",calculatorAge)