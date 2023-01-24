import Logo from "../../assets/logo.png";
import Button from "../Button";
import ModalHeader from "../modalHeader";
import { ModalFundo } from "../ModalFundo/styles";
import FormPerfil from "../FormPerfil";
import FormEndereco from "../FormEndereço";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, MenuButton, MenuModal, Modal } from "./styles";
import { UserContext } from "../../contexts/user";
import { StyledHeaderButton, StyledHeaderLoginButton } from "../Button/styles";
import { BuyerBtn } from "../../pages/Register/styles";
import { ModalsContext } from "../../contexts/editModals";

interface IHeaderProps {
  type: string;
}

const Header = ({ type }: IHeaderProps) => {
  const [mobile, setMobile] = useState(true);
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);

  const { handleOpenEditProfile, handleOpenEditAddress } = useContext<any>(ModalsContext);

  const { setUser, setToken, token, user } = useContext<any>(UserContext);

  const historico = useHistory();

  const login = () => {
    historico.push("/login");
  };
  const register = () => {
    historico.push("/createaccount");
  };

  const home = () => {
    historico.push("")
  }

  const handleLogout = () => {
    setUser({})
    setToken('')
    localStorage.clear()
    historico.push('/')
  }

  useEffect(() => {
    window.innerWidth > 810 ? setMobile(false) : setMobile(true);
  }, []);

  window.addEventListener("resize", () => {
    window.innerWidth > 810 ? setMobile(false) : setMobile(true);
  });

  const goToDashboard = () => {
    token && user ? historico.push(`/profile/${user.id}`) : historico.push('/login')
  }

      return (
        <>
        {token === "" ?
        <Box>
          <section>
            <img src={Logo} alt="Logo Motors-Shop" onClick={home} />
          </section>
          {mobile ? (
            <div>
              <MenuButton onClick={() => setModal(!modal)}>
                {modal === false ? <FaBars /> : <GrClose />}
              </MenuButton>
              {modal === false ? <></> : <ModalHeader type="anonymous" />}
            </div>
          ) : (
            <section className="container">
              <div className="vehicles">
                <a href="#Carros"><StyledHeaderButton >Carros</StyledHeaderButton></a>
                <a href="#Motos"><StyledHeaderButton>Motos</StyledHeaderButton></a>
                <StyledHeaderButton>Leilão</StyledHeaderButton>
              </div>
              <div className="options">
                <StyledHeaderLoginButton onClick={login} >
                  Fazer Login
                </StyledHeaderLoginButton>
                <Button onClick={register} className="options-button2">
                  Cadastrar
                </Button>
              </div>
            </section>
          )}
        </Box> :
        <Box>
        <section>
          <img src={Logo} alt="Logo Motors-Shop" onClick={home} />
        </section>
        {mobile ? (
          <div>
            <MenuButton onClick={() => setModal(!modal)}>
              {modal === false ? <FaBars /> : <GrClose />}
            </MenuButton>
            {modal === false ? <></> : <ModalHeader type="owner" />}
          </div>
        ) : (
          <section className="container">
            <div className="vehicles">
                <a href="#Carros"><StyledHeaderButton >Carros</StyledHeaderButton></a>
                <a href="#Motos"><StyledHeaderButton>Motos</StyledHeaderButton></a>
              <StyledHeaderButton>Leilão</StyledHeaderButton>
            </div>

            <div className="profile">{user?.name?.length > 0 && user.name[0].toUpperCase()}</div>
            <MenuModal onClick={() => setModal(!modal)}>
              {modal === false ? <p>{user.name}</p> : <p>{user.name}</p>}
            </MenuModal>
            {modal === false ? (
              <></>
            ) : (
              <Modal>
                <nav>
                  <div className="divisionNavModal">
                    <Button
                      title="buttonOpenEditProfile"
                      onClick={() => {
                        handleOpenEditProfile()
                      }}
                    >
                      Editar Perfil
                    </Button>
                    
                    <Button
                      title="buttonOpenEditAdress"
                      onClick={(e: any) => {
                        handleOpenEditAddress()
                      }}
                    >
                      Editar Endereço
                    </Button>
                    <Button onClick={goToDashboard}>{user.isAdvertiser && "Meus Anúncios"}</Button>
                    <Button onClick={handleLogout}>Sair</Button>
                  </div>
                </nav>
              </Modal>
            )}
          </section>
        )}
      </Box>
      }
      </>
    );
  }

export default Header;
