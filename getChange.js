denom = {
    "hundred": 100.00,
    "fifty": 50.00,
    "twenty": 20.00,
    "ten": 10.00,
    "five": 5.00,
    "dollar": 1.00,
    "quarter": 0.25,
    "dime": 0.10,
    "nickel": 0.05,
    "penny": 0.01
};

denomName = function (array, denom) {
    // loop thru array and return new array:
    let nameArr = [];
    for (let i = 0; i < array.length; i++) {
        for (name in denom) {
            if (denom[name] == array[i]) {
                nameArr.push(name);
            };
        };
    }
    return nameArr;
};

findChange = function (price, payment) {
    console.log("findChange function fires:");

    change = payment - price;
    return findDenom(change, denom);
};

findDenom = function (remainder, denom) {
    console.log("findDenom function fires:");

    for (let coinName in denom) {
        value = denom[coinName];
        if (remainder >= value) {
            return makeChange(remainder, value);
        }
    }
};

counterArr = [];

makeChange = function (change, denomination) {
    console.log("makeChange function fires:");

    subDenom = 0.01;
    if (change < subDenom) {
        console.log("All change has been dispensed or change is too small to find a denomination.");
        // convert denomValues into denomNames:
        return denomName(counterArr, denom);
        // return (counterArr);

    } else if (change >= denomination) {
        remainder = change - denomination;
        remainder = remainder.toFixed(2);
        counterArr.push(denomination);
        return makeChange(remainder, denomination);
    } else {
        console.log("change too small: " + change);
        return findDenom(change, denom);
    };
};

var changeArr = findChange(278.54, 300.04);
// var changeArr = findChange(6.29, 20.82);
console.log("changeArr:");
console.log(changeArr);
// console.log(findChange(0.01, 0.10));
// need to return the denom names after function reaches 0.00;
// need to add larger denoms ($100, $50, etc.) and unique denoms ($2, .50, etc.);

