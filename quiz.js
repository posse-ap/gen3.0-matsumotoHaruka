"use strict";

//答え
let ans = [
  "約79万人",
  "X-TECH",
  "Internet of Things",
  "Society 5.0",
  "Web3.0",
  "約5倍",
];

let quiz = [
  [
    "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
    "約28万人",
    "約79万人",
    "約183万人",
    "経済産業省 2019年3月 - IT 人材需給に関する調査",
  ],
  [
    "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
    "INTECH",
    "BIZZTECH",
    "X-TECH",
  ],
  [
    "IoTとは何の略でしょう？",
    "Internet of Things",
    "Integrate into Technology",
    "Information on Tool",
  ],
  [
    "日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来の社会のことを何と言うでしょうか？",
    "Society 5.0",
    "CyPhy",
    "SDGs",
    "Society5.0-科学技術政策-内閣府",
  ],
  [
    "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
    "Web3.0",
    "NFT",
    "メタバーズ",
  ],
  [
    "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいると言われているでしょうか？",
    "約2倍",
    "約5倍",
    "約11倍",
    "Accenture Technology2021",
  ],
];

const quiz_container = document.getElementById("quiz");

for (let i = 1; i <= 6; i++) {
  let quiz_text =
    `<section class="quiz">
  <h2>Q${i}</h2>` +
    `<p class="quiz-text">${quiz[i - 1][0]}</p>` +
    `<img class="quiz1-img" src="./img/quiz/img-quiz0${i}.png">` +
    `<div class="quiz-ans" data-section="${i}">` +
    `<h3>A</h3>` +
    `<ul>
  <li class="quiz-ans-list">
    <button class="buttons" data-answer="0">${quiz[i - 1][1]}
      <img class="quiz-ans-img" src="./sankaku.png">
    </button>
  </li>
  <li>
    <button class="buttons" data-answer="1">${quiz[i - 1][2]}
      <img class="quiz-ans-img" src="./sankaku.png">
    </button>
  </li>
  <li>
    <button class="buttons" data-answer="0">${quiz[i - 1][3]}
      <img class="quiz-ans-img" src="./sankaku.png">
    </button>
  </li>
</ul>` +
    `</div>` +
    `<div id = "quiz_ans${i}"></div>` +
    `<div class="quote">
<img class="quote-img" src="./img/icon/icon-note.svg" >
<p class="quote-text">${quiz[i - 1][4]}</p>
</div>` +
    `</section>`;

  quiz_container.insertAdjacentHTML("beforebegin", quiz_text);
}

const quiz_num = document.querySelectorAll("[data-section]");
let quiz_nums = Array.from(quiz_num);

quiz_nums.forEach(function (quiz_number) {
  let quiz_select = quiz_number.querySelectorAll(".buttons");
  console.log(quiz_select[0]);
  let quiz_icon = quiz_number.querySelectorAll(".quiz-ans-img")
  

  function button_click(){
    quiz_select.forEach(function(but){
    but.setAttribute("disabled", true)
  });
    quiz_icon.forEach(function(icon){
      icon.style.display = "none";
    })
    
  }

  quiz_select.forEach(function(button){
    button.addEventListener("click", button_click);
    })

  for(let i = 0; i < quiz_select.length; i++){
    quiz_select[i].addEventListener("click", () => {quiz_select[i].classList.add('buttons_ans')});
  }
  

  let selected_quiz = quiz_number.dataset.section;
  const quiz1_selection = quiz_number.querySelectorAll("[data-answer]");
  let quiz1_selections = Array.from(quiz1_selection);
  let quiz_ans = document.getElementById("quiz_ans" + selected_quiz);
  console.log(quiz_ans);
  quiz1_selections.forEach(function (num) {
    num.addEventListener("click", () => {
      if (num.dataset.answer == "1") {
        const correct = `<div class="quiz-result1">
  <div class="quiz-result-not" class="correct">
    <p>正解!</p>
  </div>
  <div class="quiz-result-text">
    <p><span>A</span>${ans[selected_quiz - 1]}</p>
  </div>
</div>`;
        quiz_ans.insertAdjacentHTML("afterend", correct);
      } else {
        const incorrect = `<div class="quiz-result2">
    <div class="quiz-result-ans">
    <p>不正解…</p>
    </div>
<div class="quiz-result-text">
  <p><span>A</span>${ans[selected_quiz - 1]}</p>
</div>

</div>`;
        quiz_ans.insertAdjacentHTML("afterend", incorrect);
      }
    });
  });
});

// if(quiz_num1=="1"){
//   document.querySelector(".quiz-result-ans").style.display = "block";
// }

// });

// if(){
// var ans = document.querySelector("#quiz1_section1");
// ans.addEventListener('click',() => {
//   document.querySelector(".quiz-result1").style.display = "block";
// });
// } else{
//   var ans = document.querySelector("#quiz1_section1");
//   ans.addEventListener('click',() => {document.querySelector("quiz-result2").style.display = "block";});
// }

// quiz[0][
//   "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
//   "./img/quiz/img-quiz01.png",
//   "約28万人",
//   "約78万人",
//   "約183万人"
// ];

// quiz[1][
//   "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
//   "./img/quiz/img-quiz02.png",
//   "INTECH",
//   "BIZZTECH",
//   "X-TECH"
// ];

// quiz[2][
//   "IoTとは何の略でしょう？",
//   "./img/quiz/img-quiz03.png",
//   "Internet of Things",
//   "Integrate into Technology",
//   "Information on Tool"
// ];

// quiz[3][
//   "日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来の社会のことを何と言うでしょうか？",
//   "./img/quiz/img-quiz04.png",
//   "Society 5.0",
//   "CyPhy",
//   "SDGs"
// ];

// quiz[4][
//   "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
//   "./img/quiz/img-quiz05.png",
//   "Web3.0",
//   "NFT",
//   "メタバーズ"
// ];

// quiz[5][
//   "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいると言われているでしょうか？",
//   "./img/quiz/img-quiz06.png",
//   "約2倍",
//   "約5倍",
//   "約11倍"
// ];
