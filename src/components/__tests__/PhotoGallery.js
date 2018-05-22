import PhotoGallery from "../PhotoGallery";
import { mount, createLocalVue } from "@vue/test-utils";

// create an extended `Vue` constructor
const localVue = createLocalVue();

localVue.use(PhotoGallery);

describe("PhotoGallery", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(PhotoGallery, {
      localVue
    });
  });

  it("test initial rendering", () => {
    const photoGalleryTemplate = wrapper.html();
    expect(photoGalleryTemplate).toMatchSnapshot();
  });
});
