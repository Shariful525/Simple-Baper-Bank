document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit');
    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);


    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    
    depositTotalElement.innerText = currentDepositTotal;




    // balance totoal calculate

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = currentBalanceTotal;


    // withdraw balance calculate

   




    
})