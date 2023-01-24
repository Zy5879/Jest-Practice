const caesar = (value) => {
  const str = value.split("");
  const shifted = str.shift();
  str.push(shifted);
  return str.join("").toLowerCase();
};

caesar("abcdefghijklmnopqrstuvwxyz");

export default caesar;
