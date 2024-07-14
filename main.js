// JavaScript code

let boys = Array.from({ length: 19 }, (_, i) => i + 1);
let girls = Array.from({ length: 19 }, (_, i) => i + 20);

function shuffle() {
  boys = Array.from({ length: 19 }, (_, i) => i + 1);
  girls = Array.from({ length: 19 }, (_, i) => i + 20);
  let listp = [];
  while (boys.length > 0 && girls.length > 0) {
    let b = boys[Math.floor(Math.random() * boys.length)];
    let index = boys.indexOf(b);
    boys.splice(index, 1);
    let g = girls[Math.floor(Math.random() * girls.length)];
    index = girls.indexOf(g);
    girls.splice(index, 1);
    listp.push([b, g]);
  }
  let row_1 = listp.slice(0, 4);
  let row_2 = listp.slice(4, 9);
  let row_3 = listp.slice(9, 14);
  let row_4 = listp.slice(14, 23);
  renderRows(row_1, row_2, row_3, row_4);
}

function reshuffle() {
  let listp = [];
  while (boys.length > 0 && girls.length > 0) {
    let b = boys[Math.floor(Math.random() * boys.length)];
    let index = boys.indexOf(b);
    boys.splice(index, 1);
    let g = girls[Math.floor(Math.random() * girls.length)];
    index = girls.indexOf(g);
    girls.splice(index, 1);
    listp.push([b, g]);
  }
  let row_1 = listp.slice(0, 4);
  let row_2 = listp.slice(4, 9);
  let row_3 = listp.slice(9, 14);
  let row_4 = listp.slice(14, 23);
  renderRows(row_1, row_2, row_3, row_4);
}

function renderRows(row_1, row_2, row_3, row_4) {
  let html = `
    <div style="text-align: center;">
      <div class="row">
        <h2>Row 1:</h2>
        <ul>
          ${row_1.map(pair => `<li>${pair[0]} - ${pair[1]}</li>`).join('')}
        </ul>
      </div>
      <div class="row">
        <h2>Row 2:</h2>
        <ul>
          ${row_2.map(pair => `<li>${pair[0]} - ${pair[1]}</li>`).join('')}
        </ul>
      </div>
      <div class="row">
        <h2>Row 3:</h2>
        <ul>
          ${row_3.map(pair => `<li>${pair[0]} - ${pair[1]}</li>`).join('')}
        </ul>
      </div>
      <div class="row">
        <h2>Row 4:</h2>
        <ul>
          ${row_4.map(pair => `<li>${pair[0]} - ${pair[1]}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
  document.getElementById('rows').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('shuffle-button').addEventListener('click', shuffle);
  document.getElementById('reshuffle-button').addEventListener('click', reshuffle);
});