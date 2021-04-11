import usersIcon from "../../assets/Users.svg";
import timezoneIcon from "../../assets/Timezone.svg";
import viewsIcon from "../../assets/Views.svg";

import { Icon, Info, InfoItem } from "./LocationDetails.styled";

const LocationDetails = ({ createdAt, userCount, views, }) => (
  <>
    <Info>
      <Icon src={usersIcon} alt="users"/>
      <InfoItem>{userCount} Users</InfoItem>
    </Info>
    <Info>
      <Icon src={timezoneIcon} alt="timezone"/>
      <InfoItem>{new Date(createdAt).toLocaleTimeString()}</InfoItem>
    </Info>
    <Info>
      <Icon src={viewsIcon} alt="views"/>
      <InfoItem>{views}</InfoItem>
    </Info>
  </>
);

export default LocationDetails;
