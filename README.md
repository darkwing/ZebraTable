ZebraTable
=========

ZebraTable allows for quick and easy table row highlighting. ZebraTable also allows for different color highlighting during mouseenter and click events.

![Screenshot](http://davidwalsh.name/dw-content/zebra-table-git.png)

How to Use
----------

ZebraTable can be initialized at any time but is generally initialized at the top of the document during the page's normal load.  There are no required arguments -- only options.

### CSS
	.highlight			{ background:#d5fcdc; }
	.even				{ background:#fff; }
	.mo					{ background:#e3f1fb; }
	.odd				{ background:#eee; }

### Javascript
	var zebraTables = new ZebraTable({
		elements: 'table.list-table',
		cssEven: 'even',
		cssOdd: 'odd',
		cssHighlight: 'highlight',
		cssMouseEnter: 'mo'
	});
	

For specific usage and options, please read the documentation or visit http://davidwalsh.name/mootools-zebra-table-plugin

Options
-------

All options have default values assigned.

* **elements** - (*array*)  The table elements to zebra-ize.
* **cssEven** - (*string*)  The CSS class for "even" rows.
* **cssOdd** - (*string*)  The CSS class for "odd" rows.
* **cssHighlight** - (*string*)  The CSS class for "highlighted" (clicked) rows.
* **cssMouseEnter** - (*string*)  The CSS class for hovered rows.