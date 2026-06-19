// JavaScript — cheerio, ESM. Run: node main.js
import * as cheerio from 'cheerio';

const DOC = `<html><body>
<h1>Hello</h1>
<span id="status">active</span>
<ul class="items">
<li class="item">apple</li>
<li class="item">banana</li>
<li class="item">cherry</li>
</ul>
<a href="https://example.com">site</a>
<div class="content"><p>first</p><p>second</p></div>
</body></html>`;

const $ = cheerio.load(DOC);

// Select ALL elements with class `item`, take each one's text, join with commas.
const texts = $(".item").map((i, e) => $(e).text()).get();
console.log(texts.join(","));
