var cuentaBancaria = {
    titular : "Fulanito",
    saldo : 0,

    ingresar: function (cantidad) {
        console.log("Has ingresado " + cantidad + " pesos")
        return this.saldo = this.saldo + cantidad
    },

    extraer: function (cantidad) {
        console.log("Has retirado " + cantidad + " pesos")
        return this.saldo = this.saldo - cantidad
    },

    informar: function () {
        return "Nombre del titular: " + this.titular + "\nEl saldo actual es: " + this.saldo + " pesos"
    },
}

console.log(cuentaBancaria.titular)
console.log(cuentaBancaria.saldo)
console.log("-------------")
console.log(cuentaBancaria.ingresar(46853))
console.log(cuentaBancaria.extraer(20))
console.log(cuentaBancaria.informar())