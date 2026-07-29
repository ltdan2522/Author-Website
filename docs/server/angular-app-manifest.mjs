
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Author-Website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Author-Website/Home"
  },
  {
    "renderMode": 2,
    "route": "/Author-Website/Books"
  },
  {
    "renderMode": 2,
    "route": "/Author-Website/ShortStories"
  },
  {
    "renderMode": 2,
    "route": "/Author-Website/AboutMe"
  },
  {
    "renderMode": 2,
    "route": "/Author-Website/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24657, hash: 'bab38e7a8367db0211df208a39ec18af43f0e32560ca3e35d75279b457c9576e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17173, hash: 'bd8448937f316e406c64f6f56459c343de8b534c7aad09ac8f9f0c155d1612bd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Books/index.html': {size: 56702, hash: '6a462e22d3f537059dff51e708367e64ac8555fc2835623b988313cd65f4d562', text: () => import('./assets-chunks/Books_index_html.mjs').then(m => m.default)},
    'ShortStories/index.html': {size: 56726, hash: '55e456c5f21ed5805ead87f692c03569537ae54a9d6741ff53b0f81ed4a210c8', text: () => import('./assets-chunks/ShortStories_index_html.mjs').then(m => m.default)},
    'AboutMe/index.html': {size: 56711, hash: '33cdbd7d553c2d85151879a0b048f2e7062ed7a1c65c6edb6457fad8062ea9bc', text: () => import('./assets-chunks/AboutMe_index_html.mjs').then(m => m.default)},
    'Home/index.html': {size: 56699, hash: 'dfecc589b5e0e187bb5396114bcee847643e9ab7e94b1fbee27c0ddbcdb22086', text: () => import('./assets-chunks/Home_index_html.mjs').then(m => m.default)},
    'styles-OPUTW5UJ.css': {size: 8043, hash: 'i68XcmjPijU', text: () => import('./assets-chunks/styles-OPUTW5UJ_css.mjs').then(m => m.default)}
  },
};
