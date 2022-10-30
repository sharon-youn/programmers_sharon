function solution(x, n) {
    // n만큼 반복하면서 x에서 x를 더한 값을 배열로 값 리턴
    let result = [];
    let add = 0;
    
    for(let i =0; i<n ; i++) {
        add += x
        result.push(add)
        }
     return result;
 }




//다른 사람 풀이

function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
// Array(2).fill(4) -> [4,4]
// 2번 반복하여 4로 채우는 배열 메소드 Array().fill()
// map메소드로 x를 (i+1)*x한 값으로 다 바꾸기 
// 2,4,6,8,10