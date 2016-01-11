const imageSelector = 'candidate-info--photo, [alt=Profile]'
const nameSelector = '.candidate-info--name, .employers-candidates-controller .layout__item.xs-gamma'
const interval = 250

function $ (selector) {
  const nodeList = document.querySelectorAll(selector)
  return Array.prototype.slice.call(nodeList)
}

function anonymize () {
  const names = $(nameSelector)
  const thumbs = $(imageSelector)

  function anonymized (node, newVal) {
    if (newVal) {
      node.dataset.anonymized = newVal
    }

    return node.dataset.anonymized === 'true'
  }

  names.filter(n => !anonymized(n)).forEach(function (node) {
    const placeholder = 'Candidate Name'

    node.dataset.originalName = node.innerText
    node.innerText = placeholder

    node.addEventListener('mouseover', () => node.innerText = node.dataset.originalName)
    node.addEventListener('mouseout', () => node.innerText = placeholder)

    anonymized(node, 'true')
  })

  thumbs.filter(n => !anonymized(n)).forEach(function (node) {
    node.style.opacity = 0

    node.addEventListener('mouseover', () => node.style.opacity = 0)
    node.addEventListener('mouseout', () => node.style.opacity = 1)

    anonymized(node, 'true')
  })
}

function init () {
  setInterval(anonymize, interval)
}

init()
