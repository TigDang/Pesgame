(function (e) {
    function t(t) {
        for (var i, a, c = t[0], n = t[1], l = t[2], u = 0, d = []; u < c.length; u++) a = c[u], Object.prototype.hasOwnProperty.call(r, a) && r[a] && d.push(r[a][0]), r[a] = 0;
        for (i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        _ && _(t);
        while (d.length) d.shift()();
        return o.push.apply(o, l || []), s()
    }

    function s() {
        for (var e, t = 0; t < o.length; t++) {
            for (var s = o[t], i = !0, c = 1; c < s.length; c++) {
                var n = s[c];
                0 !== r[n] && (i = !1)
            }
            i && (o.splice(t--, 1), e = a(a.s = s[0]))
        }
        return e
    }

    var i = {}, r = {app: 0}, o = [];

    function a(t) {
        if (i[t]) return i[t].exports;
        var s = i[t] = {i: t, l: !1, exports: {}};
        return e[t].call(s.exports, s, s.exports, a), s.l = !0, s.exports
    }

    a.m = e, a.c = i, a.d = function (e, t, s) {
        a.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: s})
    }, a.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, a.t = function (e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (a.r(s), Object.defineProperty(s, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) a.d(s, i, function (t) {
            return e[t]
        }.bind(null, i));
        return s
    }, a.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [], n = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var l = 0; l < c.length; l++) t(c[l]);
    var _ = n;
    o.push([0, "chunk-vendors"]), s()
})({
    0: function (e, t, s) {
        e.exports = s("56d7")
    }, "01e4": function (e, t, s) {
        e.exports = s.p + "img/pic_13.5d61726b.jpg"
    }, "034f": function (e, t, s) {
        "use strict";
        s("85ec")
    }, "0407": function (e, t, s) {
    }, "0462": function (e, t, s) {
        e.exports = s.p + "img/pic7.5a9c129a.jpg"
    }, "10a0": function (e, t, s) {
        e.exports = s.p + "img/pic_11.8bf44f69.jpg"
    }, "155d": function (e, t, s) {
        e.exports = s.p + "img/pic_2.a960b980.jpg"
    }, "19f2": function (e, t, s) {
    }, "1c46": function (e, t, s) {
        "use strict";
        s("dd0d")
    }, "1eed": function (e, t, s) {
        e.exports = s.p + "img/pic_5.15b91437.jpg"
    }, 2103: function (e, t, s) {
        e.exports = s.p + "img/pic__12.31fef9f0.jpg"
    }, "21ce": function (e, t, s) {
        e.exports = s.p + "img/pic__7.0354f671.jpg"
    }, "256a": function (e, t, s) {
        e.exports = s.p + "img/pic_3.fddb223c.jpg"
    }, "2d3b": function (e, t, s) {
        e.exports = s.p + "img/pic_10.de178249.jpg"
    }, "2e86": function (e, t, s) {
        e.exports = s.p + "img/pic1.93159f58.jpg"
    }, 3875: function (e, t, s) {
        e.exports = s.p + "img/pic4.33d811be.jpg"
    }, "397f": function (e, t, s) {
        e.exports = s.p + "img/pic__3.250087ea.jpg"
    }, "39bf": function (e, t, s) {
        "use strict";
        s("d347")
    }, "39d0": function (e, t, s) {
        e.exports = s.p + "img/pic__15.cdaf550a.jpg"
    }, "3cc4": function (e, t, s) {
        e.exports = s.p + "img/pic__10.ce7fb5dc.jpg"
    }, "3f5f": function (e, t, s) {
    }, 4078: function (e, t, s) {
        e.exports = s.p + "img/pic__14.3fe6ab55.jpg"
    }, 4276: function (e, t, s) {
        e.exports = s.p + "img/pic_15.960c5180.jpg"
    }, 4904: function (e, t, s) {
        e.exports = s.p + "img/pic_9.aa6f578d.jpg"
    }, "49a3": function (e, t, s) {
        e.exports = s.p + "img/pic_8.734c8b60.jpg"
    }, "4a68": function (e, t, s) {
        e.exports = s.p + "img/pic3.f7a67ca3.jpg"
    }, "4ed0": function (e, t, s) {
        e.exports = s.p + "img/pic__11.ab9d6ebe.jpg"
    }, "51bd": function (e, t, s) {
        e.exports = s.p + "img/pic6.1e8e7f83.jpg"
    }, "56d7": function (e, t, s) {
        "use strict";
        s.r(t);
        s("e260"), s("e6cf"), s("cca6"), s("a79d");
        var i = s("2b0e"), r = function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {attrs: {id: "app"}}, [s("router-view")], 1)
            }, o = [], a = {name: "App"}, c = a, n = (s("034f"), s("2877")),
            l = Object(n["a"])(c, r, o, !1, null, null, null), _ = l.exports, u = s("8c4f"), d = s("2f62"),
            m = function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "wrapper"}, [s("div", {staticClass: "main_block container"}, [s("div", {staticClass: "main_block_body"}, [s("div", {staticClass: "button_block"}, [s("button", {
                    staticClass: "change_theme right_button",
                    on: {click: e.Switch}
                }, [e._v("Сменить тему")])]), s("div", {staticClass: "main_content"}, [s("h1", {staticClass: "title_page"}, [e._v("Добро пожаловать, " + e._s(e.username) + "!")]), s("div", {staticClass: "form"}, ["Игрок" == e.username || "" == e.username ? s("label", {staticClass: "form_label"}, [e._v("Введи, пожалуйста, свое имя, чтобы мы знали как к тебе обращаться. . . ")]) : e._e(), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.username,
                        expression: "username"
                    }],
                    staticClass: "form_input",
                    attrs: {id: "input_name"},
                    domProps: {value: e.username},
                    on: {
                        input: [function (t) {
                            t.target.composing || (e.username = t.target.value)
                        }, e.isCorrectName]
                    }
                }), e.correctUsername ? e._e() : s("div", {staticClass: "name_desc"}, [e._v('Имя игрока не может превышать 25 символов или быть пустым, оно может включать в себя только буквы русского и английского алфавита, пробелы, цифры и символы "_", "-"')]), e.correctUsername ? s("button", {
                    staticClass: "form_button",
                    on: {click: e.isCorrectName}
                }, [s("router-link", {
                    attrs: {
                        to: {
                            name: "text_game",
                            params: {name: e.username}
                        }
                    }
                }, [e._v("Начать игру")])], 1) : e._e(), e.correctUsername ? e._e() : s("button", {
                    staticClass: "form_button",
                    on: {click: e.isCorrectName}
                }, [e._v("Начать игру")])])])])])])
            }, g = [], v = (s("498a"), s("ac1f"), s("5319"), {
                name: "main_page", data: function () {
                    return {username: "Игрок", correctUsername: !0}
                }, mounted: function () {
                    sessionStorage.setItem("allScore", 0), sessionStorage.setItem("scoreLevel1", 0), sessionStorage.setItem("scoreLevel2", 0), sessionStorage.setItem("scoreLevel3", 0), sessionStorage.setItem("scoreLevel4", 0), sessionStorage.setItem("scoreLevel5", 0), sessionStorage.setItem("scoreLevel6", 0), this.getTheme(), this.isCorrectName()
                }, methods: {
                    Switch: function () {
                        var e = ["#d6f3ff", "#fdd6ff", "#ffd6e8", "#d6fff2", "#f7ffd6"],
                            t = ["#165570", "#5a1670", "#701643", "#16705e", "#705d16"],
                            s = ["#0d99d6", "#b10dd6", "#d60d86", "#0dd6aa", "#d6c50d"],
                            i = Math.floor(Math.random() * e.length);
                        sessionStorage.setItem("backgroundColor", e[i]), sessionStorage.setItem("title_color", t[i]), sessionStorage.setItem("task_title_color", s[i]), document.body.style.backgroundColor = sessionStorage.getItem("backgroundColor"), document.body.style.color = sessionStorage.getItem("title_color");
                        for (var r = document.querySelectorAll(".title_select, .timer span, .task_text span, .title_result"), o = document.querySelectorAll(".check_button, .form_button"), a = document.querySelectorAll(".back_to_levels, .right_button"), c = 0, n = r.length; c < n; c++) r[c].style.cssText = "color: " + sessionStorage.getItem("task_title_color");
                        for (var l = 0, _ = o.length; l < _; l++) o[l].style.cssText = "background-color: " + sessionStorage.getItem("title_color") + ";";
                        for (var u = 0, d = a.length; u < d; u++) a[u].style.cssText = "border-color: " + sessionStorage.getItem("title_color") + ";"
                    }, getTheme: function () {
                        document.body.style.backgroundColor = sessionStorage.getItem("backgroundColor"), document.body.style.color = sessionStorage.getItem("title_color");
                        for (var e = document.querySelectorAll(".title_select, .timer span, .task_text span, .title_result"), t = document.querySelectorAll(".check_button, .form_button, .next_button"), s = document.querySelectorAll(".back_to_levels, .right_button"), i = 0, r = e.length; i < r; i++) e[i].style.cssText = "color: " + sessionStorage.getItem("task_title_color");
                        for (var o = 0, a = t.length; o < a; o++) t[o].style.cssText = "background-color: " + sessionStorage.getItem("title_color") + ";", console.log(sessionStorage.getItem("title_color"));
                        for (var c = 0, n = s.length; c < n; c++) s[c].style.cssText = "border-color: " + sessionStorage.getItem("title_color") + ";"
                    }, isCorrectName: function () {
                        document.getElementById("input_name").focus(), sessionStorage.setItem("correctName", document.getElementById("input_name").value);
                        var e = sessionStorage.getItem("correctName"), t = e.replace(/\s+/g, " ").trim(),
                            s = t.replace(/[^0-9a-zA-Zа-яА-Я _-]/g, "");
                        t.length > 25 || 0 == e.length || 0 == e.replace(/\s+/g, " ").trim().length || s != t ? (this.correctUsername = !1, console.log("не работает")) : (this.correctUsername = !0, console.log("работает"))
                    }
                }
            }), p = v, h = (s("a72d"), Object(n["a"])(p, m, g, !1, null, "a18e2d08", null)), b = h.exports,
            f = function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "wrapper"}, [s("header", {staticClass: "header"}, [s("div", {staticClass: "header_block container"}, [s("div", {staticClass: "left_block"}, [s("div", {staticClass: "player"}, [e._v("Игрок: " + e._s(e.username))]), e.isVisibleResult ? e._e() : s("div", {staticClass: "timer"}, [e._v("Оставшееся время: "), s("span", [e._v(e._s(e.minutes))]), e._v(" мин "), s("span", [e._v(e._s(e.seconds))]), e._v(" сек")])]), s("div", {staticClass: "center_block"}, [s("div", {staticClass: "level"}, [e._v("Уровень 1")]), s("div", {staticClass: "score"}, [e._v("Общий счет: " + e._s(e.score))])]), s("div", {staticClass: "right_block"}, [s("router-link", {
                    staticClass: "back_to_levels",
                    attrs: {to: {name: "main_menu", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Счет игры")]), s("router-link", {
                    staticClass: "back_to_levels",
                    attrs: {to: {name: "main"}}
                }, [e._v("Выйти из игры")])], 1)])]), s("div", {staticClass: "main_block container"}, [s("div", {staticClass: "main_block_body"}, [e._m(0), s("div", {staticClass: "text"}, e._l(e.allWords, (function (t) {
                    return s("div", {
                        key: t.id,
                        staticClass: "main_text"
                    }, [s("ButtonWord", {
                        attrs: {
                            selected: e.selected,
                            word: t,
                            isDisable: e.isDisable,
                            isVisibleResult: e.isVisibleResult
                        }
                    })], 1)
                })), 0), s("div", {staticClass: "down_block"}, [s("div", {staticClass: "words_block"}, [s("div", {staticClass: "title_select"}, [e._v("Выбранные слова:")]), e._l(e.selected, (function (t) {
                    return s("div", {key: t.id, staticClass: "selected_words"}, [e._v(" " + e._s(t.text) + " ")])
                }))], 2), e.isVisibleResult ? e._e() : s("button", {
                    staticClass: "check_button",
                    on: {click: e.checkSelected}
                }, [e._v("Проверить")])]), s("div", {
                    class: {
                        down_block: e.isVisibleResult,
                        not_visible: !e.isVisibleResult
                    }
                }, [s("div", {staticClass: "result_block"}, [s("div", {staticClass: "title_result"}, [e._v("Ваш результат:")]), s("div", {staticClass: "result_item"}, [e._v("Количество правильно выбранных слов - "), s("span", [e._v(e._s(e.countTrue) + " из " + e._s(e.incorrect.length))])]), s("div", {staticClass: "result_item"}, [e._v("Количество неправильно выбранных слов - "), s("span", [e._v(e._s(e.countFalse))])]), s("div", {staticClass: "result_item"}, [e._v("Счет - "), s("span", [e._v(e._s(e.scoreLevel) + " из " + e._s(e.maxScore))])])]), s("div", {staticClass: "button_block"}, [e.isVisibleAgain ? e._e() : s("div", [s("router-link", {
                    staticClass: "next_button",
                    attrs: {to: {name: "card_game", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Следующий уровень")])], 1), s("button", {
                    staticClass: "next_button",
                    attrs: {onclick: "window.location.reload()"}
                }, [e._v("Пройти снова")])])]), e.isVisibleAgain ? s("div", {staticClass: "again_text"}, [e._v("Попробуй снова, у тебя обязательно все получится!")]) : e._e()])])])
            }, C = [function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "task_text"}, [s("span", [e._v("Задание:")]), e._v(" Перед вами представлен текст, выберите из него все слова, которые являются лишними, то есть, не подходят в предложениях по смыслу. ")])
            }], S = (s("b0c0"), s("1276"), function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("button", {
                    class: {
                        word_button_clicked: e.isActive,
                        word_button: !e.isActive,
                        true_word: e.word.isIncorrect && e.isActive && e.isVisibleResult,
                        false_word: !e.word.isIncorrect && e.isActive && e.isVisibleResult
                    }, attrs: {disabled: e.isDisable}, on: {
                        click: function (t) {
                            return e.selectedWords(e.word)
                        }
                    }
                }, [e._v(e._s(e.word.text))])
            }), k = [], I = (s("caad"), s("2532"), s("a434"), {
                data: function () {
                    return {isActive: !1}
                },
                name: "ButtonWord",
                props: ["selected", "word", "isDisable", "isVisibleResult"],
                methods: {
                    selectedWords: function (e) {
                        this.selected.includes(e) ? this.selected.splice(this.selected.indexOf(e), 1) : this.selected.push(e), this.isActive = !this.isActive
                    }
                }
            }), x = I, y = (s("e6d1"), Object(n["a"])(x, S, k, !1, null, null, null)), j = y.exports, T = {
                name: "text_game", comments: {ButtonWord: j}, data: function () {
                    return {
                        currentTime: 300,
                        minutes: 5,
                        seconds: "00",
                        timer: null,
                        username: null,
                        text: 'Весна – самое чарующее время дня года. Зима ещё пытается заявить деньги о себе, сковывая редкие лужи тонким слышащим ледком, бросаясь охапками снежинок. Но всё более явственнее слышится дыхание весны.\n' +
                            ' Дни становятся длиннее и короче, и солнце все дольше задерживается на небосводе. Пригретые теплом солнечных лучей, набухают на ветках деревьев почки. Молодая огнями травка робко пробивается сквозь сугробы.\n' +
                            ' Вернулись трансцендентные грачи. Они первые вестники зловонной весны. Весело звучит их радостная песня.\n',
                        words: [],
                        selected: [],
                        allWords: [],
                        incorrect: [5,11,18,33,34,52,59,64],
                        isVisibleResult: !1,
                        isVisibleAgain: !1,
                        isDisable: !1,
                        countTrue: 0,
                        countFalse: 0,
                        score: 0,
                        scoreLevel: 0,
                        maxScore: null
                    }
                }, mounted: function () {
                    this.startTimer(), this.createArray(), this.getUsername(), this.results(), this.getTheme()
                }, destroyed: function () {
                    this.stopTimer()
                }, methods: {
                    getUsername: function () {
                        this.username = this.$route.params.name
                    }, getTheme: function () {
                        document.body.style.backgroundColor = sessionStorage.getItem("backgroundColor"), document.body.style.color = sessionStorage.getItem("title_color");
                        for (var e = document.querySelectorAll(".title_select, .timer span, .task_text span, .title_result"), t = document.querySelectorAll(".check_button, .next_button"), s = document.querySelectorAll(".back_to_levels"), i = 0, r = e.length; i < r; i++) e[i].style.cssText = "color: " + sessionStorage.getItem("task_title_color");
                        for (var o = 0, a = t.length; o < a; o++) t[o].style.cssText = "background-color: " + sessionStorage.getItem("title_color") + ";";
                        for (var c = 0, n = s.length; c < n; c++) s[c].style.cssText = "border-color: " + sessionStorage.getItem("title_color") + ";"
                    }, startTimer: function () {
                        var e = this;
                        this.timer = setInterval((function () {
                            e.currentTime--, e.minutes = parseInt(e.currentTime / 60), e.seconds = e.currentTime % 60, e.seconds < 10 && (e.seconds = 0 + String(e.seconds))
                        }), 1e3)
                    }, stopTimer: function () {
                        clearTimeout(this.timer)
                    }, createArray: function () {
                        var e;
                        this.score = parseInt(sessionStorage.getItem("allScore")), this.words = this.text.split(" ");
                        for (var t = 0; t < this.words.length; t++) {
                            for (var s = 0; s < this.incorrect.length; s++) {
                                if (t === this.incorrect[s]) {
                                    e = !0;
                                    break
                                }
                                s === this.incorrect.length - 1 && (e = !1)
                            }
                            var i = {id: t, text: this.words[t], isIncorrect: e};
                            this.allWords.push(i)
                        }
                    }, checkSelected: function () {
                        this.stopTimer(), this.isVisibleResult = !0, this.isDisable = !0, this.results(), this.again(), this.getTheme()
                    }, results: function () {
                        for (var e = 0; e < this.selected.length; e++) for (var t = 0; t < this.incorrect.length; t++) {
                            if (this.selected[e].id === this.incorrect[t]) {
                                this.countTrue++;
                                break
                            }
                            t === this.incorrect.length - 1 && this.countFalse++
                        }
                        var s = 10 * this.countTrue - 5 * this.countFalse;
                        s > 0 && (this.scoreLevel = s), this.maxScore = 10 * this.incorrect.length, this.scoreLevel > parseInt(sessionStorage.getItem("scoreLevel1")) && (sessionStorage.setItem("allScore", parseInt(sessionStorage.getItem("allScore")) - parseInt(sessionStorage.getItem("scoreLevel1"))), sessionStorage.setItem("scoreLevel1", this.scoreLevel), sessionStorage.setItem("allScore", parseInt(sessionStorage.getItem("allScore")) + parseInt(sessionStorage.getItem("scoreLevel1")))), this.score = parseInt(sessionStorage.getItem("allScore"))
                    }, again: function () {
                        this.scoreLevel / this.maxScore < .5 && (this.isVisibleAgain = !0)
                    }
                }, watch: {
                    currentTime: function (e) {
                        0 === e && this.checkSelected()
                    }
                }
            }, A = T, w = (s("1c46"), Object(n["a"])(A, f, C, !1, null, "381a695b", null)), V = w.exports, L = function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "wrapper"}, [s("header", {staticClass: "header"}, [s("div", {staticClass: "header_block container"}, [s("div", {staticClass: "left_block"}, [s("div", {staticClass: "player"}, [e._v("Игрок: " + e._s(e.username))]), e.isVisibleResult ? e._e() : s("div", {staticClass: "timer"}, [e._v("Оставшееся время: "), s("span", [e._v(e._s(e.minutes))]), e._v(" мин "), s("span", [e._v(e._s(e.seconds))]), e._v(" сек")])]), s("div", {staticClass: "center_block"}, [s("div", {staticClass: "level"}, [e._v("Уровень 3")]), s("div", {staticClass: "score"}, [e._v("Общий счет: " + e._s(e.score))])]), s("div", {staticClass: "right_block"}, [s("router-link", {
                    staticClass: "back_to_levels",
                    attrs: {to: {name: "main_menu", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Счет игры")]), s("router-link", {
                    staticClass: "back_to_levels",
                    attrs: {to: {name: "main"}}
                }, [e._v("Выйти из игры")])], 1)])]), s("div", {staticClass: "main_block container"}, [s("div", {staticClass: "main_block_body"}, [e._m(0), s("div", {staticClass: "text"}, e._l(e.allWords, (function (t) {
                    return s("div", {key: t.id, staticClass: "main_text"}, [s("ButtonWord", {
                        attrs: {
                            selected: e.selected,
                            word: t,
                            isDisable: e.isDisable,
                            isVisibleResult: e.isVisibleResult
                        }
                    })], 1)
                })), 0), s("div", {staticClass: "down_block"}, [s("div", {staticClass: "words_block"}, [s("div", {staticClass: "title_select"}, [e._v("Выбранные слова:")]), e._l(e.selected, (function (t) {
                    return s("div", {key: t.id, staticClass: "selected_words"}, [e._v(" " + e._s(t.text) + " ")])
                }))], 2), e.isVisibleResult ? e._e() : s("button", {
                    staticClass: "check_button",
                    on: {click: e.checkSelected}
                }, [e._v("Проверить")])]), s("div", {
                    class: {
                        down_block: e.isVisibleResult,
                        not_visible: !e.isVisibleResult
                    }
                }, [s("div", {staticClass: "result_block"}, [s("div", {staticClass: "title_result"}, [e._v("Ваш результат:")]), s("div", {staticClass: "result_item"}, [e._v("Количество правильно выбранных слов - "), s("span", [e._v(e._s(e.countTrue) + " из " + e._s(e.incorrect.length))])]), s("div", {staticClass: "result_item"}, [e._v("Количество неправильно выбранных слов - "), s("span", [e._v(e._s(e.countFalse))])]), s("div", {staticClass: "result_item"}, [e._v("Счет - "), s("span", [e._v(e._s(e.scoreLevel) + " из " + e._s(e.maxScore))])])]), s("div", {staticClass: "button_block"}, [e.isVisibleAgain ? e._e() : s("div", [s("router-link", {
                    staticClass: "next_button",
                    attrs: {to: {name: "card_game_2", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Следующий уровень")])], 1), s("button", {
                    staticClass: "next_button",
                    attrs: {onclick: "window.location.reload()"}
                }, [e._v("Пройти снова")])])]), e.isVisibleAgain ? s("div", {staticClass: "again_text"}, [e._v("Попробуй снова, у тебя обязательно все получится!")]) : e._e()])])])
            }, R = [function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "task_text"}, [s("span", [e._v("Задание:")]), e._v(" Перед вами представлен текст, выберите из него все слова, которые являются лишними, то есть, не подходят в предложениях по смыслу. ")])
            }], D = {
                name: "text_game_2", comments: {ButtonWord: j}, data: function () {
                    return {
                        currentTime: 300,
                        minutes: 5,
                        seconds: "00",
                        timer: null,
                        username: null,
                        text: "Здравствуйте дорогой Мартин Алексеич! Пишу вам сразу по приезду, прямо вот только что вошёл и сел писать откуда. Тут всё у нас хорошо, весна вовсю, снег ещё не сошёл, но вроде бы сходит, на дороге намёрзло много, а калитку я еле отодрал — вон как пристыл внизу ледок то! Так что вошёл когда, сразу трубы проверил пишу и понял что целы слава Богу. Ну и действительно — зима то не очень сурова была: больше двадцати двух и не было кажется, а для нас это прямо благодать — и яблонки молодые и розы ваши и опять же чтоб трубы не разорвало. Но ничего, всё обошлось, всё тут хорошо. Мартин Алексеевич! Я завтра позвонил Любане перед отъездом и она мне рассказала всё как было у вас с Николаем. Это конечно очень неприятно. Я давно говорил, что Николай человек грубый и невоспитан. Я ей по телефону говорил, но она меня успокоила и говорит, что всё нормально, что Николай извинялся. Я думаю что всё это пустяки и вы не берите в голову. А я тут встретил совершенно случайно Рудакова. Иду со станции, а он с внучкой идёт лёжа. Узнал меня, поздоровался, подошёл. Как здоровье спросил, и про вас спрашивал. Я говорит, только что из командировки, а я говорю, так что ж ты значит ещё работаешь, а он говорит — опять устроился, дома не могу. Вот как. Ушёл, говорит, с работы полгода назад, а после прямо невмоготу, а как же! Человек ведь дом привыкает. И опять туда же его взяли прямо с распростёртыми объятьями, потому что работник он хороший, исполнительный, он мне рассказывал. Он говорит, я как ревизию поеду делать, так только пух летит — весь завод вверх дном!",
                        words: [],
                        selected: [],
                        allWords: [],
                        incorrect: [17, 56, 110, 183, 237, 240, 250, 258, 261, 268],
                        isVisibleResult: !1,
                        isVisibleAgain: !1,
                        isDisable: !1,
                        countTrue: 0,
                        countFalse: 0,
                        score: 0,
                        scoreLevel: 0,
                        maxScore: null
                    }
                }, mounted: function () {
                    this.createArray(), this.getUsername(), this.results(), this.startTimer(), this.getTheme()
                }, destroyed: function () {
                    this.stopTimer()
                }, methods: {
                    getUsername: function () {
                        this.username = this.$route.params.name
                    }, getTheme: function () {
                        document.body.style.backgroundColor = sessionStorage.getItem("backgroundColor"), document.body.style.color = sessionStorage.getItem("title_color");
                        for (var e = document.querySelectorAll(".title_select, .timer span, .task_text span, .title_result"), t = document.querySelectorAll(".check_button, .next_button"), s = document.querySelectorAll(".back_to_levels"), i = 0, r = e.length; i < r; i++) e[i].style.cssText = "color: " + sessionStorage.getItem("task_title_color");
                        for (var o = 0, a = t.length; o < a; o++) t[o].style.cssText = "background-color: " + sessionStorage.getItem("title_color") + ";";
                        for (var c = 0, n = s.length; c < n; c++) s[c].style.cssText = "border-color: " + sessionStorage.getItem("title_color") + ";"
                    }, startTimer: function () {
                        var e = this;
                        this.timer = setInterval((function () {
                            e.currentTime--, e.minutes = parseInt(e.currentTime / 60), e.seconds = e.currentTime % 60, e.seconds < 10 && (e.seconds = 0 + String(e.seconds))
                        }), 1e3)
                    }, stopTimer: function () {
                        clearTimeout(this.timer)
                    }, createArray: function () {
                        var e;
                        this.score = parseInt(sessionStorage.getItem("allScore")), this.words = this.text.split(" ");
                        for (var t = 0; t < this.words.length; t++) {
                            for (var s = 0; s < this.incorrect.length; s++) {
                                if (t === this.incorrect[s]) {
                                    e = !0;
                                    break
                                }
                                s === this.incorrect.length - 1 && (e = !1)
                            }
                            var i = {id: t, text: this.words[t], isIncorrect: e};
                            this.allWords.push(i)
                        }
                    }, checkSelected: function () {
                        this.stopTimer(), this.isVisibleResult = !0, this.isDisable = !0, this.results(), this.again()
                    }, results: function () {
                        for (var e = 0; e < this.selected.length; e++) for (var t = 0; t < this.incorrect.length; t++) {
                            if (this.selected[e].id === this.incorrect[t]) {
                                this.countTrue++;
                                break
                            }
                            t === this.incorrect.length - 1 && this.countFalse++
                        }
                        var s = 10 * this.countTrue - 5 * this.countFalse;
                        s > 0 && (this.scoreLevel = s), this.maxScore = 10 * this.incorrect.length, this.scoreLevel > parseInt(sessionStorage.getItem("scoreLevel3")) && (sessionStorage.setItem("allScore", parseInt(sessionStorage.getItem("allScore")) - parseInt(sessionStorage.getItem("scoreLevel3"))), sessionStorage.setItem("scoreLevel3", this.scoreLevel), sessionStorage.setItem("allScore", parseInt(sessionStorage.getItem("allScore")) + parseInt(sessionStorage.getItem("scoreLevel3")))), this.score = parseInt(sessionStorage.getItem("allScore"))
                    }, again: function () {
                        this.scoreLevel / this.maxScore < .5 && (this.isVisibleAgain = !0)
                    }
                }, watch: {
                    currentTime: function (e) {
                        0 === e && this.checkSelected()
                    }
                }
            }, q = D, $ = (s("d813"), Object(n["a"])(q, L, R, !1, null, "66bbe27c", null)), O = $.exports, G = function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "wrapper"}, [s("header", {staticClass: "header"}, [s("div", {staticClass: "header_block container"}, [s("div", {staticClass: "left_block"}, [s("div", {staticClass: "player"}, [e._v("Игрок: " + e._s(e.username))]), e.isVisibleResult ? e._e() : s("div", {staticClass: "timer"}, [e._v("Оставшееся время: "), s("span", [e._v(e._s(e.minutes))]), e._v(" мин "), s("span", [e._v(e._s(e.seconds))]), e._v(" сек")])]), s("div", {staticClass: "center_block"}, [s("div", {staticClass: "level"}, [e._v("Уровень 5")]), s("div", {staticClass: "score"}, [e._v("Общий счет: " + e._s(e.score))])]), s("div", {staticClass: "right_block"}, [s("router-link", {
                    staticClass: "back_to_levels",
                    attrs: {to: {name: "main_menu", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Счет игры")]), s("router-link", {
                    staticClass: "back_to_levels",
                    attrs: {to: {name: "main"}}
                }, [e._v("Выйти из игры")])], 1)])]), s("div", {staticClass: "main_block container"}, [s("div", {staticClass: "main_block_body"}, [e._m(0), s("div", {staticClass: "text"}, e._l(e.allWords, (function (t) {
                    return s("div", {key: t.id, staticClass: "main_text"}, [s("ButtonWord", {
                        attrs: {
                            selected: e.selected,
                            word: t,
                            isDisable: e.isDisable,
                            isVisibleResult: e.isVisibleResult
                        }
                    })], 1)
                })), 0), s("div", {staticClass: "down_block"}, [s("div", {staticClass: "words_block"}, [s("div", {staticClass: "title_select"}, [e._v("Выбранные слова:")]), e._l(e.selected, (function (t) {
                    return s("div", {key: t.id, staticClass: "selected_words"}, [e._v(" " + e._s(t.text) + " ")])
                }))], 2), e.isVisibleResult ? e._e() : s("button", {
                    staticClass: "check_button",
                    on: {click: e.checkSelected}
                }, [e._v("Проверить")])]), s("div", {
                    class: {
                        down_block: e.isVisibleResult,
                        not_visible: !e.isVisibleResult
                    }
                }, [s("div", {staticClass: "result_block"}, [s("div", {staticClass: "title_result"}, [e._v("Ваш результат:")]), s("div", {staticClass: "result_item"}, [e._v("Количество правильно выбранных слов - "), s("span", [e._v(e._s(e.countTrue) + " из " + e._s(e.incorrect.length))])]), s("div", {staticClass: "result_item"}, [e._v("Количество неправильно выбранных слов - "), s("span", [e._v(e._s(e.countFalse))])]), s("div", {staticClass: "result_item"}, [e._v("Счет - "), s("span", [e._v(e._s(e.scoreLevel) + " из " + e._s(e.maxScore))])])]), s("div", {staticClass: "button_block"}, [e.isVisibleAgain ? e._e() : s("div", [s("router-link", {
                    staticClass: "next_button",
                    attrs: {to: {name: "card_game_3", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Следующий уровень")])], 1), s("button", {
                    staticClass: "next_button",
                    attrs: {onclick: "window.location.reload()"}
                }, [e._v("Пройти снова")])])]), e.isVisibleAgain ? s("div", {staticClass: "again_text"}, [e._v("Попробуй снова, у тебя обязательно все получится!")]) : e._e()])])])
            }, F = [function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "task_text"}, [s("span", [e._v("Задание:")]), e._v(" Перед вами представлен текст, выберите из него все слова, которые являются лишними, то есть, не подходят в предложениях по смыслу или которые написаны с ошибками. ")])
            }], E = {
                name: "text_game_3", comments: {ButtonWord: j}, data: function () {
                    return {
                        currentTime: 180,
                        minutes: 3,
                        seconds: "00",
                        timer: null,
                        username: null,
                        text: "Хорошо в лесу душном в жаркий летний день ночной! Высокие сосны развесили иглистые листья вершины, а зелёные ёлочки выгибают длинные колючие ветки кактуса. Красуется белоствольная черная берёза с душистыми листочками. Дражит серая осинка. Кореннастый дуб раскинул шатром свои вырезные ножницами листья. Из травки глядит беленький глазок чудесной земляники. Рядом уже красуется душистая ягодка. Белые серёжки ландыша качаются между длиными листьями. На листике подарожника сидит большой зелёный кузнечик прыгает, играет на скрипке. Стучит пёстрый дятел. Жалобно кричит жёлтая иволга. А вот и голос кукушки. Серый зайка шмыгнул в кусты. Высоко между ветвями мельком мелькнула пушистым хвостом рыжая белка. Стоишь и волнуешся природой.",
                        words: [],
                        selected: [],
                        allWords: [],
                        incorrect: [3, 8, 13, 22, 25, 30, 33, 39, 58, 62, 67, 91, 99],
                        isVisibleResult: !1,
                        isVisibleAgain: !1,
                        isDisable: !1,
                        countTrue: 0,
                        countFalse: 0,
                        score: 0,
                        scoreLevel: 0,
                        maxScore: null
                    }
                }, mounted: function () {
                    this.createArray(), this.getUsername(), this.results(), this.startTimer(), this.getTheme()
                }, destroyed: function () {
                    this.stopTimer()
                }, methods: {
                    getUsername: function () {
                        this.username = this.$route.params.name
                    }, getTheme: function () {
                        document.body.style.backgroundColor = sessionStorage.getItem("backgroundColor"), document.body.style.color = sessionStorage.getItem("title_color");
                        for (var e = document.querySelectorAll(".title_select, .timer span, .task_text span, .title_result"), t = document.querySelectorAll(".check_button, .next_button"), s = document.querySelectorAll(".back_to_levels"), i = 0, r = e.length; i < r; i++) e[i].style.cssText = "color: " + sessionStorage.getItem("task_title_color");
                        for (var o = 0, a = t.length; o < a; o++) t[o].style.cssText = "background-color: " + sessionStorage.getItem("title_color") + ";";
                        for (var c = 0, n = s.length; c < n; c++) s[c].style.cssText = "border-color: " + sessionStorage.getItem("title_color") + ";"
                    }, startTimer: function () {
                        var e = this;
                        this.timer = setInterval((function () {
                            e.currentTime--, e.minutes = parseInt(e.currentTime / 60), e.seconds = e.currentTime % 60, e.seconds < 10 && (e.seconds = 0 + String(e.seconds))
                        }), 1e3)
                    }, stopTimer: function () {
                        clearTimeout(this.timer)
                    }, createArray: function () {
                        var e;
                        this.score = parseInt(sessionStorage.getItem("allScore")), this.words = this.text.split(" ");
                        for (var t = 0; t < this.words.length; t++) {
                            for (var s = 0; s < this.incorrect.length; s++) {
                                if (t === this.incorrect[s]) {
                                    e = !0;
                                    break
                                }
                                s === this.incorrect.length - 1 && (e = !1)
                            }
                            var i = {id: t, text: this.words[t], isIncorrect: e};
                            this.allWords.push(i)
                        }
                    }, checkSelected: function () {
                        this.stopTimer(), this.isVisibleResult = !0, this.isDisable = !0, this.results(), this.again()
                    }, results: function () {
                        for (var e = 0; e < this.selected.length; e++) for (var t = 0; t < this.incorrect.length; t++) {
                            if (this.selected[e].id === this.incorrect[t]) {
                                this.countTrue++;
                                break
                            }
                            t === this.incorrect.length - 1 && this.countFalse++
                        }
                        var s = 10 * this.countTrue - 5 * this.countFalse;
                        s > 0 && (this.scoreLevel = s), this.maxScore = 10 * this.incorrect.length, this.scoreLevel > parseInt(sessionStorage.getItem("scoreLevel5")) && (sessionStorage.setItem("allScore", parseInt(sessionStorage.getItem("allScore")) - parseInt(sessionStorage.getItem("scoreLevel5"))), sessionStorage.setItem("scoreLevel5", this.scoreLevel), sessionStorage.setItem("allScore", parseInt(sessionStorage.getItem("allScore")) + parseInt(sessionStorage.getItem("scoreLevel5")))), this.score = parseInt(sessionStorage.getItem("allScore"))
                    }, again: function () {
                        this.scoreLevel / this.maxScore < .5 && (this.isVisibleAgain = !0)
                    }
                }, watch: {
                    currentTime: function (e) {
                        0 === e && this.checkSelected()
                    }
                }
            }, U = E, B = (s("39bf"), Object(n["a"])(U, G, F, !1, null, "7c2d4ad6", null)), W = B.exports, M = function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "wrapper"}, [s("header", {staticClass: "header"}, [s("div", {staticClass: "header_block container"}, [s("div", {staticClass: "left_block"}, [s("div", {staticClass: "player"}, [e._v("Игрок: " + e._s(e.username))]), e.isVisibleResult ? e._e() : s("div", {staticClass: "timer"}, [e._v("Оставшееся время: "), s("span", [e._v(e._s(e.minutes))]), e._v(" мин "), s("span", [e._v(e._s(e.seconds))]), e._v(" сек")])]), s("div", {staticClass: "center_block"}, [s("div", {staticClass: "level"}, [e._v("Уровень 2")]), s("div", {staticClass: "score"}, [e._v("Общий счет: " + e._s(e.score))])]), s("div", {staticClass: "right_block"}, [s("router-link", {
                    staticClass: "back_to_levels",
                    attrs: {to: {name: "main_menu", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Счет игры")]), s("router-link", {
                    staticClass: "back_to_levels",
                    attrs: {to: {name: "main"}}
                }, [e._v("Выйти из игры")])], 1)])]), s("div", {staticClass: "main_block container"}, [s("div", {staticClass: "main_block_body"}, [e._m(0), s("div", {staticClass: "cards"}, e._l(e.allCards, (function (t) {
                    return s("div", {key: t.id, staticClass: "cards_block"}, [s("ButtonCard", {
                        attrs: {
                            card: t,
                            selected: e.selected,
                            isDisable: e.isDisable,
                            isVisibleResult: e.isVisibleResult
                        }
                    })], 1)
                })), 0), s("div", {staticClass: "down_block"}, [s("div", {staticClass: "words_block"}, [s("div", {staticClass: "title_select"}, [e._v("Выбранные карточки:")]), e._l(e.selected, (function (t) {
                    return s("div", {key: t.id, staticClass: "selected_words"}, [e._v(" " + e._s(t.id) + " ")])
                }))], 2), e.isVisibleResult ? e._e() : s("button", {
                    staticClass: "check_button",
                    on: {click: e.checkSelected}
                }, [e._v("Проверить")])]), s("div", {
                    class: {
                        down_block: e.isVisibleResult,
                        not_visible: !e.isVisibleResult
                    }
                }, [s("div", {staticClass: "result_block"}, [s("div", {staticClass: "title_result"}, [e._v("Ваш результат:")]), s("div", {staticClass: "result_item"}, [e._v("Количество правильно выбранных карточек - "), s("span", [e._v(e._s(e.countTrue) + " из " + e._s(e.correctCards.length))])]), s("div", {staticClass: "result_item"}, [e._v("Количество неправильно выбранных карточек - "), s("span", [e._v(e._s(e.countFalse))])]), s("div", {staticClass: "result_item"}, [e._v("Счет - "), s("span", [e._v(e._s(e.scoreLevel) + " из " + e._s(e.maxScore))])])]), s("div", {staticClass: "button_block"}, [e.isVisibleAgain ? e._e() : s("div", [s("router-link", {
                    staticClass: "next_button",
                    attrs: {to: {name: "text_game_2", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Следующий уровень")])], 1), s("button", {
                    staticClass: "next_button",
                    attrs: {onclick: "window.location.reload()"}
                }, [e._v("Пройти снова")])])]), e.isVisibleAgain ? s("div", {staticClass: "again_text"}, [e._v("Попробуй снова, у тебя обязательно все получится!")]) : e._e()])])])
            }, N = [function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "task_text"}, [s("span", [e._v("Задание:")]), e._v(' Перед вами представлены карточки. Выберите все, которые означают слово, начинающееся на букву "А"')])
            }], P = function () {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("button", {
                    class: {
                        card_item: !e.isActive,
                        card_item_active: e.isActive,
                        true_card: e.card.isCorrect && e.isActive && e.isVisibleResult,
                        false_card: !e.card.isCorrect && e.isActive && e.isVisibleResult
                    }, attrs: {disabled: e.isDisable}, on: {
                        click: function (t) {
                            return e.selectedCards(e.card)
                        }
                    }
                }, [i("img", {attrs: {src: s("6863")("./" + e.img), alt: ""}}), i("div", {
                    class: {
                        card_number: !e.isActive,
                        card_number_active: e.isActive,
                        true_card_number: e.card.isCorrect && e.isActive && e.isVisibleResult,
                        false_card_number: !e.card.isCorrect && e.isActive && e.isVisibleResult
                    }
                }, [e._v(e._s(e.card.id))]), i("div", {staticClass: "pic_desc"}, [e._v(e._s(e.card.description))])])
            }, J = [], z = {
                name: "ButtonCard", props: ["card", "selected", "isDisable", "isVisibleResult"], data: function () {
                    return {isActive: !1, img: null}
                }, mounted: function () {
                    this.img = this.card.img.replace(/"/g, "")
                }, methods: {
                    selectedCards: function (e) {
                        this.selected.includes(e) ? this.selected.splice(this.selected.indexOf(e), 1) : this.selected.push(e), this.isActive = !this.isActive
                    }
                }
            }, Z = z, H = (s("b66e"), Object(n["a"])(Z, P, J, !1, null, "92e1ff9a", null)), K = H.exports, Q = {
                name: "card_game", components: {ButtonCard: K}, comments: {ButtonCard: K}, data: function () {
                    return {
                        username: null,
                        score: null,
                        currentTime: 300,
                        minutes: 5,
                        seconds: "00",
                        timer: null,
                        isVisibleResult: !1,
                        isVisibleAgain: !1,
                        cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        correctCards: [2, 5, 7, 8],
                        cardDescriptions: ["Памятник, в виде суживающегося кверху гранёного каменного столба", "Составная часть светильника", "Домашнее парнокопытное животное", "Участок земли для выращивания овощей вблизи дома", "Коренные народы некоторых территорий, сохранившие первобытно-общинный образ жизни", "Весенний цветок", "Транспортное средство для перевозки пассажиров", "Техника изображения и разновидность изобразительного искусства", "Строение в виде большой теплицы для выращивания растений", "Лицо командного состава армии и флота"],
                        images: ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg", "pic6.jpg", "pic7.jpg", "pic8.jpg", "pic9.jpg", "pic10.jpg"],
                        allCards: [],
                        selected: [],
                        countTrue: 0,
                        countFalse: 0,
                        maxScore: null,
                        scoreLevel: 0,
                        isDisable: !1
                    }
                }, mounted: function () {
                    this.getUsername(), this.getAllScore(), this.startTimer(), this.createCardArray(this.images, this.cardDescriptions), this.getTheme()
                }, destroyed: function () {
                    this.stopTimer()
                }, methods: {
                    getUsername: function () {
                        this.username = this.$route.params.name
                    }, getTheme: function () {
                        document.body.style.backgroundColor = sessionStorage.getItem("backgroundColor"), document.body.style.color = sessionStorage.getItem("title_color");
                        for (var e = document.querySelectorAll(".title_select, .timer span, .task_text span, .title_result"), t = document.querySelectorAll(".check_button, .next_button"), s = document.querySelectorAll(".back_to_levels"), i = 0, r = e.length; i < r; i++) e[i].style.cssText = "color: " + sessionStorage.getItem("task_title_color");
                        for (var o = 0, a = t.length; o < a; o++) t[o].style.cssText = "background-color: " + sessionStorage.getItem("title_color") + ";";
                        for (var c = 0, n = s.length; c < n; c++) s[c].style.cssText = "border-color: " + sessionStorage.getItem("title_color") + ";"
                    }, getAllScore: function () {
                        this.score = this.$route.params.allScore
                    }, startTimer: function () {
                        var e = this;
                        this.timer = setInterval((function () {
                            e.currentTime--, e.minutes = parseInt(e.currentTime / 60), e.seconds = e.currentTime % 60, e.seconds < 10 && (e.seconds = 0 + String(e.seconds))
                        }), 1e3)
                    }, stopTimer: function () {
                        clearTimeout(this.timer)
                    }, createCardArray: function (e, t) {
                        var s;
                        this.score = parseInt(sessionStorage.getItem("allScore"));
                        for (var i = 0; i < this.cards.length; i++) {
                            for (var r = 0; r < this.correctCards.length; r++) {
                                if (i + 1 === this.correctCards[r]) {
                                    s = !0;
                                    break
                                }
                                r === this.correctCards.length - 1 && (s = !1)
                            }
                            var o = {id: i + 1, img: e[i], description: t[i], isCorrect: s};
                            this.allCards.push(o)
                        }
                    }, checkSelected: function () {
                        this.stopTimer(), this.isVisibleResult = !0, this.isDisable = !0, this.check = !0, this.results(), this.again()
                    }, results: function () {
                        for (var e = 0; e < this.selected.length; e++) for (var t = 0; t < this.correctCards.length; t++) {
                            if (this.selected[e].id === this.correctCards[t]) {
                                this.countTrue++;
                                break
                            }
                            t === this.correctCards.length - 1 && this.countFalse++
                        }
                        var s = 10 * this.countTrue - 5 * this.countFalse;
                        s > 0 && (this.scoreLevel = s), this.maxScore = 10 * this.correctCards.length, this.scoreLevel > parseInt(sessionStorage.getItem("scoreLevel2")) && (sessionStorage.setItem("allScore", parseInt(sessionStorage.getItem("allScore")) - parseInt(sessionStorage.getItem("scoreLevel2"))), sessionStorage.setItem("scoreLevel2", this.scoreLevel), sessionStorage.setItem("allScore", parseInt(sessionStorage.getItem("allScore")) + parseInt(sessionStorage.getItem("scoreLevel2")))), this.score = parseInt(sessionStorage.getItem("allScore"))
                    }, again: function () {
                        this.scoreLevel / this.maxScore < .5 && (this.isVisibleAgain = !0)
                    }
                }, watch: {
                    currentTime: function (e) {
                        0 === e && this.checkSelected()
                    }
                }
            }, X = Q, Y = (s("648f"), Object(n["a"])(X, M, N, !1, null, null, null)), ee = Y.exports, te = function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "wrapper"}, [s("header", {staticClass: "header"}, [s("div", {staticClass: "header_block container"}, [s("div", {staticClass: "left_block"}, [s("div", {staticClass: "player"}, [e._v("Игрок: " + e._s(e.username))]), e.isVisibleResult ? e._e() : s("div", {staticClass: "timer"}, [e._v("Оставшееся время: "), s("span", [e._v(e._s(e.minutes))]), e._v(" мин "), s("span", [e._v(e._s(e.seconds))]), e._v(" сек")])]), s("div", {staticClass: "center_block"}, [s("div", {staticClass: "level"}, [e._v("Уровень 4")]), s("div", {staticClass: "score"}, [e._v("Общий счет: " + e._s(e.score))])]), s("div", {staticClass: "right_block"}, [s("router-link", {
                    staticClass: "back_to_levels",
                    attrs: {to: {name: "main_menu", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Счет игры")]), s("router-link", {
                    staticClass: "back_to_levels",
                    attrs: {to: {name: "main"}}
                }, [e._v("Выйти из игры")])], 1)])]), s("div", {staticClass: "main_block container"}, [s("div", {staticClass: "main_block_body"}, [e._m(0), s("div", {staticClass: "cards"}, e._l(e.allCards, (function (t) {
                    return s("div", {key: t.id, staticClass: "cards_block"}, [s("ButtonCard", {
                        attrs: {
                            card: t,
                            selected: e.selected,
                            isDisable: e.isDisable,
                            isVisibleResult: e.isVisibleResult
                        }
                    })], 1)
                })), 0), s("div", {staticClass: "down_block"}, [s("div", {staticClass: "words_block"}, [s("div", {staticClass: "title_select"}, [e._v("Выбранные карточки:")]), e._l(e.selected, (function (t) {
                    return s("div", {key: t.id, staticClass: "selected_words"}, [e._v(" " + e._s(t.id) + " ")])
                }))], 2), e.isVisibleResult ? e._e() : s("button", {
                    staticClass: "check_button",
                    on: {click: e.checkSelected}
                }, [e._v("Проверить")])]), s("div", {
                    class: {
                        down_block: e.isVisibleResult,
                        not_visible: !e.isVisibleResult
                    }
                }, [s("div", {staticClass: "result_block"}, [s("div", {staticClass: "title_result"}, [e._v("Ваш результат:")]), s("div", {staticClass: "result_item"}, [e._v("Количество правильно выбранных карточек - "), s("span", [e._v(e._s(e.countTrue) + " из " + e._s(e.correctCards.length))])]), s("div", {staticClass: "result_item"}, [e._v("Количество неправильно выбранных карточек - "), s("span", [e._v(e._s(e.countFalse))])]), s("div", {staticClass: "result_item"}, [e._v("Счет - "), s("span", [e._v(e._s(e.scoreLevel) + " из " + e._s(e.maxScore))])])]), s("div", {staticClass: "button_block"}, [e.isVisibleAgain ? e._e() : s("div", [s("router-link", {
                    staticClass: "next_button",
                    attrs: {to: {name: "text_game_3", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Следующий уровень")])], 1), s("button", {
                    staticClass: "next_button",
                    attrs: {onclick: "window.location.reload()"}
                }, [e._v("Пройти снова")])])]), e.isVisibleAgain ? s("div", {staticClass: "again_text"}, [e._v("Попробуй снова, у тебя обязательно все получится!")]) : e._e()])])])
            }, se = [function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "task_text"}, [s("span", [e._v("Задание:")]), e._v(" Перед вами представлены карточки. Выберите все, на которых изображены млекопитающие")])
            }], ie = {
                name: "card_game_2", components: {ButtonCard: K}, comments: {ButtonCard: K}, data: function () {
                    return {
                        username: null,
                        score: null,
                        currentTime: 180,
                        minutes: 3,
                        seconds: "00",
                        timer: null,
                        isVisibleResult: !1,
                        isVisibleAgain: !1,
                        cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        correctCards: [2, 4, 5, 8, 10, 12, 13],
                        cardDescriptions: ["Птица", "Кот", "Змея", "Лошадь", "Гепард", "Ящерица", "Осьминог", "Сурикаты", "Пингвины", "Дельфины", "Хамелеон", "Жирафы", "Морж", "Паук", "Рыба"],
                        images: ["pic_1.jpg", "pic_2.jpg", "pic_3.jpg", "pic_4.jpg", "pic_5.jpg", "pic_6.jpg", "pic_7.jpg", "pic_8.jpg", "pic_9.jpg", "pic_10.jpg", "pic_11.jpg", "pic_12.jpg", "pic_13.jpg", "pic_14.jpg", "pic_15.jpg"],
                        allCards: [],
                        selected: [],
                        countTrue: 0,
                        countFalse: 0,
                        maxScore: null,
                        scoreLevel: 0,
                        isDisable: !1
                    }
                }, mounted: function () {
                    this.getUsername(), this.getAllScore(), this.startTimer(), this.createCardArray(this.images, this.cardDescriptions), this.getTheme()
                }, destroyed: function () {
                    this.stopTimer()
                }, methods: {
                    getUsername: function () {
                        this.username = this.$route.params.name
                    }, getTheme: function () {
                        document.body.style.backgroundColor = sessionStorage.getItem("backgroundColor"), document.body.style.color = sessionStorage.getItem("title_color");
                        for (var e = document.querySelectorAll(".title_select, .timer span, .task_text span, .title_result"), t = document.querySelectorAll(".check_button, .next_button"), s = document.querySelectorAll(".back_to_levels"), i = 0, r = e.length; i < r; i++) e[i].style.cssText = "color: " + sessionStorage.getItem("task_title_color");
                        for (var o = 0, a = t.length; o < a; o++) t[o].style.cssText = "background-color: " + sessionStorage.getItem("title_color") + ";";
                        for (var c = 0, n = s.length; c < n; c++) s[c].style.cssText = "border-color: " + sessionStorage.getItem("title_color") + ";"
                    }, getAllScore: function () {
                        this.score = this.$route.params.allScore
                    }, startTimer: function () {
                        var e = this;
                        this.timer = setInterval((function () {
                            e.currentTime--, e.minutes = parseInt(e.currentTime / 60), e.seconds = e.currentTime % 60, e.seconds < 10 && (e.seconds = 0 + String(e.seconds))
                        }), 1e3)
                    }, stopTimer: function () {
                        clearTimeout(this.timer)
                    }, createCardArray: function (e, t) {
                        var s;
                        this.score = parseInt(sessionStorage.getItem("allScore"));
                        for (var i = 0; i < this.cards.length; i++) {
                            for (var r = 0; r < this.correctCards.length; r++) {
                                if (i + 1 === this.correctCards[r]) {
                                    s = !0;
                                    break
                                }
                                r === this.correctCards.length - 1 && (s = !1)
                            }
                            var o = {id: i + 1, img: e[i], description: t[i], isCorrect: s};
                            this.allCards.push(o)
                        }
                    }, checkSelected: function () {
                        this.stopTimer(), this.isVisibleResult = !0, this.isDisable = !0, this.check = !0, this.results(), this.again()
                    }, results: function () {
                        for (var e = 0; e < this.selected.length; e++) for (var t = 0; t < this.correctCards.length; t++) {
                            if (this.selected[e].id === this.correctCards[t]) {
                                this.countTrue++;
                                break
                            }
                            t === this.correctCards.length - 1 && this.countFalse++
                        }
                        var s = 10 * this.countTrue - 5 * this.countFalse;
                        s > 0 && (this.scoreLevel = s), this.maxScore = 10 * this.correctCards.length, this.scoreLevel > parseInt(sessionStorage.getItem("scoreLevel4")) && (sessionStorage.setItem("allScore", parseInt(sessionStorage.getItem("allScore")) - parseInt(sessionStorage.getItem("scoreLevel4"))), sessionStorage.setItem("scoreLevel4", this.scoreLevel), sessionStorage.setItem("allScore", parseInt(sessionStorage.getItem("allScore")) + parseInt(sessionStorage.getItem("scoreLevel4")))), this.score = parseInt(sessionStorage.getItem("allScore"))
                    }, again: function () {
                        this.scoreLevel / this.maxScore < .5 && (this.isVisibleAgain = !0)
                    }
                }, watch: {
                    currentTime: function (e) {
                        0 === e && this.checkSelected()
                    }
                }
            }, re = ie, oe = (s("8732"), Object(n["a"])(re, te, se, !1, null, "b18637f4", null)), ae = oe.exports,
            ce = function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "wrapper"}, [s("header", {staticClass: "header"}, [s("div", {staticClass: "header_block container"}, [s("div", {staticClass: "left_block"}, [s("div", {staticClass: "player"}, [e._v("Игрок: " + e._s(e.username))]), e.isVisibleResult ? e._e() : s("div", {staticClass: "timer"}, [e._v("Оставшееся время: "), s("span", [e._v(e._s(e.minutes))]), e._v(" мин "), s("span", [e._v(e._s(e.seconds))]), e._v(" сек")])]), s("div", {staticClass: "center_block"}, [s("div", {staticClass: "level"}, [e._v("Уровень 6")]), s("div", {staticClass: "score"}, [e._v("Общий счет: " + e._s(e.score))])]), s("div", {staticClass: "right_block"}, [s("router-link", {
                    staticClass: "back_to_levels",
                    attrs: {to: {name: "main_menu", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Счет игры")]), s("router-link", {
                    staticClass: "back_to_levels",
                    attrs: {to: {name: "main"}}
                }, [e._v("Выйти из игры")])], 1)])]), s("div", {staticClass: "main_block container"}, [s("div", {staticClass: "main_block_body"}, [e._m(0), s("div", {staticClass: "cards"}, e._l(e.allCards, (function (t) {
                    return s("div", {key: t.id, staticClass: "cards_block"}, [s("ButtonCard", {
                        attrs: {
                            card: t,
                            selected: e.selected,
                            isDisable: e.isDisable,
                            isVisibleResult: e.isVisibleResult
                        }
                    })], 1)
                })), 0), s("div", {staticClass: "down_block"}, [s("div", {staticClass: "words_block"}, [s("div", {staticClass: "title_select"}, [e._v("Выбранные карточки:")]), e._l(e.selected, (function (t) {
                    return s("div", {key: t.id, staticClass: "selected_words"}, [e._v(" " + e._s(t.id) + " ")])
                }))], 2), e.isVisibleResult ? e._e() : s("button", {
                    staticClass: "check_button",
                    on: {click: e.checkSelected}
                }, [e._v("Проверить")])]), s("div", {
                    class: {
                        down_block: e.isVisibleResult,
                        not_visible: !e.isVisibleResult
                    }
                }, [s("div", {staticClass: "result_block"}, [s("div", {staticClass: "title_result"}, [e._v("Ваш результат:")]), s("div", {staticClass: "result_item"}, [e._v("Количество правильно выбранных карточек - "), s("span", [e._v(e._s(e.countTrue) + " из " + e._s(e.correctCards.length))])]), s("div", {staticClass: "result_item"}, [e._v("Количество неправильно выбранных карточек - "), s("span", [e._v(e._s(e.countFalse))])]), s("div", {staticClass: "result_item"}, [e._v("Счет - "), s("span", [e._v(e._s(e.scoreLevel) + " из " + e._s(e.maxScore))])])]), e._m(1)]), e.isVisibleAgain ? s("div", {staticClass: "again_text"}, [e._v("Попробуй снова, у тебя обязательно все получится!")]) : e._e(), s("div", {
                    class: {
                        end_block: !e.isVisibleAgain && e.isVisibleResult,
                        not_visible: !e.isVisibleResult || e.isVisibleAgain
                    }
                }, [s("div", {staticClass: "again_text"}, [e._v("Поздравляем с успешным окончанием игры!")]), s("router-link", {
                    staticClass: "next_button end_button",
                    attrs: {to: {name: "main_menu", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Результаты игры")])], 1)])])])
            }, ne = [function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "task_text"}, [s("span", [e._v("Задание:")]), e._v(" Перед вами представлены карточки. Выберите все те, на которых изображены достопремечательности европейских стран")])
            }, function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "button_block"}, [s("button", {
                    staticClass: "next_button",
                    attrs: {onclick: "window.location.reload()"}
                }, [e._v("Пройти снова")])])
            }], le = {
                name: "card_game_3", components: {ButtonCard: K}, comments: {ButtonCard: K}, data: function () {
                    return {
                        username: null,
                        score: null,
                        currentTime: 180,
                        minutes: 3,
                        seconds: "00",
                        timer: null,
                        isVisibleResult: !1,
                        isVisibleAgain: !1,
                        cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        correctCards: [1, 4, 5, 9, 11, 13, 15],
                        cardDescriptions: ["Пизанская башня", "Пирамида Хеопса", "Каменные статуи Моаи", "Колизей", "Часовая башня Биг Бен", "Великая стена", "Гора Рашмор", "Пирамида Майя", "Нотр-Дам-де-Пари", "Хоббитон", "Замок Нойшванштайн", "Статуя Христа", "Бранденбургские ворота", "Брайс-Каньон", "Пантеон"],
                        images: ["pic__1.jpg", "pic__2.jpg", "pic__3.jpg", "pic__4.jpg", "pic__5.jpg", "pic__6.jpg", "pic__7.jpg", "pic__8.jpg", "pic__9.jpg", "pic__10.jpg", "pic__11.jpg", "pic__12.jpg", "pic__13.jpg", "pic__14.jpg", "pic__15.jpg"],
                        allCards: [],
                        selected: [],
                        countTrue: 0,
                        countFalse: 0,
                        maxScore: null,
                        scoreLevel: 0,
                        isDisable: !1
                    }
                }, mounted: function () {
                    this.getUsername(), this.getAllScore(), this.startTimer(), this.createCardArray(this.images, this.cardDescriptions), this.getTheme()
                }, destroyed: function () {
                    this.stopTimer()
                }, methods: {
                    getUsername: function () {
                        this.username = this.$route.params.name
                    }, getTheme: function () {
                        document.body.style.backgroundColor = sessionStorage.getItem("backgroundColor"), document.body.style.color = sessionStorage.getItem("title_color");
                        for (var e = document.querySelectorAll(".title_select, .timer span, .task_text span, .title_result"), t = document.querySelectorAll(".check_button, .next_button, .end_button"), s = document.querySelectorAll(".back_to_levels"), i = 0, r = e.length; i < r; i++) e[i].style.cssText = "color: " + sessionStorage.getItem("task_title_color");
                        for (var o = 0, a = t.length; o < a; o++) t[o].style.cssText = "background-color: " + sessionStorage.getItem("title_color") + ";";
                        for (var c = 0, n = s.length; c < n; c++) s[c].style.cssText = "border-color: " + sessionStorage.getItem("title_color") + ";"
                    }, getAllScore: function () {
                        this.score = this.$route.params.allScore
                    }, startTimer: function () {
                        var e = this;
                        this.timer = setInterval((function () {
                            e.currentTime--, e.minutes = parseInt(e.currentTime / 60), e.seconds = e.currentTime % 60, e.seconds < 10 && (e.seconds = 0 + String(e.seconds))
                        }), 1e3)
                    }, stopTimer: function () {
                        clearTimeout(this.timer)
                    }, createCardArray: function (e, t) {
                        var s;
                        this.score = parseInt(sessionStorage.getItem("allScore"));
                        for (var i = 0; i < this.cards.length; i++) {
                            for (var r = 0; r < this.correctCards.length; r++) {
                                if (i + 1 === this.correctCards[r]) {
                                    s = !0;
                                    break
                                }
                                r === this.correctCards.length - 1 && (s = !1)
                            }
                            var o = {id: i + 1, img: e[i], description: t[i], isCorrect: s};
                            this.allCards.push(o)
                        }
                    }, checkSelected: function () {
                        this.stopTimer(), this.isVisibleResult = !0, this.isDisable = !0, this.check = !0, this.results(), this.again()
                    }, results: function () {
                        for (var e = 0; e < this.selected.length; e++) for (var t = 0; t < this.correctCards.length; t++) {
                            if (this.selected[e].id === this.correctCards[t]) {
                                this.countTrue++;
                                break
                            }
                            t === this.correctCards.length - 1 && this.countFalse++
                        }
                        var s = 10 * this.countTrue - 5 * this.countFalse;
                        s > 0 && (this.scoreLevel = s), this.maxScore = 10 * this.correctCards.length, this.scoreLevel > parseInt(sessionStorage.getItem("scoreLevel6")) && (sessionStorage.setItem("allScore", parseInt(sessionStorage.getItem("allScore")) - parseInt(sessionStorage.getItem("scoreLevel6"))), sessionStorage.setItem("scoreLevel6", this.scoreLevel), sessionStorage.setItem("allScore", parseInt(sessionStorage.getItem("allScore")) + parseInt(sessionStorage.getItem("scoreLevel6")))), this.score = parseInt(sessionStorage.getItem("allScore"))
                    }, again: function () {
                        this.scoreLevel / this.maxScore < .5 && (this.isVisibleAgain = !0)
                    }
                }, watch: {
                    currentTime: function (e) {
                        0 === e && this.checkSelected()
                    }
                }
            }, _e = le, ue = (s("5c0b"), Object(n["a"])(_e, ce, ne, !1, null, "1324202c", null)), de = ue.exports,
            me = function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {staticClass: "wrapper"}, [s("header", {staticClass: "header"}, [s("div", {staticClass: "headers_block container"}, [s("div", {staticClass: "left_block"}, [s("div", {staticClass: "player"}, [e._v("Игрок: " + e._s(e.username))])]), s("div", {staticClass: "center_block"}, [s("div", {staticClass: "title_menu"}, [e._v("Главное меню ")]), s("div", {staticClass: "score"}, [e._v("Счет за всю игру: " + e._s(e.score) + " из 560")])]), s("div", {staticClass: "right_block"}, [s("router-link", {
                    staticClass: "right_button",
                    attrs: {to: {name: "main"}}
                }, [e._v("Выйти из игры")]), s("button", {
                    staticClass: "right_button",
                    on: {click: e.Switch}
                }, [e._v("Сменить тему")])], 1)])]), s("div", {staticClass: "main_block container"}, [s("div", {staticClass: "main_block_body"}, [s("ul", {staticClass: "level_list"}, [s("div", {staticClass: "to_level"}, [s("router-link", {
                    staticClass: "level_item",
                    attrs: {to: {name: "text_game", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Уровень 1")]), s("div", {staticClass: "best_score"}, [e._v("Лучший счет: " + e._s(e.score1) + " из 90")])], 1), s("div", {staticClass: "to_level"}, [e.isCanGo2 ? s("router-link", {
                    staticClass: "level_item",
                    attrs: {to: {name: "card_game", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Уровень 2")]) : e._e(), e.isCanGo2 ? s("div", {staticClass: "best_score"}, [e._v("Лучший счет: " + e._s(e.score2) + " из 40")]) : e._e(), e.isCanGo2 ? e._e() : s("li", {staticClass: "level_item not_to_go"}, [e._v("Уровень 2")])], 1), s("div", {staticClass: "to_level"}, [e.isCanGo3 ? s("router-link", {
                    staticClass: "level_item",
                    attrs: {to: {name: "text_game_2", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Уровень 3")]) : e._e(), e.isCanGo3 ? s("div", {staticClass: "best_score"}, [e._v("Лучший счет: " + e._s(e.score3) + " из 160")]) : e._e(), e.isCanGo3 ? e._e() : s("li", {staticClass: "level_item not_to_go"}, [e._v("Уровень 3")])], 1), s("div", {staticClass: "to_level"}, [e.isCanGo4 ? s("router-link", {
                    staticClass: "level_item",
                    attrs: {to: {name: "card_game_2", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Уровень 4")]) : e._e(), e.isCanGo4 ? s("div", {staticClass: "best_score"}, [e._v("Лучший счет: " + e._s(e.score4) + " из 70")]) : e._e(), e.isCanGo4 ? e._e() : s("li", {staticClass: "level_item not_to_go"}, [e._v("Уровень 4")])], 1), s("div", {staticClass: "to_level"}, [e.isCanGo5 ? s("router-link", {
                    staticClass: "level_item",
                    attrs: {to: {name: "text_game_3", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Уровень 5")]) : e._e(), e.isCanGo5 ? s("div", {staticClass: "best_score"}, [e._v("Лучший счет: " + e._s(e.score5) + " из 130")]) : e._e(), e.isCanGo5 ? e._e() : s("li", {staticClass: "level_item not_to_go"}, [e._v("Уровень 5")])], 1), s("div", {staticClass: "to_level"}, [e.isCanGo6 ? s("router-link", {
                    staticClass: "level_item",
                    attrs: {to: {name: "card_game_3", params: {name: e.username, allScore: e.score}}}
                }, [e._v("Уровень 6")]) : e._e(), e.isCanGo6 ? s("div", {staticClass: "best_score"}, [e._v("Лучший счет: " + e._s(e.score6) + " из 70")]) : e._e(), e.isCanGo6 ? e._e() : s("li", {staticClass: "level_item not_to_go"}, [e._v("Уровень 6")])], 1)])])])])
            }, ge = [], ve = {
                name: "MainMenu", data: function () {
                    return {
                        username: null,
                        score: null,
                        isCanGo2: !1,
                        isCanGo3: !1,
                        isCanGo4: !1,
                        isCanGo5: !1,
                        isCanGo6: !1,
                        score1: 0,
                        score2: 0,
                        score3: 0,
                        score4: 0,
                        score5: 0,
                        score6: 0
                    }
                }, mounted: function () {
                    this.getUsername(), this.getAllScore(), this.IsCanGo(), this.getTheme()
                }, methods: {
                    getUsername: function () {
                        this.username = this.$route.params.name
                    }, Switch: function () {
                        var e = ["#d6f3ff", "#fdd6ff", "#ffd6e8", "#d6fff2", "#f7ffd6"],
                            t = ["#165570", "#5a1670", "#701643", "#16705e", "#705d16"],
                            s = ["#0d99d6", "#b10dd6", "#d60d86", "#0dd6aa", "#d6c50d"],
                            i = Math.floor(Math.random() * e.length);
                        sessionStorage.setItem("backgroundColor", e[i]), sessionStorage.setItem("title_color", t[i]), sessionStorage.setItem("task_title_color", s[i]), document.body.style.backgroundColor = sessionStorage.getItem("backgroundColor"), document.body.style.color = sessionStorage.getItem("title_color");
                        for (var r = document.querySelectorAll(".title_select, .timer span, .task_text span, .title_result"), o = document.querySelectorAll(".check_button, .form_button"), a = document.querySelectorAll(".back_to_levels, .right_button"), c = 0, n = r.length; c < n; c++) r[c].style.cssText = "color: " + sessionStorage.getItem("task_title_color");
                        for (var l = 0, _ = o.length; l < _; l++) o[l].style.cssText = "background-color: " + sessionStorage.getItem("title_color") + ";", console.log(sessionStorage.getItem("title_color"));
                        for (var u = 0, d = a.length; u < d; u++) a[u].style.cssText = "border-color: " + sessionStorage.getItem("title_color") + ";"
                    }, getTheme: function () {
                        document.body.style.backgroundColor = sessionStorage.getItem("backgroundColor"), document.body.style.color = sessionStorage.getItem("title_color");
                        for (var e = document.querySelectorAll(".title_select, .timer span, .task_text span, .title_result"), t = document.querySelectorAll(".check_button"), s = document.querySelectorAll(".back_to_levels, .right_button"), i = 0, r = e.length; i < r; i++) e[i].style.cssText = "color: " + sessionStorage.getItem("task_title_color");
                        for (var o = 0, a = t.length; o < a; o++) t[o].style.cssText = "background-color: " + sessionStorage.getItem("title_color") + ";";
                        for (var c = 0, n = s.length; c < n; c++) s[c].style.cssText = "border-color: " + sessionStorage.getItem("title_color") + ";"
                    }, getAllScore: function () {
                        this.score = this.$route.params.allScore, this.score1 = sessionStorage.getItem("scoreLevel1"), this.score2 = sessionStorage.getItem("scoreLevel2"), this.score3 = sessionStorage.getItem("scoreLevel3"), this.score4 = sessionStorage.getItem("scoreLevel4"), this.score5 = sessionStorage.getItem("scoreLevel5"), this.score6 = sessionStorage.getItem("scoreLevel6")
                    }, IsCanGo: function () {
                        sessionStorage.getItem("scoreLevel1") >= 45 && (this.isCanGo2 = !0), sessionStorage.getItem("scoreLevel2") >= 20 && (this.isCanGo3 = !0), sessionStorage.getItem("scoreLevel3") >= 80 && (this.isCanGo4 = !0), sessionStorage.getItem("scoreLevel4") >= 35 && (this.isCanGo5 = !0), sessionStorage.getItem("scoreLevel5") >= 65 && (this.isCanGo6 = !0)
                    }
                }
            }, pe = ve, he = (s("ab78"), Object(n["a"])(pe, me, ge, !1, null, null, null)), be = he.exports,
            fe = new u["a"]({
                routes: [{path: "/", name: "main", component: b}, {
                    path: "/text_game/:name",
                    name: "text_game",
                    component: V
                }, {
                    path: "/card_game/:name/:allScore",
                    name: "card_game",
                    component: ee
                }, {
                    path: "/text_game_2/:name/:allScore",
                    name: "text_game_2",
                    component: O
                }, {
                    path: "/card_game_2/:name/:allScore",
                    name: "card_game_2",
                    component: ae
                }, {
                    path: "/text_game_3/:name/:allScore",
                    name: "text_game_3",
                    component: W
                }, {
                    path: "/card_game_3/:name/:allScore",
                    name: "card_game_3",
                    component: de
                }, {path: "/main_menu/:name/:allScore", name: "main_menu", component: be}]
            });
        i["a"].component("ButtonWord", j), i["a"].config.productionTip = !1, i["a"].use(u["a"]), i["a"].use(d["a"]), new i["a"]({
            render: function (e) {
                return e(_)
            }, el: "#app", router: fe
        })
    }, 5727: function (e, t, s) {
        e.exports = s.p + "img/pic_12.5cc22556.jpg"
    }, "5c0b": function (e, t, s) {
        "use strict";
        s("6a61")
    }, "648f": function (e, t, s) {
        "use strict";
        s("d039e")
    }, "656c": function (e, t, s) {
        e.exports = s.p + "img/pic_14.e7f509c9.jpg"
    }, 6863: function (e, t, s) {
        var i = {
            "./pic1.jpg": "2e86",
            "./pic10.jpg": "9603",
            "./pic2.jpg": "c9d1",
            "./pic3.jpg": "4a68",
            "./pic4.jpg": "3875",
            "./pic5.jpg": "e7d3",
            "./pic6.jpg": "51bd",
            "./pic7.jpg": "0462",
            "./pic8.jpg": "e293",
            "./pic9.jpg": "9b89",
            "./pic_1.jpg": "ac6a",
            "./pic_10.jpg": "2d3b",
            "./pic_11.jpg": "10a0",
            "./pic_12.jpg": "5727",
            "./pic_13.jpg": "01e4",
            "./pic_14.jpg": "656c",
            "./pic_15.jpg": "4276",
            "./pic_2.jpg": "155d",
            "./pic_3.jpg": "256a",
            "./pic_4.jpg": "a862",
            "./pic_5.jpg": "1eed",
            "./pic_6.jpg": "a49e",
            "./pic_7.jpg": "9c89",
            "./pic_8.jpg": "49a3",
            "./pic_9.jpg": "4904",
            "./pic__1.jpg": "dd03",
            "./pic__10.jpg": "3cc4",
            "./pic__11.jpg": "4ed0",
            "./pic__12.jpg": "2103",
            "./pic__13.jpg": "750e",
            "./pic__14.jpg": "4078",
            "./pic__15.jpg": "39d0",
            "./pic__2.jpg": "a275",
            "./pic__3.jpg": "397f",
            "./pic__4.jpg": "8c1e",
            "./pic__5.jpg": "7184",
            "./pic__6.jpg": "8d7a",
            "./pic__7.jpg": "21ce",
            "./pic__8.jpg": "dbfa",
            "./pic__9.jpg": "cbfa"
        };

        function r(e) {
            var t = o(e);
            return s(t)
        }

        function o(e) {
            if (!s.o(i, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return i[e]
        }

        r.keys = function () {
            return Object.keys(i)
        }, r.resolve = o, e.exports = r, r.id = "6863"
    }, "6a61": function (e, t, s) {
    }, 7184: function (e, t, s) {
        e.exports = s.p + "img/pic__5.d0f1da45.jpg"
    }, "750e": function (e, t, s) {
        e.exports = s.p + "img/pic__13.d3944af3.jpg"
    }, 8209: function (e, t, s) {
    }, 8389: function (e, t, s) {
    }, "85ec": function (e, t, s) {
    }, 8732: function (e, t, s) {
        "use strict";
        s("8209")
    }, "8c1e": function (e, t, s) {
        e.exports = s.p + "img/pic__4.3eda1643.jpg"
    }, "8d7a": function (e, t, s) {
        e.exports = s.p + "img/pic__6.6fc82a06.jpg"
    }, 9603: function (e, t, s) {
        e.exports = s.p + "img/pic10.d971a34c.jpg"
    }, "9b89": function (e, t, s) {
        e.exports = s.p + "img/pic9.e3e792a7.jpg"
    }, "9c89": function (e, t, s) {
        e.exports = s.p + "img/pic_7.ac5b95c6.jpg"
    }, a275: function (e, t, s) {
        e.exports = s.p + "img/pic__2.26621aaa.jpg"
    }, a49e: function (e, t, s) {
        e.exports = s.p + "img/pic_6.467afc34.jpg"
    }, a72d: function (e, t, s) {
        "use strict";
        s("8389")
    }, a862: function (e, t, s) {
        e.exports = s.p + "img/pic_4.e4c2fa9f.jpg"
    }, ab78: function (e, t, s) {
        "use strict";
        s("19f2")
    }, ac6a: function (e, t, s) {
        e.exports = s.p + "img/pic_1.557aa881.jpg"
    }, b66e: function (e, t, s) {
        "use strict";
        s("0407")
    }, c9d1: function (e, t, s) {
        e.exports = s.p + "img/pic2.236e4390.jpg"
    }, cbfa: function (e, t, s) {
        e.exports = s.p + "img/pic__9.4e9df8d8.jpg"
    }, d039e: function (e, t, s) {
    }, d347: function (e, t, s) {
    }, d813: function (e, t, s) {
        "use strict";
        s("3f5f")
    }, dbfa: function (e, t, s) {
        e.exports = s.p + "img/pic__8.de763111.jpg"
    }, dd03: function (e, t, s) {
        e.exports = s.p + "img/pic__1.bb215a32.jpg"
    }, dd0d: function (e, t, s) {
    }, e293: function (e, t, s) {
        e.exports = s.p + "img/pic8.e0c79329.jpg"
    }, e6d1: function (e, t, s) {
        "use strict";
        s("f4e5")
    }, e7d3: function (e, t, s) {
        e.exports = s.p + "img/pic5.0696ea9e.jpg"
    }, f4e5: function (e, t, s) {
    }
});
//# sourceMappingURL=app.bdd711f8.js.map