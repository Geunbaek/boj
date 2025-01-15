function solution(nums) {
    const {length} = nums;
    const counter = new Set(nums);

    return counter.size < parseInt(length / 2) ? counter.size : parseInt(length / 2);
}