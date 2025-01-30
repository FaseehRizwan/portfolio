// Filter Models
document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.filters button');
  const modelCards = document.querySelectorAll('.model-card');

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      const category = filter.getAttribute('data-filter');
      modelCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
