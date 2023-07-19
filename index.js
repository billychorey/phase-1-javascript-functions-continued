// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun();

function mondayWork(plan = "go to the office") {
    return `This Monday, I will ${plan}.`
}

function wrapAdjective(string = "*") {
    return function(word = "special") {
        return `You are ${string}${word}${string}!`
    }
}
