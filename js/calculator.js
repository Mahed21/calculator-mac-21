var c=0;
function main(value)
{
     //divide
     if(value=='/')
     {
          if(c==0){
          var paragraphValue=document.getElementById('paragraph');
          const total=document.getElementById('Second-paragraph');
          total.innerText=parseFloat(paragraphValue.innerText);
          var signValue=document.getElementById('sign');
          signValue.innerText='/';
          paragraphValue.innerText='';
          }
          else
          {
            var paragraphValue=document.getElementById('paragraph');
            //console.log(paragraphValue.innerText);
            const total=document.getElementById('Second-paragraph');
            //console.log(total.innerText);
            //sign
            var signValue=document.getElementById('sign');
          if(signValue.innerText=='/'){
             var totalOutcome=parseFloat(total.innerText)/(parseFloat(paragraphValue.innerText))
             total.innerText=totalOutcome;
            }
          else if(signValue.innerText=='-'){
               var totalOutcome=parseFloat(total.innerText)-(parseFloat(paragraphValue.innerText))
               total.innerText=totalOutcome;
              }
          else if(signValue.innerText=='+'){
               var totalOutcome=parseFloat(total.innerText)+(parseFloat(paragraphValue.innerText))
               total.innerText=totalOutcome;
              }
          else if(signValue.innerText=='*'){
               var totalOutcome=parseFloat(total.innerText)*(parseFloat(paragraphValue.innerText))
               total.innerText=totalOutcome;
              }
             signValue.innerText='/';
             //console.log(totalOutcome);
           
             paragraphValue.innerText='';
             
          }
          c=1;
          
         
     }
     //minus
     else if(value=='-')
     {
          if(c==0){
               var paragraphValue=document.getElementById('paragraph');
               const total=document.getElementById('Second-paragraph');
               total.innerText=parseFloat(paragraphValue.innerText);
               var signValue=document.getElementById('sign');
               signValue.innerText='-';
               
               paragraphValue.innerText='';
               }
               else
               {
                 var paragraphValue=document.getElementById('paragraph');
                 //console.log(paragraphValue.innerText);
                 const total=document.getElementById('Second-paragraph');
                 //console.log(total.innerText);
                 //sign
                
                 var signValue=document.getElementById('sign');
               if(signValue.innerText=='/'){
                  var totalOutcome=parseFloat(total.innerText)/(parseFloat(paragraphValue.innerText))
                  total.innerText=totalOutcome;
                 }
               else if(signValue.innerText=='-'){
                    var totalOutcome=parseFloat(total.innerText)-(parseFloat(paragraphValue.innerText))
                    total.innerText=totalOutcome;
                   }
               else if(signValue.innerText=='+'){
                    var totalOutcome=parseFloat(total.innerText)+(parseFloat(paragraphValue.innerText))
                    total.innerText=totalOutcome;
                   }
               else if(signValue.innerText=='*'){
                    var totalOutcome=parseFloat(total.innerText)*(parseFloat(paragraphValue.innerText))
                    total.innerText=totalOutcome;
                   }
                 signValue.innerText='-';
                  
                
                  paragraphValue.innerText='';
                  
               }
               
               c=1;
     }
     //plus
     else if(value=='+')
     {
          if(c==0){
               var paragraphValue=document.getElementById('paragraph');
               const total=document.getElementById('Second-paragraph');
               total.innerText=parseFloat(paragraphValue.innerText);
               var signValue=document.getElementById('sign');
               signValue.innerText='+';
               
               paragraphValue.innerText='';
               }
               else
               {
                 var paragraphValue=document.getElementById('paragraph');
                 //console.log(paragraphValue.innerText);
                 const total=document.getElementById('Second-paragraph');
                 //console.log(total.innerText);
                 //sign
                
                 var signValue=document.getElementById('sign');
               if(signValue.innerText=='/'){
                  var totalOutcome=parseFloat(total.innerText)/(parseFloat(paragraphValue.innerText))
                  total.innerText=totalOutcome;
                 }
               else if(signValue.innerText=='-'){
                    var totalOutcome=parseFloat(total.innerText)-(parseFloat(paragraphValue.innerText))
                    total.innerText=totalOutcome;
                   }
               else if(signValue.innerText=='+'){
                   
                    var totalOutcome=parseFloat(total.innerText)+(parseFloat(paragraphValue.innerText))
                    total.innerText=totalOutcome;
                   }
               else if(signValue.innerText=='*'){
                    var totalOutcome=parseFloat(total.innerText)*(parseFloat(paragraphValue.innerText))
                    total.innerText=totalOutcome;
                   }
                 signValue.innerText='+';
                  
               
                  paragraphValue.innerText='';
               }
               
               c=1;  
     }
     //multiply
     else if(value=='*')
     {
          if(c==0){
               var paragraphValue=document.getElementById('paragraph');
               const total=document.getElementById('Second-paragraph');
               total.innerText=parseFloat(paragraphValue.innerText);
               var signValue=document.getElementById('sign');
               signValue.innerText='*';
               
               paragraphValue.innerText='';
               }
               else
               {
                 var paragraphValue=document.getElementById('paragraph');
                 //console.log(paragraphValue.innerText);
                 const total=document.getElementById('Second-paragraph');
                 //console.log(total.innerText);
                 //sign
                
                 var signValue=document.getElementById('sign');
               if(signValue.innerText=='/'){
                  var totalOutcome=parseFloat(total.innerText)/(parseFloat(paragraphValue.innerText))
                  total.innerText=totalOutcome;
                 }
               else if(signValue.innerText=='-'){
                    var totalOutcome=parseFloat(total.innerText)-(parseFloat(paragraphValue.innerText))
                    total.innerText=totalOutcome;
                   }
               else if(signValue.innerText=='+'){
                   
                    var totalOutcome=parseFloat(total.innerText)+(parseFloat(paragraphValue.innerText))
                    total.innerText=totalOutcome;
                   }
               else if(signValue.innerText=='*'){
                    var totalOutcome=parseFloat(total.innerText)*(parseFloat(paragraphValue.innerText))
                    total.innerText=totalOutcome;
                   }
                 signValue.innerText='*';
                  
                  
                  paragraphValue.innerText='';
               }
               
               c=1;
     }
     else if(value=='C')
     {
          const inputField=document.getElementById('input');
          inputField.value=''; 
          const n=document.getElementById('paragraph');
          n.innerText='';
          const n1=document.getElementById('Second-paragraph');
          n1.innerText='';
          const n2=document.getElementById('sign');
          n2.innerText='';
          c=0;
   

         
     }
     else if(value=='=')
     {
          const inputField=document.getElementById('input');
          inputField.value='';
          var paragraphValue=document.getElementById('paragraph');
          //console.log(paragraphValue.innerText);
          const total=document.getElementById('Second-paragraph');
          //console.log(total.innerText);
          //sign
         
          var signValue=document.getElementById('sign');
        if(signValue.innerText=='/'){
           var totalOutcome=parseFloat(total.innerText)/(parseFloat(paragraphValue.innerText))
           total.innerText=totalOutcome;
          }
        else if(signValue.innerText=='-'){
             var totalOutcome=parseFloat(total.innerText)-(parseFloat(paragraphValue.innerText))
             total.innerText=totalOutcome;
            }
        else if(signValue.innerText=='+'){
             
             var totalOutcome=parseFloat(total.innerText)+(parseFloat(paragraphValue.innerText))
             total.innerText=totalOutcome;
            }
        else if(signValue.innerText=='*'){
             var totalOutcome=parseFloat(total.innerText)*(parseFloat(paragraphValue.innerText))
             total.innerText=totalOutcome;
            }
            inputField.value=totalOutcome; 
            const n=document.getElementById('paragraph');
            n.innerText=totalOutcome;
            console.log(n.innerText);
            const n1=document.getElementById('Second-paragraph');
            n1.innerText='';
            const n2=document.getElementById('sign');
            n2.innerText='';
            c=0;
           
            
     }
     

    if(value!='=' && value!='C'){ 
    const inputField=document.getElementById('input');
    var number=(inputField.value).toString();
    var valueString=(value.toString());
    inputField.value=number+valueString;
    console.log()
    }
   
    
   
    
   
    //var changingValue=inputField.value;
    if(value!='/' && value!='-' && value!='+' && value!='*' && value!='C' ){
    const changingValue=document.getElementById('paragraph')
    changingValue.innerText=(changingValue.innerText).toString()+(value.toString());
    } 
          
    

}

document.getElementById('one').addEventListener('click',function()
{
    
    main(1);
})
//two
document.getElementById('two').addEventListener('click',function()
{
    
    main(2);
})
//three
document.getElementById('three').addEventListener('click',function()
{
    
     main(3);
})
//divide
document.getElementById('divide').addEventListener('click',function()
{
    
     main('/');
})
//four
document.getElementById('four').addEventListener('click',function()
{
    
     main(4);
})
//five
document.getElementById('five').addEventListener('click',function()
{
    
     main(5);
})
//six
document.getElementById('six').addEventListener('click',function()
{
    
     main(6);
})
//minus
document.getElementById('minus').addEventListener('click',function()
{
    
     main('-');
})
//seven
 document.getElementById('seven').addEventListener('click',function()
{
    
     main(7);
})
//eight
document.getElementById('eight').addEventListener('click',function()
{
    
     main(8);
})
//nine
document.getElementById('nine').addEventListener('click',function()
{
    
     main(9);
})
//plus
document.getElementById('plus').addEventListener('click',function()
{
    
     main('+');
})
//dot
document.getElementById('dot').addEventListener('click',function()
{
    
     main('.');
})
//zero
document.getElementById('zero').addEventListener('click',function()
{
    
     main(0);
})
//equal
document.getElementById('equal').addEventListener('click',function()
{
    
     main('=');
})
//star
document.getElementById('star').addEventListener('click',function()
{
    
     main('*');
})

//clear
document.getElementById('clear').addEventListener('click',function()
{
    
     main('C');
})


