var backs=document.querySelectorAll('.back');

backs.forEach(back => {
    back.addEventListener('click',()=>{
        removeClass()
        back.classList.add('action');
    })
})

function removeClass(){
    backs.forEach(back => {
        back.classList.remove('action');
    })
}