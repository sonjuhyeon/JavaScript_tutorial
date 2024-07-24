// 1. 산술 연산자
// 산술 연산자는 +, -, *, /의 사칙 연산이 있다.
// 문자열의 경우 + 연산을 가능하나 결과는 문자의 조합니다.
const a = 3;
const b = 6;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b); //거듭제곱연산자

// 숫자형 문자열의 경우 + 연산은 문자 조합이지만 그 외 연산은 자동 변환(암묵적 변환)된다.
const c = "3";
const d = 6;
console.log(c + d);

// 각 연산자는 우선순위가 있으며, 우선순위를 피하기 위해 먼저 연산될 부분을 ()로 감싼다.
// 연산자 우선순위 참조 : https://velog.io/@bami/Javascript-%EC%97%B0%EC%82%B0%EC%9E%90-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84
const e = 5 + 7 * 3;
console.log(e);
// console.log(operate);

// console.log(operate1);

// 2. 나머지 연산자(%)
// 나머지 연산자는 두 수를 나눈 나머지 값을 반환한다.
const f = 7;
const g = 4;
console.log(7 % 4);

function is_odd(num) {
  if (num % 2 == 0) {
    console.log(num + "은(는) 짝수입니다.");
  }
  if (num % 2 == 1) {
    console.log(num + "은(는) 홀수입니다.");
  }
}
is_odd(50);
is_odd(51);

// 두 숫자 중 앞을 숫자가 작으면 앞의 숫자와 뒤의 숫자가 같아지기 이전까지 앞의 숫자를 반환한다.
// 두 숫자가 같아지면 나눈 값이 0이므로 0을 반환한다.

// 3. 비교 연산자
// 비교 연산자는 boolean 타입을 리턴한다.
console.log(3 == 3); // 값을 비교
console.log(3 == "3"); // 값을 비교
console.log(3 === "3"); // 값과 타입을 비교
console.log(3 <= 4); // 대소 비교 (<, >, <=, >=)

// 4 부정 연산자
// 비교 연산자 또는 boolean타입 앞에 ! 문자를 사용하면 true와 false가 반대로 리턴된다.
console.log(!true);
console.log(!(3 > 4));
console.log(3 != 4); // '==' 연산자의 부정
console.log(3 !== 3); // '===' 연산자의 부정

// 5. 논리 연산자
// && : and연산자(합성곱) - 좌우의 모든 항이 true일때 true 리턴
// || : or연산자(합성합) - 좌우 중 한 항만 true면 true 리턴
const p = 5 === 5; // true
const q = 3 > 4; // false
console.log(p && q); // true && false
console.log(p || q); // true || false

// 6. 복합 대입 연산자
// += : 기본 변수의 값에 값을 더한다. 나머지 연산자도 마찬가지다(-=, *=, /=, %=)
let x = 10;
x += 2; // x = x + 2와 같은 형식
console.log(x);

// 7. 증감 연산자
// ++ : 1씩 증가
// -- : 1씩 감소
let s = 1;
s++; // 2
++s; // 3
console.log(s);
s--; //2
--s; //1
console.log(s);

// 전위, 후위 차이
let m = 1;
let n = 1;
console.log(m++); //출력 후 계산
console.log(++n); //계산 후 출력
console.log(m, n); //연산이 끝난 후 출력하면 같은 값!!

m = 4;
n = 7;
console.log(++m - n--); // 5 - 7 = -2
// 현재 m = 5, n = 6
console.log(m-- + --n); // 5 + 5 = 10
// 계산 후 m = 4, n = 5
console.log(m, n);

console.log("-----------------------------------------------");
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
console.log(m, n);
