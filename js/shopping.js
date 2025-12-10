function toggleLike(button) {
    const heart = button.querySelector('.heart');
    
    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
        heart.textContent = '🤍';
    } else {
        button.classList.add('liked');
        heart.textContent = '❤️';
    }
}