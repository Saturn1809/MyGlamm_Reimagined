

// Bestseller -->
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.slider')
    document.querySelector('.latest').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.slider')
    document.querySelector('.latest').prepend(items[items.length - 1]) // here the length of items = 6
})

//Latest Launch -->

const body = document.querySelector(".image");
		const li = document.querySelectorAll("li");

		li.forEach(el => {
			el.addEventListener("mouseover", () => {
				let bg = el.getAttribute("data-bg");
				body.style.background = `url(${bg})no-repeat center /cover`;
			});
		});

