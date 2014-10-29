var imageSelector = '[alt=Profile], [alt=Thumb], [bo_alt="candidate.name"]'
  , nameSelector = '.a--icon + .candidate__info'

function $(selector) {
  var nodeList = document.querySelectorAll(selector)
  return Array.prototype.slice.call(nodeList)
}

function anonymize() {
  $(imageSelector).forEach(function(node) { node.style.display = 'none' })
  $(nameSelector).forEach(function(node) { node.innerText = 'See Candidate' })
}

setInterval(anonymize, 500)
