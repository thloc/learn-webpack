import helloWorld from './hello-world.js';
import addImage from './add-image.js';

import HelloWorldBtn from './component/hello-world-btn/index.js';
import Heading from './component/heading/index.js';

helloWorld();
addImage();

const heading = new Heading();
heading.render();

const helloWorldBtn = new HelloWorldBtn();
helloWorldBtn.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development mode');
}

helloWorldBtn.methodThatDoesNotExit();
