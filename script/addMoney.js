document.getElementById("add-money").addEventListener("click",
    function (event){
        event.preventDefault();
        const amount = document.getElementById("amount").value;
        const convertedAmount = parseInt(amount);
        const pin = document.getElementById("pin").value;
        const currentAmount = document.getElementById("main-balance").innerText;
        const convertedCurrentAmount = parseFloat(currentAmount);
        if(pin == 1234)
        {
            const sum =convertedCurrentAmount + convertedAmount;
            document.getElementById("main-balance").innerText = sum;
        }
        else{
            alert("Invalid Pin")
            return;
        }
    })