const btns = document.querySelectorAll(".buttons > button");
const panels = document.querySelectorAll(".panels > div");
console.log(btns);
console.log(panels);

// 1. 클릭했을 때 active 클래스 이동
// 2. 클릭한 버튼의 인덱스와 같은 인덱스의 패널 디스플레이를 block으로 변경
btns.forEach(function (btn, idx) {
  btn.addEventListener("click", function () {
    btns.forEach(function (item) {
      item.classList.remove("active");
    });
    panels.forEach(function (panel) {
      panel.style.display = "none";
    });
    btns[idx].classList.add("active");
    panels[idx].style.display = "block";
  });
});
