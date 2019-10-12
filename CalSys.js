var outputInt = "";
var outputStr = "";
var outputIntSecond = 0;
var outputStrSecond = "";
var num;
var ope="";
var ans = 0 ;
function getNum(num)
{
    if(ope=="")
    {
        this.num = num;
        outputStr += num;
        outputInt = parseInt(outputStr)
    }
    else
    {
        this.num = num;
        outputStrSecond += num;
        outputIntSecond = parseInt(outputStrSecond);
    }

    if(ope!="")
        document.getElementById("OutputStyle").innerHTML = outputStr+ope+outputStrSecond;
    else
    document.getElementById("OutputStyle").innerHTML = outputStr;

}

function getOperator(opea)
{
    if(ope=="")
    {
    this.ope = opea;
    document.getElementById("OutputStyle").innerHTML = outputStr+ope;
    //document.getElementById("OutputStyle").innerHTML = ope;
    }
}

function getAnswer()
{
    switch (ope)
    {
        case "+":
            ans = outputInt + outputIntSecond;
            break;
        case "-":
            ans = outputInt - outputIntSecond;
            break;
        case "*":
            ans = outputInt * outputIntSecond;
            break;
        case "/":
            ans = outputInt /  outputIntSecond;
            break;
        default: ans = outputInt;
    }

    outputIntSecond = 0;
    outputInt = 0;
    outputStr = "";
    outputStrSecond = "";
    ope="";



    document.getElementById("OutputStyle").innerHTML="Answer : " +ans;

}

function deleteNum()
{

    
    outputIntSecond = 0;
    outputInt = 0;
    outputStr = "";
    outputStrSecond = "";
    ope="";
    document.getElementById("OutputStyle").innerHTML = outputStr;
    
        /*  outputStr.pop()
        document.getElementById("OutputStyle").innerHTML = outputStr;

    */


    
}






