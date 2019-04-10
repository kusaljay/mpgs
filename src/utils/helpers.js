export const rounding = x => {
  if (x % 1 >= 0.5) {
    return x = Math.ceil(x);
  } else {
    return x = Math.floor(x);
  }
}

export const calcIncomeTax = (annualIncome) => {
  let incomeTax;
  const taxTable = [
    { range: [0, 18200], rate: 0, offset: 0 },
    {	range: [18201, 37000], rate: 0.19, offset: 0 },
    { range: [37001, 80000], rate: 0.325, offset: 3572 }, 
    { range: [80001, 180000], rate:0.37, offset: 17547 },
    { range: [180001, Infinity], rate: 0.45, offset: 54547 }
  ];

  for (let i of taxTable) {
    if (annualIncome >= i.range[0] && annualIncome <= i.range[1]) {
      incomeTax = rounding((i.offset + ((annualIncome - i.range[0]) * i.rate)) / 12);
      //console.log(incomeTax);
    }
  }
  return incomeTax;
}

export const currentDate = () => {
  const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        today = new Date()
        
  return `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
}


