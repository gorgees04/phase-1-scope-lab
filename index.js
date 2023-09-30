// customerName
var customerName = "bob"

// upperCaseCustomerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
    return customerName
}

// setBestCustomer
var bestCustomer;
function setBestCustomer() {
    bestCustomer = "not bob"
}

// overwriteBestCustome
function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

// try to change constant variable
const leastFavoriteCustomer = "some value"

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "I can change the value!!"
}