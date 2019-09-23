# Liq Modal (1.0.x)
> Maked to be simple and easy.

## Features
- Click around of modal to exit
- Press Escape button to exit of modal
- Just call liqModals() function and create a html tag to see the magic happen
- Besides have now so much personalizations including inside of a container
- The big differential is that just with liqModals() and the tags with liq-modal__btn class in anywhere you can use the modal.

## How to use
##### This is very simple, look.

### Installation
#### NPM
```sh
npm i liq-modal
```
#### Yarn
```sh
yarn add liq-moda
```

**After NPM or Yarn installation you can use like this: **
```js
require("liq-modal/liq-modal")
//or
import "liq-modal/liq-modal"

// then call like this: 
liqModals()
```

#### Direct copy code
You can try get liq-modal.js or liq-modal.min.js files and put inside of your project, then call liqModals()...
```html
<script src="liq-modal.min.js"></script>
```

### Personalization
*Now you can personalize liq-modal like this, pay attention in the comments.*
#### Basic Usage (Default)
**Ever use the class: "liq-modal__btn" if you want to anything more global.**
**Or use specific selector to a local event.**
**Inside data-liq-modal-open input what element you want to have as modal.**
```html
<div id="my-modal">
	<div class="content">
	First modal, content here.
	</div>
</div>
  
<button class="liq-modal__btn" data-liq-modal-open="#my-modal">Here</button>

<script>
	liqModals() // Get all elements with default class liq-modal__btn (Global)
</script>
```

#### Specific Usage (Specified tag)

```html
  <button class="another-btn" data-liq-modal-open="#my-modal-3">Random button</button>
  
<script>
liqModals({ // Get specified elements by you. With this you can make specific changes
	selector: ".another-btn",
	container: {
		// ... You can use a container and personalizate it, see more in advanced use.
	}
})
</script>
```

#### Advanced Usage (Personalized)
*But you can do something like this, haha!*
```html
<div id="my-modal">
	First modal, content here.
</div>

<button class="liq-modal__btn" data-liq-modal-open="#my-modal">Here</button>

<script>
	liqModals({
		bgColor: "dodgerblue", // Modal background color
		padding: "0px", // Modal padding
		zIndex: 50, // Modal z-index
		fadeTime: 500, // Modal fade in/out time
		container: {
			active: true, // Active container inside modal?
			padding: "20px", // Padding of container
			bgColor: "orange", // Background color of container
			width: "400px", // Width of container
			maxWidth: "300px", // Max Width of container
			height: "200px", // Height of container
			radius: "10px", // Border Radius of container
			shadow: "2px 2px 0px 0px black", // Box shadow of container 
			border: '1px solid white' // Border of container
		}
	})
</script>
```

### Fore more details take a look in the examples path.