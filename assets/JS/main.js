//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const{createApp} = Vue 
createApp({
    data(){
        return {
            sentence: "Hello world!"
        }
    }
}).mount("#app")