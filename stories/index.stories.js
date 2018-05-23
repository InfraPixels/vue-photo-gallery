import { storiesOf } from "@storybook/vue";
import PhotoGalleryComponentExample from "./PhotoGalleryComponentExample";
import PhotoGalleryPluginExample from "./PhotoGalleryPluginExample";

// Add more stories here to live develop your components

storiesOf("PhotoGallery", module)
  .add("Used as component", () => ({
    render: h => h(PhotoGalleryComponentExample)
  }))
  .add("Used as plugin", () => ({
    render: h => h(PhotoGalleryPluginExample)
  }));
