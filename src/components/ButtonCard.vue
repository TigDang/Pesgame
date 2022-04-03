<template>
  <button v-bind:class="{ 'card_item': !isActive, 'card_item_active':isActive, 'true_card':card.isCorrect && isActive && isVisibleResult,'false_card':!card.isCorrect && isActive && isVisibleResult}" @click="selectedCards(card)" :disabled="isDisable">
    <img :src="require(`../assets/cards/${img}`)" alt="">
    <div v-bind:class="{'card_number': !isActive,'card_number_active': isActive, 'true_card_number':card.isCorrect && isActive && isVisibleResult,'false_card_number':!card.isCorrect && isActive && isVisibleResult}">{{card.id}}</div>
    <div class="pic_desc" >{{card.description}}</div>
  </button>
</template>

<script>
export default {
  name: "ButtonCard",
  props:['card','selected', 'isDisable','isVisibleResult'],
  data(){
    return{
      isActive:false,
      img:null,
    }
  },
mounted() {
    this.img=this.card.img.replace(/"/g,'')
},
  methods: {
    selectedCards(card){
      if(!this.selected.includes(card)){
        this.selected.push(card)
      }
      else{
        this.selected.splice(this.selected.indexOf(card),1)
      }
      this.isActive = !this.isActive
    }

  }
}
</script>

<style scoped>

.card_item, .card_item_active, .true_card, .false_card{
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 240px;
  background-color: #ffffff;
  border: none;
  border-radius: 15px;
  padding: 15px;
  cursor: pointer;
  transition: .2s all ease;
}
.card_item_active {
  border: 10px solid #f5d784;
}
.card_item::after {
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: .3s opacity ease;
}
.card_item img, .card_item_active img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
}
.pic_desc {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  font-family: 'Open Sans Condensed', sans-serif;
  color: #ffffff;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  background-color: #165570;
  transform: scale(0);
  opacity: 0.8;
  z-index: 5;
  transition: .3s all ease;
}

.card_item:hover .pic_desc {
  transform: scale(1);
}
.card_number, .card_number_active, .true_card_number, .false_card_number {
  position: absolute;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-size: 20px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  left: 7px;
  top: 7px;
  border-radius: 50%;
  background-color: #165570;
  z-index: 10;
}
.card_number_active{
  background-color: #f5d784;
  color: #165570;
}
.true_card {
  border: 10px solid #88e67c;
}
.false_card {
  border: 10px solid #e37474;
}
.true_card_number {
  background-color: #88e67c;
  color: #165570;
}
.false_card_number {
  background-color: #e37474;
  color: #165570;
}
</style>