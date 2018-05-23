<template>
<div ref="photoGallery" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
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
require("photoswipe/dist/photoswipe.css");
require("photoswipe/dist/default-skin/default-skin.css");
// import "photoswipe/dist/photoswipe.css";
// import "photoswipe/dist/default-skin/default-skin.css";

export default {
  name: "PhotoGallery",
  props: {
    value: {
      type: Number,
      default: null
    },
    images: {
      type: Array
    },
    options: {
      type: Object,
      default: () => ({
        shareEl: false
      })
    }
  },
  data() {
    return {
      PhotoSwipeUI_Default,
      photoswipe: {}
    };
  },
  watch: {
    value(newVal, oldVal) {
      if (oldVal === null && newVal !== null) {
        this.open();
      } else if (newVal === null) {
        this.close();
      }
    }
  },
  methods: {
    open() {
      const opts = Object.assign(
        {
          index: this.value,
          getThumbBoundsFn(index) {
            const thumbnail = document.querySelectorAll(
              "." + (this.options && this.options.thumbnailClass) ||
                ".thumb-item"
            )[index];

            if (!thumbnail) {
              return undefined;
            }

            const pageYScroll =
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0;

            const rect = thumbnail.getBoundingClientRect();
            return {
              x: rect.left,
              y: rect.top + pageYScroll,
              w: rect.width
            };
          }
        },
        this.options
      );

      this.photoswipe = new PhotoSwipe(
        this.$refs.photoGallery,
        this.PhotoSwipeUI_Default,
        this.images,
        opts
      );

      this.$emit("open", this.value);
      this.$emit("input", this.value);

      this.photoswipe.listen("close", () => {
        this.$emit("input", null);
        this.$emit("close");
      });

      this.photoswipe.listen("afterChange", () => {
        const newIndex = this.getImageIndexBySrc(this.photoswipe.currItem.src);
        this.$emit("input", newIndex);
        this.$emit("change", newIndex);
      });

      this.photoswipe.init();
    },
    next() {
      // Go to the next slide
      if (Object.keys(this.photoswipe).length) {
        this.photoswipe.next();
      }
    },
    prev() {
      // Go to the previous slide
      if (Object.keys(this.photoswipe).length) {
        pswp.prev();
      }
    },
    goTo(index) {
      // Go to the previous slide
      if (Object.keys(this.photoswipe).length) {
        pswp.goTo(index);
      }
    },
    getImageIndexBySrc(src) {
      for (let i = 0; i < this.images.length; i++) {
        if (this.images[i].src === src) {
          return i;
        }
      }
      return null;
    },
    close() {
      this.photoswipe.close();
    }
  }
};
</script>
