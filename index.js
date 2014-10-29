var imageSelector = '[alt=Profile], [alt=Thumb], [bo_alt="candidate.name"]'
  , nameSelector = '.a--icon + .candidate__info'

function Stylesheet(body) {
  this.body = body
  this.tag = null
}

Stylesheet.prototype.append = function() {
  var tag = document.createElement('style')
  tag.appendChild(document.createTextNode(this.body))
  document.body.appendChild(tag)
  console.log(tag)
  this.tag = tag
}

Stylesheet.prototype.remove = function() {
  document.body.removeChild(this.tag)
}

function $(selector) {
  var nodeList = document.querySelectorAll(selector)
  return Array.prototype.slice.call(nodeList)
}

function anonymize() {
  $(nameSelector).forEach(function(node) { node.innerText = 'See Candidate' })
}

function init() {
  var stylesheet = new Stylesheet(imageSelector + ' { display: none !important }')
  stylesheet.append()
  setInterval(anonymize, 500)
}

init()
