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

// Select the FIRST element with class `item` (CSS `.item`) and print its text.
console.log($('.item').first().text());
