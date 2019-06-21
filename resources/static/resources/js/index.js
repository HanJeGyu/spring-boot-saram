// 함수식, IIFE 패턴, 모듈패턴, var a = (함수{})();
// 외부함수, 내부함수가 동등  app가 init 을 인식할 수 없음
// 클로저를 사용하여 init 인식 
// 클로저를 JSON으로 리턴 함으로 app는 JSON 객체가 된다
// app=(()=>{})();   ->   app={}    
// app를 제이슨으로 만들어준다. 객체 리터럴(Literal) 패턴, 외부에서 받는 변수가 없을떄만
// ---> 함수형 프로그램으로 변경
var app = {
    $wrapper : $wrapper = document.querySelector('#wrapper'),
    init : init
};
var customer = {
    myPage : myPage,
    myPage_form : myPage_form,
    join : join,
    join_form : join_form,
    login : login,
    login_form : login_form,
    modify : modify,
    modify_form : modify_form,
    remove : remove,
    count : count
};
var employee = {
    login : login,
    admin_login : admin_login,
    customer_list_form : customer_list_form,
    customer_list : customer_list
}
var session = {
    set_value : set_value,
    get_value : get_value
};

function set_value(x){
    sessionStorage.setItem(x.name, x.value);
};
function get_value(x){
    return sessionStorage.getItem(x);
};

function init(){
    $wrapper.innerHTML = customer.login_form();

    document.querySelector('#login_btn')
        .addEventListener('click',(e)=>{
            e.preventDefault();
            customer.login({userId : 'customerId', domain : 'customers'});
    });
    document.querySelector('#join_btn')
        .addEventListener('click',e=>{
            e.preventDefault();
            customer.join();
    });
    document.querySelector('#admin_btn')
        .addEventListener('click',e=>{
            e.preventDefault();
            alert('관리자 로그인');
            employee.admin_login();
    });
};

function join(){
    $wrapper.innerHTML = customer.join_form();

    document.querySelector('#join_chk_btn')
        .addEventListener('click',e=>{
            e.preventDefault();
            alert("가입하기 버튼");
            
            let data = {
                customerId : document.getElementById('customerId').value,
                customerName : document.getElementById('customerName').value,
                password : document.getElementById('password').value,
                ssn : document.getElementById('ssn').value,
                phone : document.getElementById('phone').value,
                city : document.getElementById('city').value,
                address : document.getElementById('address').value,
                postalcode : document.getElementById('postalcode').value
            };
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'customers', true);
            xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
            xhr.onload=()=>{
                if(xhr.readyState===4 && xhr.status === 200){
                    let d = JSON.parse(xhr.responseText);
                    alert(d.result);
                    if(d.result==='SUCCESS'){
                        alert('회원가입 성공 : '+d.result);
                        app.init();
                    }else{
                        alert('Ajax 실패');
                        app.init();
                    };
                };
            };
            xhr.send(JSON.stringify(data));
    });
    document.querySelector('#join_cal_btn')
        .addEventListener('click',e=>{
            e.preventDefault();
            alert('가입취소');
            app.init();
    });
};

function login(x){
    customerId = document.getElementById(x.userId).value;
    password = document.getElementById('password').value;
    let xhr = new XMLHttpRequest();              // new 메모리 할당
    xhr.open('GET', x.domain+'/'+customerId+'/'+password, true); // open 속성부여, 속성의 추가는 메소드로
    //xhr.setRequestHeader('Content-type','applcation/json;charset=utf-8;')
    xhr.onload=()=>{     // callback함수, listener,             onload 기능 구현, 기능의 추가는 속성으로
        if(xhr.readyState===4 && xhr.status === 200){
            let d = JSON.parse(xhr.responseText);
            if(d){
                if(x.domain==='customers'){
                    session.set_value({'name':'userId', 'value' : d.customerId});
                    customer.myPage(d);
                }else{
                    employee.customer_list('1');
                }
            }else{
                alert('로그인 실패');
                app.init();
            }
        }
    }
    xhr.send(); // send 실행
};

function admin_login(){
    let isAdmin = confirm('관리자 입니까?');
    if(isAdmin){
        let pass = prompt('관리자 번호를 입력하세요');
        if(pass == 1000){
            employee.customer_list('1');
        }else{
            alert('입력한 번호가 일치하지 않습니다.');
        }
    }else{
        alert('관리자만 접속 가능합니다.');
    }
}

function create_customer_row(x){
    return '<tr><td>'+x.customerId+'</td>'
    + '<td>'+x.customerName+'</td>'
    + '<td>'+x.ssn+'</td>'
    + '<td>'+x.phone+'</td>'
    + '<td>'+x.city+'</td></tr>';
}

function customer_list(x){
    let xhr = new XMLHttpRequest();              // new 메모리 할당
    xhr.open('GET', 'customers/page/'+x, true); // open 속성부여, 속성의 추가는 메소드로
    xhr.onload=()=>{     // callback함수, listener,             onload 기능 구현, 기능의 추가는 속성으로
        if(xhr.readyState===4 && xhr.status === 200){
            //alert('리스트 연결 성공');
            let d = JSON.parse(xhr.responseText);
            $wrapper.innerHTML = employee.customer_list_form();
            let tbody = document.getElementById('tbody');
            let i = 0;
            d.list.forEach((v, i)=>{
                tbody.innerHTML += create_customer_row(v);
            });
            
            let blocks = document.createElement('div');
            blocks.setAttribute('id', 'blocks');
            wrapper.appendChild(blocks);
            let spans = document.createElement('div');
            i = 1;
            for(;i<6;i++){
                let span = document.createElement('span');
                span.setAttribute('style', 'display:inline-block;padding-right:20px;border: 1px solid black;cursor:pointer');
                span.setAttribute('class', 'page-num');
                span.innerHTML = i;
                if(x==span.innerHTML){
                    span.style.backgroundColor = 'red';
                };
                spans.appendChild(span);
            }
            blocks.appendChild(spans);
            let clss = document.getElementsByClassName('page-num');
            let j = 0;
            for(;j<clss.length;j++){
                (function(j){
                    clss[j].addEventListener('click',function(){
                        customer_list(this.innerText)
                    })
                })(j)
            }

            if(d.pxy.existPrev){
                let prevBlock = document.createElement('span');
                prevBlock.setAttribute('style','display:inline-block;padding-right:20px;border: 1px solid black;');
                prevBlock.textContent="<";
                blocks.prepend(prevBlock);
            }
     
            if(d.pxy.existNext){
                let nextBlock = document.createElement('span');
                nextBlock.setAttribute('style','display:inline-block;padding-right:20px;border: 1px solid black;');
                nextBlock.textContent=">";
                blocks.appendChild(nextBlock);
            }
            /* if(existPrev){
                let prevBlock = document.createElement('span');
                spans.setAttribute('style="display:inline-block;padding-right:20px;border: 1px solid black;cursor:pointer');
                blocks.prepend(prevBlock);
            }
            if(existNext){
                let nextBlock = document.createElement('span');
                spans.setAttribute('style="display:inline-block;padding-right:20px;border: 1px solid black;cursor:pointer');
                blocks.appendChild(nextBlock);
            } */
        }
    }
    xhr.send(); // send 실행
}

function modify(x){
    $wrapper.innerHTML = customer.modify_form(x);
    document.querySelector('#ok_btn')
        .addEventListener('click',e=>{
            e.preventDefault();
            alert('수정하시겠습니까?');
            let data = {
                customerId : document.getElementById('customerId').innerText,
                customerName : document.getElementById('customerName').innerText,
                password : document.getElementById('password').value,
                ssn : document.getElementById('ssn').innerText,
                phone : document.getElementById('phone').value,
                city : document.getElementById('city').value,
                address : document.getElementById('address').value,
                postalcode : document.getElementById('postalcode').value
            };
            let xhr = new XMLHttpRequest();
            xhr.open('PUT','customers/'+data.customerId,true);
            xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
            xhr.onload=()=>{
                if(xhr.readyState===4&&xhr.status===200){
                    let d = JSON.parse(xhr.responseText);
                    if(d){
                        alert('수정 성공');
                        customer.myPage(d);
                    }else{
                        alert('수정 실패');
                        app.init();
                    }
                }
            };
            xhr.send(JSON.stringify(data));
    });
};

function remove(){
    let data = {
        customerId : document.getElementById('customerId').innerText
    };
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE','customers/'+data.customerId,true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload=()=>{
        if(xhr.readyState===4&&xhr.status===200){
            let d = JSON.parse(xhr.responseText);
            if(d.result==='SUCCESS'){
                alert('탈퇴 '+d.result);
                app.init();
            }else{
                alert('탈퇴 오류');
                app.init();
            };
        };
    };
    xhr.send(JSON.stringify(data));
};

function myPage(x){
    $wrapper.innerHTML = customer.myPage_form(x);
    alert('session test '+session.get_value('userId'));

    document.querySelector('#modify_btn')
        .addEventListener('click',e=>{
            e.preventDefault();
            alert('수정버튼 클릭');
            customer.modify(x);
    });
    document.querySelector('#delete_btn')
        .addEventListener('click',e=>{
            e.preventDefault();
            alert('탈퇴버튼 클릭');
            customer.remove();
    });
};

function count(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers/count', true);
    xhr.onreadystatechange=()=> {
        if(xhr.readyState===4 && xhr.status === 200){
            alert('성공');
            wrapper.innerHTML = '총 고객수 : <h1>' + xhr.responseText + '</h1>';
        }
    }
    xhr.send();
};

function myPage_form(x){
    let customer = x;
    return '<h1>' + customer.customerName + '님의 마이페이지</h1>'
    +'  아이디'
    +'  <span id="customerId">' + customer.customerId + '</span>'
    +'  <br>'
    +'  비밀번호'
    +'  <span id="password">' + customer.password + '</span>'
    +'  <br>'
    +'  이름'
    +'  <span id="customerName">' + customer.customerName + '</span>'
    +'  <br>'
    +'  주민등록번호'
    +'  <span id="ssn">' + customer.ssn + '</span>'
    +'  <br>'
    +'  휴대폰번호'
    +'  <span id="phone">' + customer.phone + '</span>'
    +'  <br>'
    +'  거주지역'
    +'  <span id="city">' + customer.city + '</span>'
    +'  <br>'
    +'  주소'
    +'  <span id="address">' + customer.address + '</span>'
    +'  <br>'
    +'  우편번호'
    +'  <span id="postalcode">' + customer.postalcode + '</span>'
    +'  <br><br>'
    +'  <input type="button" id="modify_btn" value="수정">'
    +'  <input type="button" id="delete_btn" value="탈퇴">'; 
};

function login_form(){
    return '<form action="/action_page.php">'
    + '아이디 :<br>'
    + '<input type="text" id="customerId" name="customerId">'
    + '<br>'
    + '비밀번호:<br>'
    + '<input type="text" id="password" name="password">'
    + '<br><br>'
    + '<input type="button" id="login_btn" value="로그인">'
    + '<input type="button" id="join_btn" value="회원가입">'
    + '<input type="button" id="admin_btn" value="관리자">'
    + '</form>';
};

function join_form(){
    return '<form action="/action_page.php">'
    +'  아이디'
    +'  <input type="text" id="customerId" name="customerId">'
    +'  <br>'
    +'  비밀번호'
    +'  <input type="text" id="password" name="password">'
    +'  <br>'
    +'  이름'
    +'  <input type="text" id="customerName" name="customerName">'
    +'  <br>'
    +'  주민등록번호'
    +'  <input type="text" id="ssn" name="ssn">'
    +'  <br>'
    +'  휴대폰번호'
    +'  <input type="text" id="phone" name="phone">'
    +'  <br>'
    +'  거주지역'
    +'  <input type="text" id="city" name="city">'
    +'  <br>'
    +'  주소'
    +'  <input type="text" id="address" name="address">'
    +'  <br>'
    +'  우편번호'
    +'  <input type="text" id="postalcode" name="postalcode">'
    +'  <br><br>'
    +'  <input type="button" id="join_chk_btn" value="확인">'
    +'  <input type="button" id="join_cal_btn" value="취소">'
    +'</form>';
};

function modify_form(x){
    return '<form>'
    +'<h1>수정페이지</h1>'
    +'  아이디'
    +'  <span id="customerId">' + x.customerId + '</span>'
    +'  <br>'
    +'  비밀번호'
    +'  <input type="text" id="password" name="password" value="'+ x.password +'">'
    +'  <br>'
    +'  이름'
    +'  <span id="customerName">' + x.customerName + '</span>'
    +'  <br>'
    +'  주민등록번호'
    +'  <span id="ssn">' + x.ssn + '</span>'
    +'  <br>'
    +'  휴대폰번호'
    +'  <input type="text" id="phone" name="phone" value="'+ x.phone +'">'
    +'  <br>'
    +'  거주지역'
    +'  <input type="text" id="city" name="city" value="'+ x.city +'">'
    +'  <br>'
    +'  주소'
    +'  <input type="text" id="address" name="address" value="'+ x.address +'">'
    +'  <br>'
    +'  우편번호'
    +'  <input type="text" id="postalcode" name="postalcode" value="'+ x.postalcode +'">'
    +'  <br><br>'
    +'  <input type="button" id="ok_btn" value="확인">'
    +'  <input type="button" id="cal_btn" value="취소">'
    +'</form>'; 
}

function search(){
    return '<form action="/action_page.php">'
    +'</form>';
}

function customer_list_form(){  
//customerId, customerName, ssn, phone, city
    return '<h2>고객목록</h2>'
    +''
    +'<table>'
    +'  <tr id="custome-table">'
    +'    <th>아이디</th>'
    +'    <th>고객명</th>'
    +'    <th>주민번호</th>'
    +'    <th>휴대폰번호</th>'
    +'    <th>도시</th>'
    +'  </tr>'
    +'  <tbody id="tbody"></tbody>'
    +'</table>';
}