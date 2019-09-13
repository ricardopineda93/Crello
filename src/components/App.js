import React from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from 'styled-components';

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function App(props) {
  const { lists } = props;

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h1>Crello</h1>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <ListsContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {lists.map((list, index) => (
                <TrelloList
                  title={list.title}
                  cards={list.cards}
                  key={list.id}
                  listId={list.id}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <TrelloActionButton list></TrelloActionButton>
            </ListsContainer>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
};

const mapState = state => ({
  lists: state.lists
});

export default connect(mapState)(App);
