import docReady from './helpers/docReady';
//
import { init as headerInit } from './layouts/header';
//
import { init as registerInit } from './pages/register';
import { init as page2Init } from './pages/page2';

docReady(() => {
  headerInit();
  page2Init();
  registerInit();
});
