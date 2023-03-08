const pageLoadTest = () => {
  // Wait for the page to load
  window.addEventListener('load', () => {
    console.log('It loaded!')
  })
}
pageLoadTest()

const element = document.querySelector('h1')

if (element) {
  console.log('Element test passed')
} else {
  console.log('Element test failed')
}

const expectedText = 'Meriwether Lewis is currently unvailable on account of him being dead. Please check back later to see if he\'s feeling any better.'

if (element && element.textContent === expectedText) {
  console.log('Element text test passed')
} else {
  console.log('Element text test failed')
}
