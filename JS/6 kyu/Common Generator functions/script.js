function* range(start=0, stop, step=1) {
  if (stop === undefined) {
    stop = Infinity;
  }
  for (let i = start; i < stop; i += step) {
    yield i;
  }
}

function* generate(start, iterate, continues=(i) => true) {
  while (continues(start)) {
    yield start;
    start = iterate(start);
  }
}

function* delta(sequence, deltaFunction, start) {
  let previous = start;

  for (let current of sequence) {
    if (previous !== undefined) {
      yield deltaFunction(previous, current);
    }
    previous = current;
  }
}

function* zip(sequence1, sequence2) {
  const iter1 = sequence1[Symbol.iterator]();
  const iter2 = sequence2[Symbol.iterator]();

  while (true) {
    const result1 = iter1.next();
    const result2 = iter2.next();

    if (result1.done || result2.done) {
      break;
    }

    yield [result1.value, result2.value];
  }
}
