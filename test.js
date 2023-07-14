// const dataJulia = [3, 5, 2, 12, 7];
const dataJulia = [9, 16, 6, 8, 3];

// const dataKate = [4, 1, 15, 8, 3];
const dataKate = [10, 5, 6, 1, 4];

const checkDogs = function (dataJulia, dataKate) {
  const dogsJulia = dataJulia.slice(1, dataJulia.length - 2);
  // const dogsJulia = dataJulia.slice()
  // dogsJulia.splice(0,1)
  // dogsJulia.splice(-2)

  const allDogs = [...dogsJulia, ...dataKate];

  allDogs.forEach(function (dog, index) {
    dog >= 3
      ? console.log(
          `Dog number ${index + 1} is an adult, and is ${dog} years old`
        )
      : console.log(`Dog number ${index + 1} is still a puppy 🐶`);
  });
};

// checkDogs(dataJulia, dataKate);

/////////////////////
/////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const conversion = movements.map((movement) => movement * eurToUsd);

// console.log(movements);
// console.log(conversion);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movment ${i + 1}: you ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);
