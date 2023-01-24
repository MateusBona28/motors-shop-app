import styled from "styled-components";

export const Ulstyled = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-x: auto;
  height: 380px;
  gap: 2rem;
  width: 90vw;
  gap: 1.25rem;
`;

export const UlstyledAuction = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-x: auto;
  height: 400px;
  gap: 2rem;
  width: 90vw;
  gap: 1.25rem;

  @media screen and (max-width: 450px){
    height: 500px;
  }
`;

export const Vitrine = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 20px;
  h1 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.875rem;
    line-height: 100%;
    margin-bottom: 2.5rem;
  }
`;
export const Carrousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

  button {
    background: none;
    border: 0;
  }
  svg {
    font-size: 1.5rem;
  }
`;
