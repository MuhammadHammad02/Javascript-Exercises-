let currentuser = ['wali','arshad','qureshi','rizwan', 'sohail'];

let newuser = ['javaid','wali','arhsad','hizbu','aslam'];

for (let i = 0; i < newuser.length; i++) {
    if(currentuser.includes(newuser[i])) {
        console.log(newuser[i], "this user name is already exist, please try again later")
    }else {
        console.log("this user name is available")
    }
}
