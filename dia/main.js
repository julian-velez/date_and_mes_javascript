// Se crea un objeto Date con una fecha específica.
// 'may 05 2026' representa el 5 de mayo del año 2026
const date = new Date('may 05 2026');

// getDate() obtiene el día del mes (valores de 1 a 31)
// En este caso devuelve: 4
const dia = date.getDate();

// getMonth() obtiene el mes, pero en JavaScript
// los meses empiezan desde 0 hasta 11
// 0 = enero, 1 = febrero, ..., 11 = diciembre
// Por eso se suma +1 para obtener el mes real
const mes = date.getMonth() + 1;

// Muestra el objeto Date completo (fecha y hora)
console.log(date);

// Muestra solo el día del mes
console.log(dia);

// Muestra el número del mes
console.log(mes);

