import component from './component';
import about from './about';
import style1 from './style1.css';
import style2 from './style2.css';

document.body.appendChild(component('hehe', style1.class1, style2.class1));

// HMR
if (module.hot) {
  // Capture hot update
  module.hot.accept('./about', () => {
    console.log('hehe');
    about.log();
  });
}