<template>
  <div class="wrapper">
    <header class="header">
      <div class="header_block container">
        <div class="left_block">
          <div class="player">Игрок: {{username}}</div>
          <div class="timer" v-if="!isVisibleResult">Оставшееся время: <span>{{minutes}}</span> мин <span>{{seconds}}</span> сек</div>
        </div>
        <div class="center_block">
          <div class="level">Уровень 2</div>
          <div class="score" >Общий счет: {{score}}</div>
        </div>

        <div class="right_block">
          <router-link :to="{name:'main_menu', params:{name:username, allScore:score}}" class="back_to_levels" >Счет игры</router-link>
          <router-link :to="{name:'main'}" class="back_to_levels" >Выйти из игры</router-link>
        </div>

      </div>
    </header>
    <div class="main_block container">
      <div class="main_block_body">
        <div class="task_text"><span>Задание:</span> Перед вами представлены карточки. Выберите все, которые означают слово, начинающееся на букву "А"</div>
        <div class="cards">
          <div class="cards_block" v-for="card in allCards" :key="card.id">
            <ButtonCard :card="card" :selected="selected" :isDisable="isDisable" :isVisibleResult="isVisibleResult"></ButtonCard>
          </div>
        </div>
        <div class="down_block">
          <div class="words_block">
            <div class="title_select" >Выбранные карточки:</div>
            <div class="selected_words" v-for="card in selected" :key="card.id">
              {{card.id}}
            </div>
          </div>
          <button class="check_button" v-on:click="checkSelected" v-if="!isVisibleResult" >Проверить</button>
        </div>
        <div v-bind:class="{'down_block': isVisibleResult, 'not_visible': !isVisibleResult}">
          <div class="result_block">
            <div class="title_result">Ваш результат:</div>
            <div class="result_item">Количество правильно выбранных карточек - <span>{{countTrue}} из {{correctCards.length}}</span></div>
            <div class="result_item">Количество неправильно выбранных карточек - <span>{{countFalse}}</span></div>
            <div class="result_item">Счет - <span>{{scoreLevel}} из {{maxScore}}</span></div>
          </div>
          <div class="button_block">
            <div v-if="!isVisibleAgain">
              <router-link :to="{name: 'text_game_2', params:{name:username, allScore:score}}" class="next_button" >Следующий уровень</router-link>
            </div>
            <button class="next_button" onclick="window.location.reload()">Пройти снова</button>
          </div>
        </div>
        <div class="again_text" v-if="isVisibleAgain">Попробуй снова, у тебя обязательно все получится!</div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCard from "@/components/ButtonCard";

export default {
  name: "card_game",
  components: {ButtonCard},
  comments: {
    ButtonCard: ButtonCard
  },
  data(){
    return{
      username:null,
      score: null,
      currentTime: 300,
      minutes: 5,
      seconds: '00',
      timer: null,
      isVisibleResult: false, //показ блока с результатами, показ таймера
      isVisibleAgain: false, //запрет/разрешение перехода на следующий уровень

      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      correctCards:[2, 5, 7, 8],
      cardDescriptions: ['Памятник, в виде суживающегося кверху гранёного каменного столба', 'Составная часть светильника', 'Домашнее парнокопытное животное', 'Участок земли для выращивания овощей вблизи дома', 'Коренные народы некоторых территорий, сохранившие первобытно-общинный образ жизни', 'Весенний цветок', 'Транспортное средство для перевозки пассажиров',
      'Техника изображения и разновидность изобразительного искусства', 'Строение в виде большой теплицы для выращивания растений', 'Лицо командного состава армии и флота'],
      images: ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg', 'pic6.jpg', 'pic7.jpg', 'pic8.jpg', 'pic9.jpg', 'pic10.jpg'],
      allCards: [],
      selected:[],

      countTrue: 0,
      countFalse: 0,
      maxScore: null,
      scoreLevel: 0,

      isDisable: false, //блокировка кнопок после получения результатов
    }
  },
  mounted() {
    this.getUsername(), this.getAllScore(), this.startTimer(), this.createCardArray(this.images,this.cardDescriptions), this.getTheme()
  },
  destroyed() {
    this.stopTimer()
  },
  methods:{
    getUsername(){
      this.username=this.$route.params.name
    },
    getTheme(){
      document.body.style.backgroundColor = sessionStorage.getItem('backgroundColor');
      document.body.style.color = sessionStorage.getItem('title_color');
      const task_title = document.querySelectorAll('.title_select, .timer span, .task_text span, .title_result');
      const buttons_background = document.querySelectorAll('.check_button, .next_button');
      const buttons_border = document.querySelectorAll('.back_to_levels');
      for (let i = 0, length = task_title.length; i < length; i++) {
        task_title[i].style.cssText = 'color: ' + sessionStorage.getItem('task_title_color');
      }
      for (let i = 0, length = buttons_background.length; i < length; i++) {
        buttons_background[i].style.cssText = 'background-color: ' + sessionStorage.getItem('title_color') + ';'
      }
      for (let i = 0, length = buttons_border.length; i < length; i++) {
        buttons_border[i].style.cssText = 'border-color: ' + sessionStorage.getItem('title_color') + ';'
      }

    },
    getAllScore() {
      this.score = this.$route.params.allScore
    },

    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--
        this.minutes = parseInt(this.currentTime/60),
        this.seconds = this.currentTime%60
        if(this.seconds < 10)
        {this.seconds = 0 + String(this.seconds)}
      }, 1000)
    },

    stopTimer() {
      clearTimeout(this.timer)
    },

    createCardArray(img,desc){
      this.score = parseInt(sessionStorage.getItem('allScore'))

      let typeCard;
      for(let i = 0; i < this.cards.length; i++) {
        for(let j = 0; j < this.correctCards.length; j++){
          if(i + 1 === this.correctCards[j]){
            typeCard = true;
            break;
          }
          if(j === this.correctCards.length - 1){
            typeCard = false;
          }
        }
        let card = {
          id: i+1,
          img: img[i],
          description: desc[i],
          isCorrect: typeCard,
        }
        this.allCards.push(card)
      }
    },

    checkSelected() {
      this.stopTimer();
      this.isVisibleResult = true;
      this.isDisable = true;
      this.check = true;
      this.results();
      this.again();
    },

    results () {
      for (let i = 0; i < this.selected.length; i++){
        for (let j = 0; j < this.correctCards.length; j++){
          if(this.selected[i].id === this.correctCards[j]){
            this.countTrue++;
            break;
          }
          if(j === this.correctCards.length - 1){
            this.countFalse++
          }
        }
      }
      let scoreLvl = this.countTrue * 10 - this.countFalse * 5;
      if(scoreLvl>0){
        this.scoreLevel = scoreLvl;
      }
      this.maxScore = this.correctCards.length * 10;

      if(this.scoreLevel > parseInt(sessionStorage.getItem('scoreLevel2'))) {
        sessionStorage.setItem('allScore', parseInt(sessionStorage.getItem('allScore')) - parseInt(sessionStorage.getItem('scoreLevel2')))
        sessionStorage.setItem('scoreLevel2', this.scoreLevel)
        sessionStorage.setItem('allScore', parseInt(sessionStorage.getItem('allScore')) + parseInt(sessionStorage.getItem('scoreLevel2')))
      }
      this.score = parseInt(sessionStorage.getItem('allScore'))
    },

    again(){
      if(this.scoreLevel/this.maxScore < 0.5){
        this.isVisibleAgain = true;
      }
    }
  },

  watch: {
    currentTime(time) {
      if (time === 0) {
        this.checkSelected();
      }
    }
  },
}


</script>

<style lang="css">
/******************GENERAL OPTIONS******************/
.wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100%;
}
.container {
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: content-box;
}
/***************************HEADER*****************************/
.header_block {
  padding: 20px 20px 0 20px;
  display: flex;
  justify-content: space-between;
}
.left_block {
  display: flex;
  flex-direction: column;
  flex-basis: 0;
  flex-grow: 1;
}
.left_block > *:not(:last-child){
  margin: 0 0 15px 0;
}
.player {
  font-size: 18px;
  letter-spacing: 1px;
  font-family: 'Play', sans-serif;
}
.timer {
  font-size: 18px;
  letter-spacing: 1px;
  font-family: 'Play', sans-serif;
}
.timer span {
  font-weight: 700;
  color: #0d99d6;
}
.center_block {
  text-align: center;
  flex-basis: 0;
  flex-grow: 1;
}
.center_block > *:not(:last-child){
  margin: 0 0 15px 0;
}
.level {
  font-size: 16px;
  font-family: 'Press Start 2P', cursive;
}
.score {
  font-size: 16px;
  letter-spacing: 1px;
  font-family: 'Play', sans-serif;
}
.right_block {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: center;
  flex-basis: 0;
  flex-grow: 1;
}
.right_block > *:not(:last-child){
  margin: 0 15px 0 0;
}
.back_to_levels {
  font-size: 16px;
  letter-spacing: 1px;
  font-family: 'Play', sans-serif;
  border: 2px solid #165570;
  border-radius: 5px;
  padding: 10px 15px;
  transition: all ease .3s;
}
/*back_to_levels:hover {
  background-color:#165570;
  color: #ffffff;
}*/
/*************************MAIN***********************/
.main_block {
  /*max-width: 1200px;*/
}
.main_block_body {
  padding: 50px 0 50px 0;
}
.main_block_body > *:not(:last-child){
  margin: 0 0 30px 0;
}
.task_text {
  font-size: 18px;
  font-family: 'Play', sans-serif;
  line-height: 120%;
  letter-spacing: 1px;
}
.task_text span {
  color: #0d99d6;
  text-transform: uppercase;
  font-weight: 700;
}
.cards_block {
  display: flex;
  flex-wrap: wrap;
}
.cards_block > * {
  margin: 10px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.not_visible {
  display: none;
}

.down_block {
  display: flex;
  justify-content: space-between;
  margin: 0 0 30px 0;
}
.words_block {
  width: 300px;
}
.title_select {
  color: #0d99d6;
  font-size: 18px;
  letter-spacing: 1px;
  font-family: 'Play', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 0 10px 0;
}
.selected_words {
  display: inline;
  margin: 0 10px 0 0;
  font-family: 'Play', sans-serif;
  font-size: 18px;
  line-height: 130%;
}
.check_button {
  height: 50px;
  font-size: 14px;
  font-family: 'Press Start 2P', cursive;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #165570;
  color: #ffffff;
  cursor: pointer;
  transition: all ease .3s;
}
.check_button:hover {
  background-color: #2f8db5;
}
.title_result {
  color: #0d99d6;
  font-size: 18px;
  letter-spacing: 1px;
  font-family: 'Play', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 0 10px 0;
}

.result_item {
  font-size: 18px;
  letter-spacing: 1px;
  font-family: 'Play', sans-serif;
  line-height: 150%;
}

.result_item span {
  font-weight: 700;
}

.next_button {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50px;
  font-size: 14px;
  font-family: 'Press Start 2P', cursive;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #165570;
  color: #ffffff;
  cursor: pointer;
  transition: all ease .3s;
  margin: 0 0 30px 0;
}

.next_button:hover {
  background-color: #2f8db5;
}

.again_text {
  text-align: center;
  font-family: 'Play', sans-serif;
  font-size: 18px;
}
</style>