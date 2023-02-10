function defineYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return true;
        } else {
        return false;
        }
    }
let x = defineYear(1756);
console.log(x);




