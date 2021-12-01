import helloWorld from './hello-world.js';
import addImage from './add-image.js';

import HelloWorldBtn from './component/hello-world-btn/index.js';

helloWorld();
addImage();

const helloWorldBtn = new HelloWorldBtn();
helloWorldBtn.render();