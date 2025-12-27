const textBox = document.getElementById("text-box");
const start = document.getElementById("start");
const min = document.getElementById("min");
const sec = document.getElementById("sec");



start.addEventListener('click', closeBox);
function closeBox() {
    textBox.classList.toggle('hidden');
}
let countNumber = 300;
            
start.addEventListener('click', () => {
    function countDown() {
        countNumber--;
        if (countNumber > 0) {
            let minCount = Math.floor(countNumber / 60);
            min.textContent = minCount;
            let secCount = countNumber % 60;
            sec.textContent = secCount.toString().padStart(2, "0");
        } else {
            min.textContent = 0;
            sec.textContent = 0;
            clearInterval(countDownID);
        }
    }
    const countDownID = setInterval(countDown, 1000);
});