const buyBtns = document.querySelectorAll('.buy-btn');



buyBtns.forEach(buyBtn => {
	buyBtn.addEventListener('mouseover', () => {
		buyBtn.style.transform = 'scale(1.2)';
	});
	buyBtn.addEventListener('mouseout', () => {
		buyBtn.style.transform = 'none';
	  });
	buyBtn.addEventListener('click', () => {
		buyBtn.classList.add('clicked');
		buyBtn.textContent = 'Listo para comprar';
		buyBtn.style.backgroundColor = 'black';
		buyBtn.style.transform = 'rotate(20deg)';
		
	});
});

