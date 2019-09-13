import React from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from 'styled-components';

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function App(props) {
  const { lists } = props;

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h1>Crello</h1>
        <ListsContainer>
          {lists.map(list => (
            <TrelloList
              title={list.title}
              cards={list.cards}
              key={list.id}
              listId={list.id}
            />
          ))}
          <TrelloActionButton list></TrelloActionButton>
        </ListsContainer>
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
