# AutoType
Lightweight library written with VanilliaJS framework which is simulating terminal style typing.

## Usage
First, we need `AutoType.js` reference and any HTML container:
```html
<script src="path/to/autotype.js"></script>
...
<span id="typer-container"></span>
```

And then, all we need to do is create AutoType instance with containerID and text that we want to be typed:
```javascript
var auto_type = new AutoType(
    'typer-container',
    'Hello World!'
);
```
