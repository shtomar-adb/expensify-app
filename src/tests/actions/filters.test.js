import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
} from '../../actions/filters';

import moment from 'moment';

test(
    'Test Set Start date', 
    () => {
        const epochBeginTime = moment(0);
        
        expect(setStartDate(epochBeginTime)).toEqual({
            type: 'SET_START_DATE',
            startDate: epochBeginTime
        });
    });

    test(
        'Test Set end date', 
        () => {
            const epochBeginTime = moment(0);
            
            expect(setEndDate(epochBeginTime)).toEqual({
                type: 'SET_END_DATE',
                endDate: epochBeginTime
            });
        });

        test(
            'Test Set Text Filter', 
            () => {
                const filterText = 'grocery';
                
                expect(setTextFilter(filterText)).toEqual({
                    type: 'SET_FILTER_TEXT',
                    text: filterText
                });
            });

            test(
                'Test Set Text Filter Default value', 
                () => {
                    
                    expect(setTextFilter()).toEqual({
                        type: 'SET_FILTER_TEXT',
                        text: ''
                    });
                });

                test(
                    'Test Sort By Date', 
                    () => {
            
                        expect(sortByDate()).toEqual({
                            type: 'SORT_BY_DATE'
                        });
                    });

                    test(
                        'Test Sort By Amount', 
                        () => {
                            
                            expect(sortByAmount()).toEqual({
                                type: 'SORT_BY_AMOUNT'
                            });
                        });

