import filterSortFunction from '../../selectors/expenses';
import moment from 'moment';
import dataSample from '../fixtures/expense';

test('Test filter By Text', () => {
    expect(filterSortFunction(dataSample, {
        text: 'e', 
        sortBy: 'none', 
        startDate: moment(0).subtract(10,'days').valueOf(), 
        endDate: 0
    })).toEqual([
        dataSample[0],dataSample[2]
    ]);
});

test('Test filter By Start', () => {
    expect(filterSortFunction(dataSample, {
        text: '', 
        sortBy: 'none', 
        startDate: 0, 
        endDate: 0
    })).toEqual([
        dataSample[0],dataSample[1]
    ]);
});

test('Test filter By end date', () => {
    dataSample[2].createdAt = moment(0).add(5,'days').valueOf();
    expect(filterSortFunction(dataSample, {
        text: '', 
        sortBy: 'none', 
        startDate: 0, 
        endDate: 0
    })).toEqual([
        dataSample[0],dataSample[1]
    ]);
});

test('Test sort by amount', () => {
    dataSample[2].createdAt = 0;
    expect(filterSortFunction(dataSample, {
        text: '', 
        sortBy: 'amount', 
        startDate: 0, 
        endDate: 0
    })).toEqual([
        dataSample[1],dataSample[0],dataSample[2]
    ]);
});

test('Test sort by Date', () => {
    dataSample[2].createdAt = 100;
    dataSample[0].createdAt = 20;
    dataSample[1].createdAt = 0
    expect(filterSortFunction(dataSample, {
        text: '', 
        sortBy: 'date', 
        startDate: 0, 
        endDate: 0
    })).toEqual([
        dataSample[2],dataSample[0],dataSample[1]
    ]);
});