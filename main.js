const list = document.querySelector('.js-challenges')

const challenges = [
  {
    'url': '3-column-preview-card-component',
    'name': '3-column preview card component',
    'level': 'newbie',
    'demo': '',
    'github': ''
  },
  {
    'url': 'qr-code-component',
    'name': 'QR code component',
    'level': 'newbie',
    'demo': '',
    'github': ''
  },
  {
    'url': 'interactive-rating-component',
    'name': 'Interactive rating component',
    'level': 'newbie',
    'demo': '',
    'github': ''
  },
  {
    'url': 'stats-preview-card-component',
    'name': 'Stats preview card component',
    'level': 'newbie',
    'demo': '',
    'github': ''
  },
  {
    'url': 'nft-preview-card-component',
    'name': 'NFT preview card component',
    'level': 'newbie',
    'demo': '',
    'github': ''
  },
  {
    'url': 'order-summary-component',
    'name': 'Order summary card',
    'level': 'newbie',
    'demo': '',
    'github': ''
  },
  {
    'url': 'social-proof-section',
    'name': 'Social proof section',
    'level': 'newbie',
    'demo': '',
    'github': ''
  }
]

for (const challenge of challenges) {
  const item = document.createElement('li');
  const link = document.createElement('a');

  link.href = challenge.url
  link.textContent = challenge.name
  link.classList.add('challenges-link')

  item.classList.add('challenges-item')

  item.append(link)
  list.append(item)
}