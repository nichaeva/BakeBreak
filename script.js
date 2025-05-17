const modal = document.getElementById('contactModal');
        const openBtn = document.getElementById('openModalBtn');
        const closeBtn = document.getElementById('closeModalBtn');
        const contactForm = document.getElementById('contactForm');
        // Открытие модального окна
        openBtn.addEventListener('click', function() {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Блокирует скролл страницы
        });
        // Закрытие модального окна
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.
            overflow = 'auto'; // Восстанавливает скролл
        });
        // Закрытие при клике вне окна
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Сообщение отправлено! Мы скоро с вами свяжемся.');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            contactForm.reset();
        });