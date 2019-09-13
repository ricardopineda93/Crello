import { CONSTANTS } from '../actions';

let listId = 2;
let cardId = 11;

const initialState = [
  {
    title: 'Last Episode',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: 'We did something.'
      },
      {
        id: `card-${1}`,
        text: 'We did something else.'
      }
    ]
  },
  {
    title: 'This Episode',
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: 'Making some good ground!'
      }
    ]
  },
  {
    title: 'Next Episode',
    id: `list-${2}`,
    cards: [
      {
        id: `card-${3}`,
        text: 'Translate to Bootstrap'
      },
      {
        id: `card-${4}`,
        text: 'Make this work on current project.'
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listId}`
      };
      listId++;
      return [...state, newList];

    // Wrapping in squiggly brackets to work around the newState kwrd conflict
    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardId}`
      };
      cardId++;
      const newState = state.map(list => {
        if (list.id === action.payload.listId) {
          return { ...list, cards: [...list.cards, newCard] };
        } else return list;
      });
      return newState;
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      } = action.payload;

      const newState = [...state];

      // Handling case if in same list...
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;
    default:
      return state;
  }
};

export default listsReducer;
