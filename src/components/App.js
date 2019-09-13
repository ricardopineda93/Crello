import React from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd';

function App(props) {
  const { lists } = props;

  const onDragEnd = () => {
    return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h1>Crello</h1>
        <div style={styles.listsContainer}>
          {lists.map(list => (
            <TrelloList
              title={list.title}
              cards={list.cards}
              key={list.id}
              listId={list.id}
            />
          ))}
          <TrelloActionButton list></TrelloActionButton>
        </div>
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
