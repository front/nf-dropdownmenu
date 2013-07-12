#nf-dropdownmenu

Add-on for **bootstrap** or **foundation** top menus. Hides the content when the menu is open on small devices *à la* bbc.co.uk. 

### nfDropdownMenu

##### bootstrap

The only argument is the content to be hidden.

```
$('.navbar').nfDropdownMenu('#post-content');
```

##### foundation

Receives an options object.

```
$('nav.top-bar').nfDropdownMenu({
	button: '.toggle-topbar a',
	list: '.top-bar-section',
	content: '#post-content'
});
```

`button` - the clickable button (`a`).

`list` - the list container. Usually a `section` container.  

`content` - the content to be hidden.
  
## Demo

##### bootstrap

[http://front.github.io/nf-dropdownmenu/](http://front.github.io/nf-dropdownmenu/)


##### foundation

[http://front.github.io/nf-dropdownmenu/foundation.html](http://front.github.io/nf-dropdownmenu/foundation.html)

## Dependencies

#### bootstrap

[http://twitter.github.io/bootstrap/](http://twitter.github.io/bootstrap/)

LICENSE: [https://github.com/twitter/bootstrap/blob/master/LICENSE](https://github.com/twitter/bootstrap/blob/master/LICENSE)

`OR`

#### foundation

[http://foundation.zurb.com/](http://foundation.zurb.com/)

LICENSE: [https://github.com/zurb/foundation/blob/master/LICENSE](https://github.com/zurb/foundation/blob/master/LICENSE)

## License

[MIT](https://github.com/front/nf-dropdownmenu/blob/master/LICENSE)
