import moment from 'moment';
import { createDispatchHook } from 'react-redux';

export default (expenses, { text, sortBy, startDate, endDate }) => {

    console.log(expenses);

    return expenses.filter(
        (expense) => {
            const createdAtMoment = moment(expense.createdAt);
            const startDateMatch = startDate !== null && startDate !== undefined ? moment(startDate).isSameOrBefore(createdAtMoment, 'day') : true;
            const endDateMatch = endDate !== null && endDate !== undefined ? moment(endDate).isSameOrAfter(createdAtMoment, 'day') : true;
            const textMatch = text ? expense.description.toLowerCase().includes(text.toLowerCase()) : true;        
            console.log(`startDateMatch::${startDateMatch} startDateMatch::${endDateMatch} textMatch::${textMatch}`);
            return startDateMatch && endDateMatch && textMatch;
        }
    ).sort((expense1, expense2) => {
        //It could by sort by amount/or created data.
        if(sortBy === 'amount'){
            return expense1.amount < expense2.amount ? 1 : -1;
        } else if(sortBy === 'date'){
            return expense1.createdAt < expense2.createdAt ? 1 : -1;
        }
        return 0;
    });
};
