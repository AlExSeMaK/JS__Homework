let a = prompt('Введите предложение');

a = a.replace(/[^\d,]/g, '');
console.log(a);
