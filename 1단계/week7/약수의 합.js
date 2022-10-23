
function solution(n) {
    // n의 약수를 다 더한 값을 리턴
   // 어떠한 수로 나누었을 때 나누어떨어지는 경우(나머지가 없는 경우) 그 수가 나눈 수의 약수
  // n % i === 0 인 i를 다 더하면 된다!
      let result = 0;
      // 자기자신도 포함하기때문에 i<=n까지
      for(let i =1; i<=n ; i++) {
          if(n % i === 0)  result += i
      }
      return result
  }


// 제곱근 Math.sqrt 쓰는 방법 - 이해하기 어렵다.,
function solution2(n) {
    var answer = 0;
    // i를 밖에 선언 
    let i;
    for (i = 1; i <= Math.sqrt(n); i++){
        // n%i === 0이면 
        if (!(n%i)) {
            answer += (i+n/i);
        }
    }
    i--;
    return (i === n/i) ? answer-i : answer;
}
