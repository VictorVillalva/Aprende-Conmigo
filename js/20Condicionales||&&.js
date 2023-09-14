
const saldo = 600;
const pagar = 700;
const tarjeta = true;

/**
 *  || - Al menos una debe cumplirse
 *  && - Todas deben cumplirse
 */

if(saldo > pagar || tarjeta){ // se cumple almenos una
    console.log('Puedes pagar con tu saldo');
} else {
    console.log('No, no puedes pagar con tu saldo');
}

if(saldo > pagar && tarjeta){ // se deben cumplir las dos
    console.log('Puedes pagar con tu saldo');
} else {
    console.log('No, no puedes pagar con tu saldo');
}