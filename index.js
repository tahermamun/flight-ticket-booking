// Booking Page Functions Start here

classQuantityHandler(true, 'plus', 'first');
classQuantityHandler(false, 'minus', 'first');
classQuantityHandler(true, 'plus', 'economy');
classQuantityHandler(false, 'minus', 'economy');

//ClassQuantityHandler Function is counting item Quantity
function classQuantityHandler(isIncrease, btnType, classType) {
    document.getElementById(classType + '-class-' + btnType + '-btn').addEventListener('click', function () {
        const firstClassInput = document.getElementById(classType + '-class-quantity');
        const firstClassInputValue = parseInt(firstClassInput.value);

        let UpdateFirstClassInputValue = firstClassInputValue;
        if (isIncrease == true) {
            UpdateFirstClassInputValue = firstClassInputValue + 1;
        }
        if (isIncrease == false && UpdateFirstClassInputValue > 0) {
            UpdateFirstClassInputValue = firstClassInputValue - 1;
        };
        firstClassInput.value = UpdateFirstClassInputValue;

        bookingTotalCostHandler();
    });
};

//bookingTotalCostHandler Function is All Booking Cost Calculation. 
function bookingTotalCostHandler() {
    const firstClassInputValue = getInputValueHandler('first');
    const economyClassInputValue = getInputValueHandler('economy');

    const subTotal = firstClassInputValue * 150 + economyClassInputValue * 100;
    document.getElementById('sub-total').innerText = '$' + subTotal;

    const tex = subTotal * 0.1;
    document.getElementById('tex').innerText = '$' + tex;

    const grandTotalAmount = subTotal + tex;
    document.getElementById('grand-total-amount').innerText = '$' + grandTotalAmount;
};

//getInputValueHandler Function is get Quantity Value.
function getInputValueHandler(classType) {
    const classInput = document.getElementById(classType + '-class-quantity');
    const classInputValue = parseInt(classInput.value);
    return classInputValue;
};

// Booking Page Functions End here



//Book Now Button Event Changing Program
document.getElementById('book-now-btn').addEventListener('click', function () {
    document.getElementById('booking-area').style.display = "none";
    document.getElementById('invoice-area').style.display = 'block';
});



// Invoice Section Functions Start Here

document.getElementById('book-now-btn').addEventListener('click', function () {

    invoiceEventHandler('first', 150); //First Class item calculate  in invoice are
    invoiceEventHandler('economy', 100); //economy item calculate  in invoice are


    //Get booking Cost from Booking area and show invoice Area
    invoiceSummeryShow('sub-total', 'sub-total-invoice');
    invoiceSummeryShow('tex', 'tex-invoice');
    invoiceSummeryShow('grand-total-amount', 'grand-total-amount-invoice');
});


// Item Calculation Function for invoice Area
function invoiceEventHandler(itemType, itemCost) {

    const itemClassQuantity = document.getElementById(itemType + '-class-quantity').value;
    const itemClassQuantityValue = parseInt(itemClassQuantity);
    document.getElementById(itemType + '-class-quantity-invoice').innerText = itemClassQuantity;
    const itemClassQuantityTotalCost = '$' + itemClassQuantityValue * itemCost;
    document.getElementById(itemType + '-class-cost-invoice').innerText = itemClassQuantityTotalCost;
};

//Value Get Function For invoice Area
function invoiceSummeryShow(targetValue, showValue) {
    const getTargetValue = document.getElementById(targetValue).innerText;
    document.getElementById(showValue).innerText = getTargetValue;
};

// Invoice Section Functions End Here