jQuery(function ($) {
  'use strict';

  var helloWorld = flight.component(function () {

    // Click event handler
    this.onClick = function (event) {
      event.stopPropagation();
      var oldText = this.$node.attr('data-old-text');
      var newText = 'Whoa... that was underwhelming!';
      if (oldText) {
        newText = oldText;
      }
      this.$node.attr('data-old-text', this.$node.text());
      this.$node.text(newText);
    };

    // initialize
    this.after('initialize', function () {
      this.on('click', this.onClick);
    });

  });

  helloWorld.attachTo('h1');
});