import { useState } from "react";
import {
    Estilo_BotonCalcular,
    Estilo_InputNumber,
    Estilo_InputSelect,
} from "./styles/calculadora";
import { CalculadoraProps, Operaciones } from "./types/calculadora.types";
import { HandlerInput, HandlerSelect } from "../../types/inputs.types";
import {
    Calcular,
    operacionesArray,
    setNumerosCalc,
    setOperacionCalc,
    stateCalcBase,
} from "./services/calculadora.service";

export const Calculadora = () => {
    const [numerosCalc, setNumerosCal] =
        useState<CalculadoraProps>(stateCalcBase);

    const handleInput: HandlerInput = (e) => {
        // Recibe el valor del input y lo manda al servicio con el state para calcular
        const resultado = setNumerosCalc(e, numerosCalc);
        setNumerosCal(resultado);
    };
    const handleSelect: HandlerSelect = (e) => {
        // Recibe el valor del select y lo manda al servicio con el state para calcular
        const resultado = setOperacionCalc(e, numerosCalc);
        setNumerosCal(resultado);
    };
    return (
        <div className="bg-indigo-300 grid grid-cols-2">
            <label htmlFor="num1" className="text-lg uppercase m-auto">
                numero 1
            </label>
            <input
                type="number"
                name="num1"
                id="num1"
                className={Estilo_InputNumber}
                onInput={handleInput}
            />

            <label htmlFor="num2" className="text-lg uppercase m-auto">
                numero 2
            </label>
            <input
                type="number"
                name="num2"
                id="num2"
                className={Estilo_InputNumber}
                onInput={handleInput}
                onKeyUp={(e) => {
                    if (e.code === "Enter") {
                        const calculo = Calcular(numerosCalc);
                        setNumerosCal(calculo)
                    }
                }}
            />

            <div className="grid grid-cols-1">
                <select
                    name="operaciones"
                    id="operaciones"
                    className={Estilo_InputSelect}
                    onChange={handleSelect}
                >
                    {operacionesArray.map((e) => {
                        if(e.operacion === Operaciones.OPERACION){
                            return (
                                <option value={e.operacion} key={e.title}
                                hidden>
                                    {e.title}
                                    
                                </option>
                            );
                        }
                        return (
                            <option value={e.operacion} key={e.title}>
                                {e.title}
                            </option>
                        );
                    })}
                </select>
            </div>

            <input
                type="number"
                name="num1"
                id="num1"
                className={Estilo_InputNumber}
                value={numerosCalc.resultado}
                disabled
            />

            <button
                type="button"
                className={Estilo_BotonCalcular}
                onClick={() => {
                    const calculo = Calcular(numerosCalc);
                    setNumerosCal(calculo)
                }}
            >
                Calcular
            </button>
        </div>
    );
};
