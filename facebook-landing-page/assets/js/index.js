const slides = document.querySelectorAll('.slides')
const dots = document.querySelectorAll('.dot')

function SetActive(i){
    for(slide of slides){
        slide.classList.remove('active')
        slides[i].classList.add('active')
    }

    for(dot of dots){
        dot.classList.remove('active')
        dots[i].classList.add('active')
    }
}

for (let j = 0; j<dots.length; j++){
    dots[j].addEventListener('click', function(){
        SetActive(j)
    })
}