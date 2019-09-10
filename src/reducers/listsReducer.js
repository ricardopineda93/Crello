const initialState = [
  {
    title: 'Last Episode',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'We did something.'
      },
      {
        id: 1,
        text: 'We did something else.'
      }
    ]
  },
  {
    title: 'This Episode',
    id: 1,
    cards: [
      {
        id: 2,
        text: 'Making some good ground!'
      }
    ]
  },
  {
    title: 'Next Episode',
    id: 2,
    cards: [
      {
        id: 3,
        text: 'Translate to Bootstrap'
      },
      {
        id: 4,
        text: 'Make this work on current project.'
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
