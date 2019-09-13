import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  margin-right: 8px;
  height: 100%;
`;

const TrelloList = ({ title, cards, listId }) => {
  return (
    <Droppable droppableId={String(listId)}>
      {provided => (
        <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
          <h4>{title}</h4>
          {cards.map((card, index) => (
            <TrelloCard
              text={card.text}
              key={card.id}
              id={card.id}
              index={index}
            />
          ))}
          <TrelloActionButton listId={listId} />
          {provided.placeholder}
        </ListContainer>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
    height: '100%'
  }
};

export default TrelloList;
