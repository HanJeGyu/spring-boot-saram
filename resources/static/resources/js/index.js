alert("자바스크립트");

var wrapper = document.querySelector('#wrapper');  // 
wrapper.innerHTML = '<h1>SPA 시작</h1>'
+ '<div id="target">삭제할 내용</div>'
+ '<button id="btn">지우기</button>'
+ '<button id="btn2">추가하기</button>';

var btn = document.querySelector('#btn');
var btn2 = document.querySelector('#btn2');
var target = document.getElementById('target');

btn.addEventListener('click',function(){
    //alert("진짜 지울거냐");
    //document.getElementById('del_text').innerHTML = "";
    //wrapper.innerHTML = '';
    target.innerHTML = '';
});

btn2.addEventListener('click',function(){
    var temp = document.createTextNode('새로 추가');
    target.appendChild(temp);
});