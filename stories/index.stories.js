import { storiesOf } from "@storybook/vue";

// Add more stories here to live develop your components
storiesOf("HelloWorld", module).add("story as a template", () => ({
  template: `<hello-world></hello-world>`
}));

storiesOf("PhotoGallery", module).add("story as a template", () => ({
  template: `<photo-gallery></photo-gallery>`
}));
