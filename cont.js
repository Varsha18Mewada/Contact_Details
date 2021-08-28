

 document.getElementById("sub").onclick=function(){
	 var nameF="";
	 var nameL="";
 nameF=document.getElementById("v1").value;
nameL=document.getElementById("v2").value;	
	document.getElementById("b1").display="none"; 
	document.getElementById("b1").innerHTML=nameF+nameL;
var male="";
      if(radio==male)
	  {
		   
		   male=document.getElementById("v8").value;
    document.getElementById("b2").display="none"; 
	document.getElementById("b2").innerHTML=male;

	  }
	
	var nameI="";
 nameI=document.getElementById("v3").value;
	document.getElementById("b3").display="none"; 
	document.getElementById("b3").innerHTML=nameI;
	
	
  var nameM="";
 nameM=document.getElementById("v4").value;
	document.getElementById("b4").display="none"; 
	document.getElementById("b4").innerHTML=nameM;
	
	 var nameNN="";
 nameNN=document.getElementById("v5").value;
	document.getElementById("b5").display="none"; 
	document.getElementById("b5").innerHTML=nameNN;
	
	 var nameA="";
 nameA=document.getElementById("v7").value;
	document.getElementById("b6").display="none"; 
	document.getElementById("b6").innerHTML=nameA;
	}

