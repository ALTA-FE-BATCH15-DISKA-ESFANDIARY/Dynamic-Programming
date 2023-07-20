function fiboTopDown(num: number, memo: number[] = []): number {
    let count: number = 0; 
  
    count++;
  
    if (memo[num]) {
      return memo[num]; 
    }
    if (num <= 1) {
      memo[num] = num;
    } else {
      memo[num] = fiboTopDown(num - 1, memo) + fiboTopDown(num - 2, memo);
    }
  
    return memo[num]; 
  }

  const angkaFibonacci: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946];
  
  console.log(fiboTopDown(0));
  console.log(fiboTopDown(1));
  console.log(fiboTopDown(2));
  console.log(fiboTopDown(3));
  console.log(fiboTopDown(5));
  console.log(fiboTopDown(6));
  console.log(fiboTopDown(7));
  console.log(fiboTopDown(9));
  console.log(fiboTopDown(10));




// function fiboTopDown(num: number): number {
//     let memo: number[] = [];
  
//     for (let i = 0; i <= num; i++) {
//       if (i <= 1) {
//         memo[i] = i;
//       } else {
//         memo[i] = memo[i - 1] + memo[i - 2];
//       }
//     }
  
//     return memo[num];
//   }
  
//   console.log(fiboTopDown(8));
//   console.log(fiboTopDown(1)); 
//   console.log(fiboTopDown(2)); 
//   console.log(fiboTopDown(3)); 
//   console.log(fiboTopDown(5)); 
//   console.log(fiboTopDown(6)); 
//   console.log(fiboTopDown(7)); 
//   console.log(fiboTopDown(9)); 
//   console.log(fiboTopDown(18)); 
  