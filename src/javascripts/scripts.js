// Load jQuery from NPM
import $ from 'jquery';
import 'jquery-mask-plugin';

import docReady from './helpers/docReady';
//
import { init as headerInit } from './layouts/header';
//
import { init as registerInit } from './pages/register';
import { init as page2Init } from './pages/page2';

window.jQuery = $;
window.$ = $;

docReady(() => {
  headerInit();
  page2Init();
  registerInit();
});
