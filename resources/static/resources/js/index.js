// 함수식, IIFE 패턴, 모듈패턴, var a = (함수{})();
// 외부함수, 내부함수가 동등  app가 init 을 인식할 수 없음
var app = (function(){   // 외부(함수호출)는 public?  , outter, 전역 함수 var
    var wrapper = document.querySelector('#wrapper');  // 컴포넌트 객체?, dom객체?
    let init=function(){    // 내부(함수식)는 private(클로저 안하면)?, inner,  지역 함수 let
        login_form();
    }
    let login_form = function(){
        wrapper.innerHTML = '<form action="/action_page.php">'
        +'  First name:<br>'
        +'  <input type="text" name="firstname" value="Mickey">'
        +'  <br>'
        +'  Last name:<br>'
        +'  <input type="text" name="lastname" value="Mouse">'
        +'  <br><br>'
        +'  <input type="submit" id="login" value="로그인">'
        +'  <input type="submit" id="join" value="회원가입">'
        +'</form>';

        var login = document.querySelector('#login'); 
        var join = document.querySelector('#join'); 
        login.addEventListener('click',function(){
            alert("로그인에 실패했습니다.");
            login_form();
        });
        join.addEventListener('click',function(){
            join_form();
        });
    };

    let join_form = function(){
        var wrapper = document.querySelector('#wrapper');  // 컴포넌트 객체?, dom객체?
        wrapper.innerHTML = '<form action="/action_page.php">'
        +'  아이디:'
        +'  <input type="text" name="firstname" value="">'
        +'  <br>'
        +'  비밀번호:'
        +'  <input type="text" name="lastname" value="">'
        +'  <br>'
        +'  이름:'
        +'  <input type="text" name="lastname" value="">'
        +'  <br>'
        +'  ssm?:'
        +'  <input type="text" name="lastname" value="">'
        +'  <br>'
        +'  휴대폰번호:'
        +'  <input type="text" name="lastname" value="">'
        +'  <br><br>'
        +'  <input type="submit" id="join_y" value="확인">'
        +'  <input type="submit" id="join_n" value="취소">'
        +'</form>';

        var join_y = document.querySelector('#join_y'); 
        var join_n = document.querySelector('#join_n'); 
        join_y.addEventListener('click',function(){
            alert("회원가입 성공");
            login_form();
        });
        join_n.addEventListener('click',function(){
            alert("회원가입 취소");
            login_form();
        });
    };

    // 클로저 - 외부함수(app)가 내부함수(init)를 인식 할 수 있음,  {할당될이름 : 내부함수명}
    // json(제이슨)  {string:value},  app 는 제이슨이 (리턴이 제이슨)
    return {init : init};  
})();   //  (); 마무리하면 즉시 실행