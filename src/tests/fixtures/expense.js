import moment from 'moment';

export default [
    {
     id: '1',
     description: 'Rent',   
     note: 'This is a rent expense.',
     amount: 100,
     createdAt: 0
    },
    {
        id: '2',
        description: 'Bar',   
        note: 'This is a Bar expense.',
        amount: 200,
        createdAt: 0
    },
    {
        id: '3',
        description: 'Travel',   
        note: 'This is a Travel expense.',
        amount: 0,
        createdAt: moment(0).subtract(10,'days').valueOf()
    }
];