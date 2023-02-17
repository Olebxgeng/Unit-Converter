const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const convertBtn = document.getElementById("convert-btn")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    //Length Conversion
    const feetConversion = baseValue / meterToFeet 
    const meterConversion = baseValue * meterToFeet
    if(baseValue > 1){
        lengthEl.textContent = `${baseValue} meters = ${meterConversion.toFixed(3)} feet | ${baseValue} feet = ${feetConversion.toFixed(3)} meters`
    }else{
        lengthEl.textContent = `${baseValue} meter = ${meterConversion.toFixed(3)} feet | ${baseValue} foot = ${feetConversion.toFixed(3)} meters`
    }

    //Volume Conversion
    const litersConversion = baseValue * literToGallon
    const gallonConversion = baseValue / literToGallon
    if(baseValue > 1){
        volumeEl.textContent = `${baseValue} liters = ${litersConversion.toFixed(3)} gallons | ${baseValue} gallons = ${gallonConversion.toFixed(3)} liters`
    }else{
        volumeEl.textContent = `${baseValue} liter = ${litersConversion.toFixed(3)} gallons | ${baseValue} gallon = ${gallonConversion.toFixed(3)} liters`
    }

    //Mass Conversion
    const kiloConversion = baseValue * kiloToPound
    const poundConversion = baseValue / kiloToPound
    if(baseValue > 1){
        massEl.textContent = `${baseValue} kilos = ${kiloConversion.toFixed(3)} pounds | ${baseValue} pounds = ${poundConversion.toFixed(3)} kilos`
    }else{
        massEl.textContent = `${baseValue} kilo = ${kiloConversion.toFixed(3)} pounds | ${baseValue} pound = ${poundConversion.toFixed(3)} kilos`
    }
})