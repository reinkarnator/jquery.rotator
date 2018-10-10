(function($) {
		var Flip = {
			run: function( options ) {

				var sets = {  	
			          perspective: 1000,
			          background: '#fff',
			          trigger: 'click',
			          rotateduration: 0.5,
			          scaleduration: 1,
			          scale: 1.2,
			          transition: 'ease-out',
			          direction: 'vertical',
			          width: 300, 
			          height: 150,
			          front: '.front',
			          back: '.back',
		        }

		        //Merging default options with user's settings
				sets = $.extend( sets, options );

				return sets; 
			},
			rotate: function( elem, params, degrees ) {

		        var degreeAxis = degrees[1],
		        rotateType = degrees[0],
		        scaleduration = params.scaleduration * 1000,
		        rotateduration = params.rotateduration * 1000,
		        front = elem.find(params.front),
		        back = elem.find(params.back);

		        //Merging front and back panels for stylize
		        var faces = front.add(back);

		        //Combined styles for back and front panels
		        var combinedCss = {
	              "backface-visibility": "hidden",
	              "-webkit-transform-style": "preserve-3d",
	              "transform-style": "preserve-3d",
	              "position": "absolute",
	              "z-index": "1",
	              "width": params.width,
	              "height": params.height,
	              "background": params.background,
		        },
		        //Styles for parent container, which contains back and front panels
	            selectorCss = {
	              "perspective": params.perspective,
	              "-webkit-transform-style": "preserve-3d",
	              "transform-style": "preserve-3d",
	              "width": params.width,
	              "height": params.height 
	            },
	            //Separates styles for back panel's initial transform options
	            backPanelCss = {
	              "transform": "scale(1) " + rotateType +"("+ degreeAxis +"deg)"
	            };
	            
	            elem.css(selectorCss);
	            back.css(backPanelCss);
	            faces.css(combinedCss);
	            
                faces.css({
                  "transition": "all " + params.rotateduration + "s " + params.transition
                });    

                //Rotation counter
				var cnt = 0,
				//Disabling clicking while rotation proccess execution
				iseventtriggered = (iseventtriggered) ? false : true;

		        elem.on(params.trigger,function(){
		            
		            cnt++;
		            
		            if (cnt % 2 == 0) {
		              if (iseventtriggered == true) {

				            iseventtriggered = false;
				              
				            setTimeout(function(){
				              		front.css({'transform':'scale('+  params.scale +') '+ rotateType +'('+ degreeAxis +'deg)','z-index': '1'});
				              		back.css({'transform':'scale('+  params.scale +') '+ rotateType +'('+ degreeAxis*2 +'deg)','z-index': '1'});
				              		setTimeout(function(){
										front.css({'transform':'scale('+  params.scale +') '+ rotateType +'(0deg)','z-index': '1'});	
										back.css({'transform':'scale('+  params.scale +') '+ rotateType +'('+ degreeAxis +'deg)','z-index': '1'});	
							            setTimeout(function(){
							              	front.css({'transform':'scale(1) '+ rotateType +'(0deg)','z-index': '1'});
							              	back.css({'transform':'scale(1) '+ rotateType +'('+ degreeAxis +'deg)','z-index': '1'});
							              	iseventtriggered = true;
							            },scaleduration);																              		
									},rotateduration);						              						              		
				            },500); 

				            
		          	  }
		            } else {
		                if (iseventtriggered == true) {

			              	iseventtriggered = false;
				              
				            setTimeout(function(){
				              		front.css({'transform':'scale('+  params.scale +') '+ rotateType +'(0deg)','z-index': '1'});
				              		back.css({'transform':'scale('+  params.scale +') '+ rotateType +'('+ degreeAxis +'deg)','z-index': '1'});
				              		setTimeout(function(){
										front.css({'transform':'scale('+  params.scale +') '+ rotateType +'('+ degreeAxis +'deg)','z-index': '1'});	
										back.css({'transform':'scale('+  params.scale +') '+ rotateType +'('+ degreeAxis*2 +'deg)','z-index': '1'});	
							            setTimeout(function(){
							              	front.css({'transform':'scale(1) '+ rotateType +'('+ degreeAxis +'deg)','z-index': '1'});
							              	back.css({'transform':'scale(1) '+ rotateType +'('+ degreeAxis*2 +'deg)','z-index': '1'});
							              	iseventtriggered = true;
							            },scaleduration);																              		
									},rotateduration);						              						              		
				            },500);
				          	
				            
				        }    
			        }  	              				                    
		        });	            		        			

			},
			getDirection: function( params ) {
              	  switch(params) {      
		               case "horizontal" :  var rotateAxis = "rotatey", degree = 180; break;
		               case "horizontalReverse" :  var rotateAxis = "rotatey", degree = -180; break;
		               case "vertical" :  var rotateAxis = "rotatex", degree = -180; break;
		               case "verticalReverse" :  var rotateAxis = "rotatex", degree = 180; break;
	              }

	              var degreeparams = [rotateAxis, degree];

	              return degreeparams;

			},		   
		};

			
		$.fn.flipIt = function( options ) {
		    this.each(function() {
		    	var settings = Flip.run((options || {}));
		    	var degrees = Flip.getDirection(settings.direction);

		    	return Flip.rotate($(this), settings, degrees);
		    }); 

		}
		
})(jQuery);