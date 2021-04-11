import styled from "styled-components";

export const CardPiece = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #cac3c3;
  box-shadow: 0;
  transition: box-shadow 0.3s ease-in-out;
  min-width: 260px;
  margin: 16px;
  padding: 16px;

  :hover {
    box-shadow: 2px 0px 13px 3px #866ee6;
  }
`

export const AccountName = styled.h4`
  margin-top: 0;
`

export const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
  top: 16px;
  border-radius: 6px;

  :hover {
    background: #c5baf3;
  }
`

export const ActionIcon = styled.img`
  max-width: min-content;
`
