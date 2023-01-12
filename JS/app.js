$('#header-burger').addEventListener('click',() =>{
    $('#header__mobile').classList.toggle('header-bar__transform')
    $('body').classList.add('overflow')
})
$('#header-xmark').addEventListener('click',() =>{
    $('#header__mobile').classList.toggle('header-bar__transform')
    $('body').classList.remove('overflow')
})