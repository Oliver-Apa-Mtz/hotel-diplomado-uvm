<template>
    <div class="Card">
        <div class="Card__image" :id="id"></div>
        <div class="Card__text">
            <p class="Card__text__title">{{data.name}}</p>
            <p class="Card__text__sub">${{data.price}} + IVA</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['id', 'data'],
    data () {
        return {
            
        }
    }
}
</script>
<style>
.Card{
    width: 90%;
    height: 320px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0,0,0,.1);
}
.Card__image{
    width: 100%;
    height: 250px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
.Card__text{
    padding: 14px 20px;
}
.Card__text p{
    margin-bottom: 0px;
    font-size: .8rem;
    font-weight: 300;
}
.Card__text__title{
    font-weight: normal !important;
}
#card1{
    background-image: url(../../assets/slider-1.jpg);
}
#card2{
    background-image: url(../../assets/slider-2.jpg);
}
#card3{
    background-image: url(../../assets/slider-3.jpg);
}
</style>