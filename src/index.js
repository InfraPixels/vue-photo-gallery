import HelloWorld from "./components/HelloWorld";
import PhotoGallery from "./components/PhotoGallery";

const LibraryModule = {
  HelloWorld,
  PhotoGallery,

  install(Vue) {
    // Register components with vue
    Vue.component("hello-world", HelloWorld);
    Vue.component("photo-gallery", PhotoGallery);
  }
};

// Export library
export default LibraryModule;

// Export components
export { HelloWorld, PhotoGallery };
