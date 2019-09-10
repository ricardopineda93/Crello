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
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
