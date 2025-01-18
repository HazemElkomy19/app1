
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://HazemElkomy19.github.io/app1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/https://HazemElkomy19.github.io/app1/home",
    "route": "/https://HazemElkomy19.github.io/app1"
  },
  {
    "renderMode": 2,
    "route": "/https://HazemElkomy19.github.io/app1/home"
  },
  {
    "renderMode": 2,
    "route": "/https://HazemElkomy19.github.io/app1/about"
  },
  {
    "renderMode": 2,
    "route": "/https://HazemElkomy19.github.io/app1/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/https://HazemElkomy19.github.io/app1/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5890, hash: 'b220b8303d7a9fa956f58243075912e678b5d00244c78cbd6f7d5cedb899a366', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: 'e16c30e75d7405609db4d90c5d3c97a3df8286eca5d772bce87ba67f1d36080e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 16908, hash: '82c1e1059d9f8c8ec68483f987b96e727f45e6565dac4fa41d38c1e0457af786', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 16908, hash: '82c1e1059d9f8c8ec68483f987b96e727f45e6565dac4fa41d38c1e0457af786', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 16908, hash: '82c1e1059d9f8c8ec68483f987b96e727f45e6565dac4fa41d38c1e0457af786', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 16908, hash: '82c1e1059d9f8c8ec68483f987b96e727f45e6565dac4fa41d38c1e0457af786', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-CON6YUZV.css': {size: 305312, hash: 'o2N/S4UGvEs', text: () => import('./assets-chunks/styles-CON6YUZV_css.mjs').then(m => m.default)}
  },
};
