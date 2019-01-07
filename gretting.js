const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function paintGreeting(text) {
  //  form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    //currentUser 이름 가져와 이름이 있는지 없는지 체크하고 기능실행
    const currentUser = localStorage.getItem(USER_LS);
    
    if (currentUser === null) {
        // she is not
}else{
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();