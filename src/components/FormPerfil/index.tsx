import { useContext } from "react";
import { useForm } from "react-hook-form";
import API from "../../api";
import { ModalsContext } from "../../contexts/editModals";
import { UserContext } from "../../contexts/user";
import { FormPattern } from "../FormPadrão/styles";
import {
  TitleForm,
  FooterForm,
  ButtonFooter,
  InputDescription,
  InputPattern,
  HeaderForm,
  ButtonClosed,
  LabelForm,
  LabelButtonForm,
  InputDate,
} from "./styles";


const FormPerfil = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setUser, setToken, token, user } = useContext<any>(UserContext);

  const { 
    handleCloseEditProfile,
    handleCloseAfterRequestSuccess
  } = useContext<any>(ModalsContext);

  const onSubmit = (data: any) => {
    data.birthdate = data.birthdate.split("/").reverse().join("-")

    API.patch(`/users/${user.id}`, data, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then((res) => {
      API.get(`/users/${user.id}`)
      .then((res) => {
        setUser(res.data)
        handleCloseAfterRequestSuccess()
      })
    })
    .catch((err) => {
      console.log(err.response)
    })
  }

  return (
    <FormPattern onSubmit={handleSubmit(onSubmit)}>
      <HeaderForm>
        <TitleForm>Editar Perfil</TitleForm>
        <ButtonClosed
          onClick={(e) => {
            handleCloseEditProfile(e)
          }}
        >
          X
        </ButtonClosed>
      </HeaderForm>

      <LabelButtonForm htmlFor="">Informações pessoais</LabelButtonForm>

      <LabelForm htmlFor="">Nome</LabelForm>
      <InputPattern
        type="text"
        {...register("name", { required: true, value: user.name })}
      />

      <LabelForm htmlFor="">Email</LabelForm>
      <InputPattern type="text"
      {...register("email", { required: true, value: user.email })} 
      />

      <LabelForm htmlFor="">CPF</LabelForm>
      <InputPattern type="text" 
      {...register("cpf", { required: true, value: user.cpf })}
      />

      <LabelForm htmlFor="">Celular</LabelForm>
      <InputPattern type="text"
      {...register("phone", { required: true, value: user.phone })} 
      />

      <div className="date__holder">
      <LabelForm htmlFor="">Data de nascimento</LabelForm>
      <InputDate type="date"
      {...register("birthdate", { required: true, value: user.birthdate.split("-").reverse().join("/") })}
      />
      </div>

      <LabelForm htmlFor="">Descrição</LabelForm>
      <InputDescription
        {...register("bio", { required: true, value: user.bio})}
      />
      
      <FooterForm>
        <ButtonFooter title="cancelEditProfile" color="color" type="button" onClick={() => {handleCloseEditProfile()}}>Cancelar</ButtonFooter>
        <ButtonFooter type="submit">Salvar Alterações</ButtonFooter>
      </FooterForm>
    </FormPattern>
  );
};

export default FormPerfil;
