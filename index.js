let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

// for (let i = weeklyExpenseQuestions.length - 1; i >= 0; i--) {
//     let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
//     weeklyExpenses += answer
// }

// for (let i = monthlyExpenseQuestions.length - 1; i >= 0; i--) {
//     let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
//     monthlyExpenses += answer
// }

// for (let i = annualExpenseQuestions.length - 1; i >= 0; i--) {
//     let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
//     annualExpenses += answer
// }

let i = 0
//let n = 1

while (weeklyExpenseQuestions[i]) {
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses += answer
    i++
}

i = 0

while (monthlyExpenseQuestions[i]) {
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses += answer
    i++
}

i = 0

while (annualExpenseQuestions[i]) {
    let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses += answer
    i++
}

// while ((i = weeklyExpenseQuestions.length - n) >= 0) {
//     let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
//     weeklyExpenses += answer
//     if (n < weeklyExpenseQuestions.length) {
//         n++
//     }
//     else {
//         n = 1
//     }
// }