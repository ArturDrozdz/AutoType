var AutoType = (function () {

    // constructor
    function AutoType(container, content, options) {
        this.container = document.getElementById(container);
        this.content = content;
        
        this.options = {
            cursor: '▓',
            typing_speed: 30,
            cursor_speed: 400,
            start_delay: 2000
        };

        setup_options.call(this, options);
        init.call(this);
    }

    var setup_options = function(options) {
        this.options = {
            cursor: options.cursor ? options.cursor : '▓',
            typing_speed: options.typing_speed ? options.typing_speed : 30,
            cursor_speed: options.cursor_speed ? options.cursor_speed: 400,
            start_delay: options.start_delay ? options.start_delay : 2000
        };
    }

    var init = function () {
        this.letter_index = 0;

        attach_elements.call(this);
        prepare_content.call(this);
        setup_cursor.call(this);
        run_typing.call(this);
    }

    var attach_elements = function () {
        this.content_span = document.createElement('span');
        this.container.appendChild(this.content_span);
        this.cursor_span = document.createElement('span');
        this.container.appendChild(this.cursor_span);
    }

    var prepare_content = function () {
        // replace all line breaks with special character
        this.content = this.content.replace(/(?:\r\n|\r|\n)/g, '◄');
    }

    var setup_cursor = function () {
        var self = this;
        setInterval(function () { switch_cursor.call(self) }, this.options.cursor_speed);
    }

    var run_typing = function () {
        var self = this;
        setTimeout(function () { setup_timer.call(self) }, this.options.start_delay);
    }

    var setup_timer = function () {
        var self = this;
        setTimeout(function () { print_letter.call(self) }, this.options.typing_speed);
    }

    var print_letter = function () {
        this.letter_index++;
        render.call(this);
        if (this.letter_index < this.content.length)
            setup_timer.call(this);
    }

    var switch_cursor = function () {        
        this.cursor_state = this.cursor_state == this.options.cursor ? '&nbsp' : this.options.cursor;
        render.call(this);
    }

    var render = function () {   
        var content = this.content.substring(0, this.letter_index);
        content = content.replace(new RegExp('◄', 'g'), '<br>');

        if(content.length != this.content_span.innerHTML.length)
            this.content_span.innerHTML = content;
        this.cursor_span.innerHTML =  this.cursor_state;
    }

    return AutoType;
})();