// 삼항연산자 써도 되는거!
//문제
// 정수 num1과 num2가 매개변수로 주어집니다. 
// 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 
// 완성해주세요.

// 내가 했던 풀이
function solution(num1, num2) {
    if(num1 === num2) return 1
      else return -1
  }
  //삼항연산자로 해보자
  function solution2(num1, num2) {
    return num1===num2? 1 : -1
  }