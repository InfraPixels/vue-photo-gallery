<template>
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="pswp__bg"></div>

  <div class="pswp__scroll-wrap">

    <div class="pswp__container">
      <div class="pswp__item"></div>
      <div class="pswp__item"></div>
      <div class="pswp__item"></div>
    </div>

    <div class="pswp__ui pswp__ui--hidden">
      <div class="pswp__top-bar">
        <div class="pswp__counter"></div>
        <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
        <button class="pswp__button pswp__button--share" title="Share"></button>
        <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
        <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

        <div class="pswp__preloader">
          <div class="pswp__preloader__icn">
            <div class="pswp__preloader__cut">
              <div class="pswp__preloader__donut"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
        <div class="pswp__share-tooltip"></div>
      </div>

      <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>

      <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>

      <div class="pswp__caption">
        <div class="pswp__caption__center"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import PhotoSwipe from "photoswipe/dist/photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js Library",
      categories: [
        {
          title: "Essential Links",
          links: [
            {
              label: "Core Docs",
              href: "https://vuejs.org"
            },
            {
              label: "Forum",
              href: "https://forum.vuejs.org"
            },
            {
              label: "Community Chat",
              href: "https://chat.vuejs.org"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/vuejs"
            },
            {
              label: "Docs for This Template",
              href: "http://vuejs-templates.github.io/webpack/"
            }
          ]
        },
        {
          title: "Ecosystem",
          links: [
            {
              label: "vue-router",
              href: "https://vuejs.org"
            },
            {
              label: "vuex",
              href: "https://forum.vuejs.org"
            },
            {
              label: "vue-loader",
              href: "https://chat.vuejs.org"
            },
            {
              label: "awesome-vue",
              href: "https://twitter.com/vuejs"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import 'photoswipe/dist/photoswipe.css';
@import 'photoswipe/dist/default-skin/default-skin.css';
</style>
