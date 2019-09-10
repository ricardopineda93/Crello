import React from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';

function App(props) {
  const { lists } = props;

  return (
    <div className="App">
      <h1>Crello</h1>
      {lists.map(list => (
        <TrelloList title={list.title} cards={list.cards} />
      ))}
    </div>
  );
}

const mapState = state => ({
  lists: state.lists
});

export default connect(mapState)(App);
