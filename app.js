var num1=0
var n=0
while(true){
    var num=+prompt('enter your number :')
    if(num==null || num=='')
    {
        console.log(num1/n)
        break
    }
    else{
        num1=num1+num
        n=n+1
    }
}