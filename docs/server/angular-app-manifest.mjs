
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Home"
  },
  {
    "renderMode": 2,
    "route": "/Books"
  },
  {
    "renderMode": 2,
    "route": "/ShortStories"
  },
  {
    "renderMode": 2,
    "route": "/AboutMe"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24642, hash: 'a1addbb2ba3821dbddea38727920223641dd15ea8aebeee2a9beadbbc8c5e6f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17158, hash: '3be5f5f2fc426adc1d97a85f16a3768b3bb0f5116c355f3b1c44fed989c7be2e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Books/index.html': {size: 56687, hash: 'da4cea15622fff64ed51a95ea16441f624c8e237777bb480cd935297b873557f', text: () => import('./assets-chunks/Books_index_html.mjs').then(m => m.default)},
    'Home/index.html': {size: 56684, hash: '71c99a6d91f94ac9d901c5290ceea8022ead8a7e71de1e9baccf21488073a3ef', text: () => import('./assets-chunks/Home_index_html.mjs').then(m => m.default)},
    'AboutMe/index.html': {size: 56696, hash: '9cc853bbea628544893a64023c73eba1b6b4d0af8dc235aa9827d572c8ec8730', text: () => import('./assets-chunks/AboutMe_index_html.mjs').then(m => m.default)},
    'ShortStories/index.html': {size: 56711, hash: 'a49de4d130d6c2f6f23a6d54400651e81c9bbd4d8e36cff033bfbd08c3e121bc', text: () => import('./assets-chunks/ShortStories_index_html.mjs').then(m => m.default)},
    'styles-OPUTW5UJ.css': {size: 8043, hash: 'i68XcmjPijU', text: () => import('./assets-chunks/styles-OPUTW5UJ_css.mjs').then(m => m.default)}
  },
};
