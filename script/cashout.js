document.getElementById("cashout-button").addEventListener("click",
    function(event){
        event.preventDefault();
        const amount = document.getElementById("cashout-amount").value
        const convertedAmount = parseFloat(amount)
        const mainBalance = document.getElementById("main-balance").innerText
        const updatedBalance = parseFloat(mainBalance);
        const pin = document.getElementById("cashout-pin").value;
        if(amount && pin)
        {
            if(pin == 1234 && updatedBalance >= convertedAmount)
            {
                document.getElementById("main-balance").innerText = updatedBalance - convertedAmount;
                alert("Cashout successful!")
            }
            else
            {
                alert("Invalid PIN or insufficient balance!")
            }
        }
    }
)