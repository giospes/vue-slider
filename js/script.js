

const app = Vue.createApp({
    data (){
        return{
            message: 'ciclando',
            images : [
                {
                    source: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    source: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    source: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    source: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    source: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },

    methods: {

    }

})
app.mount('#app')










// function goNext(){
//     document.querySelectorAll('.gs-img-effect')[currentImg].classList.remove('active');
//     if(currentImg === img.length - 1){
//         currentImg = 0;
//     }
//     else{
//         currentImg++;  
//     }
//     document.querySelectorAll('.gs-img-effect')[currentImg].classList.add('active');
//     let show =  `<img src="./img/${img[currentImg]}" alt="" class=" w-100 h-100 object-fit-cover">`
//     slide.innerHTML = `${show}`
    
// }

// function goPrev(){
//     document.querySelectorAll('.gs-img-effect')[currentImg].classList.remove('active');
//     if(currentImg === 0){
//         currentImg = img.length - 1;
//     }
//     else{
//         currentImg--;  
//     }
//     document.querySelectorAll('.gs-img-effect')[currentImg].classList.add('active');
//     let show =  `<img src="./img/${img[currentImg]}" alt="" class=" w-100 h-100 object-fit-cover">`
//     slide.innerHTML = `${show}`
// }
