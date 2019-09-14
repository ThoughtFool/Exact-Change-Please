denom = {
    "dollar": 1.00,
    "quarter": 0.25,
    "dime": 0.10,
    "nickel": 0.05,
    "penny": 0.01
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

findChange(0.24, 1.81);
// need to add larger denoms ($100, $50, etc.) and unique denoms ($2, .50, etc.)