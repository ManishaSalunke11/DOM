const jsonStr = `{
    "name": "MS Dhoni",
    "age": 38,
    "isMarried": true,
    "address": {
        "street": "ABC",
        "pin": 112233,
        "city": "Ranchi"
    },
    "hobbies": ["Biking", "Running", "Playing Cricket"],
    "drink": null
}`;
const msdhoni = JSON.parse(jsonStr);
console.log(typeof jsonStr);
console.log(typeof msdhoni);
console.log(msdhoni);
console.log(msdhoni.hobbies);
console.log(msdhoni.age);

const college = {
    name: "COEP",
    year: 1990,
    city: "Pune"
}
const str = JSON.stringify(college);
console.log(typeof str);
console.log(str);