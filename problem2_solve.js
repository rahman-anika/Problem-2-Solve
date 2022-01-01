// vaxTrail Function with parameter as data.
const vaxTrail = (data) => {
    // Initialize the object as abj with data as A, B. C and D.
    obj = { A: [], B: [], C: [], D: [] };
    // Now Iter the data
    data.map((d) => {
        // If 20<=age<=30 and temperature<100 then append into A
        if (d.age >= 20 && d.age <= 30 && d.temperature < 100) {
            obj.A.push(d);

        }
        // Else If 31<=age<=40 and temperature<100 then append into B
        else if (d.age >= 31 && d.age <= 40 && d.temperature < 100) {
            obj.B.push(d);
        }
        // Else If 41<=age<=50 and temperature<100 then append into C
        else if (d.age >= 41 && d.age <= 50 && d.temperature < 100) {
            obj.C.push(d);
        }
        // Else if temperature>=100 then append into D
        else if (d.temperature >= 100) {
            obj.D.push(d);
        }
    })
    // Return the obj object
    return obj;
}

// Set Data as given.
data = [{ name: 'sunil', age: 21, temperature: 98 }, { name: 'Biplap', age: 22, temperature: 98 }];

// Run the vaxTrail function with data as parameter.
obj = vaxTrail(data);

// Print the A data
console.log("A...");
obj.A.map((y) => {
    console.log(y.name + " " + y.age + " " + y.temperature);
})

// Print the B data
console.log("B...");
obj.B.map((y) => {
    console.log(y.name + " " + y.age + " " + y.temperature);
})

// Print the C data
console.log("C...");
obj.C.map((y) => {
    console.log(y.name + " " + y.age + " " + y.temperature);
})

// Print the D data
console.log("D...");
obj.D.map((y) => {
    console.log(y.name + " " + y.age + " " + y.temperature);
})

// Now stringify the object as str
let str = JSON.stringify(obj);
// Print the str.
console.log(str);