function liqModals (options = {}) {
  const modalBtns = document.querySelectorAll(options.selector || ".liq-modal__btn")
  
  initAllModals(modalBtns, options)
}

function initAllModals(modalBtns, options) {
  Array.from(modalBtns).forEach(btn => {
    var modalEl = document.querySelector(btn.dataset.liqModalOpen)

    modalStyle(modalEl, options)
    initClickEvent(btn, modalEl, options)
  })
}

function initClickEvent (modalBtn, modalEl, options) {
  modalBtn.onclick = function (e) {
    if (e.target !== this) return;
    fade(modalEl, 0.1, options)
  }
  modalEl.onclick = function (e) {
    if (e.target !== this) return;
    fade(modalEl, -0.1, options)
  }
}

function modalStyle(modalEl, options) {
  modalEl.style.flexDirection     = "column"
  modalEl.style.justifyContent    = "center"
  modalEl.style.alignItems        = "center"
  modalEl.style.padding           =  options && options.padding || "20px"
  modalEl.style.display           = "none"
  modalEl.style.backgroundColor   =  options && options.bgColor || "white"
  modalEl.style.position          = "fixed"
  modalEl.style.top               = "0px"
  modalEl.style.left              = "0px"
  modalEl.style.zIndex            = "10"
  modalEl.style.width             = "100%"
  modalEl.style.height            = "100vh"
  modalEl.style.boxSizing         = "border-box"
  modalEl.style.backgroundColor   = "rgba(0,0,0, 0.7)"
}

function fade (modalEl, count, options) {
  let { fadeTime } = options
  let interval = fadeTime 
  let fadeOpacity = count > 0 ? 0.0 : 1

  modalEl.style.opacity = fadeOpacity
  modalEl.style.display = "flex"
  
  const fade = setInterval(function () {
    fadeOpacity += count
    modalEl.style.opacity = fadeOpacity
    
    if (fadeOpacity > 0.9 || fadeOpacity < 0.1) {
      clearInterval(fade)
      if(count < 0) modalEl.style.display = "none"
    }
  }, interval); 
}