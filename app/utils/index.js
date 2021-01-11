export const getCategoriesFromData = (data) => {
    let categoryList = [];
    categoryList = data.map((item) => {
        return {
            label: item.category,
            value: item.category,
        }
    })
    categoryList.unshift({
        label: 'All',
        value: 'All',
    })
    return categoryList;
}

export const makeUnique = (arr) => arr.filter((v, i, a) => a.findIndex(t => (t.label === v.label)) === i)

export const buildBillObj = (item, id) => {
    const { billDescription, amount, selectedDate, selectedCategory } = item;
    return {
        "id": id || 1,
        "description": billDescription,
        "category": selectedCategory,
        "amount": amount,
        "date": selectedDate,
        "paid": false
    }
}
