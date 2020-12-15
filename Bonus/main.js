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
        ],
    },
    methods: {
        next(){
            this.counter++;
            if (this.counter > this.images.length - 1){
                this.counter = 0
            }
        },
        prev(){
            this.counter--;
            if(this.counter < 0){
                this.counter = this.images.length - 1;
            }
        },
    },  
    mounted() {
        setInterval(this.next, 3000)
    },
})

//Bonus ufficiale:
//Facciamo in modo che il nostro slider scorra automaticamente in avanti, e ogni 3 secondi visualizzi un immagine differente.
//Tip: possiamo usare una lifecycle Hook per inserire un nostro script quando l'istanza Vue é stata caricata.