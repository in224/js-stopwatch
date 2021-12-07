//html 태그 저장
const time = document.querySelector('#time');
const toggle = document.querySelector('#toggle');
const reset = document.querySelector('#reset');
const timeLap = document.querySelector('#time-lap');

//타이머 초기 설정
let [timer, timerId] = [0, 0];

//분, 초를 00:00 의 형식으로 출력
function showTimer(s) {
    let minTime = parseInt((s % 3600) / 60);
    let secTime = s % 60;
    let min = minTime < 10 ? '0' + minTime : minTime;
    let sec = secTime < 10 ? '0' + secTime : secTime;
    time.innerHTML = `${min}:${sec}`;
}

// Start 버튼 클릭 이벤트
toggle.addEventListener('click', (event) => {
    //Start일 때 처리
    if (toggle.textContent === "Start") {    
        //버튼을 Stop으로 변경
        toggle.innerHTML = "Stop";
    
        //타이머 시작
        timerId = setInterval(() => {
            timer += 1;
            showTimer(timer);
        }, 1000);
    } 
    //Stop일때 처리
    else if (toggle.textContent === "Stop") { //버튼글자가 Stop이면!!
        //타이머 정지
        clearInterval(timerId);
        //버튼을 Start로 변경
        toggle.innerHTML = "Start";

        const li = document.createElement('li');
        //스탑누르면 time lap 에 기록
        timeLap.appendChild(li);
        li.append(timer); 
    }
});

// 리셋 누르면 시간이 초기화되고, 이력삭제
reset.addEventListener('click', () => {
    //타이머 정지
    clearInterval(timerId);
    [timer, timerId] = [0, 0];
    time.textContent = "00:00";
    timeLap.textContent = "";
    //localStorage.clear();
});