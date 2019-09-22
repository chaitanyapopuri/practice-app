function restaurantBill(){
    
    const total=Number(document.getElementById("Total").value)
    const tax=(5.5/100)*total
    const rate=Number(document.getElementById("Rate").value)
    document.getElementById("Tip").innerHTML=(rate*total)/100
    document.getElementById("tax").innerHTML=tax;
    const fullTotal=(rate*total/100)+tax+total
    
    document.getElementById("grandTotal").innerHTML=fullTotal
    
}