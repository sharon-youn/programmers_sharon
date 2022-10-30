
function solution(n) {
    //n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 
     for(let i =0; i<n ; i++) {
         if(n%i === 1) return i
     }
     
 }



//다른사람 풀이
// 전달인자 x에 1부터 시작하도록 설정
// while 조건에 x++ 계속 해주기 
function  solution(n, x = 1) {    
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }    
}