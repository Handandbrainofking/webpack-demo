console.log('hello,world!!!2222222222222222')
import MideaButton from './packages/midea-button'
import avatar from './src/static/img/olog.png';
let image = new Image();
image.src = avatar;

var root = document.getElementById('root')
root.append(image)
console.log('button', MideaButton)
export {
    MideaButton
}
