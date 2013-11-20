show-when-checked
=================

Conditional form elements in a DRYish way

Uses jQuery, works with inputs of type "checkbox" and "radio".

### Usage

Step 1: identify your triggering checkbox or radio button via id attribute.

```
<input type="checkbox" id="trigger" />
```

Step 2: add .show-when-selected to the elements you want to show when your trigger is checked (and hide when it's unchecked). Add your trigger id as data-trigger-id attribute.

```
<div class="show-when-selected" data-trigger-id="trigger">
	Only shown when the checkbox is selected
</div>
```

Step 3: Include the JS file anywhere in your document

```
<script src="show-when-selected.js"></script>
```

### Options

You can optionally supply a data-animation-duration attribute to showable elements which will be passed to jQuery's hide() and show() methods; documentation found here: http://api.jquery.com/hide/ If the attribute is not set, the duration is 0 and there is no animation.

Your element will be visible on page load. To avoid this, use custom css (or a class like hide).

