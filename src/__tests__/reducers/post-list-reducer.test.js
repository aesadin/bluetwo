import postListReducer from '../../reducers/post-list-reducer'

describe('postListReducer', () => {

    let action;
    const postData = {
      title: 'Pokemon',
      author: 'James',
      body: 'Pikachu',
      date: '4/21/1992',
      id: 1
    };

    test('Should successfully add new post data to masterPostList', () => {
      const { title, author, body, date, id } = postData;
      action = {
        type: 'ADD_POST',
        title: title,
        author: author,
        body: body,
        date: date,
        id: id
      };

      expect(postListReducer({}, action)).toEqual({
        [id] : {
          title: title,
          author: author,
          body: body,
          date: date,
          id: id
        }
      });
    });

    test('Should return default state if there is no action type passed into the reducer', () => {
      expect(postListReducer({}, { type: null })).toEqual({});
  });
});