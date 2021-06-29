// eslint-disable-next-line no-undef
new Vue({
    el: '#desafio',
    data: {
        nome: 'Vinicius',
        idade: 15,
        imagem: 'https://miro.medium.com/max/2625/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg'
    },
    methods: {
        idadeMultiplicadaPor3() {
            return this.idade * 3
        }
    }
})