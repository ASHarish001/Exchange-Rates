// // const apiKey = "526a58ab153c413bbbdea19fb6e09719";
// // const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=INR`;
// const from = "USD";
// const to = "INR";
// const value = 100;
// const url = `https://v6.exchangerate-api.com/v6/c3f8c3da39da08da2c98b2eb/latest/${from}`;
// let response = await fetch(url);
// response = await response.json();
// // console.log(response.conversion_rates.USD);
// const conversionRate = response.conversion_rates[to];
// console.log(`${value} ${from} equal to ${value * conversionRate} ${to}`);

const fromInput = document.getElementById("fromInput"); 
const toInput = document.getElementById("toInput"); 
const valueInput = document.getElementById("valueInput"); 
const button = document.getElementById("btn");
const resultPara = document.getElementById("resultPara");

button.addEventListener("click", master);

async function master(){
    const from = fromInput.value.toUpperCase();
    const to = toInput.value.toUpperCase();
    const value = parseInt(valueInput.value);

    const url = `https://v6.exchangerate-api.com/v6/c3f8c3da39da08da2c98b2eb/latest/${from}`;
    const response = await fetch(url);
    const conversionRates = await response.json();
    const conversionRate = conversionRates.conversion_rates[to];

    const result = `${value} ${from} equal to ${(value * conversionRate).toFixed(2)} ${to}`;
    resultPara.textContent = result;
}