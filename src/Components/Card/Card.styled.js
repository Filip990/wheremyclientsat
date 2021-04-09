import styled from "styled-components";

export const CardPiece = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #cac3c3;
    box-shadow: 0;
    transition: box-shadow 0.3s ease-in-out;
    min-width: 14em;
    margin: 1em;
    padding: 0 1em 1em 1em;

    :hover{
      box-shadow: 2px 0px 13px 3px #866ee6;
    }
`

export const Icon = styled.img`
max-width: min-content
`

export const Info = styled.div`
    display:flex;
`

export const InfoItem = styled.div`
    margin-left: 12px
`