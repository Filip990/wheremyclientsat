import { useCallback, useState } from "react";

import useCardView from "../../hooks/useCardView";
import edit from "../../assets/Edit.svg";
import Modal from "../Modal/Modal";
import LocationDetails from "../LocationDetails/LocationDetails";

import { CardPiece, AccountName, ActionBtn, ActionIcon } from "./Card.styled";

const Card = ({ name, id, createdAt, userCount, description }) => {
  const { cardViews, incrementView } = useCardView(id);

  const [isModalVisible, setModalVisible] = useState(false);

  const handleItemClick = useCallback(() => {
    setModalVisible(true);
    incrementView(id);
  }, [id, incrementView]);

  return (
    <CardPiece>
      <ActionBtn>
        <img src={edit} alt="edit" onClick={handleItemClick} />
      </ActionBtn>
      <AccountName>{name}</AccountName>
      <LocationDetails createdAt={createdAt} userCount={userCount} views={cardViews[id]} />
      {isModalVisible && (
        <Modal
          name={name}
          createdAt={createdAt}
          description={description}
          userCount={userCount}
          views={cardViews[id]}
          // No need for useCallback because the component will only rerender on modal open/close
          // Memoizing the handler function would have no performance benefits
          onClose={() => setModalVisible(false)}
        />
      )}
    </CardPiece>
  );
}

export default Card;
