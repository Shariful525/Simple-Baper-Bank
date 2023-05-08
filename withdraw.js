document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw');
    const newWithdrawAmountString = withdrawField.value;

    if(isNaN(newWithdrawAmount)){
        alert('Please Input a valid Number');
        return;
    }

    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';



    const withdrawTotalElement = document.getElementById('withdraw-toal');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const prevousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = prevousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;








     const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baper Bank e Eto taka nai');
        return;
    }
    const newBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalance;

    


})

