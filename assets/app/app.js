

function Calculate(){
    var x=document.getElementById("amount").value
    var y=document.getElementById("duration").value
    var z=document.getElementById("percentage").value

    
    var percent=(x*z)/100
    var mounth=(Number(x)+Number(percent))/y
    document.getElementById("inference").innerHTML=mounth

}