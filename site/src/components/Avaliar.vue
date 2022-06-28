<template>
    <div class="container">
        <p>avalie o produto</p>
        <input type="text" name="avaliacao" id="review" placeholder="escreva sua avalaiação" v-model="this.review.comment">
        <input type="number" name="avaliacao" id="rating" v-model="this.review.stars" min="0" max="5">
        <button @click="postReview">enviar</button>
    </div>
</template>

<script>
export default {
    props: {
        id: 0,
    },
    data() {
        return {
        review: {
            userName: '',
            email: '',
            comment: '',
            stars: 0
        },
        user: {},
        product: {}
        }
    },
    created () {
        this.user = this.getUser()
    },
    methods: {
        getUser(){
            return JSON.parse(localStorage.getItem('user'))
        },
        getProduct() {
            return JSON.parse(localStorage.getItem('items')).find((product) => product.id === this.id)
        },
        postReview(){
            if (this.user === null) {
                alert('Você precisa estar logado para avaliar')
                window.location.href = '/login'
                return
            }
            const items = JSON.parse(localStorage.getItem('items'))
                console.log(items)
            const product = items.find((product) => product.id === this.id)
            this.review.userName = this.user.personalInfo.name
            this.review.email = this.user.personalInfo.email
            product.rating.totalStars = (this.review.stars + product.rating.totalStars)/2
            product.rating.feedbacks.push(this.review)
            console.log(product.rating)
            console.log(items)
            localStorage.setItem('items', JSON.stringify(items))
            console.log("review enviada")
            },
    }
}
</script>


<style>

</style>