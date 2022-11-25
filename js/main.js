const { createApp } = Vue;

createApp ({
    data() {
        return {
            title: 'Titolone'
        }
    }
}).mount('#title');

createApp ({
    data() {
        return {
            imgSource: 'img/Rick.img'
        }
    }
}).mount('#image');
