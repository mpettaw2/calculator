let equation = []
let negate = false

const btns = document.querySelectorAll('.keys')
const clearBtn = document.getElementById('clear')
const addToSaveBtn = document.getElementById('addToSave')
const returnSavedBtn = document.getElementById('returnSaved')
const clearSavedBtn = document.getElementById('clearSaved')
const calulateBtn = document.getElementById('eq')
const output = document.getElementById('output')
const negateBtn = document.getElementById('negate')



btns.forEach(item=>{item.addEventListener('click',e=>{
	if(e.target.matches('button')){
		pushToArrayAndAppendValueTo(e.target.innerHTML)			
	}
})
})

clearBtn.addEventListener('click', e=>clear())
addToSaveBtn.addEventListener('click',e=>addToCurrentStoredValue(output.innerHTML))
returnSavedBtn.addEventListener('click', e=>fetchCurrentStoredValue())
calulateBtn.addEventListener('click', e=>calculate())
negateBtn.addEventListener('click', e=>setNegateFlag())
clearSavedBtn.addEventListener('click', e=>clearSavedValue())


function pushToArrayAndAppendValueTo(elem){	
	if(negate == true){
		elem = "-"+elem
	}
	output.innerHTML=elem
	equation.push(elem)
	negate = false
}

function addToCurrentStoredValue(value){ //re-read requirements	
	let storedValue = localStorage.getItem('savedVal')

	if(storedValue == null || storedValue == ''){
		localStorage.setItem('savedVal', value)
	}else{
		let addVal = Number(value) + Number(storedValue)
		localStorage.setItem('savedVal', addVal)
	}
}

function fetchCurrentStoredValue(){
	let storedValue = localStorage.getItem('savedVal')

	if(storedValue == null || storedValue == ''){
		output.innerHTML = 0
	}else{
		output.innerHTML = storedValue
	}
}

function clearSavedValue(){
	localStorage.clear()
}

function clear(){
	output.innerHTML = "0"
	equation.length = 0	
	
}

function setNegateFlag(){
	negate = true
}

function calculate(){
	const cal = new CalculationService(equation)
	let result = cal.compute()
	output.innerHTML = result


}