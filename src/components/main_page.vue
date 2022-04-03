<template>
  <div class="wrapper">
    <div class="main_block container">
      <div class="main_block_body">
        <div class="button_block">
          <button class="change_theme right_button" @click="Switch">Сменить тему</button>
        </div>
        <div class="main_content">
          <h1 class="title_page" >Добро пожаловать, {{ username }}!</h1>
          <div class="form">
            <label class="form_label" v-if="username=='Игрок'||username==''" >Введи, пожалуйста, свое имя, чтобы мы знали как к тебе обращаться. . .
            </label>
            <input id="input_name" class="form_input" v-model="username" @input="isCorrectName">
            <div class="name_desc" v-if="!correctUsername">Имя игрока не может превышать 25 символов или быть пустым, оно может включать в себя только буквы русского и английского алфавита, пробелы, цифры и символы "_", "-"</div>
            <button class="form_button" v-if="correctUsername" @click="isCorrectName"><router-link :to="{name: 'text_game', params:{name:username}}" >Начать игру</router-link></button>
            <button class="form_button" v-if="!correctUsername" @click="isCorrectName">Начать игру</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main_page",
  data() {
    return {
      username: "Игрок",
      correctUsername: true,
    }
  },
  mounted() {
        sessionStorage.setItem('allScore', 0),
        sessionStorage.setItem('scoreLevel1', 0),
        sessionStorage.setItem('scoreLevel2', 0),
        sessionStorage.setItem('scoreLevel3', 0),
        sessionStorage.setItem('scoreLevel4', 0),
        sessionStorage.setItem('scoreLevel5', 0),
        sessionStorage.setItem('scoreLevel6', 0),
        this.getTheme(),
        this.isCorrectName()
  },
  methods: {
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
      }

      for (let i = 0, length = buttons_border.length; i < length; i++) {
        buttons_border[i].style.cssText = 'border-color: ' + sessionStorage.getItem('title_color') + ';'
      }
    },
    getTheme(){
        document.body.style.backgroundColor = sessionStorage.getItem('backgroundColor');
        document.body.style.color = sessionStorage.getItem('title_color');
        const task_title = document.querySelectorAll('.title_select, .timer span, .task_text span, .title_result');
        const buttons_background = document.querySelectorAll('.check_button, .form_button, .next_button');
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
      isCorrectName() {
        document.getElementById('input_name').focus()
        sessionStorage.setItem('correctName', document.getElementById('input_name').value)
        let currName = sessionStorage.getItem('correctName')
        let checked_input = currName.replace(/\s+/g, ' ').trim()
        let correct = checked_input.replace(/[^0-9a-zA-Zа-яА-Я _-]/g, '')
        if(checked_input.length > 25 || currName.length == 0 || currName.replace(/\s+/g, ' ').trim().length == 0 || correct != checked_input){
          this.correctUsername = false;
          console.log('не работает')
        }
        else{
          this.correctUsername = true;
          console.log('работает')
        }
      },
    },

}
</script>

<style scoped>
/******************GENERAL OPTIONS******************/
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}

.wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100%;

}
.container {
  max-width: 1300px;
  padding: 0px 20px;
  margin: 0px auto;
  box-sizing: content-box;
}

/*****************MAIN***********************/
.main_block_body {
  padding: 50px 0px 100px 0px;
}
.button_block {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
.main_content {
  padding: 130px 0 0 0;
}
.title_page {
  font-size: 45px;
  font-family: 'Press Start 2P', cursive;
  text-align: center;
  color: inherit;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px 0px 0px;
}
.form * {
  outline: none;
  border: none;
}
.form_label {
  font-size: 22px;
  font-family: 'Play', sans-serif;
  letter-spacing: 2px;
  color: inherit;
  margin: 0px 0px 20px 0px;
}
.form_input {
  height: 50px;
  width: 500px;
  border-radius: 40px;
  padding: 16px 20px;
  font-size: 18px;
  font-family: 'Play', sans-serif;
  color: inherit;
  letter-spacing: 1px;
  background-color: #ffffff;
}
.name_desc {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  width: 500px;
  color: #c91414;
  margin: 15px 0px 0px 0px;
}
.form_input:focus {
  box-shadow: 0px 0px 12px #a39fb5;
}
.form_button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 300px;
  font-family: 'Press Start 2P', cursive;
  letter-spacing: 1px;
  font-size: 18px;
  border-radius: 15px;
  background-color: #165570;
  color: #ffffff;
  cursor: pointer;
  transition: all ease .3s;
  margin: 50px 0px 0px 0px;
}

</style>