let money = prompt("Ваш бюджет на месяц?")

let time = prompt("Введите дату в формате YYYY-MM-DD");

let question1 = prompt("Введите обязательную статью расходов в этом месяце");

let question2 = prompt("Во сколько обойдется?");

var appData = {
    yourMoney: money,
    timeData: time,
    expenses: {
        question1:question2
    },
    optionalExpenses: {},
    income: "",
    savings: false
};

alert(money/30);