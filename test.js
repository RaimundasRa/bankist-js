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

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(function (age) {
//     return age <= 2 ? 2 * age : 16 + age * 4;
//   });
//   const adultDogs = humanAges.filter(function (adult) {
//     return adult >= 18;
//   });
//   const avarageAge = adultDogs.reduce(function (acc, age) {
//     return acc + age / adultDogs.length;
//   }, 0);
//   console.log(humanAges);
//   console.log(adultDogs);
//   console.log(avarageAge);
// };

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((adult) => adult >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg);

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

// console.log(movementsDescriptions);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

// console.log(deposits);

const wihdrawals = movements.filter(function (mov) {
  return mov < 0;
});

// console.log(wihdrawals);

const balance = movements.reduce(function (accumilator, movement) {
  return accumilator + movement;
}, 0);

// console.log(balance);

// Maximum value

const max = movements.reduce(function (acc, mov) {
  return acc > mov ? acc : mov;
}, movements[0]);

// console.log(max);

// .find returns only first element thant meets requirements
const firstWithdrawal = movements.find((mov) => mov < 0);

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);

let acca;
for (const acc of accounts) {
  if (acc.owner === "Jessica Davis") {
    acca = acc;
  }
}

console.log(acca);
