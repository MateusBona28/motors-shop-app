import Button from "../Button";
import FormPerfil from "../FormPerfil";
import FormEndereco from "../FormEndereço";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { Modal, ModalFundo } from "./styles";
import { UserContext } from "../../contexts/user";
import { ModalsContext } from "../../contexts/editModals";

interface IModalProps {
  type: string;
}

const ModalHeader = ({ type }: IModalProps) => {
  const historico = useHistory();

  const { setUser, setToken, token, user } = useContext<any>(UserContext);

  const { 
    handleOpenEditProfile,
    handleOpenEditAddress
  } = useContext<any>(ModalsContext);

  const login = () => {
    historico.push("/login");
  };
  const register = () => {
    historico.push("/createaccount");
  };

  const goToDashboard = () => {
    token && user ? historico.push(`/profile/${user.id}`) : historico.push('/login')
  }

  const handleLogout = () => {
    setUser({})
    setToken('')
    localStorage.clear()
    historico.push('/')
  }

  switch (type) {
    case "anonymous":
      return (
        <Modal>
          <nav>
            <div>
              <a href="#Carros"><Button children="Carros" /></a>
              <a href="#Motos"><Button children="Motos" /></a>
              <Button children="Leilão" />
              
            </div>
            <div className="divisionNavModal">
              <Button onClick={login}>Fazer Login</Button>
              <Button onClick={register} className="button2">
                Cadastrar
              </Button>
            </div>
          </nav>
        </Modal>
      );
    case "owner":
      return (
        <Modal>
          <nav>
            <div>
              <a href="#Carros"><Button children="Carros" /></a>
              <a href="#Motos"><Button children="Motos" /></a>
              <Button children="Leilão" />
            </div>
            <div className="divisionNavModal">
              <Button
                title="buttonOpenEditProfile"
                onClick={(e: any) => {
                  handleOpenEditProfile()
                }}
              >
                Editar Perfil
              </Button>
              <Button
                title="buttonOpenEditAddress"
                onClick={(e: any) => {
                  handleOpenEditAddress()
                }}
              >
                Editar Endereço
              </Button>
              <Button onClick={goToDashboard} >Meus Anúncios</Button>
              <Button onClick={handleLogout} >Sair</Button>
            </div>
          </nav>
        </Modal>
      );
    default:
      return (
        <Modal>
          <nav>
            <div>
              <a href="#Carros"><Button children="Carros" /></a>
              <a href="#Motos"><Button children="Motos" /></a>
              <Button children="Leilão" />
            </div>
            <div className="divisionNavModal">
              <Button>Editar Perfil</Button>
              <Button>Editar Endereço</Button>
              <Button onClick={handleLogout} >Sair</Button>
            </div>
          </nav>
        </Modal>
      );
  }
};

export default ModalHeader;
