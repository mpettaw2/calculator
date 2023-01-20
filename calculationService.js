class CalculationService{    

	constructor(eqArray){
		this.eqArray = eqArray
		this.validateEqArray()
	}

	validateEqArray(){
		let eqOperandArray = []
    	let eqOperatorArray = []
    	const op = ["/","x","-","+"]


		this.eqArray.forEach(elem=>{
			if(!op.includes(elem)){
				Number(elem)
				eqOperandArray.push(elem)
			}

			else if(op.includes(elem)){
				eqOperatorArray.push(elem)
			}

		})

		if(eqOperatorArray.length != eqOperandArray.length-1){
			throw new Error("Malformed Equation")
		}
	}

	compute(){
		"use strict"
		let eqStr = this.eqArray.join('')
		.replace("x", "*")
		.replace("--", "+")		
		return eval(eqStr)	

	}
	

}