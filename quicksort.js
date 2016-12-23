function quickSort(arr){
	if(arr.length == 0){
		return [];
	}

	var left = [];
	// Init right array, right of the wall
	var right = [];
	// pick the first number as an arbitrary element
	var pivot = [0];
	// run through the array, and test the pivot
	for(let i = 1; i < arr.length; i++){
		if(arr[i] < pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
		
	}
		return quickSort(left).concat(pivot, quickSort(right));
}
quickSort([2,5,4,1,7,6,9,8,3])