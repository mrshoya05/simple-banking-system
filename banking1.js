function transferMoney() {
    var recipient = document.getElementById("recipient").value;
    var amount = parseFloat(document.getElementById("amount").value);
    var balance = parseFloat(document.getElementById("balanceAmount").innerText);
  
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
  
    if (amount > balance) {
      alert("Insufficient balance.");
      return;
    }
  
    // Perform the money transfer logic here
    // You can update the balance and perform other necessary operations
    
    // Example update: deducting the transferred amount from the balance
    var newBalance = balance - amount;
    document.getElementById("balanceAmount").innerText = newBalance.toFixed(2);
  
    alert("Money transferred successfully!");
  }
  