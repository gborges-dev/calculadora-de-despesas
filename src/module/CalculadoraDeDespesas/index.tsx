import { Card, Stack, Typography } from "@mui/material";
import Formulario from "./Components/Formulario";
import { useForm } from "react-hook-form";
import { useMemo, useState } from "react";
import type { IDespesa } from "./interface";
import GridDespesas from "./Components/Grid";
import DespesaSchema from "./Validation";
import { yupResolver } from "@hookform/resolvers/yup";

const CalculadoraDeDespesas = () => {
  const [despesas, setDespesas] = useState<IDespesa[]>([]);

  const form = useForm({
    resolver: yupResolver(DespesaSchema),
    defaultValues: {
      categoria: "",
      descricao: "",
      valor: 0,
    },
  });

  const { reset, handleSubmit } = form;

  const onSubmit = (data: any) => {
    data.id = crypto.randomUUID();
    setDespesas((prev) => [...prev, data]);

    reset({
      categoria: "",
      descricao: "",
      valor: 0,
    });
  };

  const calcularTotal = useMemo(() => {
    return despesas.reduce((total, despesa) => total + despesa.valor, 0);
  }, [despesas]);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        borderRadius: 8,
      }}
    >
      <Stack spacing={4}>
        <Typography variant="h4" align="center">
          Calculadora de despesas
        </Typography>

        <Formulario form={form} onSubmit={handleSubmit(onSubmit)} />
        <Stack sx={{ maxHeight: 400, overflow: "auto", scrollbarWidth: "none"}}>
            <GridDespesas despesas={despesas} setDespesas={setDespesas} />
        </Stack>
        <Typography variant="h4" align="center">
          Total:{" "}
          {calcularTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </Typography>
      </Stack>
    </Card>
  );
};

export default CalculadoraDeDespesas;
