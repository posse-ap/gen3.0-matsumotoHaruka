"use strict";

let quiz = [
  {
    q: "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
    img: "./img/quiz/img-quiz01.png",
    a: [["約28万人", 0], ["約79万人", 1], ["約183万人", 0]],
    n: "経済産業省 2019年3月 - IT 人材需給に関する調査",
    ans:"約79万人",
  },

  {
    q: "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
    img: "./img/quiz/img-quiz02.png",
    a: [["INTECH",0], ["BIZZTECH",0], ["X-TECH",1]],
    ans:"X-TECH",
  },

  {
    q: "IoTとは何の略でしょう？",
    img: "./img/quiz/img-quiz03.png",
    a: [
      ["Internet of Things",1],
      ["Integrate into Technology",0],
      ["Information on Tool",0]
    ],
    ans:"Internet of Things",
  },
  {
    q: "日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来の社会のことを何と言うでしょうか？",
    img: "./img/quiz/img-quiz04.png",
    a: [["Society 5.0",1],["CyPhy",0], ["SDGs",0]],
    n: "Society5.0-科学技術政策-内閣府",
    ans:"Society 5.0",
  },

  {
    q: "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
    img: "./img/quiz/img-quiz05.png",
    a: [["Web3.0",1], ["NFT",0], ["メタバーズ",0]],
    ans:"Web3.0",
  },
  {
    q: "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいると言われているでしょうか？",
    img: "./img/quiz/img-quiz06.png",
    a: [["約2倍",0], ["約5倍",1], ["約11倍",0]],
    n: "Accenture Technology2021",
    ans:"約5倍",
  },
];

const quiz_container = document.getElementById("quiz");

const shuffle = (arrays) => {
  for (let i = arrays.length - 1; i >= 0; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    console.log(r);
    [arrays[i], arrays[r]] = [arrays[r], arrays[i]];
  }
  return arrays;
};

const shuffle_container = shuffle(quiz);

for (let i = 1; i <= shuffle_container.length; i++) {
  let quiz_text =
    `<section class="quiz">
  <h2>Q${i}</h2>` +
    `<p class="quiz-text">${shuffle_container[i - 1].q}</p>` +
    `<img class="quiz1-img" src="${shuffle_container[i - 1].img}">` +
    `<div class="quiz-ans" data-section="${i}">` +
    `<h3>A</h3>` + 
    `<ul>`;
    

    
    
  // 選択肢のシャッフル

  const shuffle_section = shuffle(shuffle_container[i - 1].a);
  
  
    let quiz_section_ans = `<li class="quiz-ans-list">
      <button class="buttons" data-answer=${shuffle_section[0][1]}>${shuffle_section[0][0]}
        <img class="quiz-ans-img" src="./sankaku.png">
      </button>
    </li> `+
    `<li class="quiz-ans-list">
      <button class="buttons" data-answer=${shuffle_section[1][1]}>${shuffle_section[1][0]}
        <img class="quiz-ans-img" src="./sankaku.png">
      </button>
    </li> `+
    `<li class="quiz-ans-list">
      <button class="buttons" data-answer=${shuffle_section[2][1]}>${shuffle_section[2][0]}
        <img class="quiz-ans-img" src="./sankaku.png">
      </button>
    </li> `;
    
  

  if (shuffle_container[i - 1].n) {
    let quote = `</ul>` + `</div>` + `<div id = "quiz_ans${i}"></div>`;
    `<div class="quote">
  <img class="quote-img" src="./img/icon/icon-note.svg" >
  <p class="quote-text">${shuffle_container[i - 1].n}</p>
  </div>` + ` </section>`;
    const quote_main = quiz_text + quiz_section_ans + quote;
    quiz_container.insertAdjacentHTML("beforebegin", quote_main);
  } else {
    let quote = `</ul>` + `</div>` + `<div id = "quiz_ans${i}"></div>` + `</section>`;
    const quote_main = quiz_text + quiz_section_ans + quote;
    quiz_container.insertAdjacentHTML("beforebegin", quote_main);
  }
}

const quiz_num = document.querySelectorAll("[data-section]");
let quiz_nums = Array.from(quiz_num);

quiz_nums.forEach(function (quiz_number) {
  let quiz_select = quiz_number.querySelectorAll(".buttons");
  console.log(quiz_select[0]);
  let quiz_icon = quiz_number.querySelectorAll(".quiz-ans-img");

  function button_click() {
    quiz_select.forEach(function (but) {
      but.setAttribute("disabled", true);
    });
    quiz_icon.forEach(function (icon) {
      icon.style.display = "none";
    });
  }

  quiz_select.forEach(function (button) {
    button.addEventListener("click", button_click);
  });

  for (let i = 0; i < quiz_select.length; i++) {
    quiz_select[i].addEventListener("click", () => {
      quiz_select[i].classList.add("buttons_ans");
    });
  }

  let selected_quiz = quiz_number.dataset.section;
  const quiz1_selection = quiz_number.querySelectorAll("[data-answer]");
  let quiz1_selections = Array.from(quiz1_selection);
  let quiz_ans = document.getElementById("quiz_ans" + selected_quiz);
  console.log(quiz_ans);
  quiz1_selections.forEach(function (num) {
    num.addEventListener("click", () => {
      const answer = shuffle_container[selected_quiz-1].ans;
      if (num.dataset.answer == "1") {
        const correct = `<div class="quiz-result-true">
  <div class="quiz-result-not" class="correct">
    <p class="result-true">正解!</p>
  </div>
  <div class="quiz-result-text">
    <p class="ans"><span class="A">A</span>${answer}</p>
  </div>
</div>`;
        quiz_ans.insertAdjacentHTML("afterend", correct);
      } else {
        const incorrect = `<div class="quiz-result-false">
    <div class="quiz-result-ans">
    <p class="result-false">不正解…</p>
    </div>
<div class="quiz-result-text">
  <p class="ans"><span class="A">A</span>${answer}</p>
</div>

</div>`;
        quiz_ans.insertAdjacentHTML("afterend", incorrect);
      }
    });
  });
});
