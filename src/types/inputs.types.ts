
import { CalculadoraProps } from './../components/Calculadora/types/calculadora.types';

export type HandlerInput = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type HandlerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => void;

export type SetNumerosF = (
    e: React.ChangeEvent<HTMLInputElement>,
    numeros: CalculadoraProps)
    => CalculadoraProps;
export type SetOperacionesF = (
    e: React.ChangeEvent<HTMLSelectElement>,
    numeros: CalculadoraProps)
    => CalculadoraProps;