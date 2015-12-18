$(document).ready(function(){
    var temp=0;
    var result=0;
    var num=$(".display");
    var operator=null;
    $(".number").click(function(){
        if(num.val()==0){
            num.val($(this).val());
        }else{
            num.val(num.val()+$(this).val());
        }
        console.log(num.val());
    });
    $(".clear").click(function(){
        num.val(0);
        temp=0;
        result=0;
        operator=null;
        console.log(num.val()+operator+result);
    });
    $(".operator").click(function(){
        temp=Number(num.val());
        var o=$(this).attr("id");
        console.log(o);
        if(operator!=null){
            if(operator=="+"){
                result+=temp;
            }else if(operator=="-"){
                result-=temp
            }else if(operator=="*"){
                result*=temp;
            }else if(operator=="/"){
                result/=temp;
            }
        }else{
            result=temp;
        }
        console.log(num.val()+operator+result);
        if(o=="="){
            num.val(result);
            operator=null;
        }else{
            num.val(0);
            operator=o;
        }
    });
});