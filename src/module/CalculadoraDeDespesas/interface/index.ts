import type { ECategoria } from "../Enum";

export interface IDespesa {
    id: string;
    descricao: string;
    categoria: ECategoria;
    valor: number;
}