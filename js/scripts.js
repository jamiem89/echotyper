let word = [];
let timeout = null;


function typeWatch(e){
    clearTimeout(timeout);
    word.push(e.key);

    timeout = setTimeout(function() {

        let height = document.body.offsetHeight;
        console.log(`height = ${height}`);
        let width = document.body.offsetWidth;
        console.log(`width = ${width}`);

        // Create element to use
        let p = document.createElement('p');
        let string = word.join(``);
        p.innerText = string;
        p.classList.add('echo');
        document.body.appendChild(p);

        // Generate some random coords
        var left = Math.floor(Math.random() * Math.floor(width));
        var top = Math.floor(Math.random() * Math.floor(height));


        // Change elements position
        p.style.left = left+`px`;
        p.style.top = top+`px`;

        // Remove element after animation
        p.addEventListener('animationend', () => {
            p.remove();
        })

        // Reset array
        word = [];
    },200);

}


window.addEventListener('keyup', typeWatch);