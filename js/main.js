const { createApp } = Vue;

createApp ({
    data() {
        return {
            title: 'Hello Vue!',
            imageSrc : 'img/Rick.png'
        }
    }
}).mount('#title');