$(document).ready(function(){

    var comp;
                                                     
    $( "input:text" ).focus(function() {
        
        if(this.value.length==0)
            {
                $(this).siblings("span").hide();
                $(this).parent().css({"color":"black"}).append("<span>Enter</span>");
            }
     });


    $( 'input[type="email"]').focus(function() {
        
        if(this.value.length==0)
            {
                $(this).siblings("span").hide();
                $(this).parent().css({"color":"black"}).append("<span>Enter</span>");
            }
     });


    $( "input:password" ).focus(function() {
        
        if(this.value.length==0)
            {
                $(this).siblings("span").hide();
                $(this).parent().css({"color":"black"}).append("<span>Enter</span>");
            }
     });






 // Text box validation



    $("input:text").keyup(function(){
        var min=$("input:text").attr("min");
        var l= (this).value.length;
        var exp= /^[A-Za-z0-9 ]{1,25}$/ ;
        var num= /^[0-9]{1,30}$/;


        if($(this).attr("id")=="number"){
                    var p=this.value;
                    var l=p.length;
                    if(l==0){
                        $(this).siblings("span").hide();
                        $(this).parent().css({"color":"black"}).append("<span> *Required </span>");
                        return false;  
                    }else if(num.test(p)==false){
                        $(this).siblings("span").hide();
                        $(this).parent().css({"color":"black"}).append("<span> Wrong Chars </span>");
                        return false;  
                    }else if(l>10 || l<=9){
                        $(this).siblings("span").hide();
                        $(this).parent().css({"color":"black"}).append("<span> Not a valid number </span>");
                        return false;  
                    }
                    else{
                        $(this).siblings("span").hide();
                        $(this).parent().css({"color":"#456100"}).append("<span> &#10004;</span>");
                        return true; 
                    }

            }else if($(this).attr("id")=="postal"){
                    var p=this.value;
                    var l=p.length;
                    if(l==0){
                        $(this).siblings("span").hide();
                        $(this).parent().css({"color":"black"}).append("<span> *Required </span>");
                        return false;  
                    }else if(num.test(p)==false){
                        $(this).siblings("span").hide();
                        $(this).parent().css({"color":"black"}).append("<span> Wrong Chars </span>");
                        return false;  
                    }else if(l>6 || l<6){
                        $(this).siblings("span").hide();
                        $(this).parent().css({"color":"black"}).append("<span> Wrong Postal Code  </span>");
                        return false;  
                    }else{
                        $(this).siblings("span").hide();
                        $(this).parent().css({"color":"#456100"}).append("<span> &#10004;</span>");
                        return true; 
                    }
            }else{

                    if(l==0){
                        $(this).siblings("span").hide();
                        $(this).parent().css({"color":"black"}).append("<span> *Required </span>");
                        return false;
                    }else if(l<=min){
                        $(this).siblings("span").hide();
                        $(this).parent().css({"color":"black"}).append("<span> More Than "+min+" Chars</span>");
                        return false;
                    }else if(l>=min && exp.test(this.value)==true){
                        $(this).siblings("span").hide();
                        $(this).parent().css({"color":"#456100"}).append("<span> &#10004; </span>");
                        return true;
                    }
                }
        });



 // Email Validation


   
       $('input[type="email"]').on('keyup',function(){ 
            var l=(this).value.length;
            var match=  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i    ;
                if(l==0){
                    $(this).siblings("span").hide();
                    $(this).parent().css({"color":"black"}).append("<span> *Required </span>");
                    return false;
                }else if(l>0 && match.test(this.value)!=true){
                    $(this).siblings("span").hide();
                    $(this).parent().css({"color":"black"}).append("<span> &#10008; Enter Valid Email!! </span>");
                    return false;
                }else if(match.test(this.value)==true){
                    $(this).siblings("span").hide();
                    $(this).parent().css({"color":"#456100"}).append("<span> &#10004;</span>");
                    return true;
                }
        });



// Password Validation


                                                                    
        $("input:password:first").keyup(function(){
            
             var strength = 0;
             var l= (this).value.length;
             var v=(this).value;
             comp=v;
             
                if(l==0){
                    $(this).siblings("span").hide();
                    $(this).parent().css({"color":"black"}).append("<span> *Required </span>");
                    return false;
                }if (l < 6){
                    $(this).siblings("span").hide();
                    $(this).parent().css({"color":"black"}).append("<span> Too short </span>");
                    return false;
                }

                if (l > 7) {strength += 1}
                if (v.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  {strength += 1}
                if (v.match(/([a-zA-Z])/) && v.match(/([0-9])/))  {strength += 1} 
                if (v.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  {strength += 1}
                if (v.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/)) {strength += 1}

                if (strength < 2 ) {
                    $(this).siblings("span").hide();
                    $(this).parent().css({"color":"black"}).append("<span> Weak </span>");
                    return true;
                }else if (strength == 2 ) {
                    $(this).siblings("span").hide();
                    $(this).parent().css({"color":"#456100"}).append("<span> Good </span>");
                    return true;
                }else {
                    $(this).siblings("span").hide();
                    $(this).parent().css({"color":"black"}).append("<span> Storng </span>");
                    return true;
                }
        }); 



// Conform Password

        

        $("input:password:last").keyup(function(){
            var p= (this).value;
            var l= (this).value.length;
                if(comp==p && l!=0){
                    $(this).siblings("span").hide();
                    $(this).parent().css({"color":"#456100"}).append("<span> &#10004; </span>");
                    return true;
                }else if(l==0){
                    $(this).siblings("span").hide();
                    $(this).parent().css({"color":"black"}).append("<span> *Required </span>");
                    return false;
                }else {
                    $(this).siblings("span").hide();
                    $(this).parent().css({"color":"black"}).append("<span> &#10008; Password Not Matched !! </span>");
                    return false;   
                }
        });    



// Main Function 



        $("form button").click(function(){
            var match=  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            var check;    
            var count=1;
            var num= /^[0-9]{1,30}$/


            $("input,select,textarea").each(function(){
                if(this.type=="text"){

                    if($(this).attr("id")=="number"){
                        var p=this.value;
                        var l=p.length;
                    if(l==0 || l<=9){
                        this.focus();
                        count=0;
                        return false;
                    }else if(num.test(p)==false ){
                        this.focus();
                        count=0;
                        return false;
                    }else if(l>10){
                        this.focus();
                        count=0;
                        return false;
                    }

                    }else if($(this).attr("id")=="postal"){
                        var p=this.value;
                        var l=p.length;
                    if(l==0||l<6){
                        this.focus();
                        count=0;
                        return false;
                    }

                    }else{
                        var p=this.value;
                        var l=p.length;
                    if(l==0 || l<=3){ 
                        this.focus();
                        count=0;
                        return false;
                    }
                }
                }else if(this.type=="email"){
                        var p=this.value;
                        var l=p.length;
                  if(l==0 || match.test(this.value)!=true ){
                        this.focus();
                        count=0;
                        return false;
                    }
                }else if(this.type=="date"){

        			    var p=this.value;
                        var l=p.length;
                  	if(l==0){
                        this.focus();
                        count=0;
                        return false;
                    }
                }else if(this.type=="password" && $(this).attr("id")=="confirm" ){
                    if(this.value.length<check.length){
                        this.focus();
                        count=0;
                        return false;
                    }
                    if(this.value.length>check.length){
                        this.focus();
                        count=0;
                        return false;
                    }
                    if(this.value.length==check.length  && this.value!=check){
                        this.focus();
                        count=0;
                        return false;
                    }
                }else if(this.type=="password"){
                        var p=this.value;
                        var l=p.length;
                        if(l==0 || l<6){
                        this.focus();
                        count=0;
                        return false;
                }
                        check=p;
                }else if(this.type=="radio"){
                        if(!$("input:radio").is(':checked')){
                        $('input:radio:first').focus();
                        count=0;
                        return false;
                }
                }else if(this.type=="checkbox"){
                        if(!$("input:checkbox").is(":checked")){
                        $('input:checkbox:first').focus();
                        count=0;
                        return false;
                    }
                }else if(this.type=="select-one"){ 
                        if ($('select option:selected').index()==0){
                        $('select').focus();
                        count=0;
                        return false;
                    }
                }
        });
      
                if(count==0)return false;
                        else if(count==1){
                        alert("Signup Successful");
                        return true;
                        }
     });

});