// require '../array.js'
module.exports = function (arr1, arr2){
	if (arr1.length == 0 && arr2.length == 0) return 0;

	var toSearch = arr1.length >= arr2.length ? arr1 : arr2;
	var toCheck = toSearch == arr1 ? arr2 : arr1;

	for (var i = 0; i < toSearch.length; i++){
		if (toCheck.search(toSearch[i]).index == -1)
			return toSearch[i]
	}

	if (arr1.length == arr2.length) return 0;
}
