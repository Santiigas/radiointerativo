const novacor = document.querySelector(".radio");
const corbotao = document.querySelector(".botaoPlay")

function mudarcor1(){
    novacor.style.background = '#186fd3'
    corbotao.style.background = '#186fd3'
}

function mudarcor2(){
    novacor.style.background = '#237c45'
    corbotao.style.background = '#237c45'
}

function mudarcor3(){
    novacor.style.background = '#854848'
    corbotao.style.background = '#854848'
}

const button = document.querySelector('button')
button.addEventListener('click', function(){
    const audio = document.querySelector('audio')
    audio.play()
})
