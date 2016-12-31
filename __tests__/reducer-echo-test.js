import actionCreaterEcho from '../src/action-creater-echo';

describe('action-creater-echo', () => {
  it('should create an action to add a text', () => {
    const val = 'Finish docs';
    const expectedAction = {
      type: 'DO_ECHO',
      index: 1,
      val
    };
    expect(actionCreaterEcho(val)).toEqual(expectedAction);
  });
});
