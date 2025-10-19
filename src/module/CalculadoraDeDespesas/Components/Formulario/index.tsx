import {
  Button,
  FormControl,
  Stack,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InputFieldMoneyControlled from "../../../../components/InputFieldMoney";
import InputSelectCategoria from "../InputSelectCategoria";

const Formulario = ({ form, onSubmit }: any) => {
  const { register, control } = form;

  return (
    <FormControl>
      <Stack spacing={2}>
        <Stack direction={"row"} spacing={2}>
          <TextField label="Descrição" type="text" {...register("descricao")} required/>

          <InputSelectCategoria form={form} required={true}/>

          <InputFieldMoneyControlled control={control} {...register("valor")} required/>
        </Stack>
        <Button
          startIcon={<AddIcon />}
          type="submit"
          variant="contained"
          onClick={onSubmit}
        >
          Adicionar despesa
        </Button>
      </Stack>
    </FormControl>
  );
};

export default Formulario;
