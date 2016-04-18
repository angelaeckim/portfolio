<script src="/media/plugins/svg/svg.min.js" type="text/javascript" charset="utf-8"></script>
<svg width="801" height="801" xmlns="http://www.w3.org/2000/svg"><g></g></svg>

<script type="text/javascript">
	function Wheel() {
		var me = this;
		var element = function(selector) { return view.root.find(selector); }

		// EXTEND SVG FOR XBROWSER INNERHTML SUPPORT
		var svgns = "http://www.w3.org/2000/svg";
			$.svg = function $svg(tagName) {
			return $(document.createElementNS(svgns, tagName));
		};

		var view = {};
		view.root = $(".Wheel");
		view.svg = element("svg g");
		view.render = element("svg");

		view.slices = null;
		view.innerSlices = null;
		view.middleSlices = null;
		view.outerSlices =  null;

		view.texts = null;
		view.innerTexts = null;
		view.middleTexts = null;
		view.outerTexts = null;

		view.selected = element(".selected");
		view.selectedButton = element(".selected .button");
		view.selectedActive = element(".selected .active");

		var t1 = [];
		t1[t1.length] = "Sad";
		t1[t1.length] = "Disgust";
		t1[t1.length] = "Fear";
		t1[t1.length] = "Anger";
		t1[t1.length] = "Surprise";
		t1[t1.length] = "Happy";


		var t2t1 = [];

		var t2 = [];
		t2t1[t2.length] = "Sad";t2[t2.length] = "Bored";			// Sad
		t2t1[t2.length] = "Sad";t2[t2.length] = "Lonely";
		t2t1[t2.length] = "Sad";t2[t2.length] = "Depressed";
		t2t1[t2.length] = "Sad";t2[t2.length] = "Despair";
		t2t1[t2.length] = "Sad";t2[t2.length] = "Guilty";
		t2t1[t2.length] = "Sad";t2[t2.length] = "Nostalgic";
		t2t1[t2.length] = "Disgust";t2[t2.length] = "Avoidance";			// Disgust
		t2t1[t2.length] = "Disgust";t2[t2.length] = "Awful";
		t2t1[t2.length] = "Disgust";t2[t2.length] = "Disappointed";
		t2t1[t2.length] = "Disgust";t2[t2.length] = "Disapproval";
		t2t1[t2.length] = "Fear";t2[t2.length] = "Humiliated";			// Fear
		t2t1[t2.length] = "Fear";t2[t2.length] = "Rejected";
		t2t1[t2.length] = "Fear";t2[t2.length] = "Submissive";
		t2t1[t2.length] = "Fear";t2[t2.length] = "Insecure";
		t2t1[t2.length] = "Fear";t2[t2.length] = "Anxious";
		t2t1[t2.length] = "Fear";t2[t2.length] = "Scared";
		t2t1[t2.length] = "Anger";t2[t2.length] = "Critical";			// Anger
		t2t1[t2.length] = "Anger";t2[t2.length] = "Distant";
		t2t1[t2.length] = "Anger";t2[t2.length] = "Frustrated";
		t2t1[t2.length] = "Anger";t2[t2.length] = "Aggressive";
		t2t1[t2.length] = "Anger";t2[t2.length] = "Mad";
		t2t1[t2.length] = "Anger";t2[t2.length] = "Hateful";
		t2t1[t2.length] = "Anger";t2[t2.length] = "Threatened";
		t2t1[t2.length] = "Anger";t2[t2.length] = "Hurt";
		t2t1[t2.length] = "Surprise";t2[t2.length] = "Startled";			// Surprise
		t2t1[t2.length] = "Surprise";t2[t2.length] = "Confused";
		t2t1[t2.length] = "Surprise";t2[t2.length] = "Amazed";
		t2t1[t2.length] = "Surprise";t2[t2.length] = "Excited";
		t2t1[t2.length] = "Happy";t2[t2.length] = "Joyful";			// Happy
		t2t1[t2.length] = "Happy";t2[t2.length] = "Interested";
		t2t1[t2.length] = "Happy";t2[t2.length] = "Proud";
		t2t1[t2.length] = "Happy";t2[t2.length] = "Accepted";
		t2t1[t2.length] = "Happy";t2[t2.length] = "Powerful";
		t2t1[t2.length] = "Happy";t2[t2.length] = "Peaceful";
		t2t1[t2.length] = "Happy";t2[t2.length] = "Intimate";
		t2t1[t2.length] = "Happy";t2[t2.length] = "Optimistic";

		var t3t1=[];
		var t3t2=[];

		var t3 = [];
		t3t1[t3.length] = "Sad";t3t2[t3.length] = "Bored";t3[t3.length] = "Indifferent";			// Sad
		t3t1[t3.length] = "Sad";t3t2[t3.length] = "Bored";t3[t3.length] = "Apathetic";
		t3t1[t3.length] = "Sad";t3t2[t3.length] = "Lonely";t3[t3.length] = "Isolated";
		t3t1[t3.length] = "Sad";t3t2[t3.length] = "Lonely";t3[t3.length] = "Neglected";
		t3t1[t3.length] = "Sad";t3t2[t3.length] = "Depressed";t3[t3.length] = "Empty";
		t3t1[t3.length] = "Sad";t3t2[t3.length] = "Depressed";t3[t3.length] = "Inferior";
		t3t1[t3.length] = "Sad";t3t2[t3.length] = "Despair";t3[t3.length] = "Vulnerable";
		t3t1[t3.length] = "Sad";t3t2[t3.length] = "Despair";t3[t3.length] = "Powerless";
		t3t1[t3.length] = "Sad";t3t2[t3.length] = "Guilty";t3[t3.length] = "Ashamed";
		t3t1[t3.length] = "Sad";t3t2[t3.length] = "Guilty";t3[t3.length] = "Remorseful";
		t3t1[t3.length] = "Sad";t3t2[t3.length] = "Nostalgic";t3[t3.length] = "Yearning";
		t3t1[t3.length] = "Sad";t3t2[t3.length] = "Nostalgic";t3[t3.length] = "Bittersweet";
		t3t1[t3.length] = "Disgust";t3t2[t3.length] = "Avoidance";t3[t3.length] = "Hesitant";			// Disgust
		t3t1[t3.length] = "Disgust";t3t2[t3.length] = "Avoidance";t3[t3.length] = "Aversion";
		t3t1[t3.length] = "Disgust";t3t2[t3.length] = "Awful";t3[t3.length] = "Detestable";
		t3t1[t3.length] = "Disgust";t3t2[t3.length] = "Awful";t3[t3.length] = "Revulsion";
		t3t1[t3.length] = "Disgust";t3t2[t3.length] = "Disappointed";t3[t3.length] = "Revolted";
		t3t1[t3.length] = "Disgust";t3t2[t3.length] = "Disappointed";t3[t3.length] = "Repugnant";
		t3t1[t3.length] = "Disgust";t3t2[t3.length] = "Disapproval";t3[t3.length] = "Loathing";
		t3t1[t3.length] = "Disgust";t3t2[t3.length] = "Disapproval";t3[t3.length] = "Judgmental";
		t3t1[t3.length] = "Fear";t3t2[t3.length] = "Humiliated";t3[t3.length] = "Ridiculed";			// Fear
		t3t1[t3.length] = "Fear";t3t2[t3.length] = "Humiliated";t3[t3.length] = "Disrespected";
		t3t1[t3.length] = "Fear";t3t2[t3.length] = "Rejected";t3[t3.length] = "Alienated";
		t3t1[t3.length] = "Fear";t3t2[t3.length] = "Rejected";t3[t3.length] = "Hated";
		t3t1[t3.length] = "Fear";t3t2[t3.length] = "Submissive";t3[t3.length] = "Insignificant";
		t3t1[t3.length] = "Fear";t3t2[t3.length] = "Submissive";t3[t3.length] = "Worthless";
		t3t1[t3.length] = "Fear";t3t2[t3.length] = "Insecure";t3[t3.length] = "Pressured";
		t3t1[t3.length] = "Fear";t3t2[t3.length] = "Insecure";t3[t3.length] = "Inadequate";
		t3t1[t3.length] = "Fear";t3t2[t3.length] = "Anxious";t3[t3.length] = "Worried";
		t3t1[t3.length] = "Fear";t3t2[t3.length] = "Anxious";t3[t3.length] = "Overwhelmed";
		t3t1[t3.length] = "Fear";t3t2[t3.length] = "Scared";t3[t3.length] = "Frightened";
		t3t1[t3.length] = "Fear";t3t2[t3.length] = "Scared";t3[t3.length] = "Terrified";
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Critical";t3[t3.length] = "Sarcastic";				// Anger
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Critical";t3[t3.length] = "Skeptical";
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Distant";t3[t3.length] = "Suspicious";
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Distant";t3[t3.length] = "Withdrawn";
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Frustrated";t3[t3.length] = "Irritated";
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Frustrated";t3[t3.length] = "Infuriated";
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Aggressive";t3[t3.length] = "Hostile";
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Aggressive";t3[t3.length] = "Provoked";
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Mad";t3[t3.length] = "Enraged";
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Mad";t3[t3.length] = "Furious";
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Hateful";t3[t3.length] = "Violated";
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Hateful";t3[t3.length] = "Resentful";
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Threatened";t3[t3.length] = "Jealous";
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Threatened";t3[t3.length] = "Intimidated";
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Hurt";t3[t3.length] = "Devastated";
		t3t1[t3.length] = "Anger";t3t2[t3.length] = "Hurt";t3[t3.length] = "Embarrassed";
		t3t1[t3.length] = "Surprise";t3t2[t3.length] = "Startled";t3[t3.length] = "Shocked";				// Surprise
		t3t1[t3.length] = "Surprise";t3t2[t3.length] = "Startled";t3[t3.length] = "Dismayed";
		t3t1[t3.length] = "Surprise";t3t2[t3.length] = "Confused";t3[t3.length] = "Disillusioned";
		t3t1[t3.length] = "Surprise";t3t2[t3.length] = "Confused";t3[t3.length] = "Perplexed";
		t3t1[t3.length] = "Surprise";t3t2[t3.length] = "Amazed";t3[t3.length] = "Astonished";
		t3t1[t3.length] = "Surprise";t3t2[t3.length] = "Amazed";t3[t3.length] = "Awe";
		t3t1[t3.length] = "Surprise";t3t2[t3.length] = "Excited";t3[t3.length] = "Eager";
		t3t1[t3.length] = "Surprise";t3t2[t3.length] = "Excited";t3[t3.length] = "Energetic";
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Joyful";t3[t3.length] = "Liberated";					// Happy
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Joyful";t3[t3.length] = "Ecstatic";
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Interested";t3[t3.length] = "Amused";
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Interested";t3[t3.length] = "Inquisitive";
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Proud";t3[t3.length] = "Important";
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Proud";t3[t3.length] = "Confident";
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Accepted";t3[t3.length] = "Respected";
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Accepted";t3[t3.length] = "Fulfilled";
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Powerful";t3[t3.length] = "Courageous";
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Powerful";t3[t3.length] = "Provocative";
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Peaceful";t3[t3.length] = "Loving";
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Peaceful";t3[t3.length] = "Mellow";
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Intimate";t3[t3.length] = "Sensitive";
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Intimate";t3[t3.length] = "Playful";
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Optimistic";t3[t3.length] = "Open";
		t3t1[t3.length] = "Happy";t3t2[t3.length] = "Optimistic";t3[t3.length] = "Inspired";

		var t1t2 = {};
		for (var i=0; i<t2t1.length; i+=1) {
			var key = t2t1[i];
			if (t1t2[key] == null) {
				t1t2[key] = [];
			}

			t1t2[key][t1t2[key].length] = i;
		}

		var t2t3 = {};
		for (var i=0; i<t3t2.length; i+=1) {
			var key = t3t2[i];
			if (t2t3[key] == null) {
				t2t3[key] = [];
			}

			t2t3[key][t2t3[key].length] = i;
		}

		var t1t3 = {};
		for (var i=0; i<t3t1.length; i+=1) {
			var key = t3t1[i];
			if (t1t3[key] == null) {
				t1t3[key] = [];
			}

			t1t3[key][t1t3[key].length] = i;
		}

		var model = {};
		model.originX = 400;
		model.originY = 400;

		model.radiusOne = 100;
		model.radiusTwo = 250;
		model.radiusThree = 400;

		model.callback = null;


		me.setCallback = function(callback) {
			model.callback = callback;
		}

		function arc(originX, originY, radius, angleStart, angleEnd, style, stage, tag, index) {
			var startX = Math.cos(Math.PI/180 * angleStart) * radius;
			var startY = -Math.sin(Math.PI/180 * angleStart) * radius;

			var endX = Math.cos(Math.PI/180 * angleEnd) * radius - startX;
			var endY = -Math.sin(Math.PI/180 * angleEnd) * radius - startY;

			var angle = (angleStart + angleEnd)/2;

			//view.svg.html(view.svg.html() + '<path tag="'+tag+'" index="'+index+'" class="slice '+style+'" stage="'+stage+'" angle="'+angle+'" d="M'+originX+' '+originY+' l '+startX+' '+startY+' a '+radius+' '+radius+', 0, 0, 0, '+endX+' '+endY+' Z"></path>');

			$.svg("path").attr({
				tag:tag,
				index:index,
				class:"slice "+style,
				stage:stage,
				angle:angle,
				d:"M"+originX+" "+originY+" l "+startX+" "+startY+" a "+radius+" "+radius+", 0, 0, 0, "+endX+" "+endY+" Z"
			}).appendTo(view.svg);
		}

		function text(initialX, initialY, originX, originY, angle, text, style, stage, tag) {
    			//view.svg.html(view.svg.html() + '<text tag="'+tag+'" text="'+text+'" class="text '+style+'" stage="'+stage+'" x="'+initialX+'" y="'+initialY+'" fill="white" transform="rotate('+(angle*-1)+' '+originX+','+originY+')" font-size="14" font-family="proximanova-bold">'+text+'</text>')

			$.svg("text").attr({
				 tag:tag,
		 		 text:text,
			 	 class:"text " + style,
				 stage:stage,
				 x:initialX,
				 y:initialY,
				 fill:"white",
				 transform:"rotate("+(angle*-1)+" "+originX+","+originY+")",
				 "font-size":14,
				 "font-family": "proximanova-bold"
			}).text(text).appendTo(view.svg);
		}

		me.render = function() {
			if (view.svg.attr("rendered") == null) {
				view.svg.attr("rendered", 1);

			for (var i=0; i<72; i+=1) {
				var index = i+8;
				if (index >= 72) { index -= 72; }
				arc(model.originX, model.originY,model.radiusThree,5*i,5*(i+1), "outer", "3", "3|"+index,index);
			}

	        	for (var i=0; i<36; i+=1) {
				var index = i+4;
				if (index >= 36) { index -= 36; }
				arc(model.originX, model.originY,model.radiusTwo,10*i,10*(i+1), "middle", "2", "2|"+index,index);
			}

			var offset = -40;
			arc(model.originX, model.originY,model.radiusOne,0+offset,60+offset, "inner", "1", "1|"+0,0);    // sad
			arc(model.originX, model.originY,model.radiusOne,60+offset,100+offset, "inner", "1", "1|"+1,1);    // happy
			arc(model.originX, model.originY,model.radiusOne,100+offset,160+offset, "inner", "1", "1|"+2,3);    // surprise
			arc(model.originX, model.originY,model.radiusOne,160+offset,240+offset, "inner", "1", "1|"+3,3);    // fear
			arc(model.originX, model.originY,model.radiusOne,240+offset,280+offset, "inner", "1", "1|"+4,4);    // disgust
			arc(model.originX, model.originY,model.radiusOne,280+offset,360+offset, "inner", "1", "1|"+5,5);    // disgust


			var offset = 8;
		        for (var i=0; i<72; i+=1) {
				var index = i + offset;

				if (index >= 72) { index -= 72; }
		    		if (index < 0) { index += 72; }
        	    		text(model.originX+275,model.originY+4,model.originX, model.originY, i*5 + 2.5, t3[index],"outer", "3", "3|"+index);
	        	}

			var offset = 4;
        		for (var i=0; i<36; i+=1) {
		    		var index = i + offset;

		    		if (index >= 36) { index -= 36; }
 		    		if (index < 0) { index += 36; }
	            		text(model.originX+120,model.originY+4,model.originX, model.originY, i*10 + 5, t2[index],"middle", "2", "2|"+index);
        		}

			var offset= -46;
			var offsetX = 35;
			var offsetY = 1;
			text(model.originX+offsetX,model.originY+offsetY,model.originX, model.originY, 30+offset, t1[0],"inner", "1", "1|"+0);
			text(model.originX+offsetX,model.originY+offsetY,model.originX, model.originY, 80+offset, t1[1],"inner", "1", "1|"+1);
			text(model.originX+offsetX,model.originY+offsetY,model.originX, model.originY, 130+offset, t1[2],"inner","1", "1|"+2);
			text(model.originX+offsetX,model.originY+offsetY,model.originX, model.originY, 200+offset, t1[3],"inner", "1", "1|"+3);
			text(model.originX+offsetX,model.originY+offsetY,model.originX, model.originY, 260+offset, t1[4],"inner", "1", "1|"+4);
			text(model.originX+offsetX,model.originY+offsetY,model.originX, model.originY, 320+offset, t1[5],"inner", "1", "1|"+5);

			view.slices = element(".slice");
			view.innerSlices = element(".slice.inner");
			view.middleSlices = element(".slice.middle");
			view.outerSlices = element(".slice.outer");

			view.texts = element(".text");
			view.innerTexts = element(".text.inner");
			view.middleTexts = element(".text.middle");
			view.outerTexts = element(".text.outer");

			view.svg.find("path").click(function() {
				var tag = $(this).attr("tag");
				var text = element(".text[tag='"+tag+"']");
				var slice = $(this);

				me.rotate(slice.attr("angle"));

				removeClass(view.slices, "active");
				addClass(slice, "active");

				removeClass(view.texts, "active");
				addClass(text, "active");

				addClass(view.texts, "dark");
				removeClass(text, "dark");

				addClass(view.slices, "dark")
				removeClass(slice, "dark");

				view.root.removeAttr("inner");
				view.root.removeAttr("middle");
				view.root.removeAttr("outer");

				if ($(this).attr("stage") == "1") {
					view.root.attr("inner", text.attr("text"));

					var middles = t1t2[text.text()];
					for (var i=0; i<middles.length; i+=1) {
						var tag = "2|" + middles[i];
						removeClass(element(".text[tag='"+tag+"']"), "dark");
						removeClass(element(".slice[tag='"+tag+"']"), "dark");
					}

					me.activateMiddle();
				} else if ($(this).attr("stage") == "2") {
					view.root.attr("middle", text.attr("text"));

					var outers = t2t3[text.text()];
					for (var i=0; i<outers.length; i+=1) {
						var tag = "3|" + outers[i];
						removeClass(element(".text[tag='"+tag+"']"), "dark");
						removeClass(element(".slice[tag='"+tag+"']"), "dark");
					}

					var inner = t2t1[$(this).attr("index")];
					var tag = element(".text[text='"+inner+"']").attr("tag");
					removeClass(element(".text[tag='"+tag+"']"), "dark");
					removeClass(element(".slice[tag='"+tag+"']"), "dark");
					addClass(element(".text[tag='"+tag+"']"), "active");
					addClass(element(".slice[tag='"+tag+"']"), "active");

					view.root.attr("inner", element(".text[tag='"+tag+"']").attr("text"));


					me.activateOuter();
				} else if ($(this).attr("stage") == "3") {
					view.root.attr("outer", text.attr("text"));

					var middle = t3t2[$(this).attr("index")];
					var tag = element(".text[text='"+middle+"']").attr("tag");
					removeClass(element(".text[tag='"+tag+"']"), "dark");
					removeClass(element(".slice[tag='"+tag+"']"), "dark");
					addClass(element(".text[tag='"+tag+"']"), "active");
					addClass(element(".slice[tag='"+tag+"']"), "active");

					view.root.attr("middle", element(".text[tag='"+tag+"']").attr("text"));


					var inner = t3t1[$(this).attr("index")];
					var tag = element(".text[text='"+inner+"']").attr("tag");
					removeClass(element(".text[tag='"+tag+"']"), "dark");
					removeClass(element(".slice[tag='"+tag+"']"), "dark");
					addClass(element(".text[tag='"+tag+"']"), "active");
					addClass(element(".slice[tag='"+tag+"']"), "active");

					view.root.attr("inner", element(".text[tag='"+tag+"']").attr("text"));

					me.activateSelected();
				}

				me.refreshSelected();
			});

		//	view.svg.attr("transform", "rotate(280 "+model.originX+" "+model.originY+")");
			}
		}
