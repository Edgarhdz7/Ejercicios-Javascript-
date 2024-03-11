let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1. Print all
console.log(people);

// 2. Remove Dani
people.splice(people.indexOf("Dani"), 1);

// 3. Remove Juan
people.splice(people.indexOf("Juan"), 1);

// 4. Move Luis to front
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);

// 5. Add your name
people.push("Your Name"); // Replace "Your Name" with your actual name

// 6. Loop until Maria
for (let i = 0; i < people.length; i++) {
  if (people[i] === "Maria") {
    break;
  }
  console.log(people[i]);
}

// 7. Index of Maria
const mariaIndex = people.indexOf("Maria");
console.log("Maria's index:", mariaIndex
