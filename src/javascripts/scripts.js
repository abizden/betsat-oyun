import docReady from './helpers/docReady';
import { init as headerInit } from './layouts/header';

docReady(() => {
  headerInit();
});
