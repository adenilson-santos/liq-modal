function liqModals (options) {
  options = defaultOptions(options)
  const modalBtns = document.querySelectorAll("[data-liq-modal-open]")
  const modalEl = document.querySelector(options.selector)

  let returnValues = {
    close: close,
    open: open,
    activeButtons: modalBtns,
    styleOptions: options,
    modalElement: modalEl
  }
  
  function close () {
    if (!modalEl) return returnValues
    fade(modalEl, -0.1, options)
  }

  function open () {
    if (!modalEl) return returnValues
    fade(modalEl, 0.1, options)
  }

  if (!modalEl) initAllModals(modalBtns, options)

  return returnValues
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
  container.style.padding         = options.container.padding
  container.style.backgroundColor = options.container.backgroundColor
  container.style.width           = options.container.width
  container.style.maxWidth        = options.container.maxWidth
  container.style.height          = options.container.height
  container.style.display         = options.container.display
  container.style.flexDirection   = options.container.flexDirection
  container.style.justifyContent  = options.container.justifyContent
  container.style.alignItems      = options.container.alignItems
  container.style.boxSizing       = options.container.boxSizing
  container.style.borderRadius    = options.container.borderRadius
  container.style.boxShadow       = options.container.boxShadow
  container.style.border          = options.container.border
  container.style.color           = options.container.color

  modalEl.innerHTML = ""
  modalEl.append(container)

  return modalEl
}

function initClickEvent (modalBtn, modalEl, options) {
  modalBtn.onclick = (e) => {
    if(e.target.tagName == "A" && e.target.dataset.remote !== "true") e.preventDefault() 
    fade(modalEl, 0.1, options)
  }
  modalEl.onclick = function (e) {
    if (e.target !== this) return;
    fade(modalEl, -0.1, options)
  }

  document.onkeydown = (e) => { 
    if(modalEl.style.display == "flex" && e.key == 'Escape')
      fade(modalEl, -0.1, options)
  }
}

function modalStyle(modalEl, options) {
  modalEl.style.flexDirection     = options.flexDirection
  modalEl.style.justifyContent    = options.justifyContent
  modalEl.style.alignItems        = options.alignItems
  modalEl.style.padding           = options.padding
  modalEl.style.display           = options.display
  modalEl.style.position          = options.position
  modalEl.style.top               = options.top
  modalEl.style.left              = options.left
  modalEl.style.zIndex            = options.zIndex
  modalEl.style.width             = options.width
  modalEl.style.maxWidth          = options.maxWidth
  modalEl.style.height            = options.height
  modalEl.style.boxSizing         = options.boxSizing
  modalEl.style.backgroundColor   = options.backgroundColor
}

function fade (modalEl, count, options) {
  let { fadeTime } = options
  let interval = fadeTime || 0 
  let fadeOpacity = count > 0 ? 0.0 : 1

  modalEl.style.opacity = fadeOpacity
  modalEl.style.display = "flex"
  
  const fade = setInterval(() => {
    fadeOpacity += count
    modalEl.style.opacity = fadeOpacity
    
    if (fadeOpacity > 0.9 || fadeOpacity < 0.1) {
      clearInterval(fade)
      if(count < 0) modalEl.style.display = "none"
      document.body.style.overflowY == "hidden" ? document.body.style.overflowY = "" : document.body.style.overflowY = "hidden"
    }
  }, interval / 100); 
}

function defaultOptions (options) {
  let defaultOptions = { 
    flexDirection:   "column",
    justifyContent:  "center",
    alignItems:      "center",
    padding:         "20px",
    display:         "none",
    position:        "fixed",
    top:             "0px",
    left:            "0px",
    zIndex:          "10",
    width:           "100%",
    maxWidth:        "none",
    height:          "100vh",
    boxSizing:       "border-box",
    backgroundColor: "rgba(0,0,0, 0.7)",
    container: { 
      active: false,
      padding: "10px",
      backgroundColor: "#fff",
      width: "500px",
      maxWidth: "500px",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      borderRadius: "5px",
      boxShadow: "0px 1px 2px 0px black",
      border: "none",
      color: "#000"
    } 
  }

  return { ...defaultOptions, ...options }
}