const slatepackInput = document.querySelector('.sp textarea')
const h1Dot = document.querySelector('.dot');
// const pattern = /\ABEGINSLATEPACK\. .{10,}\. ENDSLATEPACK\.\Z/
const pattern = /^BEGINSLATEPACK\. .{10,}\. ENDSLATEPACK\.$/m
let message = null;

slatepackInput.addEventListener('keyup', () => {
    message = slatepackInput.value;
    messageValid = pattern.test(message);
    console.log(message, messageValid);
    if(messageValid){
        slatepackInput.style.borderColor = 'rgba(181, 232, 71, 0.5)';
        console.log('valid slatepack!');
    } else {
        slatepackInput.style.borderColor = 'rgba(122, 20, 27, 0.5)';
        console.log('NOT a valid slatepack!');
    }

});

const timer = setInterval(() => {
    h1Dot.classList.toggle('d-yes');
}, 750);
