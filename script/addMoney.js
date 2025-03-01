document.getElementById("add-money").addEventListener("click",
    function (event){
        event.preventDefault();
        const amount = getInputValue("amount");
        const pin = getInputValue("pin");
        const currentAmount = getInputInnerText("main-balance");
        const convertedCurrentAmount = parseFloat(currentAmount);
        if(pin === 1234)
        {
            const sum =convertedCurrentAmount + convertedAmount;
            getInputInnerText("main-balance") = sum;
        }
        else{
            alert("Invalid Pin")
            return;
        }
    })