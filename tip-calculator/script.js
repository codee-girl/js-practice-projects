//bill caluclating function
const calcTip = function (bill){
    return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}

// creating tips and totals as empty to update its value later
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips=[];
const totals=[];

// calculating tips & totals
for (let i=0; i<bills.length;i++){
    const tip= calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip +bills[i]);
}

// displaying values
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage=function(arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

// showing result in console 
console.log(calcAverage(tips));
console.log(calcAverage(totals));

