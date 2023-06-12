"use strict";

const values = [16, 7, 55];

const projection = function (array) {
	let result;
	const max = array.reduce((a, b) => Math.max(a, b));

	if (max < 10) {
		result = "Poor";
	} else if (max < 100) {
		result = "Fair";
	} else {
		result = "Good";
	}
	return result;
};

console.log(projection(values));
