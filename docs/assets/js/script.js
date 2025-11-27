const bgYearElement = document.getElementById('bgYear');

const minYear = 2002;
const maxYear = 2026;
const changeInterval = 100; // 数字が変わる間隔（ミリ秒）

function getRandomYear() {
    return Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
}

function updateYear() {
    const randomYear = getRandomYear();
    bgYearElement.textContent = randomYear;
}

// 初期表示
updateYear();

// 定期的に数字を変更
setInterval(updateYear, changeInterval);

// スクロールアニメーション
const observerOptions = {
    root: null,
    rootMargin: '-150px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // 各要素に遅延を追加
            const delay = Array.from(document.querySelectorAll('.content-text')).indexOf(entry.target) * 150;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// すべての .content-text 要素を監視
document.querySelectorAll('.content-text').forEach((element) => {
    observer.observe(element);
});
