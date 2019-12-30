let min = 0;
let max = 8;
let pockets = 8;
let increm = 4;
let initiaPriz = 100;
let userChoise;
let atempt = 3;
let initialAtempts = 3;
let totalPrize = 0;
let prize = 0;
let shouprize = initiaPriz;
let devider = 2;
let userAgreed;
let istrue;
let maxPrize = initiaPriz;

let landingPocket = Math.floor(Math.random() * (max - min+1)) + min;
userAgreed = confirm('Do you want to play?');
if(!userAgreed){
alert('You did not become a billionaire, but can.');
}else{
    do{
        console.log(landingPocket);
        istrue = atempt !== 0 && userAgreed;
        userChoise = +prompt(`Choose a roulet pocket from ${min} to ${max}
Atempts left: ${atempt}
Total prize: ${totalPrize}$
Possible prize at current attempt: ${shouprize}$`);
        if(userChoise === landingPocket){
            prize += shouprize;
            userAgreed = confirm(`Congratulation, you won!   Your prize is:${shouprize} $. Do you want to continue?`);
            if(userAgreed){
                totalPrize = prize;
                maxPrize *= devider;
                shouprize = maxPrize;
                atempt = initialAtempts;
                max += increm;
                landingPocket = Math.floor(Math.random() * (max - min+1)) + min;
            }else{
                totalPrize = prize;
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                userAgreed = confirm(`Do you want to play againe?`);
                if(userAgreed){
                    shouprize = initiaPriz;
                    maxPrize = initiaPriz;
                    prize =0;
                    atempt = initialAtempts;
                    totalPrize= 0;
                    max = pockets;
                    landingPocket = Math.floor(Math.random() * (max - min+1)) + min;
                }else{
                    break;
                }
            }
        }else {
            shouprize /= devider;
            atempt--;
            if (atempt === 0){
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                userAgreed = confirm(`Do you want to play againe?`);
                if(userAgreed){
                    shouprize = initiaPriz;
                    maxPrize = initiaPriz;
                    prize =0;
                    atempt = initialAtempts;
                    totalPrize= 0;
                    max = pockets;
                    landingPocket = Math.floor(Math.random() * (max - min+1)) + min;
                }else{
                    break;
                }
            }
        }
    }while(istrue);
}
