// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

// 입출력 예
// N	answer
// 123	6
// 987	24

// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

function solution(n)
{
    // 내 풀이
    // n의 각 자릿수의 합을 리턴 
    // 각 자릿수 합이니까 일단 문자열-> 배열로 한 자릿수씩 뜯어서담기
    let str = "" + n
    let arr = [...str]
        
    let result = 0 ;
    // 배열 돌면서 el number로 바꿔주면서 더해주기 
    for(let el of arr) {
        result += +el
    }
  return result
   
}

function solution2(n) {
     // 한줄 코딩
    return (n+"").split("").reduce((acc,cur)=>acc+parseInt(cur),0)
    // n+"" -> '123'.split("") -> ['1','2','3'] -> parseInt로 숫자로 만들어서 더해주기 
}
