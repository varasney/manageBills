export const stringMessages = {
    budgetAlert: "Total Budget Alert",
    moreThan: `Your total Monthly Amount should not be more then`,
    minBudget:"Total Budget Must be greater than ",
    yourMonthlyBudget:"Enter Your Monthly Budget",
    updatedSuccessfully:"Bill Updated Successfully",
    addedSuccessfully:"Bill Added Successfully"

}
export const strings = (id) => {
    return stringMessages[id]
}