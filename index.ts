type CombinationResult = {
	value: string;
	startIndex: number;
	endIndex: number;
};

function getCombination(combine: CombinationResult): string {
	return combine.value.substring(combine.startIndex, combine.endIndex);
}

const result: string = getCombination({
	value: 'Learning Typescript is different than Javascript',
	startIndex: 9,
	endIndex: 19,
});

console.log(result);
