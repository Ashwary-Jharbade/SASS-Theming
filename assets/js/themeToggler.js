const numberOfThemes = 3; 
let flag = 0;

const changeTheme = (para) => {
    flag = flag + para;
    if (flag == numberOfThemes+1){
        flag = 1;
    }

    document.body.classList = `theme-${flag}`;     
}