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

## Options
Optional options can be passed as third parameter to the constructor:

```javascript
var options = {
    cursor: '_',            // cursor character, default: ▓
    cursor_speed: 400       // cursor blinking speed in [ms], default: 400
    typing_speed: 30,       // time gap in [ms] between typing each character, default: 30    
    start_delay:  2000,     // delay in [ms] before typing starts, default: 2000
    kill_cursor: false,     // flag that determines if cursor have to be killed when typing is done, defaut: false
    finish_callback:        // function called when typing is done
        function () {}       
};

var auto_type = new AutoType(
    'typer-container',
    'Hello World!',
    options
);
```