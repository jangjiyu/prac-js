function getAge(dateOfBirth) {
  const now = new Date();
  const birth = new Date(dateOfBirth);

  const age = now.getFullYear() - birth.getFullYear();
  const isBirthdayOver =
    now.getMonth() - birth.getMonth() >= 0 &&
    now.getDate() - birth.getDate() >= 0;

  if (isBirthdayOver) {
    return age;
  }
  return age - 1;
}

console.log(getAge("1990-01-01 16:27:00"));
// Print: 32

function getChildren(persons) {
  return persons.filter((person) => {
    return person.age < 20;
  });
}

const allPersons = [
  { name: "John Kim", age: 10 },
  { name: "Jane Doe", age: 20 },
  { name: "Fred Kang", age: 13 },
  { name: "Chris Doe", age: 39 },
  { name: "Layla Park", age: 19 },
];

console.log(getChildren(allPersons));
// Print: [
// 	{"name": "John Kim", "age": 10},
// 	{"name": "Fred Kang", "age": 13},
//  {"name": "Layla Park", "age": 19},
// ]
