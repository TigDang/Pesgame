import VueRouter from "vue-router";
import main_page from "@/components/main_page";
import text_game from "@/components/text_game";
import text_game_2 from "@/components/text_game_2";
import text_game_3 from "@/components/text_game_3";
import card_game from "@/components/card_game";
import card_game_2 from "@/components/card_game_2";
import card_game_3 from "@/components/card_game_3";
import main_menu from "@/components/main_menu";

export default  new VueRouter({
    routes:[
        {
            path:'/',
            name:'main',
            component:main_page
        },
        {
            path:'/text_game/:name',
            name:'text_game',
            component:text_game
        },
        {
            path:'/card_game/:name/:allScore',
            name:'card_game',
            component:card_game
        },
        {
            path:'/text_game_2/:name/:allScore',
            name:'text_game_2',
            component:text_game_2,
        },
        {
            path:'/card_game_2/:name/:allScore',
            name:'card_game_2',
            component:card_game_2
        },
        {
            path:'/text_game_3/:name/:allScore',
            name:'text_game_3',
            component:text_game_3,
        },
        {
            path:'/card_game_3/:name/:allScore',
            name:'card_game_3',
            component:card_game_3
        },
        {
            path:'/main_menu/:name/:allScore',
            name:'main_menu',
            component: main_menu
        }



    ]
})