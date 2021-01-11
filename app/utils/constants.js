import moment from 'moment';

export const TOTAL_BUDGET = 50000;
export const MIN_BUDGET = 20000;

export const CATEGORY_DATA = [
    { label: "utility", value: "utility" },
    { label: "FoodNDining", value: "FoodNDining" },
    { label: "shopping", value: "shopping" },
    { label: "Food & Dining", value: "Food & Dining" },
    { label: "Personal Care", value: "Personal Care", },
    { label: "education", value: "education", },
    { label: "Travel", value: "Travel", },
]

export const MIN_DATE = "2020-05-01";
export const DATE_FROMAT = "DD-MM-YYYY";
export const MAX_DATE = moment().format(DATE_FROMAT)

export const DEFAULT_BILL_LIST = [
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
        "paid": false,
        "isSelected": false
    },
    {
        "id": 3,
        "description": "Amazon",
        "category": "shopping",
        "amount": 2030,
        "date": "01-07-2020",
        "paid": false,
        "isSelected": false
    }]