document.getElementById("cashout-button").addEventListener("click",
    function(event){
        event.preventDefault();
        const amount = document.getElementById("cashout-amount").value
        const agentNumber = document.getElementById("agent-number").value
        const convertedAmount = parseFloat(amount)
        const mainBalance = document.getElementById("main-balance").innerText
        const updatedBalance = parseFloat(mainBalance);
        const pin = document.getElementById("cashout-pin").value;
        if(amount && pin && agentNumber.length == 11)
        {
            if(pin == 1234)
            {
                if(updatedBalance >= convertedAmount)
                {
                    document.getElementById("main-balance").innerText = updatedBalance - convertedAmount;
                    alert("Cashout successful!")
                }
                else{
                    alert("Insufficient balance!")
                }
            }
            else
            {
                alert("Invalid PIN")
            }
        }
        else{
            alert("Invalid inputs!")
        }
    }
)