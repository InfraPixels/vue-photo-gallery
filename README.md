# vue-photo-gallery

![Rollup badge](https://img.shields.io/badge/Rollup-^0.53.3-ff69b4.svg)
![Jest](https://img.shields.io/badge/Jest-^22.0.4-blue.svg)
![Vue](https://img.shields.io/badge/Vue-^2.5.13-brightgreen.svg)
![Storybook](https://img.shields.io/badge/Storybook-^3.3.3-ff70a3.svg)
![Commitizen](https://img.shields.io/badge/Commitizen-enabled-brightgreen.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Npm badge](https://img.shields.io/npm/v/vue-photo-gallery.svg)
[![Build Status](https://travis-ci.org/DroneMapp/vue-photo-gallery.svg?branch=master)](https://travis-ci.org/DroneMapp/vue-photo-gallery)

> A Vue.js 2.0 photo gallery based on PhotoSwipe (no extra dependencies)

You can use this photo gallery as component or plugin

## Usage example as component

Control visibility of gallery by setting a variable to v-model. v-model will store current visible photo index, if set to null the gallery will close.

Template
```html
<photo-gallery :images="images" v-model="visiblePhoto"></photo-gallery>
<a v-for="(image, index) in images" class="thumb-item" href="#" @click="visiblePhoto = index">
  <img :src="image.thumbSrc"/>
</a>
```

Script
```js
export default {
  data() {
    return {
      images: [
        {
          src:"https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg",
          thumbSrc: "https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg",
          w: 1600,
          h: 1600
        },
        {
          src: "https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg",
          thumbSrc: "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          w: 1600,
          h: 1068
        }
      ],
      visiblePhoto: null
    };
  }
};
```

## Usage example as plugin

Control visibility of gallery by calling this.$photoGallery.open(index, this.images) and this.$photoGallery.close()

Template
```html
<a v-for="(image, index) in images" class="thumb-item" href="#" @click="this.$photoGallery.open(index, this.images)">
  <img :src="image.thumbSrc"/>
</a>
```

Script
```js
export default {
  data() {
    return {
      images: [
        {
          src:"https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg",
          thumbSrc: "https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg",
          w: 1600,
          h: 1600
        },
        {
          src: "https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg",
          thumbSrc: "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          w: 1600,
          h: 1068
        }
      ]
    };
  }
};
```

## Installation
```
npm install vue-photo-gallery
```
vue-photo-gallery can be used as a module in both CommonJS and ES modular environments.

When in non-modular environment, vue-photo-gallery will register all the components to vue by itself.</p>

### ES6
```js
//
// You can register a component manually
//
import { PhotoGallery } from 'vue-photo-gallery';

export default {
  ...
  components: {
    PhotoGallery
  },
  ...
};

//
// or register the whole module with vue, this will install component globally and will install photoGallery plugin.
//
import VuePhotoGallery from 'vue-photo-gallery';

// Install this library
Vue.use(VuePhotoGallery);
```

### CommonJS
```js
//
// You can register a component manually
//
var Vue = require('vue');
var VuePhotoGallery = require('vue-photo-gallery');

var YourComponent = Vue.extend({
  ...
  components: {
    'photo-gallery': VuePhotoGallery.PhotoGallery
  },
  ...
});

//
// or register the whole module with vue
//
var Vue = require('vue');
var VuePhotoGallery = require('vue-photo-gallery');

// Install this library
Vue.use(VuePhotoGallery);
```

### Browser

```html
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/vue-photo-gallery/dist/vue-photo-gallery.min.js"></script>
<!-- Components are registered globally -->
```

### After that, you can use it in your templates:

```html
<photo-gallery></photo-gallery>
```

## Changelog

See the GitHub [release history](https://github.com/https://github.com/DroneMapp/vue-photo-gallery/releases).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).

> Generated using [vue-cli-template-library](https://github.com/julon/vue-cli-template-library).
