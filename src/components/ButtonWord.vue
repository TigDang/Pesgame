<template>
  <button v-bind:class="{ 'word_button_clicked': isActive, 'word_button':!isActive, 'true_word':word.isIncorrect && isActive && isVisibleResult,'false_word':!word.isIncorrect && isActive && isVisibleResult}" @click="selectedWords(word)" :disabled="isDisable">{{word.text}}</button>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,//выделение нажатых кнопок
    }
  },
  name: "ButtonWord",
  props:['selected','word','isDisable','isVisibleResult'],
  methods:{
selectedWords(word) {
      if(!this.selected.includes(word)){
        this.selected.push(word)
      }
      else{
        this.selected.splice(this.selected.indexOf(word),1)
      }
      this.isActive = !this.isActive
    },
  }
}
</script>

<style lang="css">
.word_button {
  background-color: rgb(0,0,0,0);
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  line-height: 160%;
  color: inherit;
  border: none;
  transition: all ease .2s;
  padding: 1px 8px;
}

.word_button:hover {
  font-weight: 600;
  padding: 1px 4px;
}
.word_button_clicked{
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  line-height: 150%;
  color: inherit;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  background-color: #f5d784;
  margin: 1px;
  padding: 1px 4px;
}
.true_word {
  background-color: #88e67c;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  line-height: 150%;
  color: inherit;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  margin: 1px;
}
.false_word {
  background-color: #e37474;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  line-height: 150%;
  color: inherit;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  margin: 1px;
}
</style>