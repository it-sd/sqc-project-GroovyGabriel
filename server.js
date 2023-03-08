require('dotenv').config()
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5163

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.json())
  .use(express.urlencoded({ extended: true}))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

// step 5
  .get('/', function (req, res) {
    res.render('pages/index')
  })

  // step 6
  .get('/about', function (req, res) {
    res.render('pages/about')
  })

// step 4
  .get('/health', function (req, res) {
    res.status(200).send('Healthy')
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

// Performance test to measure the load time of a website
const loadTimeStart = new Date().getTime()
window.addEventListener('load', () => {
  const loadTimeEnd = new Date().getTime()
  const loadTime = loadTimeEnd - loadTimeStart
  console.log(`Website loaded in ${loadTime} milliseconds`)
})

const content = document.getElementById('content')

if (content.innerHTML.length < 100) {
  alert('If you are reading this, that means that the site should be working.')
}
