import postListReducer from '../../reducers/post-list-reducer'

describe('postListReducer', () => {

    let action;
    const postData = {
      title: 'Pokemon',
      author: 'James',
      body: 'Pikachu',
      date: '4/21/1992',
      picture: 'nice picture',
      vote: 3,
      id: 1
    };

    const currentState = {
      1: {
        title: 'Pokemon',
        author: 'James',
        body: 'Pikachu',
        date: '4/21/1992',
        picture: 'nice picture',
        vote: 3,
        id: 1
      },
      2: {
        title: 'GloomHaven',
        author: 'Megan',
        body: 'Scourge',
        date: '4/22/1992',
        picture: 'evil picture',
        vote: 5,
        id: 2
      }
    }

    test('Should succesfully delete a post', () => {
      action = {
        type: 'DELETE_POST',
        id: 1
      };
      expect(postListReducer(currentState, action)).toEqual({
        2: {
          title: 'GloomHaven',
          author: 'Megan',
          body: 'Scourge',
          date: '4/22/1992',
          picture: 'evil picture',
          vote: 5,
          id: 2
        }
      });
    });

    test('Should successfully add new post data to masterPostList', () => {
      const { title, author, body, date, picture, vote, id } = postData;
      action = {
        type: 'ADD_POST',
        title: title,
        author: author,
        body: body,
        date: date,
        picture: picture,
        vote: vote,
        id: id
      };

      expect(postListReducer({}, action)).toEqual({
        [id] : {
          title: title,
          author: author,
          body: body,
          date: date,
          picture: picture,
          vote: vote,
          id: id
        }
      });
    });


    // add update functionality that uses add ticket functionality plus allows it to edit ticket information and then add the ticket
    test('Should successfully update a post', () => {
      const { title, author, body, date, picture, vote, id } = postData;
      action = {
        type: 'ADD_POST',
        title: title,
        author: author, 
        body: body,
        date: date,
        picture: picture,
        vote: vote,
        id: id
      }

      // had to define new variables to input into expect statement below
      const stateToUpdate = postListReducer({}, action);
      const updateAction =  {
        type: 'ADD_POST',
        title: "funny post",
        author: "Allison",
        body: "blah blah",
        date: date,
        picture: picture,
        vote: vote,
        id: id
      }
      expect(postListReducer(stateToUpdate, updateAction)).toEqual({
        [id] : {
          title: "funny post",
          author: "Allison",
          body: "blah blah",
          date: date,
          picture: picture,
          vote: vote,
          id: id
        }
      });
    });

    test('Should return default state if there is no action type passed into the reducer', () => {
      expect(postListReducer({}, { type: null })).toEqual({});
  });
});