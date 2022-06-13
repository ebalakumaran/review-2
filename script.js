let bar=document.getElementsByClassName('bar');
let nav=document.getElementsByClassName('navbar');
let close=document.getElementById('close')


console.log(close);
if(bar){
    bar[0].addEventListener('click',()=>{
        nav[0].classList.add('active');
    })
}

if (close){
    close.addEventListener('click',()=>{
        nav[0].classList.remove('active');
    })
}


function deleteEle(e){
  var t=e.parentNode.parentNode.className;
  var te=t.split('tr');
  localStorage.removeItem(te[1]);

  location.reload();
  
}
