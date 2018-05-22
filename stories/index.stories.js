import { storiesOf } from "@storybook/vue";
import PhotoGalleryExample from "./PhotoGalleryExample";

// Add more stories here to live develop your components

storiesOf("PhotoGallery", module).add("Simple gallery demo", () => ({
  render: h => h(PhotoGalleryExample)
}));
