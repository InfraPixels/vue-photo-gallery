import Vue from "vue";
import PhotoGallery from "../PhotoGallery";

describe("PhotoGallery", () => {
  const Constructor = Vue.extend(PhotoGallery);
  const vm = new Constructor().$mount();
  test("should match the snapshot", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
