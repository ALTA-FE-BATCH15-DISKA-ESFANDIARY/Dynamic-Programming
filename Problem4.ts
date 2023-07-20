function romanNumeral(num: number): string {
    const Romawi: [string, number][] = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1],
    ];
  
    let result = '';
  
    for (const [symbol, value] of Romawi) {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }
  
    return result;
  }
  
  console.log(romanNumeral(4)); 
  console.log(romanNumeral(9)); 
  console.log(romanNumeral(2021)); 
  console.log(romanNumeral(1646)); 