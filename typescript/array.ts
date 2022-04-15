let skills: string[] = [];
skills[0] = "Problem Solving";
skills[1] = "Programming";

skills.push('Software Design');

//There is also inference of array types as well
console.log(skills);


let fruits: (string|number)[] = [];
fruits.push("bannana")
fruits.push("apple")
fruits.push("peach")
fruits.push(100)

console.log(fruits)