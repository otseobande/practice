const smoosh = ([x, ...xs], result = []) => {
  if (x === undefined) {
    return result;
  }
  if (Array.isArray(x)) {
    return [...smoosh(x, result), ...smoosh(xs)];
  }
  result.push(x);
  return smoosh(xs, result);
}