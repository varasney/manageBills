import { FETCH_BILLS, UPDATE_BILLS } from './actionTypes';
const INITIAL_STATE = {
    billList: [
        {
            "id": 1,
            "description": "Dominoes",
            "category": "FoodNDining",
            "amount": 430,
            "date": "01-02-2020",
            "paid": false,
            "isSelected": false
        },
        {
            "id": 2,
            "description": "Car wash",
            "category": "utility",
            "amount": 500,
            "date": "01-06-2020",
            "paid": true,
            "isSelected": false
        },
        {
            "id": 3,
            "description": "Amazon",
            "category": "shopping",
            "amount": 2030,
            "date": "01-07-2020",
            "paid": false,
            "isSelected": true
        }]
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_BILLS:
            return { ...state, billList: action.payload };
        case UPDATE_BILLS:
            return { ...state, billList: action.payload };
        default:
            return state;
    }
}