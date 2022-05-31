let rating = 0;
const messageText = document.querySelector('.card-message');
const ratingText = document.querySelector('.card-rating');
const numbers = document.querySelectorAll('.card-number')
const submit = document.querySelector('.submit')
const ratingValue = document.querySelector('.rating-value')

for (const number of numbers) {
  number.addEventListener('click', () => {
    const selectedNumber = document.querySelector('.card-number.is-selected')

    if (rating !== number.value) {
      rating = number.value
      number.classList.add('is-selected')
      ratingValue.textContent = rating
    }

    if (selectedNumber !== null && selectedNumber !== undefined) selectedNumber.classList.remove('is-selected')
  });
}

submit.addEventListener('click', () => {
  if (rating == 0) {
    alert('Give us a rating please')
    return
  }

  ratingText.classList.add('is-hidden')
  messageText.classList.remove('is-hidden')
})