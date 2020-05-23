import filterReducers from '../../reducers/filter';
import moment from 'moment';

test('Default Filter state', () => {
        const filterState = filterReducers(undefined, {type: "@@INIT"});
        expect(filterState).toEqual({
            text: '',
            sortBy: '',
            startDate: moment().startOf("month"),
            endDate: moment().endOf("month")
        });
});

test('Set filter Text', () => {
    const filterState = filterReducers({
            text: '',
            sortBy: '',
            startDate: moment().startOf("month"),
            endDate: moment().endOf("month")
    }, {type: 'SET_FILTER_TEXT', text: 'name'});
    expect(filterState).toEqual({
        text: 'name',
        sortBy: '',
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test('Set Sort By Date', () => {
    const filterState = filterReducers({
            text: '',
            sortBy: '',
            startDate: moment().startOf("month"),
            endDate: moment().endOf("month")
    }, {type: 'SORT_BY_DATE'});
    expect(filterState.sortBy).toBe('date');
});

test('Set Sort By Date', () => {
    const filterState = filterReducers({
            text: '',
            sortBy: 'amount',
            startDate: moment().startOf("month"),
            endDate: moment().endOf("month")
    }, {type: 'SORT_BY_AMOUNT'});
    expect(filterState.sortBy).toBe('amount');
});

test('Set Start Date', () => {
    const filterState = filterReducers({
            text: '',
            sortBy: 'amount',
            startDate: moment().startOf("month"),
            endDate: moment().endOf("month")
    }, {type: 'SET_START_DATE', startDate: 100});
    expect(filterState).toEqual({
        text: '',
            sortBy: 'amount',
            startDate: 100,
            endDate: moment().endOf("month")
    });
});

test('Set End Date', () => {
    const filterState = filterReducers({
            text: '',
            sortBy: 'amount',
            startDate: moment().startOf("month"),
            endDate: moment().endOf("month")
    }, {type: 'SET_END_DATE', endDate: 100});
    expect(filterState).toEqual({
        text: '',
            sortBy: 'amount',
            startDate: moment().startOf('month'),
            endDate: 100
    });
});