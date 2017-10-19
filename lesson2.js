// Пузырьком

function BubbleSort(A) // A - массив, который нужно
{ // отсортировать по возрастанию.
  var n = A.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - 1 - i; j++) {
      if (A[j + 1] < A[j]) {
        var t = A[j + 1];
        A[j + 1] = A[j];
        A[j] = t;
      }
    }
  }
  return A; // На выходе сортированный по возрастанию массив A.
}

// 
function SelectionSort(A) // A - массив, который нужно  отсортировать по возрастанию.
{
  var n = A.length;
  for (var i = 0; i < n - 1; i++) {
    var min = i;
    for (var j = i + 1; j < n; j++) {
      if (A[j] < A[min]) min = j;
    }
    var t = A[min];
    A[min] = A[i];
    A[i] = t;
  }
  return A; // На выходе сортированный по возрастанию массив A.
}

// Наибольший общий делитель

function NOD(A) {
  var n = A.length,
    x = Math.abs(A[0]);
  for (var i = 1; i < n; i++) {
    var y = Math.abs(A[i]);
    while (x && y) {
      x > y ? x %= y : y %= x;
    }
    x += y;
  }
  return x;
}

// Наименьшее общее кратное

function NOK(A) {
  var n = A.length,
    a = Math.abs(A[0]);
  for (var i = 1; i < n; i++) {
    var b = Math.abs(A[i]),
      c = a;
    while (a && b) {
      a > b ? a %= b : b %= a;
    }
    a = Math.abs(c * A[i]) / (a + b);
  }
  return a;
}

function mapDivide(A) {
  return A.map(item => item/2);
}

function reduceDivide(A) {
  var newArr = []
  var result = arr.reduce(function(sum, current) {
    newArr.push(current/2);
    return sum + current
  });
  return newArr;
}




