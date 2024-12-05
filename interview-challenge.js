//1)
function findDuplicates(array) {
  const seen = new Set();
  const duplicates = new Set();

  array.forEach((item) => {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  });

  return Array.from(duplicates);
}

// Testes
console.log("FindDuplicates:", findDuplicates([1, 2, 3, 2, 4, 5, 3]));
console.log("---------------------------------------");
console.log("FindDuplicates:", findDuplicates([1, 1, 1, 1]));
console.log("---------------------------------------");
console.log("FindDuplicates:", findDuplicates([]));
console.log("---------------------------------------");
console.log("FindDuplicates:", findDuplicates([1, 2, 3]));
console.log("---------------------------------------");

//2)
async function printWithDelays(array) {
  for (let i = 0; i < array.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, Math.pow(2, i) * 1000));
    console.log(array[i]);
  }
}
console.log("Initiating delay function");
printWithDelays(["a", "b", "c", "d"]);
console.log("---------------------------------------");

//4)
function isValidBrackets(string) {
  const stack = [];
  const pairs = { ")": "(", "}": "{", "]": "[" };

  for (const char of string) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else if (pairs[char] && stack.pop() !== pairs[char]) {
      return false;
    }
  }

  return stack.length === 0;
}

console.log("isValidBrackets: ", isValidBrackets("{[]}"));
console.log("---------------------------------------");
console.log("isValidBrackets: ", isValidBrackets("{(])}"));
console.log("---------------------------------------");
console.log("isValidBrackets: ", isValidBrackets("{([)]}"));
console.log("---------------------------------------");
console.log("isValidBrackets: ", isValidBrackets("[()]{}{[()()]()}"));
console.log("---------------------------------------");
console.log("isValidBrackets: ", isValidBrackets(""));
console.log("---------------------------------------");

//5)
function findHighestFloor(maxSafeFloor = 85) {
  const totalFloors = 100;
  let step = Math.ceil((-1 + Math.sqrt(1 + 8 * totalFloors)) / 2);
  let previousFloor = 0;
  let currentFloor = 0;
  let drops = 0;

  while (currentFloor < totalFloors) {
    previousFloor = currentFloor;
    currentFloor += step;
    drops++;

    if (currentFloor >= maxSafeFloor) {
      currentFloor = previousFloor;
      break;
    }

    step--;
    if (step <= 0) {
      step = 1;
    }
  }

  while (currentFloor < totalFloors && currentFloor < maxSafeFloor) {
    currentFloor++;
    drops++;

    if (currentFloor >= maxSafeFloor) {
      currentFloor--;
      break;
    }
  }

  return { highestSafeFloor: currentFloor, drops };
}

function testFindHighestFloor() {
  const testCases = [10, 50, 85, 99, 100];

  testCases.forEach((maxSafeFloor) => {
    const result = findHighestFloor(maxSafeFloor);
    console.log(`Teste safest floor: ${maxSafeFloor}`);
    console.log(`→ Stpe finded by function: ${result.highestSafeFloor}`);
    console.log(`→ Total of drops: ${result.drops}`);
    console.log("---------------------------------------");
  });
}

testFindHighestFloor();

//7)
function getMaxValue(carrotTypes, capacity) {
  carrotTypes.sort((a, b) => b.price / b.kg - a.price / a.kg);

  let maxValue = 0;

  for (const carrot of carrotTypes) {
    if (capacity >= carrot.kg) {
      maxValue += carrot.price;
      capacity -= carrot.kg;
    } else {
      maxValue += (carrot.price / carrot.kg) * capacity;
      break;
    }
  }

  return maxValue;
}
const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];

console.log("Carrot bag capacity: ", getMaxValue(carrotTypes, 36));
console.log("---------------------------------------");
console.log("Carrot bag capacity: ", getMaxValue(carrotTypes, 10));
console.log("---------------------------------------");
console.log("Carrot bag capacity: ", getMaxValue(carrotTypes, 0));
console.log("---------------------------------------");
console.log("Carrot bag capacity: ", getMaxValue([], 10));
console.log("---------------------------------------");
