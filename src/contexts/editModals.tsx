import { createContext, useEffect, useState } from "react";

export const ModalsContext = createContext({});

export const ModalsProvider = ({ children }: any) => {
  const [openEditProfile, setOpenEditProfile] = useState(false)
  const [openEditAddress, setOpenEditAddress] = useState(false)

  const handleCloseEditProfile = (e: any) => {
    if (
      e.target.title === "formEditProfile" ||
      e.target.title === "buttonOpenEditProfile" ||
      e.target.title === "cancelEditProfile"
    ) {
      setOpenEditProfile(!openEditProfile);
    }
  };

  const handleCloseEditAddress = (e: any) => {
    if (
      e.target.title === "formEditAddress" ||
      e.target.title === "buttonOpenEditAddress" ||
      e.target.title === "cancelEditAddress"
    ) {
      setOpenEditAddress(!openEditAddress);
    }
  };

  const  handleCloseAfterRequestSuccess = () => {
    setOpenEditAddress(false)
    setOpenEditProfile(false)
  }

  const handleOpenEditProfile = () => {
    setOpenEditProfile(true);
  }
  const handleOpenEditAddress = () => {
    setOpenEditAddress(true);
  }


  return (
    <ModalsContext.Provider
      value={{
        openEditProfile,
        openEditAddress,
        handleOpenEditProfile,
        handleOpenEditAddress,
        handleCloseAfterRequestSuccess,
        handleCloseEditProfile,
        handleCloseEditAddress
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};
