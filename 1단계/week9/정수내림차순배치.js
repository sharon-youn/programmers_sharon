function solution(n) {
    // n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴
    // 숫자 -> 문자열 -> 배열로
    let arr = (""+n).split('').sort((a,b)=>b-a).map(Number)
    return  +arr.join("")

}




// 다른사람 풀이
function solution2(n) {
    const newN = n +""; // 문자열로
    const newArr = newN.split("").sort().reverse().join("")
    // 문자열.split("")=> 배열['1','2'..].sort()하고 뒤집어서 다시 join하면 문자열 됨
    return +newArr; // '1234' -> 1234
}