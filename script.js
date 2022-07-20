const boxDOM = document.querySelector('.box');

const handleClick = () => {
    if(boxDOM.className.indexOf('active') != -1) {
        boxDOM.classList.add('returnBack');
        boxDOM.classList.remove('active');
    } else {
        boxDOM.classList.add('active');
        boxDOM.classList.remove('returnBack');
    }
}
boxDOM.addEventListener('click', handleClick);