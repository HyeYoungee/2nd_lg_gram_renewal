$(function () {
  const colors = [
    "tourmaline-green",
    "snow-white",
    "aurora-white",
    "obsidian-black",
  ];
  const texts = [
    "토파즈 그린",
    "스노우 화이트",
    "오로라 화이트",
    "옵디시안 블랙",
  ];
  let index = 0;

  function changeColorText() {
    const colorText = $("#colorText");
    colorText.removeClass(colors.join(" "));
    colorText.addClass(colors[index]);
    colorText.text(texts[index]);

    colorText.addClass("fade-in-out");

    setTimeout(() => colorText.removeClass("fade-in-out"), 2000);

    index = (index + 1) % colors.length;
  }

  setInterval(changeColorText, 4000);
});

//두번째 섹션

AOS.init({
  duration: 1200,
});
