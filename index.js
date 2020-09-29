const inputvalue=document.getElementById('inputdata')
let randomNumber
let attempts=0
let remaining=10
let result =document.getElementById('result')
let div=document.getElementById('game')
let btn=document.getElementById('startbtn')
let retrybtn=document.getElementById('retry')
let sbmtbtn=document.getElementById('submitbtn')

function start(){
    btn.classList.add('hide')
    sbmtbtn.classList.remove('hide')
    div.classList.remove('hide')
    retrybtn.classList.add('hide')
    result.innerHTML=''
    attempts=0
    remaining=10
    inputvalue.value=null
    randomNumber=randomNum()
    setvalues(attempts,remaining)
    console.log(randomNumber);
}

function checkNumber(){
    let inputnum=Number(inputvalue.value)
    if(inputnum==randomNumber){
        attempts++;
        remaining--;
        setvalues(attempts,remaining)
        result.innerHTML="Congratulation ! Your Guess is correct";
        result.classList.remove('warning')
        result.classList.add('scuess')
        sbmtbtn.classList.add('hide')
        retrybtn.classList.remove('hide')
    }else{
        attempts++;
        remaining--;
        if(remaining>0){
            if(inputnum < randomNumber){
                let value=randomNumber-inputnum
                if(value<10){
                    result.innerHTML="Oops you are closer to Number ! You have another " +remaining +" attempts" 
                }else{
                    result.innerHTML="Oops your guess too low ! You have another " +remaining +" attempts" 
                }
               
            }else{
                let value=inputnum-randomNumber
                if(value <10){
                    result.innerHTML="Oops you are closer to Number ! You have another " +remaining +" attempts" 
                }else{
                    result.innerHTML="Oops your guess too high ! You have another " +remaining +" attempts" 
                }
            }
            result.classList.remove('danger')
            result.classList.add('warning')
            setvalues(attempts,remaining)
            
        }else{
            result.innerHTML="Oops ! You had completed 10 attempts please retry" 
            setvalues(attempts,remaining)
            result.classList.remove('warning')
            result.classList.add('danger')
            sbmtbtn.classList.add('hide')
            retrybtn.classList.remove('hide')
        }
       
    }
}

function number(event){
    let inputnum=event.key.charCodeAt()
    if(inputnum >=48 && inputnum <=57)
        return true
    else
        return false
}

function retry(){
    div.classList.remove('display')
    div.classList.add('hide')
    btn.classList.remove('hide')
}

function randomNum(){
    return Math.floor(Math.random() * 101)
}

function setvalues(u,r){
    let attemptsused=document.getElementById('attemptsused')
    let setremainig=document.getElementById('attemptsremain')
    
    attemptsused.innerHTML=u
    setremainig.innerHTML=r
}

