const next = document.getElementById("next");
const back = document.getElementById("back");

const box = document.getElementById("box");
const test = document.getElementById("test");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const movie = document.getElementById("movie");
const bar = document.getElementById("bar");
const ank = document.getElementById("ank");
const rikaido = document.getElementById("rikaido");

//movieChange

const images = ["image/syuwa1.mp4", "image/syuwa2.mp4", "image/syuwa3.mp4", "image/syuwa4.mp4", "image/syuwa5.mp4", "image/syuwa6.mp4", "image/syuwa7.mp4", "image/syuwa8.mp4", "image/syuwa9.mp4", "image/syuwa10.mp4", "image/syuwa11.mp4", "image/syuwa12.mp4", "image/syuwa13.mp4", "image/syuwa14.mp4", "image/syuwa15.mp4" ]
let count = 0;

//評価

const review = []

// openBox
next.addEventListener('click', openBox);
function openBox() {
    if (count === 15) {
        return;
    }
    box.classList.toggle('hidden');
}
back.addEventListener('click', function() {
    if (count === 0) {
        return;
    } else if (count === 15) {
        return;
    } else {
    count--;
    review.pop();
    movie.src = images[count];
    bar.style.width = count * 1.95 + "vw";
    }
})

answer1.addEventListener('click', function() {
    if (count === 14) {
        openBox();
        count++;
        review.push('4');
        bar.style.width = count * 1.95 + "vw";
        test.classList.toggle('hidden2');
        rikaido.value = review.join(",");
    } else {
    openBox();
    count++;
    review.push('4');
    movie.src = images[count];
    bar.style.width = count * 1.95 + "vw";
    }
})
answer2.addEventListener('click', function() {
    if (count === 14) {
        openBox();
        count++;
        review.push('3');
        bar.style.width = count * 1.95 + "vw";
        test.classList.toggle('hidden2');
        rikaido.value = review.join(",");
    } else {
    openBox();
    count++;
    review.push('3');
    movie.src = images[count];
    bar.style.width = count * 1.95 + "vw";
    }
})
answer3.addEventListener('click', function() {
    if (count === 14) {
        openBox();
        count++;
        review.push('2');
        bar.style.width = count * 1.95 + "vw";
        test.classList.toggle('hidden2');
        rikaido.value = review.join(",");
    } else {
    openBox();
    count++;
    review.push('2');
    movie.src = images[count];
    bar.style.width = count * 1.95 + "vw";
    }
})

answer4.addEventListener('click', function() {
    if (count === 14) {
        openBox();
        count++;
        review.push('1');
        bar.style.width = count * 1.95 + "vw";
        test.classList.toggle('hidden2');
        rikaido.value = review.join(",");
    } else {
    openBox();
    count++;
    review.push('1');
    movie.src = images[count];
    bar.style.width = count * 1.95 + "vw";
    }
})

//行列を送信



finish.addEventListener('click', function() {
    test.classList.toggle('hidden2');
    ank.classList.toggle('hidden3');
})

// タイマー

const min = document.getElementById("min");
const sec = document.getElementById("sec");

let countNumber = 300;

function startTimer() {
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
}
window.addEventListener("load", startTimer);