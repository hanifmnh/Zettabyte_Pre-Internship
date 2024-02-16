function getCombination(combine) {
    return combine.value.substring(combine.startIndex, combine.endIndex);
}
const result = getCombination({
    value: 'Learning Typescript is different than Javascript',
    startIndex: 9,
    endIndex: 19,
});
console.log(result);
