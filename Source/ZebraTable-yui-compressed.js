/*
---
description:     ZebraTable

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - ZebraTable
...
*/
var ZebraTable=new Class({Implements:[Options],options:{elements:"table.list-table",cssEven:"even",cssOdd:"odd",cssHighlight:"highlight",cssMouseEnter:"mo"},initialize:function(a){this.setOptions(a);$$(this.options.elements).each(function(b){this.zebraize(b);},this);},zebraize:function(a){a.getElements("tr").each(function(e,d){if(e.getFirst().get("tag")!="th"){var c=this,b=d%2?c.options.cssEven:c.options.cssOdd;e.addClass(b).addEvents({mouseenter:function(){if(!e.hasClass(c.options.cssHighlight)){e.addClass(c.options.cssMouseEnter).removeClass(b);}},mouseleave:function(){if(!e.hasClass(c.options.cssHighlight)){e.removeClass(c.options.cssMouseEnter).addClass(b);}},click:function(){e.toggleClass(c.options.cssMouseEnter).toggleClass(c.options.cssHighlight);if(!e.hasClass(c.options.cssHighlight)){e.removeClass(c.options.cssMouseEnter);}}});}},this);}});