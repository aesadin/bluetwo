export default (state = {}, action) => {
  const { title, author, body, date, picture, vote, id } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        title: title,
        author: author,
        body: body,
        date: date,
        picture: picture,
        vote: vote,
        id: id
      }
    });
  case 'DELETE_POST':
    const newState = { ...state};
    delete newState[id];
    return newState;
  default:
    return state;
  }
};