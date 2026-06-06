'use strict';

// A minimal push-based Observable built from scratch.
// An observer is just an object with next/error/complete callbacks;
// subscribe wires a producer function to that observer.
function Observable(subscribe) {
  return { subscribe };
}

// catchError: forward next values from source; on error, switch to the
// fallback stream instead of propagating the error downstream.
function catchError(source, fallback) {
  return Observable((observer) => {
    source.subscribe({
      next: (v) => observer.next(v),
      error: () => fallback.subscribe(observer),
      complete: () => observer.complete(),
    });
  });
}

// source emits 1, 2, then signals error.
const source = Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.error(new Error('boom'));
});

// fallback emits 9 then completes.
const fallback = Observable((observer) => {
  observer.next(9);
  observer.complete();
});

catchError(source, fallback).subscribe({
  next: (v) => console.log(v),
  error: () => {},
  complete: () => {},
});
