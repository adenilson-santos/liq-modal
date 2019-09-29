# Liq Modal (1.0.x)
> Maked to be simple and easy.

## Features
- Click around of modal to exit
- Press Escape button to exit of modal
- Just call liqModals() function and create a html tag to see the magic happen
- Besides have now so much personalizations including inside of a container
- The big differential is that just with liqModals() and the data-liq-modal-open attribute in anywhere you can use the modal.
- Can open and close the modal using the .close() and .open() methods, after informate the selector.

## How to use
##### This is very simple, look.

### Installation
#### NPM
```sh
$ npm i liq-modal
```
#### Yarn
```sh
$ yarn add liq-modal
```

**After NPM or Yarn installation you can use like this: **
```js
require("liq-modal/liq-modal")
//or
import "liq-modal/liq-modal"

// then call like this: 
liqModals()
```

#### Direct usage
You can try get liq-modal.js or liq-modal.min.js files/cdn's and put inside of your project, then call liqModals()...
```html
<!-- Use the CDN's minified versions (use just one)-->
<script src="https://cdn.jsdelivr.net/npm/liq-modal@1.0.11/liq-modal.min.js"></script>
<script src="https://unpkg.com/liq-modal@1.0.11/liq-modal.min.js"></script>

<!-- Use the CDN's non minified versions (use just one) -->
<script src="https://cdn.jsdelivr.net/npm/liq-modal@1.0.11/liq-modal.js"></script>
<script src="https://unpkg.com/liq-modal@1.0.11/liq-modal.js"></script>

<!-- Or local file -->
<script src="liq-modal.js"></script>
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
  
<button data-liq-modal-open="#my-modal">Here</button>

<script>
	liqModals() // Get all elements with default class liq-modal__btn (Global)
</script>
```

#### Specific Usage (Specified tag)

```html
<button data-liq-modal-open="#my-modal-3">Random button</button>
  
<script>
liqModals({
	container: {
    	active: true,
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

<button data-liq-modal-open="#my-modal">Here</button>

<script>
	liqModals({
		backgroundColor: "dodgerblue", // Modal background color
		padding: "0px", // Modal padding
		zIndex: 50, // Modal z-index
		fadeTime: 500, // Modal fade in/out time
		container: {
			active: true, // Active container inside modal?
			padding: "20px", // Padding of container
			backgroundColor: "orange", // Background color of container
			width: "400px", // Width of container
			maxWidth: "300px", // Max Width of container
			height: "200px", // Height of container
			borderRadius: "10px", // Border Radius of container
			boxShadow: "2px 2px 0px 0px black", // Box shadow of container 
			border: '1px solid white' // Border of container,
			color: "#fff"
		}
	})
</script>
```

#### Advanced Usage (Open and Close for any situations)

```html
<div id="my-modal">
	Modal open after ajax
</div>

<button data-liq-modal-open="#my-modal">Here</button>

<script>
	liqModals({ container: { active: true } }) // activing style

	// You can use this syntax for use in any sitiations (after ajax example)
	liqModals({ selector: "#my-modal" }).open()
	liqModals({ selector: "#my-modal" }).close()
</script>
```

#### Contribute

After download the code use ever liq-modal-dev.js file to development, after make all changes type in your cli: *npm run dev* this will run babel in liq-modal file and after minify in liq-modal.min.js 
Then go to pull request.

##### For more details take a look in the examples path.

## MIT LICENSE

Copyright (c) 2019 - Adenilson Santos
```
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```