jQuery Blocks Rotator plugin
================================

Easily flip your block elements in multiple directions

![Alt text](promo.gif?raw=true "jQuery Blocks Rotator plugin")

Basic usage
---

```html
	<link rel="stylesheet" href="css/example.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<div class="rotate-container">
		<div class="rotator"> 
		  <div class="front"> 
		    Front content
		  </div> 
		  <div class="back">
		    Back content
		  </div> 
		</div>	
	</div>
	<script>
      $(function(){
      	  $('.rotator').flipIt();		   
      });
	</script>	
	<script src="jquery.rotator.js"></script>
```


Options
---

### perspective

Perspective for 3d transformation.

number: *1000*

### background

Rotating block's background  

string: *'#fff'*

### trigger

Trigger to rotate sides of block. 

string: *'click'*

### rotateduration

Rotate duration

number: *0.5*

### scaleduration

Duration of scaling between rotation

number: *1*

### scale

Scaling value

number: *1.2*

### transition

Transition type

string: *'ease-out'*

### direction

Direction of flipping. 4 types of direction: vertical (from top, to bottom and back), verticalReverse (from bottom, to top and back), horizontal (from left, to right and back), horizontalReverse (from right, to left and back) 

string: *'vertical'*

### width

Width of flipping block

number: *300*

### height 

Same as width

number: *150*

### front

Block's front side selector. 

string: *'.front'*

### back

Block's back side selector. 

string: *'.back'*


## License
Copyright &copy; Timur Rzakulizadeh<br>
Licensed under the MIT license.
 