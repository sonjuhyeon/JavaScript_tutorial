// 배열은 여러 개의 변수를 한 번에 선언해 사용할 수 있는 자료형이다.
// 배열에 삽입되는 데이터를 '요소'라 한다.
// 요소로 등록되는 데이터는 모든 타입이 가능하나 대부분 원시 리터럴(숫자, 문자) 타입을 사용한다.

// const arrA1 = [1, 2, 3, 4, 5, () => {}, {}, true, false, null];

// 1. 배열 생성 array() : 생성자
const newArr1 = new Array(1, 2, 3, 4, 5);
console.log(newArr1);
const newArr2 = new Array(10);
console.log(newArr2);

// 2. 배열 생성 : 리터럴
const arr1 = [1, 2, 3, 4, 5, () => {}, {}, true, false, null];
console.log(arr1);

// 3. 요소의 접근
// 배열에 등록된 요소는 각각 고유 인덱스를 가진다. 인덱스는 가장 처음 데이터가 0이되고, 이후 1, 2, 3... 순으로 지정된다.
// 배열 요소에 접근할 때는 지정된 인덱스를 [] 안에 작성한다.
console.log(arr1[3]);

const objArr = [{ name: "juhyeon" }];
console.log(objArr[0]);

// 4. 배열 요소의 개수
// 배열 요소의 개수는 length를 사용하여 확인할 수 있다.
// 주의할 점은 개수가 인덱스보다 1 크다는 점이다. 이는 length는 총 개수이고, 인덱스는 0부터 시작하기 때문이다.
console.log(arr1.length);

// 5.1 배열 요소의 추가 : push
// push() 메서드는 배열의 뒷부분에 요소를 추가한다.
// 이 경우 원본 데이터가 변경된다.
const arr2 = [1, 2, 3, 4, 5, "6"];

arr2.push("add");
console.log(arr2);

// 5.2 배열 요소의 추가 : 인덱스 사용
// 배열 요소의 인덱스에 접근하여 배열 요소를 변경할 수 있다.
// 기존에 존재했던 데이터 중간의 인덱스에 접근하여 데이터를 삽입하면 기존 인덱스의 요소는 없어진다.
// 기존에 존재했던 데이터의 인덱스 번호보다 몇 단계 이후의 인덱스에 데이터를 추가하면 건너뛴 단계의 인덱스는 비어있게 된다.(empty)
arr2[1] = 100;
arr2[15] = "idx15"; // 빈 인덱스는 undifined
console.log(arr2, arr2.length);

// 5.3 배열 요소의 추가 : unshift()
// unshift는 전체 배열을 한 단위 인덱스만큼 뒤로 이동시키기 때문에 리소스 측면에서 비효율적이고, 배열의 데이터를 앞이나 중간에 추가하는 경우는 드물다. 따라서 잘 사용되지 않는다.
arr2.unshift("unshift");
console.log(arr2);

// 6.1 배열 요소의 삭제 : splice()
// splice() 메서드는 배열의 특정 요소를 제거할 때 사용한다. '잇는다'는 뜻은 삭제된 인덱스 앞뒤를 이어준다는 의미로 볼 수 있다.
// signiture : array.splice(index, length of remove data)

const newArr = [246, 8652, 1435, 2568, 68, 2864, 83];
console.log(newArr);
newArr.splice(2, 3);
console.log(newArr);
newArr.splice(2);
console.log(newArr);

// split: 특정 문자열을 기준으로 나누어 배열을 리턴
const url = "33453.748.45824.8422.815";
const newUrl = url.split(".");
console.log(newUrl);

// 6.2
// 배열 요소의 삭제 : 요소를 선택하여 삭제 indexOf() => splice()
// 삭제할 요소의 값을 알고 있을 경우 해당 값의 인덱스를 확인하고, 이를 삭제할 수 있다.;
console.log(newUrl.indexOf("45824"));
const a = newUrl.indexOf("45824"); // "45824"값이 저장된 인덱스 넘버를 a에 저장
newUrl.splice(a, 1);
console.log(newUrl);

// 7. 전개 연산자(spread operator)
// - 전개 연산자는 배열에 할당된 요소를 개수와 상관없이 함수 파라미터로 전달할 수 있도록 하는 방식이다
const arrB = [1, 2, 3, 4, 5];
const arrC = [...arrB, 6, 7, 8];
console.log(arrC);

const arrD = [...arrB, ...arrC];
console.log(arrD);

function abc(...x) {
  console.log(x);
}
abc(...arrD, 3, 4);

const str = "Hello World";
const arr_str = [...str];
console.log(arr_str);
