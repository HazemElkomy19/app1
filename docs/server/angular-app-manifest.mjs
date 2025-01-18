
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Angular-project1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/C:/Program Files/Git/Angular-project1/home",
    "route": "/C:/Program Files/Git/Angular-project1"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/Angular-project1/home"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/Angular-project1/about"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/Angular-project1/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/Angular-project1/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5891, hash: '2cc396ae77dd3e51c8d4010b97a1952a5a490ebe9c8d8c3f8d935b73f7db3dbf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1051, hash: '2c8f3cb5ad15defeba9f551e523892325eb27dc3006645af88f07e33f927c279', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 16912, hash: '96da5861d4322ab8cd2bb82ba0273a2aba4d6e1dc068f204f5d3f2310a026a69', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 16912, hash: '96da5861d4322ab8cd2bb82ba0273a2aba4d6e1dc068f204f5d3f2310a026a69', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 16912, hash: '96da5861d4322ab8cd2bb82ba0273a2aba4d6e1dc068f204f5d3f2310a026a69', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 16912, hash: '96da5861d4322ab8cd2bb82ba0273a2aba4d6e1dc068f204f5d3f2310a026a69', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-CON6YUZV.css': {size: 305312, hash: 'o2N/S4UGvEs', text: () => import('./assets-chunks/styles-CON6YUZV_css.mjs').then(m => m.default)}
  },
};
