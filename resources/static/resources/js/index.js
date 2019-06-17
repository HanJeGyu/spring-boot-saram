// 함수식, IIFE 패턴, 모듈패턴, var a = (함수{})();
// 외부함수, 내부함수가 동등  app가 init 을 인식할 수 없음
var app = (()=>{   // 외부(함수호출)는 public?  , outter, 전역 변수 var
    let wrapper = document.querySelector('#wrapper');  // DOM객체
    let init=()=>{    // 내부(함수식)는 private(클로저 안하면)?, inner,  지역 변수 let
        login_form();
    }
    let login_form = ()=>{
        wrapper.innerHTML = '<form action="/action_page.php">'
        + '아이디 :<br>'
        + '<input type="text" id="customerId" name="customerId">'
        + '<br>'
        + '비밀번호:<br>'
        + '<input type="text" id="password" name="password">'
        + '<br><br>'
        + '<input type="button" id="login_btn" value="로그인">'
        + '<input type="button" id="join_btn" value="회원가입">'
        + '</form>';

        let login_btn = document.querySelector('#login_btn'); 
        let join_btn = document.querySelector('#join_btn'); 
        login_btn.addEventListener('click',(e)=>{
            e.preventDefault();
            alert("로그인 버튼");
            login();
        });
        join_btn.addEventListener('click',()=>{
            join_form();
        });
    };

    let login = () =>{
        id = document.getElementById('customerId').value;
        pass = document.getElementById('password').value;
        let xhr = new XMLHttpRequest(),
            method = 'GET',
            url = 'login/'+id+'/'+pass;
        xhr.open(method, url, true);
        xhr.onreadystatechange=()=>{
            if(xhr.readyState===4 && xhr.status === 200){
                let d = xhr.responseText
                if(d==='SUCCESS'){
                    wrapper.innerHTML = '<h1>마이페이지</h1>'
                }else{
                    alert("로그인 실패");
                    login_form();
                }
            }
        }
        xhr.send();
    };

    let join_form = ()=>{
        let wrapper = document.querySelector('#wrapper');  // dom객체?
        wrapper.innerHTML = '<form action="/action_page.php">'
        +'  아이디:'
        +'  <input type="text" name="firstname" value="">'
        +'  <br>'
        +'  비밀번호:'
        +'  <input type="text" name="lastname" value="">'
        +'  <br>'
        +'  비밀번호 확인:'
        +'  <input type="text" name="lastname" value="">'
        +'  <br>'
        +'  주민등록번호:'
        +'  <input type="text" name="lastname" value="">'
        +'  <br>'
        +'  휴대폰번호:'
        +'  <input type="text" name="lastname" value="">'
        +'  <br>'
        +'  거주지:'
        +'  <input type="text" name="lastname" value="">'
        +'  <br><br>'
        +'  주소:'
        +'  <input type="text" name="lastname" value="">'
        +'  <br>'
        +'  <input type="button" id="join_ck_btn" value="확인">'
        +'  <input type="button" id="join_cal_btn" value="취소">'
        +'</form>';

        let join_ck_btn = document.querySelector('#join_ck_btn'); 
        let join_cal_btn = document.querySelector('#join_cal_btn'); 
        join_ck_btn.addEventListener('click',()=>{
            alert("회원가입 성공");
            login_form();
        });
        join_cal_btn.addEventListener('click',()=>{
            alert("회원가입 취소");
            login_form();
        });
    };

    let count = () =>{
        let xhr = new XMLHttpRequest();
        method = 'GET';
        url = 'count';
        xhr.open(method, url, true);
        xhr.onreadystatechange=()=> {
            if(xhr.readyState===4 && xhr.status === 200){
                alert('성공');
                wrapper.innerHTML = '총 고객수 : <h1>' + xhr.responseText + '</h1>';
            }
        }
        xhr.send();
    };
    
    // 클로저 - 외부함수(app)가 내부함수(init)를 인식 할 수 있음,  {할당될이름 : 내부함수명}
    // json(제이슨)  {string:value},  app 는 제이슨이 (리턴이 제이슨)
    return {init : init};  
})();   //  (); 마무리하면 즉시 실행

// ES5var selected = allJobs.filter(function (job) {  return job.isSelected();});
// ES6var selected = allJobs.filter(job => job.isSelected());