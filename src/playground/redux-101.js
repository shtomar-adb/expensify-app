import {createStore} from 'redux';

var ACTION_KEYS = {
    increment: 'INCREMENT',
    decrement: 'DECREMENT',
    set: 'SET'
};

const incrementCount = ({value: incrementBy = 1}) => {return {
    type: ACTION_KEYS.increment,
    incrementBy
}};

const decrementCount = ({value:decrementBy = 1}) => {return {
    type: ACTION_KEYS.decrement,
    decrementBy
}};

const set = ({value:to = 0}) => { return{
    type: ACTION_KEYS.set,
    to
}};

const reset = () => {return {
    type: ACTION_KEYS.set,
    to: 0
}};



const store = createStore((state = {count : 0}, action) => {
    switch(action.type){
        case ACTION_KEYS.increment: 
            return {count: state.count + action.incrementBy};
        case ACTION_KEYS.decrement: 
            return {count: state.count - action.decrementBy};
        case ACTION_KEYS.set: 
            return {count: action.to};
        default:return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({value: 10})); //10
store.dispatch(incrementCount({})); //10
store.dispatch(decrementCount({value: 5})); //5
store.dispatch(set({value: 100})); //100
store.dispatch(reset()); //0