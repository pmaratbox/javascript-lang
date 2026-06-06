// A minimal push-based Observable implemented from scratch.
// An observer is { next, error, complete }; subscribe wires a producer to it.

const of = (...values) => ({
  subscribe(observer) {
    for (const value of values) observer.next(value);
    observer.complete?.();
  },
});

// filter forwards a value only when pred(value) is truthy.
const filter = (source, pred) => ({
  subscribe(observer) {
    source.subscribe({
      next: (value) => {
        if (pred(value)) observer.next(value);
      },
      error: (err) => observer.error?.(err),
      complete: () => observer.complete?.(),
    });
  },
});

const isEven = (n) => n % 2 === 0;

filter(of(1, 2, 3, 4, 5, 6), isEven).subscribe({
  next: (value) => console.log(value),
});
