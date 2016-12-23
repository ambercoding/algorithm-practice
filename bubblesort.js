function bubbleSort(items){
	var length = items.length;
	for(let i = 0; i<length; i++){
		var sorted = true;
		for(let j = 0; j < (length - i); j++){
			// COmpare the current spt with the next spot
			if(items[j] > items[j+1]){
				sorted = false;

				var temp = items[j];
				items[j] = items[j+1];
				itmes[j+1] = temp

			}
		}
		if(sorted){
			break;
		}
	}
console.log(items)
}
bubbleSort([1,2,3,4,5,6]);