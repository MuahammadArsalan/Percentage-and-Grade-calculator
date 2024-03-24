var input1 =document.querySelector(".input1");
var input2 =document.querySelector(".input2");
var input3 = document.querySelector(".input3");
var input4 = document.querySelector(".input4");
var input5 = document.querySelector(".input5");
var input6 = document.querySelector(".input6");
var paragraph = document.querySelector(".para");
var head = document.querySelector(".head")




function  getInputUser(){
 console.log(input1.value);
 console.log(input2.value); 
 console.log(input3.value);
 console.log(input4.value);
 console.log(input5.value);
 console.log(input6.value);

 console.log ("Obtained Marks = ", Number(input1.value)+ Number(input2.value)  + Number(input3.value) + Number(input4.value)+ Number(input5.value)+Number(input6.value));
 
 var totalMarks = 550;
 
 var obatinedMarks= (Number(input1.value)+ Number(input2.value)  + Number(input3.value) + Number(input4.value) +Number(input5.value)+Number(input6.value));
 
 var percentage = obatinedMarks / totalMarks * 100;

 var grade = "";

 if (percentage<=30 ){
    grade = ("Failed"+ "<br>" + "<br>" +"  Need to work hard !")
}else if (percentage>30  && percentage <= 40){
    grade = (" E " + "<br>"+"<br>"+"  Need to improve !");
}   else if (percentage>40  && percentage <= 50){
    grade= (" D " +"<br>"+ "<br>"+" Keep it up !")
}   else if (percentage>50  && percentage <= 60){
    grade = (" C " + "<br>"+"<br>"+" Welldone Keep it up !")
}   else if (percentage>60  && percentage <= 70){
    grade = ("B "+ "<br>"+ "<br>"+"  Good Performance!")
}   else if (percentage>70  && percentage <= 80){
    grade = (" A "+"<br>"+"<br>"+ "Well Acheivement!")
}      else if (percentage>80  && percentage <= 100){
    grade = ("A-one "+"<br>"+"<br>"+ " Top Performer!")
}    


 input1.value="";
 input2.value="";
 input3.value="";
 input4.value="";
 input5.value="";
 input6.value="";

 
 
 
 return paragraph.innerHTML = ("<b>"+ "Total Marks = " + totalMarks + "<br>"+ "<br>" + "Obatained Marks = " + obatinedMarks + "<br>"+"<br>" + "Percentage = " + percentage + "%" + "<br>"+"<br>" + "Grade = "+ grade + "</b>")
 
}

function changeText(){
    if(head.innerHTML==="Generate your result:"){
        head.innerHTML = "Result Generated "
    }else{
        head.innerHTML ="Generate your result:"
    }
}






 


















// var input1 = document.querySelector(".input1");
// var input2 = document.querySelector(".input2");
// var input3 = document.querySelector(".input3");
// var input4 = document.querySelector(".input4");


















































// var inputChem =document.querySelector(".chem");
// var inputPhy =document.querySelector(".phy");
// var inputMath =document.querySelector(".math");
// var inputEng =document.querySelector(".eng");
// var paragraph = document.querySelector(".para");

// function getInputUser( c,p ,m,e){
    //     console.log(inputChem.value);
    //     console.log(inputPhy.value);
    //     console.log(inputMath.value);
    //     console.log(inputEng.value);
    
    // }
    // function percentageCal(){
        //     var paragraph =document.querySelector(".para")
        
        //     paragraph.innerHTML= "Total Marks = 400";
        // }
        
        // var input =document.querySelector(".input")
        // function getInputUser(){
            //     console.log(input.value)
//     console.log(input.value = " ")
// }
















// console.log(input.value);































// var para = document.querySelector("#para");

// para.innerHTML="Paragraph is changing through java Script. "


// var list =document.querySelector('#list')
// function changeList(){
//    if(list.innerHTML ===`<li>JavaScript</li>
//    <li>Python</li>
//    <li>PHP</li>`) {
//     list.innerHTML=`<li>Home</li>
//     <li>About</li>
//     <li>Contact</li>`
//    }else{
//     list.innerHTML =`<li>JavaScript</li>
//    <li>Python</li>
//    <li>PHP</li>`
//    }

// }

