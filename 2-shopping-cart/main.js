const counterApple=document.getElementById('counterApple');
const buttonPlusApple=document.getElementById('plusApple');
const buttonMinusApple=document.getElementById('minusApple');

const counterBannana=document.getElementById('counterBannana');
const buttonPlusBannana=document.getElementById('plusBannana');
const buttonMinusBannana=document.getElementById('minusBannana');

const counterCherries=document.getElementById('counterCherries');
const buttonPlusCherries=document.getElementById('plusCherries');
const buttonMinusCherries=document.getElementById('minusCherries');

let counterValueApple=0;
const applePrice=0.97;
let counterValueBannana=0;
const bannanaPrice=1.03;
let counterValueCherries=0;
const cherriesPrice=7.98;


buttonPlusApple.addEventListener('click',moreApple);
buttonMinusApple.addEventListener('click',lessApple);
buttonPlusBannana.addEventListener('click',moreBannana);
buttonMinusBannana.addEventListener('click',lessBannana);
buttonPlusCherries.addEventListener('click',moreCherries);
buttonMinusCherries.addEventListener('click',lessCherries);

function total(){
    document.getElementById("total").innerHTML = counterValueApple*applePrice +cherriesPrice*counterValueCherries+counterValueBannana*bannanaPrice;
} 

function moreApple(){
    counterValueApple++;
    
    counterApple.innerHTML=counterValueApple+' articles';
    if(counterValueApple== 1){
        counterApple.innerHTML=counterValueApple+' article';
    }
    else{
        counterApple.innerHTML=counterValueApple+' articles';  
    }
    total();
}


function lessApple(){
    counterValueApple--;
    
    if(counterValueApple<=0){
        counterValueApple=0 ;
        counterApple.innerHTML=counterValueApple+' article';
    }
    else if(counterValueApple== 1){
        counterApple.innerHTML=counterValueApple+' article';
    }
    else{
        counterApple.innerHTML=counterValueApple+' articles';
    }
    total();
 
}

function moreBannana(){
    counterValueBannana++;
    
    counterBannana.innerHTML=counterValueBannana+' articles';
    if(counterValueBannana== 1){
        counterBannana.innerHTML=counterValueBannana+' article';
    }
    else{
        counterBannana.innerHTML=counterValueBannana+' articles';  
    }
    total();
  
}


function lessBannana(){
    counterValueBannana--;
    
    if(counterValueBannana<=0){
        counterValueBannana=0 ;
        counterBannana.innerHTML=counterValueBannana+' article';
    }
    else if(counterValueBannana== 1){
        counterBannana.innerHTML=counterValueBannana+' article';
    }
    else{
        counterBannana.innerHTML=counterValueBannana+' articles';
    }
    total();
    
}

function moreCherries(){
    counterValueCherries++;
    
    counterCherries.innerHTML=counterValueCherries+' articles';
    if(counterValueCherries== 1){
        counterCherries.innerHTML=counterValueCherries+' article';
    }
    else{
        counterCherries.innerHTML=counterValueCherries+' articles';  
    }
    total();
    
}


function lessCherries(){
    counterValueCherries--;
    
    if(counterValueCherries<=0){
        counterValueCherries=0 ;
        counterCherries.innerHTML=counterValueCherries+' article';
    }
    else if(counterValueCherries== 1){
        counterCherries.innerHTML=counterValueCherries+' article';
    }
    else{
        counterCherries.innerHTML=counterValueCherries+' articles';
    }
    total();
   
}
