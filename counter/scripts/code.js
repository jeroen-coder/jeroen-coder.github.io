const setup = () => {
    if(localStorage.getItem('sorryCounter') === null){
        localStorage.setItem('sorryCounter', '0');
    }

    changeCounter();

    let btn_sorry = document.getElementById("btn_sorry");
    btn_sorry.addEventListener('click', saidSorry)

}

const saidSorry = () => {
    sorryCounter = parseInt(localStorage.getItem('sorryCounter'));
    sorryCounter++;
    localStorage.setItem('sorryCounter', sorryCounter);
    changeCounter();
}

const changeCounter = () => {
    let txt_count = document.getElementById("count");
    txt_count.innerHTML = localStorage.getItem('sorryCounter');
    console.log(localStorage.getItem('sorryCounter'));

}
window.addEventListener("load", setup);