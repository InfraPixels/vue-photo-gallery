/*eslint no-param-reassign: ["error", { "props": false }]*/
import PhotoGallery from "./components/PhotoGallery";

let $vm;

const LibraryModule = {
  PhotoGallery,

  install(Vue) {
    const PhotoGalleryConstructor = Vue.extend(PhotoGallery);

    if (!$vm) {
      $vm = new PhotoGalleryConstructor({ el: document.createElement("div") });
      document.body.appendChild($vm.$el);
    }

    Vue.$photoGallery = {
      open(index, images, options) {
        $vm._props = { value: index, images, options };
        $vm.open();
      },
      close() {
        $vm.close();
      }
    };

    Vue.mixin({
      created() {
        this.$photoGallery = Vue.$photoGallery;
      }
    });

    // Register components with vue
    Vue.component("photo-gallery", PhotoGallery);
  }
};

// Export library
export default LibraryModule;

// Export components
export { PhotoGallery };
