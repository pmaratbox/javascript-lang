function mul(a, b) {
  return {
    re: a.re * b.re - a.im * b.im,
    im: a.re * b.im + a.im * b.re,
  };
}

const r = mul({ re: 1, im: 2 }, { re: 3, im: 4 });
console.log(`${r.re} ${r.im}`);
