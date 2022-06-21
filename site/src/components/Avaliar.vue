<template>
    <div class="container">
        <p>avalie o produto</p>
        <input type="text" name="avaliacao" id="review" placeholder="escreva sua avalaiação" v-model="this.review.text">
        <input type="number" name="avaliacao" id="rating" v-model="this.review.rating">
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
            text: '',
            rating: 0,
        }
        }
    },
    methods: {
        getUser(){
            return JSON.parse(localStorage.getItem('user'))
        },
        getProduct() {
            return JSON.parse(localStorage.getItem('items')).find(product => product.id === this.id)
        },
        postReview(){
            let reviews = this.getProduct().reviews
            this.review.userName = this.getUser().name
            reviews.push(this.review)
            console.log(reviews)

        }
    }
}
</script>


<style>

</style>