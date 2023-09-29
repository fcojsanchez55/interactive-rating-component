const btn = document.querySelector('button');
const circleElement = document.querySelector('.circle');
const body = document.querySelector('body');

circleElement.addEventListener('click', (e) =>{
    const orangeClick = e.target
    const element = e.target.textContent

        orangeClick.style.backgroundColor = '#fb7413'
        orangeClick.style.color = '#fff'
    btn.addEventListener('click', (e) => {
        e.preventDefault()
            const divPop = document.createElement('DIV');
            divPop.classList.add('container-popup')
            divPop.innerHTML = `
            <img src="images/illustration-thank-you.svg" alt="">
            <div class="container-selected">
            <p>You selected ${element} out of 5</p>
            </div>
            
            <span>Thank you!</span>
            <p class="paragraph-popup">
            We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch!
            </p>
            `;
            body.appendChild(divPop);

            setTimeout(() => {
                body.lastChild.remove();
                window.location.reload();
            }, 3000)
            
        })

 })

    






