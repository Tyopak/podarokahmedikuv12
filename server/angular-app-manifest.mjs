
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'podarokahmedikuv12',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/podarokahmedikuv12"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 537, hash: '61758ea3ae1ad9b5084b6e4b089c662db2912b5f07aae296d9d9e4f8a6470324', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: '0e6a82a8cdbdb75e1c17cd7fad88522f9553e2f9f8b8dbfd4ef3ad6a69b228a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2767, hash: 'd4915e11da5520dbbf2d85f99b5b43b0a340d820f6f09c838ba919acd7fdabb2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
