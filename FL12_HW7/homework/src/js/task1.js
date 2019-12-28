let emailMinLength = 5;
let passMinLen = 6;
let userPassword, oldPasword, confirmation, newUserPass, checkNewPass= '';
let users = {
    CORRECTuserEmail : 'user@gmail.com',
    CORRECTadminEmail : 'admin@gmail.com',
    CORRECTadminPAS : 'AdminPass',
    CORRECTuserPas : 'UserPass'
};
let userEmail = prompt('Input your email', '').trim();
let istrueMail = userEmail === users.CORRECTuserEmail || userEmail === users.CORRECTadminEmail;
    if(!userEmail){
        alert('Canceled');
    } else if(userEmail.length < emailMinLength){
        alert(`I don't know any emails having name length less than 5 symbols`)
    }else if (istrueMail){
        userPassword = prompt('Input your password ', '').trim();
        let istrueAdmin = userPassword === users.CORRECTadminPAS && userEmail === users.CORRECTadminEmail;
        let istrueUser = userPassword === users.CORRECTuserPas && userEmail === users.CORRECTuserEmail;
        if(!userPassword){
            alert('Canceled');
        }else if(istrueAdmin || istrueUser){
            confirmation = confirm(`Do you want to change your password?`);
            if(!confirmation){
                alert(`You have failed the change.`);
            }else{
                oldPasword = prompt('Input your current password', '');
                if(!oldPasword){
                    alert('Canceled');
                }else if(istrueUser && oldPasword === users.CORRECTuserPas 
                      || istrueAdmin && oldPasword === users.CORRECTadminPAS ){
                    newUserPass = prompt(`Input new password`, '').trim();
                    if(!newUserPass){
                        alert(`Canceled`);
                    }else if(newUserPass.length < passMinLen){
                        alert(`It’s too short password. Sorry.`)
                    }else{
                        checkNewPass = prompt(`Enter a new password again`).trim();
                        if (checkNewPass === newUserPass){
                            alert(`You have successfully changed your password.`)
                        }else{
                            alert(`You wrote the wrong password.`)
                        }
                    }
                }else{
                    alert(`Wrong password`);
                }
            }
        }else{
            alert(`Wrong password`);
        }
    }else{
        alert(`I don’t know you`);
    }

