import moment from 'moment';

export const TOTAL_BUDGET = 50000;

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
export const MAX_DATE=moment().format(DATE_FROMAT)