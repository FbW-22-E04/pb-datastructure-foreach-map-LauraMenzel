//1 (forEach)
function doubleValues(arrayPara) {
  let retVal = [];
  arrayPara.forEach((t) => retVal.push(t * 2));

  return retVal;
}

const numbers = [1, 2, 3];
const numbers2 = [4, 7, 9, 11];
console.log(doubleValues(numbers));
console.log(doubleValues(numbers2));
console.log("--------------------------------------------------");

//1.1(map)

function doubleValues2(item) {
  return item * 2;
}
console.log(numbers.map(doubleValues2));

console.log("--------------------------------------------");

//2 (forEach)

function onlyEvenValues(arrayPara) {
  let retVal = [];

  arrayPara.forEach((t) => {
    if (t % 2 == 0) {
      retVal.push(t);
    }
  });

  return retVal;
}

console.log(onlyEvenValues(numbers));
console.log(onlyEvenValues(numbers2));
console.log("------------------------------------------------------------");

//3 (forEach)

function showFirstAndLast(arrayPara) {
  let retVal = [];
  arrayPara.forEach((t) => {
    retVal.push(t.charAt(0) + t.charAt(t.length - 1));
  });
  return retVal;
}

console.log(showFirstAndLast(["colt", "matt", "tim", "udemy"]));
console.log(showFirstAndLast(["hi", "goodbye", "smile"]));
console.log(
  "-----------------------------------------------------------------"
);

//3 (map)

function showFirstAndLast2(item) {
  return item.charAt(0) + item.charAt(item.length - 1);
}

console.log(["colt", "matt", "tim", "udemy"].map(showFirstAndLast2));
console.log(["hi", "goodbye", "smile"].map(showFirstAndLast2));

console.log("----------------------------------------------------------------");

//4

const names = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

function addKeyAndValue(array, key, value) {
  return array.map((item) => {
    return Object.assign(item, { [key]: value });
  });
}

console.log(addKeyAndValue(names, "title", "instructor"));
console.log(names);
console.log(
  "--------------------------------------------------------------------------"
);
//5

function vowelCount(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  const returnObject = {};
  const stringArray = [...word.toLowerCase()];

  vowels.forEach((t) => {

    let count = stringArray.filter((x) => x === t).length;

    if (count > 0) {
        
      returnObject[t] = count;
    }
  });
  return returnObject;
}
console.log(vowelCount("Elie"));
