// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		const counterWrapper = event.target.closest('.count');
        counter = counterWrapper.querySelector('[data-counter]');
	}
	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}
	if (event.target.dataset.action === 'minus') {
		if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;
		} else if (event.target.closest('.count') && parseInt(counter.innerText) === 1) {
			toggleCartStatus();
			calcCartPriceAndDelivery();
		}

	}
    if (event.target.dataset.action === 'remove') {
        event.target.closest('.cart__item').remove();
    }
	if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
		calcCartPriceAndDelivery();
	}
});
