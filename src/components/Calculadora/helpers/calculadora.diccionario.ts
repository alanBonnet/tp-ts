import { SetNumerosF, SetOperacionesF } from "../../../types/inputs.types";
import { OperacionesObject, Operaciones, CalculadoraProps } from "../types/calculadora.types";

// Lista Operaciones 
export const operacionesArray: Array<OperacionesObject> = [
    {
        title: "Operación",
        operacion: Operaciones.OPERACION//0
    },
    {
        title: "Suma",
        operacion: Operaciones.SUMA//1
    },
    {
        title: "Resta",
        operacion: Operaciones.RESTA//2
    },
    {
        title: "Multiplicacion",
        operacion: Operaciones.MULTIPLICACION//3
    },
    {
        title: "División",
        operacion: Operaciones.DIVISION//4
    }
];
export const stateCalcBase:CalculadoraProps = {
    num1: "0",
    num2: "0",
    resultado: "0",
    operacion: Operaciones.OPERACION
}
const elegirOperacion = (operacion:string):Operaciones => {
    if(operacion === (Operaciones.SUMA)){
        return Operaciones.SUMA
    }
    if(operacion === (Operaciones.MULTIPLICACION)){
        return Operaciones.MULTIPLICACION
    }
    if(operacion === (Operaciones.RESTA)){
        return Operaciones.RESTA
    }
    if(operacion === (Operaciones.DIVISION)){
        return Operaciones.DIVISION
    }
    return Operaciones.OPERACION
}

// Operación que modifica el estado según el nombre input y su valor
export const setNumerosCalc: SetNumerosF = (e, numeros) => {
    return ({ ...numeros, [e.target.name]: e.target.value })
}
// Operación que modifica el estado según el tipo de operación dado en el select-option
export const setOperacionCalc: SetOperacionesF = (e, numeros) => {
    return ({ ...numeros, operacion: elegirOperacion(e.target.value) })
}

class Calculadora {
    constructor(private numeros:CalculadoraProps )
    {}
    setNumeros(numeros:CalculadoraProps){
        this.numeros = numeros;
    }
    getNumeros(){
        return this.numeros;
    }
    sumar(numeros:CalculadoraProps){
        const resultado = (parseFloat(numeros.num1) + parseFloat(numeros.num2)).toString();
        return {...numeros, resultado};
    }
    restar(numeros:CalculadoraProps){
        const resultado = (parseFloat(numeros.num1) - parseFloat(numeros.num2)).toString();
        return ({ ...numeros, resultado })
    }
    multiplicar(numeros: CalculadoraProps){
        const resultado = (parseFloat(numeros.num1) * parseFloat(numeros.num2)).toString();
            return ({ ...numeros, resultado })
    }
    dividir(numeros: CalculadoraProps){
        const resultado = (parseFloat(numeros.num1) / parseFloat(numeros.num2)).toString();
            return ({ ...numeros, resultado })
    }
}


export const Calcular = (numeros: CalculadoraProps): CalculadoraProps => {
    const calcu = new Calculadora(numeros)
    switch (numeros.operacion) {
        case (Operaciones.SUMA):
            return calcu.sumar(numeros)
        case (Operaciones.RESTA):
            return calcu.restar(numeros)
        case (Operaciones.MULTIPLICACION):
            return calcu.multiplicar(numeros)
        case (Operaciones.DIVISION):
            return calcu.dividir(numeros);
        default:
            return calcu.getNumeros()
    }
}