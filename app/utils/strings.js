export const stringMessages = {
    budgetAlert: "Total Budget Alert",
    moreThan: `Your total Monthly Amount should not be more then`,
    minBudget:"Total Budget Must be greater than ",
    yourMonthlyBudget:"Enter Your Monthly Budget"

}
export const strings = (id) => {
    return stringMessages[id]
}