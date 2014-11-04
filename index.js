var imageSelector = '#profile-photo-image, .question-answer, candidate-listing a.link'
  , nameSelector = '.a--icon + .candidate__info'

function $(selector) {
  var nodeList = document.querySelectorAll(selector)
  return Array.prototype.slice.call(nodeList)
}

function anonymize() {
  var names = $(nameSelector)
    , thumbs = $(imageSelector)

  names.forEach(function(node) { node.innerText = 'See Candidate' })
  thumbs.forEach(function(node) {
    node.addEventListener('mouseover', function() { this.classList.add('toggled') })
    node.addEventListener('mouseout', function() { this.classList.remove('toggled') })
  })
}

function init() {
  setInterval(anonymize, 750)
}

init()
