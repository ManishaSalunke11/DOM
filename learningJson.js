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