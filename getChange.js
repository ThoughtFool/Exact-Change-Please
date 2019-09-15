denom = {
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
            console.log("name");
            console.log(name);
            console.log("denom[name]");
            console.log(denom[name]);
            if (denom[name] == array[i]) {
                nameArr.push(name);
            };
        };
    }
    console.log(nameArr);
    return nameArr;
};

findChange = function (price, payment) {
    console.log("findChange function fires:");

    change = payment - price;
    return findDenom(change, denom);
};

findDenom = function (remainder, denom) {
    console.log("findDenom function fires:");

    for (name in denom) {
        console.log("denom[name]");
        console.log(denom[name]);
        value = denom[name];
        if (remainder >= value) {
            console.log("remainder:");
            console.log(remainder);
            console.log("value:");
            console.log(value);

            return makeChange(remainder, value);
        }
    }
};

counterArr = [];

makeChange = function (change, denomination) {
    console.log("makeChange function fires:");
    console.log(change);
    console.log(denomination);
    subDenom = 0.01;

    if (change < subDenom) {
        console.log("All change has been dispensed or change is too small to find a denomination.");
        // convert denomValues into denomNames:
        return denomName(counterArr, denom);
        // return (counterArr);

    } else if (change >= denomination) {
        remainder = change - denomination;
        remainder = remainder.toFixed(2);
        console.log("remainder:");
        console.log(remainder);
        counterArr.push(denomination);
        console.log("counterArr:");
        console.log(counterArr);
        makeChange(remainder, denomination);
    } else {
        console.log("change too small: " + change);
        findDenom(change, denom);
    }
};

var changeArr = findChange(0.01, 2);
console.log(changeArr);
// need to return the denom names after function reaches 0.00;
// need to add larger denoms ($100, $50, etc.) and unique denoms ($2, .50, etc.);