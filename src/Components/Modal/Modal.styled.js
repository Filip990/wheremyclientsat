import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

export const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #999;
  opacity: 0.6;
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
  padding: 32px;
  background: white;
  border-radius: 16px;
`;

export const Title = styled.h2`
  margin: 0 0 24px;
`;

export const CloseIcon = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;

  :hover {
    background: #ebebeb;
  }
`;

export const DescriptionHeader = styled.h4`
  margin-bottom: 8px;
`

export const Description = styled.div`
  color: #333;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  height: 38px;
  padding: 0 20px;
  margin-left: auto;
  border-radius: 8px;
  background: green;
  color: white;

  :hover {
    background: darkgreen;
  }
`;
