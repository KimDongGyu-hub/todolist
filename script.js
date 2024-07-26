// 글자 출력

// 글자를 보여줄 태그
const textEl = document.getElementById("text");
// 속도를 조절할 태그
const speedEl = document.getElementById("speed");

let textcheck = prompt("이름을 을력해주세요");
let text = `안녕하세요 ${textcheck}님`;

let idx = 1;
let speed = 300;

// 문자열 함수 생성
function writeText() {
  textEl.textContent = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed);
}

// 함수호출
writeText();

// 글자 출력

// 시간 출력

// 시간을 보여줄 태그
let day = document.getElementById("dayday");

// 두번째 인수로 전달받은 시간으로 시간 분 띄우기
const timeId = setInterval(() => {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();

  dayday.innerHTML = `${hour} : ${minute}`;

  minute1 = Number(minute);
  if (minute1 < 10) {
    dayday.innerHTML = `${hour} : 0${minute}`;
  }
  hour1 = Number(hour);
  if (hour1 < 10) {
    dayday.innerHTML = `0${hour} : 0${minute}`;
  }
}, 1000);
// 시간출력

// 일정 넣기

// 일정을 추가할 태그들
const newTodo = document.getElementById("newTodo");
const todoList = document.getElementById("todoList");
const addTodoBtn = document.getElementById("add-todo");

// 클릭하면 추가 버튼
addTodoBtn.addEventListener("click", addTodo);
// 엔터치면 추가
newTodo.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  const todoText = newTodo.value.trim();
  if (todoText !== "") {
    const li = document.createElement("li");
    li.textContent = todoText;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "삭제";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(deleteBtn);
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
    todoList.appendChild(li);
    newTodo.value = "";
  }
}

// 일정 넣기
