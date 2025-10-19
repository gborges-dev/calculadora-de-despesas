import { object, string, number } from "yup";
import { ECategoria } from "../Enum";

const DespesaSchema = object({
    descricao: string().required("Descrição é obrigatória"),
    categoria: string().required("Categoria é obrigatória"),
    valor: number().required("Valor é obrigatório"),
});

export default DespesaSchema;
