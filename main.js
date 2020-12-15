//Istruzioni: Ricreare lo slider di immagini ma questa volta con Vue
let app = new Vue ({
    el: '#app',
    data: {
        counter: 0,
        images: [
            './img/bugatti.jpg',
            './img/model-s.jpg',
            './img/s60-polestar.png',
            './img/superveloce.jpg',
            './img/mx-5.jpg'
        ]
    },
    methods: {
        next(){
            this.counter++
            if (this.counter === this.images.length){
                this.counter = 0
            }
        },
        prev(){
            if(this.counter > 0){
                this.counter--;
            } else {
                this.counter = this.images.length - 1;
            }
        }
    }
})