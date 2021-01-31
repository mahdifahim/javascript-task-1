

function addRow(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var contry=document.getElementById("contry").value;


    var table=document.getElementsByTagName("table")[0];
    if(!name||!age||!contry){
        alert("الرجاء ملئ جميع الحقول");
        return;
    }
    
    var newrow=table.insertRow(1);
    
    var cell1=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);
    var cell3=newrow.insertCell(2);
   

    cell1.innerHTML=name;
    cell2.innerHTML=age;
    cell3.innerHTML=contry;

   
   
}
function showtable1() {
    var x = document.getElementById("info");
    y = document.getElementById("add-info");
  
    if (x.style.display === "none" || x.style.display==="") {
      y.style.display="none"
     
      x.style.display = "block";
    } else {
      x.style.display = "none";
     
     
    }
  }
function showtable2() {
    var x = document.getElementById("add-info");
     y= document.getElementById("info");
    
    if (x.style.display === "none" ||x.style.display === "") {
      y.style.display="none"
  
      x.style.display = "block";
    } else {
      x.style.display = "none";
     
    }
  }
  