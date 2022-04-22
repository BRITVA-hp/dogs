<template>
  <section class="header">
    <div class="container">

      <div
          class="header-block d-flex flex-column-reverse flex-sm-row justify-content-between align-items-center align-items-sm-start">
        <div class="header-information mt-0 mt-sm-3 mt-md-4 mt-xl-5 d-flex flex-column">

          <div class="select-container">
            <div class="select position-relative is-active">
              <div class="select__header">
                <div class="sphere"><img src="../assets/img/1-header/shpere.svg" alt=""></div>
                <span class="select__current">ENG</span>
                <div class="traingle"><img src="../assets/img/1-header/triangle.svg" alt=""></div>
              </div>

              <div class="select__body">
                <div @click="eng" class="select__item">ENG</div>
                <div @click="ru" class="select__item">RU</div>
              </div>
            </div>
          </div>

          <p v-html="data.header.description" class="header-description text-center text-sm-start"></p>
        </div>

        <picture class="set-pic">
          <source srcset="img/1-header/set-pic-mob.png" media="(max-width: 575px)">
          <img src="../assets/img/1-header/set-pic.png" alt="modal-sent-img">
        </picture>
        <!-- <img class="set-pic" src="../assets/img/1-header/set-pic.png" alt=""> -->

      </div>

    </div>
  </section>

  <section class="auto-scroll">
    <div class="slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-1.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-2.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-3.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-4.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-5.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-6.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-7.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-8.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-9.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-10.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-11.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-12.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-13.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-14.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-15.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-16.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-17.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-18.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-19.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-20.png" alt=""></div>
        </div>
        <div class="swiper-slide">
          <div class="slider__item"><img src="../assets/img/2-auto-scroll/a-21.png" alt=""></div>
        </div>
      </div>
    </div>
  </section>

  <section class="bull-terrier">
    <div class="container">
      <div class="desk-info position-relative d-flex justify-content-center align-items-center">
        <img class="paw-l d-none d-sm-block position-absolute" src="img/3-bull-terrier/paw-left-block.png"
             alt="">
        <div class="desk-general d-flex justify-content-center align-items-center">
          <p v-html="data.bullTerrier.title" class="desk-general-text text-center"></p>
        </div>
        <img class="paw-r d-none d-sm-block position-absolute" src="img/3-bull-terrier/paw-right-block.png"
             alt="">
      </div>

      <div class="paw-block pt-2 pt-sm-0">
        <div
            class="paw-block-text mb-3 mb-sm-5 d-flex align-items-center flex-column flex-sm-row justify-content-start justify-content-sm-around justify-content-md-between">
          <img class="mb-3 mb-sm-0" src="../assets/img/3-bull-terrier/description-1.png" alt="">
          <p v-html="data.bullTerrier.description1" class="paw-text text-center text-sm-start"></p>
        </div>
        <div
            class="paw-block-text d-flex align-items-center justify-content-start justify-content-sm-around justify-content-md-between flex-column flex-sm-row-reverse">
          <img class="mb-3 mb-sm-0" src="../assets/img/3-bull-terrier/description-2.png" alt="">
          <p v-html="data.bullTerrier.description2" class="paw-text text-center text-sm-start"></p>
        </div>
      </div>
    </div>
  </section>

  <section class="bagel">
    <div class="container">
      <h1 v-html="data.bagel.title" class="bagel-title text-center"></h1>

      <img class="d-block d-md-none mx-auto mb-3" src="../assets/img/4-bagel/bagel-description-general-mob.png" alt="">

      <div
          class="bagel-description me-auto me-md-0 ms-auto ms-md-auto d-flex justify-content-center justify-content-md-end position-relative">
        <img class="position-absolute d-none d-md-block" src="../assets/img/4-bagel/bagel-description-general.png"
             alt="">
        <p v-html="data.bagel.description1" class="bagel-description-text text-center text-md-start"></p>
      </div>

      <div class="paw-block pt-2 pt-sm-0">
        <div
            class="paw-block-text mb-3 mb-sm-5 d-flex align-items-center flex-column flex-sm-row justify-content-start justify-content-sm-around justify-content-md-between">
          <img class="mb-3 mb-sm-0" src="../assets/img/4-bagel/bagel-description-1.png" alt="">
          <p v-html="data.bagel.description2" class="paw-text text-center text-sm-start"></p>
        </div>
        <div
            class="paw-block-text d-flex align-items-center justify-content-start justify-content-sm-around justify-content-md-between flex-column flex-sm-row-reverse">
          <img class="mb-3 mb-sm-0" src="../assets/img/4-bagel/bagel-description-2.png" alt="">
          <div class="paw-text-click">
            <p v-html="data.bagel.description3" class="paw-text mb-3 text-center text-sm-start"></p>
            <button v-html="data.bagel.button" class="btn-paw" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></button>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="collection">
    <div class="container">

      <div class="collection-info position-relative d-flex justify-content-center align-items-center">
        <img class="paw-l d-none d-sm-block position-absolute" src="img/3-bull-terrier/paw-left-block.png"
             alt="">
        <div class="desk-general d-flex justify-content-center align-items-center">
          <p v-html="data.collection.title" class="desk-general-text text-center"></p>
        </div>
        <img class="paw-r d-none d-sm-block position-absolute" src="img/3-bull-terrier/paw-right-block.png"
             alt="">
      </div>

      <img class="collection-img d-none d-md-block" src="../assets/img/5-collection/collection-set.png" alt="">
      <div class="collection-block mb-5 justify-content-center align-items-start d-flex d-md-none">
        <img src="../assets/img/5-collection/collection-set-mob-1.png" alt="">
        <img class="mt-4 ms-1" src="../assets/img/5-collection/collection-set-mob-2.png" alt="">
      </div>
      <p v-html="data.collection.text" class="collection-text mx-auto text-center"></p>
    </div>
  </section>

  <!-- modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex flex-column">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

          <div class="modal-text w-100">
            <div
                class="modal-img-block d-flex justify-content-center justify-content-lg-between align-items-center">
              <img class="modal-img-elements d-none d-lg-block" src="../assets/img/6-modal/modal-set-left.png"
                   alt="">
              <img class="modal-general-img" src="../assets/img/6-modal/modal-img.png" alt="">
              <img class="modal-img-elements d-none d-lg-block" src="../assets/img/6-modal/modal-set-right.png"
                   alt="">
            </div>
            <div class="modal-description-block mx-auto d-flex justify-content-center">
              <p v-html="data.modal.text" class="modal-description text-center"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- modal -->
</template>

<script>
import json from '../lang.json'

export default {
  name: "Dogs",
  data() {
    return {
      data: null
    }
  },
  methods: {
    eng() {
      this.data = json.eng
    },
    ru() {
      this.data = json.ru
    }
  },
  created() {
    this.data = json.eng

    console.log(this.data)
  },
}
</script>

<style scoped>

</style>