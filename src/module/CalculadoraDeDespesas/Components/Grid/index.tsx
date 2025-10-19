import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import type { IDespesa } from "../../interface"

interface IGridProps {
    despesas: IDespesa[]
    setDespesas: any
}

const GridDespesas = ({despesas, setDespesas}: IGridProps) => {
    const handleExcluir = (id: string) => {
        setDespesas((prev: IDespesa[]) => prev.filter((despesa) => despesa.id !== id))
    }

    return (
        <Table sx={{ backgroundColor: "#fcfafa", p: 4, borderRadius: 4}}>
            <TableHead>
                <TableRow>
                    <TableCell>Descrição</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell align="right">Valor</TableCell>
                    <TableCell align="right">Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {despesas.map((despesa: IDespesa) => (
                    <TableRow key={despesa.id}>
                        <TableCell>{despesa.descricao}</TableCell>
                        <TableCell>{despesa.categoria}</TableCell>
                        <TableCell align="right">{despesa.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</TableCell>
                        <TableCell align="right">
                            <Button variant="contained" color="error" onClick={() => handleExcluir(despesa.id)}>Excluir</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default GridDespesas