const app = new Vue({

    el: "#app",

    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],

        activeSlide: 0,

        isPaused : false

    },

    methods: {
        counterUp(){
            this.activeSlide++;

            if(this.activeSlide > this.slides.length -1){
                this.activeSlide = 0;
            }
        },

        counterDown(){
            this.activeSlide--;

            if(this.activeSlide < 0){
                this.activeSlide = this.slides.length -1;
            }
        },

        startAndStop(){
            return this.isPaused = !this.isPaused
        },

        sliding(){
            setInterval(() => {
                if(this.isPaused === false){
                    this.counterUp();
                }else{
                    clearInterval(setInterval())
                }
            }, 3000)
        }
    },

    mounted(){
        this.sliding()
    }
})  


