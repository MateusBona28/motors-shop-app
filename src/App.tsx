import Routes from "./router";
import { GlobalStyle } from "./styles/index";
import "./App.css";
import { useContext } from "react";
import { ModalsContext } from "./contexts/editModals";
import { ModalFundo } from "./components/modalHeader/styles";
import FormPerfil from "./components/FormPerfil";
import FormEndereco from "./components/FormEndereço";
import Main from "./pages/Register/styles";

function App() {
  const { 
    openEditProfile, 
    openEditAddress, 
    handleCloseEditProfile,
    handleCloseEditAddress
  } = useContext<any>(ModalsContext);

  return (
    <div className="App">
        {openEditProfile &&
          <ModalFundo
            title="formEditProfile"
            onClick={(e) => {
              handleCloseEditProfile(e);
            }}
          >
            <FormPerfil />
          </ModalFundo>
        }

        {openEditAddress &&
            <ModalFundo
              title="formEditAddress"
              onClick={(e) => {
                handleCloseEditAddress(e);
              }}
            >
            <FormEndereco />
          </ModalFundo>
        }
       <Routes />
       <GlobalStyle />
    </div>
  );
}

export default App;
