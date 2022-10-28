export function roll(nSides, nDice, nRolls){ 

	var results = [];
	for(var i=0; i<nRolls; i++){
		results[i] = Math.floor(Math.random() * nSides * nDice); 
	}
	return {
		"sides": nSides, 
		"dice": nDice, 
		"rolls": nRolls, 
		"results": results
	}
}
