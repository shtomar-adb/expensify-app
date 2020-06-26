import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };

    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should remove uid for logout', () => {
    const action = {
        type: 'LOGOUT',
    };

    const state = authReducer({uid: 'abcd123'}, action);
    expect(state).toEqual({});
});