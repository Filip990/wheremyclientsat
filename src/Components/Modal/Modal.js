import LocationDetails from "../LocationDetails/LocationDetails";

import close from "../../assets/Close.svg";
import {
  ModalContainer,
  Backdrop,
  ModalContent,
  Title,
  CloseIcon,
  DescriptionHeader,
  Description,
  CloseButton,
} from "./Modal.styled";

const Modal = ({ name, id, createdAt, userCount, views, description, onClose }) => (
  <ModalContainer>
    <Backdrop />
    <ModalContent>
      <Title>{name}</Title>
      <CloseIcon onClick={onClose}>
        <img src={close} alt="close"/>
      </CloseIcon>
      <LocationDetails createdAt={createdAt} userCount={userCount} views={views} />
        <DescriptionHeader>Description</DescriptionHeader>
      <Description>
       {description}
        </Description>
      <CloseButton onClick={onClose}>Done</CloseButton>
    </ModalContent>
  </ModalContainer>
)

export default Modal;
