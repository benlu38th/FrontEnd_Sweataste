const buyProduct1 = document.querySelectorAll(".buyProduct1")
const plus1 = document.querySelectorAll(".plus1")
const minus1 = document.querySelectorAll(".minus1")
const buyProduct1Total = document.querySelectorAll(".buyProduct1Total")
let buyProduct1Num = 2;
let buyProduct1TotalPrice = 450*buyProduct1Num;
plus1[0].addEventListener("click",function(e){    
    buyProduct1Num+=1;
    buyProduct1[0].innerHTML = buyProduct1Num;
    buyProduct1[1].innerHTML = buyProduct1Num;
    buyProduct1Total[0].innerHTML = "NT$ "+450*buyProduct1Num;
    buyProduct1Total[1].innerHTML = "NT$ "+450*buyProduct1Num;
})
plus1[1].addEventListener("click",function(e){    
    buyProduct1Num+=1;
    buyProduct1[0].innerHTML = buyProduct1Num;
    buyProduct1[1].innerHTML = buyProduct1Num;
    buyProduct1Total[0].innerHTML = "NT$ "+450*buyProduct1Num;
    buyProduct1Total[1].innerHTML = "NT$ "+450*buyProduct1Num;
})
minus1[0].addEventListener("click",function(e){    
    if(buyProduct1Num >= 1){
        buyProduct1Num-=1;
        buyProduct1[0].innerHTML = buyProduct1Num;
        buyProduct1[1].innerHTML = buyProduct1Num;
        buyProduct1Total[0].innerHTML = "NT$ "+450*buyProduct1Num;
        buyProduct1Total[1].innerHTML = "NT$ "+450*buyProduct1Num;
    }
})
minus1[1].addEventListener("click",function(e){    
    if(buyProduct1Num >= 1){
        buyProduct1Num-=1;
        buyProduct1[0].innerHTML = buyProduct1Num;
        buyProduct1[1].innerHTML = buyProduct1Num;
        buyProduct1Total[0].innerHTML = "NT$ "+450*buyProduct1Num;
        buyProduct1Total[1].innerHTML = "NT$ "+450*buyProduct1Num;
    }
})

const buyProduct2 = document.querySelectorAll(".buyProduct2")
const plus2 = document.querySelectorAll(".plus2")
const minus2 = document.querySelectorAll(".minus2")
const buyProduct2Total = document.querySelectorAll(".buyProduct2Total")
let buyProduct2Num = 2;
let buyProduct2TotalPrice = 450*buyProduct2Num;
plus2[0].addEventListener("click",function(e){    
    buyProduct2Num+=1;
    buyProduct2[0].innerHTML = buyProduct2Num;
    buyProduct2[1].innerHTML = buyProduct2Num;
    buyProduct2Total[0].innerHTML = "NT$ "+450*buyProduct2Num;
    buyProduct2Total[1].innerHTML = "NT$ "+450*buyProduct2Num;
})
plus2[1].addEventListener("click",function(e){    
    buyProduct2Num+=1;
    buyProduct2[0].innerHTML = buyProduct2Num;
    buyProduct2[1].innerHTML = buyProduct2Num;
    buyProduct2Total[0].innerHTML = "NT$ "+450*buyProduct2Num;
    buyProduct2Total[1].innerHTML = "NT$ "+450*buyProduct2Num;
})
minus2[0].addEventListener("click",function(e){    
    if(buyProduct2Num >= 1){
        buyProduct2Num-=1;
        buyProduct2[0].innerHTML = buyProduct2Num;
        buyProduct2[1].innerHTML = buyProduct2Num;
        buyProduct2Total[0].innerHTML = "NT$ "+450*buyProduct2Num;
        buyProduct2Total[1].innerHTML = "NT$ "+450*buyProduct2Num;
    }
})
minus2[1].addEventListener("click",function(e){    
    if(buyProduct2Num >= 1){
        buyProduct2Num-=1;
        buyProduct2[0].innerHTML = buyProduct2Num;
        buyProduct2[1].innerHTML = buyProduct2Num;
        buyProduct2Total[0].innerHTML = "NT$ "+450*buyProduct2Num;
        buyProduct2Total[1].innerHTML = "NT$ "+450*buyProduct2Num;
    }
})

const buyProduct3 = document.querySelectorAll(".buyProduct3")
const plus3 = document.querySelectorAll(".plus3")
const minus3 = document.querySelectorAll(".minus3")
const buyProduct3Total = document.querySelectorAll(".buyProduct3Total")
let buyProduct3Num = 2;
let buyProduct3TotalPrice = 450*buyProduct3Num;
plus3[0].addEventListener("click",function(e){    
    buyProduct3Num+=1;
    buyProduct3[0].innerHTML = buyProduct3Num;
    buyProduct3[1].innerHTML = buyProduct3Num;
    buyProduct3Total[0].innerHTML = "NT$ "+450*buyProduct3Num;
    buyProduct3Total[1].innerHTML = "NT$ "+450*buyProduct3Num;
})
plus3[1].addEventListener("click",function(e){    
    buyProduct3Num+=1;
    buyProduct3[0].innerHTML = buyProduct3Num;
    buyProduct3[1].innerHTML = buyProduct3Num;
    buyProduct3Total[0].innerHTML = "NT$ "+450*buyProduct3Num;
    buyProduct3Total[1].innerHTML = "NT$ "+450*buyProduct3Num;
})
minus3[0].addEventListener("click",function(e){    
    if(buyProduct3Num >= 1){
        buyProduct3Num-=1;
        buyProduct3[0].innerHTML = buyProduct3Num;
        buyProduct3[1].innerHTML = buyProduct3Num;
        buyProduct3Total[0].innerHTML = "NT$ "+450*buyProduct3Num;
        buyProduct3Total[1].innerHTML = "NT$ "+450*buyProduct3Num;
    }
})
minus3[1].addEventListener("click",function(e){    
    if(buyProduct3Num >= 1){
        buyProduct3Num-=1;
        buyProduct3[0].innerHTML = buyProduct3Num;
        buyProduct3[1].innerHTML = buyProduct3Num;
        buyProduct3Total[0].innerHTML = "NT$ "+450*buyProduct3Num;
        buyProduct3Total[1].innerHTML = "NT$ "+450*buyProduct3Num;
    }
})