
//////slider cange code////////////


const  imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn =document.querySelector('.control-prev');
const next_btn =document.querySelector('.control-nxt');
let n = 0;
function changeslide(){
    for (let i =0; i<imgs.length; i++){


        imgs[i].style.display ='none';

    }
    imgs[n].style.display='block';

    }

changeslide();



prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;

    }else{
        n = imgs.length-1;
    }
    changeslide();
})
next_btn.addEventListener('click',(e)=>{
    if(n <imgs.length-1){
        n++;

    }else{
        n =0;
    }
    changeslide();
})


///////slider change code finish////////////



////scroll coding//////

const scrollcontainer= document.querySelectorAll('.products');
for(const item of scrollcontainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft +=evt.deltaY;
    })
}

/////scroll coding finish////