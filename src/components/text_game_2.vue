<template>
  <div class="wrapper">
    <header class="header">
      <div class="header_block container">
        <div class="left_block">
          <div class="player">Игрок: {{username}}</div>
          <div class="timer" v-if="!isVisibleResult">Оставшееся время: <span>{{minutes}}</span> мин <span>{{seconds}}</span> сек</div>
        </div>
        <div class="center_block">
          <div class="level">Уровень 3</div>
          <div class="score">Общий счет: {{score}}</div>
        </div>

        <div class="right_block">
          <router-link :to="{name:'main_menu', params:{name:username, allScore:score}}" class="back_to_levels" >Счет игры</router-link>
          <router-link :to="{name:'main'}" class="back_to_levels" >Выйти из игры</router-link>
        </div>
      </div>
    </header>
    <div class="main_block container">
      <div class="main_block_body">
        <div class="task_text"><span>Задание:</span> Перед вами представлен текст, выберите из него все слова, которые
          являются лишними, то есть, не подходят в предложениях по смыслу.
        </div>

        <div class="text">
          <div class="main_text" v-for="word in allWords" :key="word.id">
            <ButtonWord :selected="selected" :word="word" :isDisable="isDisable" :isVisibleResult="isVisibleResult" ></ButtonWord>
          </div>
        </div>
        <div class="down_block">
          <div class="words_block">
            <div class="title_select">Выбранные слова:</div>
            <div class="selected_words" v-for="word in selected" :key="word.id">
              {{word.text}}
            </div>
          </div>
          <button class="check_button" v-on:click="checkSelected" v-if="!isVisibleResult">Проверить</button>
        </div>
        <div v-bind:class="{'down_block': isVisibleResult, 'not_visible': !isVisibleResult}">
          <div class="result_block">
            <div class="title_result">Ваш результат:</div>
            <div class="result_item">Количество правильно выбранных слов - <span>{{countTrue}} из {{incorrect.length}}</span></div>
            <div class="result_item">Количество неправильно выбранных слов - <span>{{countFalse}}</span></div>
            <div class="result_item">Счет - <span>{{scoreLevel}} из {{maxScore}}</span></div>
          </div>

          <div class="button_block">
            <div v-if="!isVisibleAgain">
              <router-link :to="{name: 'card_game_2', params:{name:username, allScore:score}}" class="next_button" >Следующий уровень</router-link>
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
import ButtonWord from "@/components/ButtonWord";

export default {
  name: "text_game_2",
  comments: {
    ButtonWord: ButtonWord
  },
  data() {
    return {
      currentTime: 300,
      minutes: 5,
      seconds: '00',
      timer: null,
      username: null,

      text: 'И какой же русский домосед не любит быстрой езды? Его ли душе, стремящейся закружиться сидя, загуляться лежа, сказать иногда: «черт побери прибери все!» его ли душе не любить ее кота? Ее ли не любить, когда в ней слышится что-то восторженно-чудное? Кажись, неведомая сила угля подхватила тебя на крыло самолета к себе, и сам летишь криво, и все летит ровно: летят версты, летят навстречу купцы на облучках своих кибиток, летит с обеих сторон лес с темными строями елей и сосен, с топорным стуком двери и вороньим криком музыки, летит вся дорога невесть куда знаю в пропадающую даль близкую, и что-то страшное заключено быстром мельканье тьмы, где не успевает означиться пропадающий предмет, только небо над небесной головою, да легкие десятитонные тучи…',
      words: [], //массив слов
      selected: [], //массив выбранных слов
      allWords: [], //массив объекта кнопки со словом
      incorrect: [4, 14, 16, 21, 29, 43, 48, 54, 58, 82, 86, 92, 96, 103, 113, 117], //массив с индексами лишних слов

      isVisibleResult: false, //показ блока с результатами, показ таймера
      isVisibleAgain: false, //запрет/разрешение перехода на следующий уровень
      isDisable: false, //блокировка кнопок после получения результатов

      countTrue: 0, //количество верно выделенных слов игроком
      countFalse: 0, //количество неверно выделенных слов игроком
      score: 0, //общий счет за уровень
      scoreLevel: 0, //счет за текущий уровень
      maxScore: null, //максимально возможный счет за уровень
    }
  },

  mounted() {
    this.createArray(), this.getUsername(), this.results(), this.startTimer(), this.getTheme()
  },

  destroyed() {
    this.stopTimer()
  },

  methods: {
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
    /************TIMER FUNCTIONS***********/
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
    /****************CREATE ARRAY FUNCTION************/
    createArray() {
      this.score = parseInt(sessionStorage.getItem('allScore'))

      this.words = this.text.split(' ');
      let typeWord;
      for (let i = 0; i < this.words.length; i++) {
        for(let j = 0; j < this.incorrect.length; j++){
          if(i === this.incorrect[j]){
            typeWord = true;
            break;
          }
          if(j === this.incorrect.length - 1){
            typeWord = false;
          }
        }
        let word = {
          id: i,
          text: this.words[i],
          isIncorrect: typeWord,
        }
        this.allWords.push(word)
      }
    },

    checkSelected() {
      this.stopTimer();
      this.isVisibleResult = true;
      this.isDisable = true;
      this.results();
      this.again();
    },

    results() {
      for (let i = 0; i < this.selected.length; i++){
        for (let j = 0; j < this.incorrect.length; j++){
          if(this.selected[i].id === this.incorrect[j]){
            this.countTrue++;
            break;
          }
          if(j === this.incorrect.length - 1){
            this.countFalse++
          }
        }
      }
      let scoreLvl = this.countTrue * 10 - this.countFalse * 5;
      if(scoreLvl>0){
        this.scoreLevel = scoreLvl;
      }

      this.maxScore = this.incorrect.length * 10;

      if(this.scoreLevel > parseInt(sessionStorage.getItem('scoreLevel3'))) {
        sessionStorage.setItem('allScore', parseInt(sessionStorage.getItem('allScore')) - parseInt(sessionStorage.getItem('scoreLevel3')))
        sessionStorage.setItem('scoreLevel3', this.scoreLevel)
        sessionStorage.setItem('allScore', parseInt(sessionStorage.getItem('allScore')) + parseInt(sessionStorage.getItem('scoreLevel3')))
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
        this.checkSelected()
      }
    }
  },
}
</script>

<style scoped>
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
  padding: 30px 20px 0 20px;
  display: flex;
  justify-content: space-between;
}

.left_block {
  display: flex;
  flex-direction: column;
  flex-basis: 0;
  flex-grow: 1;
}

.left_block > *:not(:last-child) {
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

.center_block > *:not(:last-child) {
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
  flex-basis: 0;
  flex-grow: 1;
}

.right_block > *:not(:last-child) {
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

/*.back_to_levels:hover {
  background-color: #165570;
  color: #ffffff;
}*/

/*************************MAIN***********************/
.main_block {
  max-width: 1100px;
}

.main_block_body {
  padding: 50px 0 50px 0;
}

.main_block_body > *:not(:last-child) {
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

.text {
  display: flex;
  flex-wrap: wrap;
}

.main_text {
  font-size: 18px;
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
  width: 500px;
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