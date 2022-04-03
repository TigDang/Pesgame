<template>
  <div class="wrapper">
    <header class="header">
      <div class="headers_block container">
        <div class="left_block">
          <div class="player">Игрок: {{username}}</div>
        </div>
        <div class="center_block">
          <div class="title_menu">Главное меню </div>
          <div class="score">Счет за всю игру: {{score}} из 560</div>
        </div>
        <div class="right_block">
          <router-link :to="{name:'main'}" class="right_button" >Выйти из игры</router-link>
          <button class="right_button" @click="Switch">Сменить тему</button>
        </div>
      </div>
    </header>
    <div class="main_block container">
      <div class="main_block_body">
        <ul class="level_list">

          <div class="to_level">
            <router-link :to="{name: 'text_game',params:{name:username, allScore:score}}" class="level_item" >Уровень 1</router-link>
            <div class="best_score">Лучший счет: {{score1}} из 90</div>
          </div>

          <div class="to_level" >
              <router-link :to="{name: 'card_game',params:{name:username, allScore:score}}" class="level_item" v-if="isCanGo2">Уровень 2</router-link>
              <div class="best_score" v-if="isCanGo2">Лучший счет: {{score2}} из 40</div>
              <li class="level_item not_to_go" v-if="!isCanGo2">Уровень 2</li>
          </div>

          <div class="to_level" >
            <router-link :to="{name: 'text_game_2',params:{name:username, allScore:score}}" class="level_item" v-if="isCanGo3">Уровень 3</router-link>
            <div class="best_score" v-if="isCanGo3">Лучший счет: {{score3}} из 160</div>
            <li class="level_item not_to_go" v-if="!isCanGo3">Уровень 3</li>
          </div>

          <div class="to_level" >
            <router-link :to="{name: 'card_game_2',params:{name:username, allScore:score}}" class="level_item" v-if="isCanGo4">Уровень 4</router-link>
            <div class="best_score" v-if="isCanGo4">Лучший счет: {{score4}} из 70</div>
            <li class="level_item not_to_go" v-if="!isCanGo4">Уровень 4</li>
          </div>

          <div class="to_level" >
            <router-link :to="{name: 'text_game_3',params:{name:username, allScore:score}}" class="level_item" v-if="isCanGo5">Уровень 5</router-link>
            <div class="best_score" v-if="isCanGo5">Лучший счет: {{score5}} из 130</div>
            <li class="level_item not_to_go" v-if="!isCanGo5">Уровень 5</li>
          </div>

          <div class="to_level" >
            <router-link :to="{name: 'card_game_3',params:{name:username, allScore:score}}" class="level_item" v-if="isCanGo6">Уровень 6</router-link>
            <div class="best_score" v-if="isCanGo6">Лучший счет: {{score6}} из 70</div>
            <li class="level_item not_to_go" v-if="!isCanGo6">Уровень 6</li>
          </div>

        </ul>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  data() {
    return{
      username:null,
      score: null,
      isCanGo2: false,
      isCanGo3: false,
      isCanGo4: false,
      isCanGo5: false,
      isCanGo6: false,

      score1: 0,
      score2: 0,
      score3: 0,
      score4: 0,
      score5: 0,
      score6: 0,
    }
  },
  mounted() {
    this.getUsername(), this.getAllScore(), this.IsCanGo(), this.getTheme()
  },
  methods: {
    getUsername(){
      this.username=this.$route.params.name
    },
    Switch() {
      let backgroundColors = ['#d6f3ff','#fdd6ff', '#ffd6e8', '#d6fff2', '#f7ffd6'];
      let titleColors = ['#165570','#5a1670','#701643','#16705e','#705d16'];
      let taskColors = ['#0d99d6','#b10dd6','#d60d86','#0dd6aa','#d6c50d']
      let randomize = Math.floor(Math.random()*backgroundColors.length);
      sessionStorage.setItem('backgroundColor', backgroundColors[randomize])
      sessionStorage.setItem('title_color', titleColors[randomize])
      sessionStorage.setItem('task_title_color', taskColors[randomize])
      document.body.style.backgroundColor = sessionStorage.getItem('backgroundColor');
      document.body.style.color = sessionStorage.getItem('title_color');
      const task_title = document.querySelectorAll('.title_select, .timer span, .task_text span, .title_result');
      const buttons_background = document.querySelectorAll('.check_button, .form_button');
      const buttons_border = document.querySelectorAll('.back_to_levels, .right_button');

      for (let i = 0, length = task_title.length; i < length; i++) {
        task_title[i].style.cssText = 'color: ' + sessionStorage.getItem('task_title_color');
      }

      for (let i = 0, length = buttons_background.length; i < length; i++) {
        buttons_background[i].style.cssText = 'background-color: ' + sessionStorage.getItem('title_color') + ';'
        console.log(sessionStorage.getItem('title_color'))
      }

      for (let i = 0, length = buttons_border.length; i < length; i++) {
        buttons_border[i].style.cssText = 'border-color: ' + sessionStorage.getItem('title_color') + ';'
      }
    },
    getTheme(){
      document.body.style.backgroundColor = sessionStorage.getItem('backgroundColor');
      document.body.style.color = sessionStorage.getItem('title_color');
      const task_title = document.querySelectorAll('.title_select, .timer span, .task_text span, .title_result');
      const buttons_background = document.querySelectorAll('.check_button');
      const buttons_border = document.querySelectorAll('.back_to_levels, .right_button');
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
      this.score1 = sessionStorage.getItem('scoreLevel1')
      this.score2 = sessionStorage.getItem('scoreLevel2')
      this.score3 = sessionStorage.getItem('scoreLevel3')
      this.score4 = sessionStorage.getItem('scoreLevel4')
      this.score5 = sessionStorage.getItem('scoreLevel5')
      this.score6 = sessionStorage.getItem('scoreLevel6')
    },
    IsCanGo() {
      if(sessionStorage.getItem('scoreLevel1')>=45){
        this.isCanGo2 = true;
      }
      if(sessionStorage.getItem('scoreLevel2')>=20){
        this.isCanGo3 = true;
      }
      if(sessionStorage.getItem('scoreLevel3')>=80){
        this.isCanGo4 = true;
      }
      if(sessionStorage.getItem('scoreLevel4')>=35){
        this.isCanGo5 = true;
      }
      if(sessionStorage.getItem('scoreLevel5')>=65){
        this.isCanGo6 = true;
      }
    }
  }
}
</script>

<style lang="css">
/***************************HEADER*****************************/
.headers_block {
  padding: 40px 20px 0 20px;
  display: flex;
  justify-content: space-between;
}
.left_block {
  flex-basis: 0;
  flex-grow: 1;
}
.player {
  font-size: 18px;
  letter-spacing: 1px;
  font-family: 'Play', sans-serif;
}
.center_block {
  text-align: center;
  flex-basis: 0;
  flex-grow: 2;
}
.center_block > *:not(:last-child){
  margin: 0 0 15px 0;
}
.title_menu {
  font-size: 40px;
  font-family: 'Press Start 2P', cursive;
}
.score {
  font-size: 16px;
  letter-spacing: 1px;
  font-family: 'Play', sans-serif;
}
.right_block {
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
}
.right_button {
  font-size: 16px;
  letter-spacing: 1px;
  font-family: 'Play', sans-serif;
  border: 2px solid #165570;
  border-radius: 5px;
  padding: 10px 15px;
  transition: all ease .3s;
  background-color: inherit;
  cursor: pointer;
  color: inherit;
  line-height: 100%;
}
/*.right_button:hover {
  background-color:#165570;
  color: #ffffff;
}*/
.level_list {
  padding: 70px 0 50px 0;
}
.level_list > *:not(:last-child) {
  margin: 0 0 30px 0;
}
.level_item {
  font-size: 20px;
  font-family: 'Press Start 2P', cursive;
  cursor: pointer;
}
.not_to_go {
  color: #aeb0b5;
}
.to_level {
  display: flex;
  flex-direction: column;
}
.best_score {
  font-family: 'Play', sans-serif;
  font-size: 14px;
  text-align: center;
  letter-spacing: 1px;
  margin: 5px 0 0 0;
}

</style>