import './style.css';

export default class HelloWorldBtn {
  render() {
    const button = document.createElement('button');
    button.innerHTML = 'Hello World';
    button.classList.add('hello-world-btn');

    const body = document.querySelector('body');
    body.appendChild(button);

    button.onclick = function() {
      const p = document.createElement('p');
      p.innerHTML = 'Hello World';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    }
  }
}
