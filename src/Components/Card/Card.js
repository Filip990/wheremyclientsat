import {CardPiece, Icon, Info, InfoItem} from "./Card.styled";

//images
import users from "../../assets/Users.svg";
import timezone from "../../assets/Timezone.svg";
import views from "../../assets/Views.svg";


const Card = ({id, name, userCount, createdAt}) => {

  const dateParser = (date) => new Date(date).toLocaleTimeString();

 return <CardPiece>
    <h4>{name}</h4>
    <Info>
      <Icon src={users} alt="users"/>
      <InfoItem>{userCount}</InfoItem>
    </Info>
    <Info>
      <Icon src={timezone} alt="timezone"/>
      <InfoItem>{dateParser(createdAt)}</InfoItem>
    </Info>
    <Info>
      <Icon src={views} alt="views"/>
      <InfoItem>0</InfoItem>
    </Info>
</CardPiece>
}

export default Card