function liqModals (options = { container: { active: false } }) {
  const modalBtns = document.querySelectorAll(options.selector || ".liq-modal__btn")
  
  initAllModals(modalBtns, options)
}

function initAllModals(modalBtns, options) {
  Array.from(modalBtns).forEach(btn => {
    var modalEl = document.querySelector(btn.dataset.liqModalOpen)
    if (options.container && options.container.active) modalEl = createContainer(modalEl, options)

    modalStyle(modalEl, options)
    initClickEvent(btn, modalEl, options)
  })
}

function createContainer (modalEl, options) {
  let container = document.createElement("div")
  
  container.innerHTML             = modalEl.innerHTML
  container.style.padding         = options.container.padding || "10px"
  container.style.backgroundColor = options.container.bgColor || "white"
  container.style.width           = options.container.width ||"500px"
  container.style.maxWidth        = options.container.maxWidth || "500px"
  container.style.height          = options.container.height || "auto"
  container.style.display         = "flex"
  container.style.flexDirection   = "column"
  container.style.justifyContent  = "center"
  container.style.alignItems      = "center"
  container.style.boxSizing       = "border-box"
  container.style.borderRadius    = options.container.radius || "5px"
  container.style.boxShadow       = options.container.shadow || "0px 1px 2px 0px black"
  container.style.border          = options.container.border || "none"

  modalEl.innerHTML = ""
  modalEl.append(container)

  return modalEl
}

function initClickEvent (modalBtn, modalEl, options) {
  modalBtn.onclick = function (e) {
    if(e.target.tagName == "A") e.preventDefault() 
    fade(modalEl, 0.1, options)
  }
  modalEl.onclick = function (e) {
    if (e.target !== this) return;
    fade(modalEl, -0.1, options)
  }

  document.onkeydown = function (e) { 
    if(modalEl.style.display == "flex" && e.key == 'Escape')
      fade(modalEl, -0.1, options)
  }
}

function modalStyle(modalEl, options) {
  modalEl.style.flexDirection     = "column"
  modalEl.style.justifyContent    = "center"
  modalEl.style.alignItems        = "center"
  modalEl.style.padding           =  options && options.padding || "20px"
  modalEl.style.display           = "none"
  modalEl.style.position          = "fixed"
  modalEl.style.top               = "0px"
  modalEl.style.left              = "0px"
  modalEl.style.zIndex            = options && options.zIndex || "10"
  modalEl.style.width             = "100%"
  modalEl.style.maxWidth          = "none"
  modalEl.style.height            = "100vh"
  modalEl.style.boxSizing         = "border-box"
  modalEl.style.backgroundColor   = options && options.bgColor || "rgba(0,0,0, 0.7)"
}

function fade (modalEl, count, options) {
  let { fadeTime } = options
  let interval = fadeTime || 0 
  let fadeOpacity = count > 0 ? 0.0 : 1

  modalEl.style.opacity = fadeOpacity
  modalEl.style.display = "flex"
  
  const fade = setInterval(function () {
    fadeOpacity += count
    modalEl.style.opacity = fadeOpacity
    
    if (fadeOpacity > 0.9 || fadeOpacity < 0.1) {
      clearInterval(fade)
      if(count < 0) modalEl.style.display = "none"
      document.body.style.overflowY == "hidden" ? document.body.style.overflowY = "" : document.body.style.overflowY = "hidden"
    }
  }, interval / 100); 
}