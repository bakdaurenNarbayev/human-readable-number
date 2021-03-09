module.exports = function toReadable (number) {
  if(typeof number !== "number") return false;
  let res = "";
  rnumber = ("" + number).split("").reverse().join("");
  if(rnumber.length === 1 && rnumber[0] === "0") return "zero";
  for(let i = 0; i < rnumber.length; i++) {
    if(i % 3 === 2) res = "hundred " + res;
    if(i === 3) res = "thousand " + res;
    if(i === 6) res = "million " + res;
    if(i === 9) res = "billion " + res;
    if(i === 12) res = "trillion " + res;
    let adt = "";
    if((i % 3 === 0 && (i + 1 === rnumber.length || rnumber[i + 1] !== "1")) || i % 3 === 2) {
      if(rnumber[i] === "1") adt = "one ";
      else if(rnumber[i] === "2") adt = "two ";
      else if(rnumber[i] === "3") adt = "three ";
      else if(rnumber[i] === "4") adt = "four ";
      else if(rnumber[i] === "5") adt = "five ";
      else if(rnumber[i] === "6") adt = "six ";
      else if(rnumber[i] === "7") adt = "seven ";
      else if(rnumber[i] === "8") adt = "eight ";
      else if(rnumber[i] === "9") adt = "nine ";
    }
    if(i % 3 === 1) {
      if(rnumber[i] === "1") {
        if(rnumber[i - 1] === "0") adt = "ten ";
        else if(rnumber[i - 1] === "1") adt = "eleven ";
        else if(rnumber[i - 1] === "2") adt = "twelve ";
        else if(rnumber[i - 1] === "3") adt = "thirteen ";
        else if(rnumber[i - 1] === "4") adt = "fourteen ";
        else if(rnumber[i - 1] === "5") adt = "fifteen ";
        else if(rnumber[i - 1] === "6") adt = "sixteen ";
        else if(rnumber[i - 1] === "7") adt = "seventeen ";
        else if(rnumber[i - 1] === "8") adt = "eighteen ";
        else if(rnumber[i - 1] === "9") adt = "nineteen ";
      }
      else if(rnumber[i] === "2") adt = "twenty ";
      else if(rnumber[i] === "3") adt = "thirty ";
      else if(rnumber[i] === "4") adt = "forty ";
      else if(rnumber[i] === "5") adt = "fifty ";
      else if(rnumber[i] === "6") adt = "sixty ";
      else if(rnumber[i] === "7") adt = "seventy ";
      else if(rnumber[i] === "8") adt = "eighty ";
      else if(rnumber[i] === "9") adt = "ninety ";
    }
    res = adt + res;
  }
  return res.trim();
}
