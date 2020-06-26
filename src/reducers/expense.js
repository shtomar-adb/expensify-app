const expenseReducersDefaultState = [];
export default (state = expenseReducersDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(
                (element) => element.id !== action.uuid
            );
        case 'EDIT_EXPENSE':
            return state.map((expense)=> {
                if(action.id !== expense.id){
                    return expense;
                }
                else{
                    return {...expense, ...action.update};
                }
            });    
        case 'SET_EXPENSES':
            return action.expenses;
        default: return state;
    }
};