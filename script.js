const images = document.querySelectorAll('#imagens img')
let slider = 0

function percorrendo(index){
    images.forEach((img, i) => {
        img.classList.toggle('ativa', i === index)
    })
}

document.getElementById('vai').addEventListener('click', () => {
    slider = (slider + 1) % images.length
    percorrendo(slider)
})

document.getElementById('volta').addEventListener('click', () =>{
    slider = (slider - 1 + images.length) % images.length
    percorrendo(slider)
})

setInterval(() => {
    slider = (slider + 1) % images.length;
    percorrendo(slider);
  }, 5000); 

  