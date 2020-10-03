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
        slatepackInput.style.borderColor = 'rgba(255, 00, 0, 0.5)';
        console.log('NOT a valid slatepack!');
    }

    if(!message){ // if the field value is now empty
        slatepackInput.style.borderColor = 'rgba(0, 0, 0, 0.2)';
    }

});

const timer = setInterval(() => {
    h1Dot.classList.toggle('d-yes');
}, 750);
