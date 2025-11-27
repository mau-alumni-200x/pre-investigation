# ムサビ同窓会サイト 要件定義

## 概要
武蔵野美術大学200X年卒業生の同窓会開催に向けた事前アンケートサイト

## ターゲット
- モバイルファーストデザイン（主に390px幅を想定）
- 200X年卒業生（2002-2026年の範囲）

## 技術スタック
- HTML5
- CSS3
- Vanilla JavaScript
- Google Forms（埋め込み）
- Google Fonts (Courier Prime Italic)

---

## ページ構成

### 1. ヒーローセクション (.hero-section)

#### HTML構造
```html
<section class="hero-section">
    <div class="background-year" id="bgYear">2002</div>
    <div class="vertical-text">ムサビ同窓会</div>
    <div class="scroll-indicator">
        <span class="arrow">▼</span>
        <span class="arrow">▼</span>
        <span class="arrow">▼</span>
    </div>
</section>
```

#### レイアウト
- 画面全体（100vh）
- `position: relative`
- `display: flex; justify-content: center; align-items: center;`
- `overflow: hidden`

#### 背景アニメーション (.background-year)
- **要素**: `<div id="bgYear">`
- **配置**: `position: absolute`
- **位置**: `top: 50%; left: 45%; transform: translate(-50%, -50%);`
- **フォント**:
  - `font-family: 'Courier Prime', monospace;`
  - `font-style: italic;`
  - `font-weight: 400;`
  - `font-size: 72vw;`
  - `letter-spacing: -0.15em;`（文字詰め）
  - `font-variant-numeric: tabular-nums;`（等幅数字）
- **色**: `color: rgba(200, 200, 200, 0.3);`
- **エフェクト**: `filter: blur(0.75rem);`（12px相当）
- **その他**:
  - `user-select: none;`
  - `pointer-events: none;`
  - `white-space: nowrap;`
- **JavaScript動作**:
  - 2002-2026の範囲でランダムな年数を表示
  - 100ms間隔で更新
  - `Math.random()`を使用

#### メインタイトル (.vertical-text)
- **テキスト**: 「ムサビ同窓会」
- **縦書き設定**:
  - `writing-mode: vertical-rl;`
  - `text-orientation: upright;`
- **フォント**:
  - サイズ: `3rem`
  - レタースペーシング: `0.2em`
  - 色: `#333`
- **配置**:
  - `position: relative;`
  - `z-index: 10;`
- **アニメーション**:
  - 初期状態: `opacity: 0;`
  - `animation: fadeInUp 3s ease-out forwards;`
  - 最終状態: `opacity: 1;`

#### スクロールインジケーター (.scroll-indicator)
- **HTML**: 3つの`<span class="arrow">▼</span>`を縦並び
- **配置**:
  - `position: absolute; bottom: 2.5rem; left: 50%;`（40px相当）
  - `transform: translateX(-50%);`
- **レイアウト**:
  - `display: flex; flex-direction: column;`
  - `gap: 0.3125rem;`（5px相当）
- **各矢印 (.arrow)**:
  - フォントサイズ: `1rem`
  - 色: `#666`
  - 初期状態: `opacity: 0;`
  - アニメーション: `arrowFade 1.5s ease-in-out infinite;`
  - 遅延タイミング:
    - 1番目: `animation-delay: 3s;`
    - 2番目: `animation-delay: 3.3s;`
    - 3番目: `animation-delay: 3.6s;`
- **アニメーション詳細**:
  - 0%: `opacity: 0;`
  - 50%: `opacity: 0.6;`
  - 100%: `opacity: 0;`
- **インジケーター全体**:
  - `opacity: 0;`
  - `animation: fadeInScroll 1s ease-out 3s forwards;`
  - `cursor: pointer;`

### 2. コンテンツセクション (.content-section)

#### HTML構造
```html
<section class="content-section">
    <p class="content-text">本文1</p>
    <p class="content-text">本文2</p>
    <p class="content-text">本文3</p>
    <p class="content-text">署名部分（右揃え）</p>
</section>
```

#### レイアウト
- `width: 100%;`
- `max-width: 40rem;`（640px相当）
- `margin: 0 auto;`（中央配置）
- `padding: 3.75rem 1.25rem;`（60px 20px相当）
- `display: flex; flex-direction: column;`
- `align-items: flex-start;`
- `gap: 1.25rem;`（20px相当）

#### テキスト (.content-text)
- `width: 100%;`
- `font-size: 1rem;`
- `line-height: 1.8;`
- `color: #333;`
- `text-align: justify;`（両端揃え）
- **最後の段落のみ**: `text-align: right;`（`:last-of-type`セレクタ使用）

#### スクロールアニメーション
- **初期状態**:
  - `opacity: 0;`
  - `transform: translateY(1.875rem);`（30px相当）
- **表示状態（.visible クラス追加時）**:
  - `opacity: 1;`
  - `transform: translateY(0);`
- **トランジション**: `transition: opacity 0.8s ease-out, transform 0.8s ease-out;`
- **JavaScript設定**:
  - Intersection Observer API使用
  - `rootMargin: '-150px'`（ビューポートから150px内側で検知）
  - `threshold: 0.2`（要素の20%が表示されたら発火）
  - 各要素に150ms間隔で遅延を追加
  - 一度表示したら監視を解除（`observer.unobserve()`）

### 3. Google Formsリンクセクション

#### HTML構造
```html
<div class="form-link-container">
    <a href="[Google FormsのURL]" class="form-link">Google Forms で回答する</a>
</div>
```

#### スタイル (.form-link-container)
- `width: 100%;`
- `max-width: 40rem;`（640px相当）
- `margin: 0 auto;`
- `padding: 2.5rem 1.25rem 5rem;`（40px 20px 80px相当）

#### リンクボタン (.form-link)
- `display: block;`
- `width: 100%;`（横幅いっぱい）
- `padding: 1rem;`（16px相当）
- `font-size: 1.25rem;`（20px相当）
- `color: #333;`
- `background-color: transparent;`
- `border: 0.0625rem solid #333;`（1px相当）
- `text-align: center;`
- `text-decoration: none;`
- `transition: all 0.3s ease;`
- フォント: 明朝体（本文と同じ）

#### ホバー時 (.form-link:hover)
- `background-color: #333;`
- `color: #fff;`

**変更履歴**:
- iframe埋め込みからリンク形式に変更
- ボタンスタイルを追加（シンプルなボーダーデザイン）
- すべてのpx値をremに統一（390px基準で相対サイズ）
- ボタンを横幅いっぱいのブロック要素に変更（コンテンツセクションと同じ幅）

---

## デザイン仕様

### カラーパレット
| 用途 | カラーコード |
|------|-------------|
| 背景 | `#ffffff` |
| メインテキスト | `#333` |
| サブテキスト/インジケーター | `#666` |
| 背景アニメーション数字 | `rgba(200, 200, 200, 0.3)` |

### タイポグラフィ

#### 本文（明朝体）
```css
font-family: 'Hiragino Mincho ProN', 'Yu Mincho', 'YuMincho', 'HG明朝E', 'MS P明朝', 'MS 明朝', serif;
```

#### 背景数字（モノスペース）
```css
font-family: 'Courier Prime', monospace;
font-style: italic;
```

### フォント読み込み
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital@1&display=swap" rel="stylesheet">
```

---

## アニメーション詳細

### @keyframes fadeInUp (メインタイトル)
```css
@keyframes fadeInUp {
    to {
        opacity: 1;
    }
}
```
- 時間: 3秒
- イージング: ease-out
- 適用: `.vertical-text`

### @keyframes fadeInScroll (スクロールインジケーター表示)
```css
@keyframes fadeInScroll {
    to {
        opacity: 1;
    }
}
```
- 時間: 1秒
- イージング: ease-out
- 遅延: 3秒
- 適用: `.scroll-indicator`

### @keyframes arrowFade (矢印点滅)
```css
@keyframes arrowFade {
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 0.6;
    }
}
```
- 時間: 1.5秒
- イージング: ease-in-out
- ループ: 無限
- 適用: `.scroll-indicator .arrow`
- 各矢印に0.3秒ずつ遅延

---

## レスポンシブ対応

### ベースフォントサイズ
```css
html, body {
    font-size: calc(16px * 100vw / 390px);
}
```
- 390px幅を基準に可変

### リセットCSS
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### スクロール設定
- `html, body`に`overflow`制限なし（デフォルト）
- スクロール可能

---

## JavaScript実装詳細

### 背景年数アニメーション
```javascript
const bgYearElement = document.getElementById('bgYear');
const minYear = 2002;
const maxYear = 2026;
const changeInterval = 100;

function getRandomYear() {
    return Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
}

function updateYear() {
    const randomYear = getRandomYear();
    bgYearElement.textContent = randomYear;
}

updateYear();
setInterval(updateYear, changeInterval);
```

### スクロールアニメーション
```javascript
const observerOptions = {
    root: null,
    rootMargin: '-150px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const delay = Array.from(document.querySelectorAll('.content-text'))
                .indexOf(entry.target) * 150;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.content-text').forEach((element) => {
    observer.observe(element);
});
```

---

## ファイル構成
```
docs/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
```

---

## HTMLメタ情報
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ムサビ同窓会</title>
```

---

## ブラウザ対応
- モダンブラウザ（Chrome, Firefox, Safari, Edge最新版）
- **必須API**:
  - Intersection Observer API
  - CSS Grid/Flexbox
  - CSS Animations
  - CSS Filters

---

## 実装チェックリスト

### HTML
- [ ] DOCTYPE宣言
- [ ] `lang="ja"` 属性
- [ ] meta charset="UTF-8"
- [ ] meta viewport設定
- [ ] Google Fonts読み込み
- [ ] CSS/JS読み込み
- [ ] セマンティックHTML（section要素）
- [ ] 適切なid/class命名

### CSS
- [ ] リセットCSS
- [ ] ベースフォントサイズ計算式
- [ ] フォントファミリー設定（明朝体/モノスペース）
- [ ] 全アニメーション定義
- [ ] レスポンシブ対応
- [ ] z-indexの階層管理

### JavaScript
- [ ] DOM要素取得
- [ ] ランダム数値生成関数
- [ ] setInterval設定
- [ ] Intersection Observer設定
- [ ] イベントリスナー登録

---

## 注意事項

1. **Google Formsのリンク**
   - URLは実装時に差し替え
   - リンク形式で外部ページに遷移

2. **テキストコンテンツ**
   - `.content-text`の本文は原稿に応じて変更
   - 最後の段落（署名）は自動的に右揃え

3. **年数の範囲**
   - `minYear`と`maxYear`を変更すれば範囲変更可能

4. **アニメーションタイミング**
   - メインタイトル表示: 3秒
   - スクロールインジケーター表示: 3秒後
   - コンテンツ表示: スクロール位置に応じて

5. **パフォーマンス**
   - Intersection Observerで一度表示した要素は監視解除
   - アニメーションは`transform`と`opacity`のみ使用（GPU加速）
