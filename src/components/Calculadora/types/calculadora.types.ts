export enum Operaciones {
    OPERACION="0",//0
    SUMA="1",//1
    RESTA="2",//2
    MULTIPLICACION="3",//3
    DIVISION="4"//4
}
export interface OperacionesObject {
    title: string,
    operacion: Operaciones
}

export interface CalculadoraProps {
    num1: string,
    num2: string,
    resultado: string,
    operacion: Operaciones
}