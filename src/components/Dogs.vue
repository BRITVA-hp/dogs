<template>
  
    <section class="header pt-3 pt-sm-5">
        <div class="container">

            <nav class="nav d-flex justify-content-between align-items-center">
                <div class="select-container">
                    <div class="select position-relative is-active">
                        <div class="select__header">
                            <div class="sphere"><img src="../assets/img/1-header/shpere.svg" alt=""></div>
                            <span class="select__current">RUS</span>
                            <div class="traingle"><img src="../assets/img/1-header/triangle.svg" alt=""></div>
                        </div>

                        <div class="select__body">
                            <div @click="eng" class="select__item">ENG</div>
                            <div @click="ru" class="select__item">RUS</div>
                        </div>
                    </div>
                </div>

                <img class="burger d-block d-lg-none" src="../assets/img/1-header/burger.png" alt="">

                <div class="wrapper-list">
                    <img class="closed d-block d-lg-none" src="../assets/img/1-header/closed.svg" alt="">
                    <ul class="nav-list">
                        <li v-for="(item, index) in data.nav" :key="index" class="list-element"><a v-html="item.name" :href="item.link"></a></li>
                    </ul>
                </div>
            </nav>

            <div class="header-block d-flex justify-content-center justify-content-sm-between align-items-sm-end">

                <!--  me-sm-2 me-lg-0 mt-0 mt-sm-3 mt-md-4 mt-xl-5 -->
                <div class="header-information d-flex flex-column">

                    <div class="title-block d-flex align-items-center">
                        <img src="../assets/img/1-header/diamond.png" alt="">
                        <h1 class="header-title ms-2 ms-md-3">TON FRIENDS</h1>
                    </div>
                    <p v-html="data.main.title" class="header-description text-center text-sm-start"></p>
                    <p v-html="data.main.text" class="header-description__text"></p>
                    <img class="set-pic__mob d-block d-sm-none" src="../assets/img/1-header/set-pic-mob.png" alt="">

                    <div class="header-timer mb-2 mb-sm-3">
                        <div class="timer d-flex mb-4 mb-lg-5">
                            <div class="timer-element me-3 me-sm-3 me-lg-4 d-flex flex-column align-items-center">
                                <div class="timer-number d-flex justify-content-center align-items-center">
                                    <span>0</span>
                                    <span>0</span>
                                </div>
                                <p v-html="data.main.days" class="timer-element__text"></p>
                            </div>
                            <div class="timer-element me-3 me-sm-3 me-lg-4 d-flex flex-column align-items-center">
                                <div class="timer-number d-flex justify-content-center align-items-center">
                                    <span>0</span>
                                    <span>0</span>
                                </div>
                                <p v-html="data.main.hours" class="timer-element__text"></p>
                            </div>
                            <div class="timer-element me-3 me-sm-3 me-lg-4 d-flex flex-column align-items-center">
                                <div class="timer-number d-flex justify-content-center align-items-center">
                                    <span>0</span>
                                    <span>0</span>
                                </div>
                                <p v-html="data.main.minutes" class="timer-element__text"></p>
                            </div>
                            <div class="timer-element me-2 me-sm-3 me-lg-4 d-flex flex-column align-items-center">
                                <div class="timer-number d-flex justify-content-center align-items-center">
                                    <span>0</span>
                                    <span>0</span>
                                </div>
                                <p v-html="data.main.seconds" class="timer-element__text"></p>
                            </div>
                        </div>
                        <p v-html="data.main.string" class="timer-text"></p>
                    </div>

                    <div class="header-link d-flex flex-column flex-lg-row">
                        <a v-html="data.main.button1" href="https://t.me/TONFriends_NFT"
                            class="link-social link-social-telegram mb-1 mb-lg-0 me-0 me-lg-3 position-relative text-end"></a>
                        <a v-html="data.main.button2" href="#" class="link-social link-social-play position-relative text-end"></a>
                    </div>
                </div>

                <picture class="set-pic d-none d-sm-block">
                    <source srcset="img/1-header/set-pic-mob.png" media="(max-width: 575px)">
                    <img src="../assets/img/1-header/set-pic.png" alt="modal-sent-img">
                </picture>

            </div>

        </div>
    </section>

    <section id="friends" class="friends">
        <div class="container">
            <div class="friends__main">
                <h2 v-html="data.friends.title" class="title"></h2>
                <div class="friends__card d-flex flex-wrap justify-content-center">
                    <div v-for="(card, index) in data.friends.cards" :key="index" class="friends__card-element text-center">
                        <h3 v-html="card.title" class="mb-2 text-uppercase"></h3>
                        <p v-html="card.text" class="friends__description text-lowercase"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="history" class="bull-terrier">
        <div class="container">
            <div class="paw-block pt-2 pt-sm-0">
                <h2 v-html="data.history.title" class="title"></h2>
                <div
                    class="paw-block-text mb-4 mb-sm-5 d-flex align-items-center flex-column-reverse flex-sm-row justify-content-start justify-content-sm-around justify-content-md-between">
                    <img class="mt-3 mt-sm-0" src="../assets/img/3-bull-terrier/description-1.png" alt="">
                    <p v-html="data.history.text1" class="paw-text text-center text-sm-start"></p>
                </div>
                <div
                    class="paw-block-text d-flex align-items-center justify-content-start justify-content-sm-around justify-content-md-between flex-column-reverse flex-sm-row-reverse">
                    <img class="mt-3 mt-sm-0" src="../assets/img/3-bull-terrier/description-2.png" alt="">
                    <p v-html="data.history.text2" class="paw-text text-center text-sm-start"></p>
                </div>
            </div>
        </div>
    </section>

    <section id="collection" class="buy">
        <div class="container">
            <h3 v-html="data.collection.title" class="title"></h3>
            <div class="buy__main d-flex flex-column align-items-center">
                <img class="d-none d-md-block" src="../assets/img/4-buy/buy-img.png" alt="">
                <div class="buy__line w-100 d-flex justify-content-between d-md-none">
                    <img src="../assets/img/4-buy/buy-img-left-mob.png" alt="">
                    <img src="../assets/img/4-buy/buy-img-right-mob.png" alt="">
                </div>
                <div class="buy-btn d-flex align-items-center">
                    <img class="d-none d-md-block" src="../assets/img/4-buy/step-left.png" alt="">
                    <button v-html="data.collection.button" class="btn-buy"></button>
                    <img class="d-none d-md-block" src="../assets/img/4-buy/step-right.png" alt="">
                </div>
            </div>
        </div>
    </section>

    <section id="bonus" class="bonus">
        <div class="container">
            <div class="bonus__main">
                <h1 v-html="data.bonus.title" class="title"></h1>
                <h5 v-html="data.bonus.text" class="bonus__subtitle"></h5>

                <div class="bonus__list d-flex flex-column flex-md-row justify-content-between align-items-center">

                    <div class="bonus__item mb-5 mb-md-0 d-flex flex-column align-items-center">
                        <img class="mb-3" src="../assets/img/5-bonus/b-1.jpg" alt="">
                        <p v-html="data.bonus.card1" class="bonus__item--description"></p>
                    </div>

                    <img class="bonus__step" src="../assets/img/5-bonus/b-step.png" alt="">

                    <div class="bonus__item mb-5 mb-md-0 d-flex flex-column align-items-center">
                        <img class="mb-3" src="../assets/img/5-bonus/b-2.png" alt="">
                        <p class="bonus__item--description" v-html="data.bonus.card2"></p>
                    </div>
                    <img class="bonus__step" src="../assets/img/5-bonus/b-step.png" alt="">


                    <div class="bonus__item mb-5 mb-md-0 d-flex flex-column align-items-center">
                        <img class="mb-3" src="../assets/img/5-bonus/b-3.png" alt="">
                        <p class="bonus__item--description" v-html="data.bonus.card3"></p>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section id="map" class="map">
        <div class="container">
            <div class="map__main">
                <h2 v-html="data.map.title" class="title mb-5 pb-0 pb-md-5 text-center"></h2>

                <div class="map__list d-flex flex-column flex-md-row justify-content-between position-relative">

                    <div v-for="(card, index1) in data.map.cards" :key="index1" class="map__element">
                        <div class="pam__plate">
                            <h4
                              v-html="card.title.text"
                              :class="card.title.class"
                              class="pam__plate--title"></h4>
                            <p v-html="card.text"></p>
                        </div>
                        <ul
                            class="map__element-block text-start d-flex align-items-center align-items-md-end flex-column">
                            <li
                              v-for="(item, index2) in card.items"
                              :key="index2"
                              v-html="item.text"
                              :class="item.class"
                              ></li>
                        </ul>
                    </div>

                    <img class="map-frpoup position-absolute d-none d-md-block" src="../assets/img/8-map/group-desctop.png"
                        alt="">

                    <img class="mobile-dog d-block d-md-none mx-auto" src="../assets/img/8-map/group-desctop.png" alt="">
                </div>
            </div>
        </div>
    </section>

    <section id="economy" class="economy">
        <div class="container">
            <div class="economy__main">
                <h4 v-html="data.economy.title" class="title"></h4>

                <div class="economy__diagram d-flex justify-content-center position-relative">
                    <img src="../assets/img/7-economy/sphere.png" alt="">
                    <p v-html="data.economy.text1" class="economy__diagram--text economy__diagram--text-1 position-absolute"></p>
                    <p v-html="data.economy.text2" class="economy__diagram--text economy__diagram--text-2 position-absolute"></p>
                    <p v-html="data.economy.text3" class="economy__diagram--text economy__diagram--text-3 position-absolute"></p>
                    <p v-html="data.economy.text4" class="economy__diagram--text economy__diagram--text-4 position-absolute"></p>
                </div>
            </div>
        </div>
    </section>

    <section id="team" class="team">
        <div class="container">
            <div class="team__main">
                <h4 class="title mb-5 pb-0 pb-md-5">{{ data.team.title }}</h4>

                <div class="mb-0 mb-md-5 team__list d-flex justify-content-between flex-wrap flex-md-row">

                    <div class="team__card">
                        <img class="mb-2" src='../assets/img/6-team/1.png' alt="team">
                        <p class="team__card--description">Ilya<br><span>Co-Founder, CEO</span></p>
                    </div>
                    <div class="team__card">
                        <img class="mb-2" src='../assets/img/6-team/2.png' alt="team">
                        <p class="team__card--description">Sergey<br><span>Co-Founder</span></p>
                    </div>
                    <div class="team__card">
                        <img class="mb-2" src='../assets/img/6-team/3.png' alt="team">
                        <p class="team__card--description">Ramin<br><span>Head of Project</span></p>
                    </div>
                    <div class="team__card">
                        <img class="mb-2" src='../assets/img/6-team/4.png' alt="team">
                        <p class="team__card--description">Oleg<br><span>CMO</span></p>
                    </div>

                </div>
                <div class="team__list d-flex justify-content-between flex-wrap flex-md-row">

                    <div class="team__card">
                        <img class="mb-2" src='../assets/img/6-team/5.png' alt="team">
                        <p class="team__card--description">Anastasia<br><span>Project manager</span></p>
                    </div>
                    <div class="team__card">
                        <img class="mb-2" src='../assets/img/6-team/6.png' alt="team">
                        <p class="team__card--description">Olga<br><span>Designer</span></p>
                    </div>
                    <div class="team__card">
                        <img class="mb-2" src='../assets/img/6-team/7.png' alt="team">
                        <p class="team__card--description">Anastasia<br><span>Designer</span></p>
                    </div>
                    <div class="team__card">
                        <img class="mb-2" src='../assets/img/6-team/8.png' alt="team">
                        <p class="team__card--description">ALDES NFT<br><span>Community grow & paid ad</span></p>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <footer class="footer mb-4 mb-md-5 pb-0 pb-md-4">
        <div class="container d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <div class="footer__title mb-4 mb-sm-0 d-flex flex-column flex-xl-row align-items-center">
                <h2 class="title mb-0 me-0 me-xl-5">BASED ON</h2>
                <div class="footer__diamind d-flex align-items-center">
                    <img src="../assets/img/9-footer/diamond.png" alt="">
                    <h4 class="diamond__title ms-3">TON</h4>
                </div>
            </div>
            <div class="footer__main">
                <div class="footer__btn d-flex flex-column flex-lg-row">
                    <a href="#"
                        class="link-social link-social-telegram footer__link mb-3 mb-lg-0 me-0 me-lg-3 position-relative text-end">{{ data.footer.button1 }}</a>
                    <a href="#" class="link-social link-social-play footer__link position-relative text-end">{{ data.footer.button2 }}</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import lang from '../lang'

export default {
  name: "Dogs",
  data() {
    return {
      data: null
    }
  },
  methods: {
    eng() {
      this.data = lang.eng
    },
    ru() {
      this.data = lang.ru
    }
  },
  created() {
    this.data = lang.ru
  },
}
</script>

<style scoped>

</style>