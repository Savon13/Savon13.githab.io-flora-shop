const modal = document.getElementById('modal');
const orderBtn = document.getElementById('orderBtn');
const closeModal = document.querySelector('.close-modal');
const selectedProduct = document.getElementById('selectedProduct');

const successModal = document.getElementById('successModal');
const closeSuccess = document.querySelector('.close-success');
const successBtn = document.getElementById('successBtn');
const successMessage = document.getElementById('successMessage');

closeModal.addEventListener('click', function() {
    modal.classList.remove('show');
});

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
    if (e.target === successModal) {
        successModal.classList.remove('show');
    }
});

const buyButtons = document.querySelectorAll('.btn-buy');

buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        selectedProduct.textContent = `Вы выбрали: ${productName}`;
        modal.classList.add('show');
    });
});

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    const product = selectedProduct.textContent;
    
    successMessage.textContent = `Спасибо, ${name}! Ваш заказ "${product}" принят. Мы перезвоним вам по номеру ${phone} в ближайшее время.`;
    
    modal.classList.remove('show');
    
    successModal.classList.add('show');
    
    this.reset();
    selectedProduct.textContent = 'Выберите букет в каталоге';
});

closeSuccess.addEventListener('click', function() {
    successModal.classList.remove('show');
});

successBtn.addEventListener('click', function() {
    successModal.classList.remove('show');
});