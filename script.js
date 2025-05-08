function setupLevelPage() {
  const levelTextEl = document.getElementById("levelText");
  const shareButton = document.getElementById("shareButton");

  // 要素が存在するページだけ実行
  if (levelTextEl && shareButton) {
    // レベル番号をURLから抽出（例: level1.html → 1）
    const match = window.location.pathname.match(/level(\d+)/);
    const level = match ? match[1] : "???";

    // メッセージ文
    const message = `あなたはyesマンレベル${level}です。`;

    // ページに表示
    levelTextEl.textContent = message;

    // シェアボタンにイベント設定
    shareButton.addEventListener("click", function () {
      const appUrl = `https://my-app-dr43.onrender.com`;
      const tweetText = encodeURIComponent(message);
      const encodedUrl = encodeURIComponent(appUrl);
      const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${encodedUrl}`;
      window.open(tweetUrl, "_blank");
    });
  }
}
document.addEventListener("DOMContentLoaded", setupLevelPage);



//ここからqustion2のjs
function highlight() {
  const target = document.getElementById("targetWord");
  target.style.color = "red";
}



//ここからquestion4のjs

document.addEventListener("DOMContentLoaded", () => {
  // username と message の要素を取得
  const usernameEl = document.getElementById("username");
  const messageEl = document.getElementsByClassName("message");

  if (usernameEl) {
    // 1つ目の要素（username）のテキストを一瞬「太郎」に
    usernameEl.textContent = "はい";
    setTimeout(() => {
      usernameEl.textContent = "いいえ";
    }, 200);
  }

for (let i = 0; i < messageEl.length; i++) {
    // 2つ目の要素（message）のテキストを一瞬「こんにちは！」に
    messageEl[i].textContent = "はち";
    setTimeout(() => {
      messageEl[i].textContent = "いいえ";
    }, 200);
  }
});