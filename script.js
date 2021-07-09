// const str = '18901';
// const regexp = /^(19\d\d|20\d\d|2100)$/g;
// console.log(regexp.test(str));

// const str = '00:22';
// const regexp = /^\d\d:\d\d$/;
// console.log(regexp.test(str));

// const str = 'Hello world';
// const regexp = /\W*\w*(\w)\1\w*\W*/g;
// console.log(str.replace(regexp, ''));

const str = 'dsf xxx XXX sd';
const regexp = /\b(\w+)\s+\1/gi;
console.log(str.replace(regexp, '$1'));
