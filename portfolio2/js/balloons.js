(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 240,
	height: 190,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGImIAAxlIC0AeIBZRhg");
	this.shape.setTransform(13.5,57.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,115.3);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAABIQgnAAgcgWQgdgVABgdQAAgeAdgVQAcgVAmAAQAoABAdAVQAcAWgBAcQAAAfgcAVQgcAVgnAAIgBgBg");
	this.shape.setTransform(9.7,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.4,14.6);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADKE6QhighiOiFQiUiLhAh9QhLiVBZg4QBoArB0BZQDnCxA+DnQAcBng+AAQgRAAgYgIg");
	this.shape.setTransform(28.5,32.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,64.4);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AEE4E8").s().p("AveBYQmagkAAg0QAAgyGaglQGaglJEAAQJFAAGZAlQGbAlAAAyQAAA0mbAkQmaAlpEAAQpDAAmbglg");
	this.shape.setTransform(0,0,0.296,0.296);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.4,-3.7,82.9,7.5);


(lib.face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE9D15").s().p("AkhA+QhFgPgjgNQgIgDgDgHQgEgIADgIQACgIAIgBQAHgEAIADQByAlCVAJQEpASDDiQQAHgFAIABQAIACAFAGQAFAHgBAIQgBAIgHAFQi5CJkNAAQh0AAh2gZg");
	this.shape.setTransform(0,6.5,0.331,0.331);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CE9D15").s().p("AgaApQgLgRAAgYQAAgXALgRQALgRAPgBQAPABAMARQALARAAAXQAAAYgLARQgMASgPgBQgPABgLgSg");
	this.shape_1.setTransform(2.6,-7.4,0.331,0.331);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CE9D15").s().p("AgaApQgLgRAAgYQAAgXALgRQAMgRAOAAQAQAAALARQALARAAAXQAAAYgLARQgLARgQABQgOAAgMgSg");
	this.shape_2.setTransform(-4.5,-7.4,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-9.4,27,18.8);


(lib.blinklids = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCE39F").s().p("AoRD3IAAntIQjAAIAAHtg");
	this.shape.setTransform(-4.6,-0.6,0.187,0.187,0,0,0,-24.9,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-4.6,19.8,9.3);


(lib.ballonrope = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5B5B5").s().p("AgOHeIABu7IAcAAIgBO7g");
	this.shape.setTransform(0,0,0.383,0.456,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-21.8,1.3,43.7);


(lib.eyesblink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blinklids("synched",0);
	this.instance.setTransform(-1,-8.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(133).to({alpha:1},0).wait(4).to({alpha:0},0).wait(14));

	// Layer 1
	this.instance_1 = new lib.face("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(151));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-13.1,27,22.5);


(lib.balloonbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCE39F").s().p("AhmAsQgRgQgCgXQAAgWAPgRQAQgRAXgBICBgGQAYgBARAQQASAQABAXQAAAVgPARQgQASgYABIiBAGIgCAAQgWAAgQgPg");
	this.shape.setTransform(63.8,-4.1,0.318,0.318);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCE39F").s().p("AhmAsQgSgQgBgXQAAgWAPgRQAQgRAYgBICAgGQAYgBARAQQASAQAAAXQABAVgQASQgPARgYABIiAAGIgDAAQgWAAgQgPg");
	this.shape_1.setTransform(64,-8.7,0.318,0.318);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCE39F").s().p("AhjAzQgSgOgDgXQgDgVAPgTQAOgSAYgDICAgPQAXgDASAOQATAPADAXQACAWgOASQgPASgXADIiAAPIgHABQgTAAgQgNg");
	this.shape_2.setTransform(64.8,-13.1,0.318,0.318);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#36B0BC").s().p("AmnDGQiQhPhuhaIBfhyQB9BjCiBSQFBCkDMhQQDshdA/m5ICUAVQhLIRk+B8QhZAjhrAAQjiAAkdidg");
	this.shape_3.setTransform(42.6,6.7,0.318,0.318);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC7020").s().p("AguApIAAhRIBdAAIAABRg");
	this.shape_4.setTransform(-41.5,-57.1,0.318,0.318);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC7020").s().p("AgfALIAAgWIA/AAIAAAWg");
	this.shape_5.setTransform(10.6,-56.1,0.318,0.318);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E45B0E").s().p("AzUh6QBJgjCEgsQEHhXEhgrQOCiGMyFPIgIgDQhCgZhPgZQj8hQkagnQuCh+tSFCIgFHcg");
	this.shape_6.setTransform(-16.2,-45.2,0.318,0.318);

	this.instance = new lib.Path_7();
	this.instance.setTransform(-50.2,20.8,0.318,0.318,0,0,0,13.1,57.6);
	this.instance.alpha = 0.27;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5D581").s().p("Au2gEIgvgrIAvgeQBkAqEmAjQJJBCPJgnIidASQjKAUjfAIQiKAFiIAAQozAAoRhSg");
	this.shape_7.setTransform(-18.3,3.4,0.318,0.318);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CE9D15").s().p("AgWAqQgKgSAAgYQAAgXAKgRQAKgSAMAAQANAAAKASQAKARAAAXQAAAYgKASQgKARgNAAQgMAAgKgRg");
	this.shape_8.setTransform(26.4,-29.5,0.318,0.318);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E8C566").s().p("AhLBMQgfggAAgsQAAgrAfggQAgggArAAQAsAAAgAgQAfAgAAArQAAAsgfAgQggAggsgBQgrABggggg");
	this.shape_9.setTransform(28.3,-29.5,0.318,0.318);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCE39F").s().p("AgeCvQg1gJgnglQgmgkgMg0IASh/QAagwAygZQAygYA1AJQBIALArA8QAqA8gMBGQgLBJg8ArQguAig1AAQgOAAgQgCg");
	this.shape_10.setTransform(29.3,-29.3,0.318,0.318);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CE9D15").s().p("AgWApQgKgRAAgYQAAgXAKgRQAKgSAMAAQANAAAKASQAKARAAAXQAAAYgKARQgKASgNAAQgMAAgKgSg");
	this.shape_11.setTransform(-55.7,-29.5,0.318,0.318);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E8C566").s().p("AhLBMQgfggAAgsQAAgrAfggQAgggArABQAsgBAgAgQAfAgAAArQAAAsgfAgQggAggsAAQgrAAggggg");
	this.shape_12.setTransform(-57.5,-29.5,0.318,0.318);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FCF0CF").s().p("AhiCPQg8gqgLhKQgMhGAqg8QArg7BIgMQA1gJAyAYQAyAZAaAwIASB/QgMA0gmAkQgnAlg1AJQgQACgOAAQg1AAgugig");
	this.shape_13.setTransform(-58.5,-29.3,0.318,0.318);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AE5217").s().p("AifgPIADgPIETgMIAoBVg");
	this.shape_14.setTransform(-13.5,19.4,0.318,0.318);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F08421").s().p("ADOAiQgnAIgdAVQgwg1haAIQguAFgkAPQgmhOhagLQg7gIhGAVQAvguBCAAQAwAAAoAaQAnAbATAoQAugaAyAAQBGAAA0ArQAkghAxAAQArAAAhAZQAgAaAJApQg3hEhPARg");
	this.shape_15.setTransform(3.1,-63.6,0.318,0.318);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F08421").s().p("ABhE/QAZhchShGQAUgNAYgXQAwgsAVgtQBCiOjohbIgGggQgJgogUgkQg+hviJgVQAVgDATgBQBXAAA+A+QA7A9AABYIAAADQASgDASgBQBYAAA9A+QA+A+AABXQAABBgmA2QgmA2g9AWQAnAwAAA8QAAA8gmAvQgkAug5ANQA9g/ARg/g");
	this.shape_16.setTransform(24.5,-46.3,0.318,0.318);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF8C42").s().p("Ah0GHQgqgwAAhBQAAg8AmgwQg9gXglg1Qgng2AAhBQAAhYA+g9QA9g+BYAAQASAAATADIgBgCQAAhYA8g+QA9g9BXAAQAfAAAcAJQi4ArgvBsQgXA2AOAtQioBGAmCQQALAuAgAvIAdAmQg9BMAVBWQAPBAA4A/Qg/gIgrgwg");
	this.shape_17.setTransform(-55.8,-46.3,0.318,0.318);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#36B0BC").s().p("AiaCdIANj1IjPgUIAAkjQFvBqDKFkQA/BwAnB7IAaBmg");
	this.shape_18.setTransform(-43.3,15,0.318,0.318);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FCF0CF").s().p("AhZMhIAA5DIAtgXIBXI1IAAE6IAvMEg");
	this.shape_19.setTransform(-51.5,-23.1,0.318,0.318);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#36B0BC").s().p("AjcA/QDKlkFvhqIAAEjIjPAUIAND1In3DzQAbieBlizg");
	this.shape_20.setTransform(13.4,15,0.318,0.318);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#138893").s().p("AjzA6IA2jhIifg/IBwgvIE+DSIELFZg");
	this.shape_21.setTransform(-43.3,18.9,0.318,0.318);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EC7020").s().p("Al8A4IERoJID4AAIDwH/Il7Gkg");
	this.shape_22.setTransform(-14.5,32.4,0.318,0.318);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#138893").s().p("ABSkGIELASIiaBCIARDvIowDKg");
	this.shape_23.setTransform(13.4,19.3,0.318,0.318);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EC7020").s().p("AiCDEIiBjUICLizIEJABIBzDAIh6DGg");
	this.shape_24.setTransform(-14.4,12.2,0.318,0.318);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#36B0BC").s().p("ABDJCQlDgkhwgYIAAxlQAuALBFAhQCLBCByBtQFxFbAAKJg");
	this.shape_25.setTransform(-42.6,21.6,0.318,0.318);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D0D0D0").s().p("AjoDzIAPoLIC+i5IAbAjIgvDIIEYHoIj6DQg");
	this.shape_26.setTransform(-7.9,25.8,0.318,0.318);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D0D0D0").s().p("AjoECIEYnoIgvjIIAbgjIC+C5IAPILIjXDfg");
	this.shape_27.setTransform(-21.9,25.8,0.318,0.318);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D0D0D0").s().p("ABjGzIkItsQBSBCBSCQQCjEdAEGFg");
	this.shape_28.setTransform(-34.6,26.3,0.318,0.318);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#36B0BC").s().p("AAAmEQBzhuCLhBQArgUApgPIAfgJIAARlIkQAqQkvArijAFQAAqIFxlcg");
	this.shape_29.setTransform(12.8,21.6,0.318,0.318);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("An7hOIg/hvQFDA9G4AgIF6AVIk9EJg");
	this.shape_30.setTransform(-36.1,8.3,0.318,0.318);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D0D0D0").s().p("Ai9HFQAGl0C6kuQA7hgBGhNIA6g5Ik0OIg");
	this.shape_31.setTransform(4.8,25.9,0.318,0.318);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D0D0D0").s().p("AmphzINUg5IkSFZg");
	this.shape_32.setTransform(-32.2,12,0.318,0.318);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AochKQChgBDYgOQGtgeEThGIg/BvIsDEMg");
	this.shape_33.setTransform(7.3,8.3,0.318,0.318);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D0D0D0").s().p("AmOisIMdA5IpMEgg");
	this.shape_34.setTransform(3.3,12,0.318,0.318);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AzWIKIAAxjQOYCfNmg/QEQgUDrgoIC0gkIAARjIjNAZQkIAckeAOQkHANj7AAQp4AApAhQg");
	this.shape_35.setTransform(-14.9,21.5,0.318,0.318);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#138893").s().p("AiehOIEVgoIAoCyIihA7g");
	this.shape_36.setTransform(4.5,42.4,0.318,0.318);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#36B0BC").s().p("AhDGjIDPmVIlSmuIEpgNIBkG3IiSGkg");
	this.shape_37.setTransform(5.1,52.3,0.318,0.318);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FCE39F").s().p("AzWWUMAAAgqZQMik3OVB8QEfAnEJBOQBSAYBHAaIA1AUMAAAAqZIjNAaQkIAckeAOQkHAMj7AAQp4AApAhQg");
	this.shape_38.setTransform(-14.9,-7.9,0.318,0.318);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#138893").s().p("AieA8IAoiyIEVAoIicDFg");
	this.shape_39.setTransform(-29.9,42.4,0.318,0.318);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#36B0BC").s().p("AjGAKIBlm3IEoANIlSGvIDPGUIh3ALg");
	this.shape_40.setTransform(-30.5,52.3,0.318,0.318);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EC7020").s().p("ARiHoQgygyAAhHQABgvAYgpQAXgnAogWQgggegSgoQgTgpAAgtIAAgDQgUADgQAAQg1AAgvgZQgugZgdgpQgTAngnAaQgnAagwAAQhCAAgwgvQgvgtAAhDIAAgEQgmgHghgXQghgXgUgiQgMAoggAZQgjAagqAAQgpAAghgYQghgXgNgmQgeAngtAXQguAXg0AAQgTAAgRgDQgRADgSAAQg0AAgugXQgtgXgfgnQgNAmggAXQghAYgpAAQgrAAgigaQghgZgLgoQgVAiggAXQghAXgnAHIAAAEQAABCgvAuQguAvhDAAQgwAAgogaQgmgagUgnQgdApguAZQguAZg2AAQgQAAgUgDIAAADQAAAugSAoQgSAoghAeQApAWAXAnQAYApAAAvQAABHgyAyQgyAyhHAAQhHAAgygyQgxgygBhHQABg9AmgvQg+gXglg1Qgmg2AAhDQAAhWA+g9QA9g+BXAAQAUAAARADIgBgDQABhXA9g+QA+g9BXAAQBCAAA3AmQgCgIAAgNQAAgxAjgkQAjgjAyAAQAyAAAjAjQA1gtBFAAQA1AAAtAdQATgrAngaQAogbAwAAQAxAAApAbQAnAbASArQAegsAwgaQAxgbA4AAQASAAARADQARgDATAAQA4AAAxAbQAwAaAdAsQATgrAngbQAogbAyAAQAvAAAoAbQAoAaASArQAugdA1AAQBFAAA0AtQAkgjAxAAQAyAAAjAjQAkAkAAAxQAAAIgCANQA2gmBCAAQBYAAA+A9QA9A+AABXIAAADQAQgDAUAAQBXAAA+A+QA+A9AABWQAABDgnA2QglA1g9AXQAnAvAAA9QgBBHgxAyQgyAyhIAAQhHAAgygygANEjdQALAIAHAIIAHgXQgKAEgPADgAtVjNQAJgKAIgGQgPgDgKgEQAEAJAEAOg");
	this.shape_41.setTransform(-15.8,-49.2,0.318,0.318);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AADgJIgDATQgGgLAJgIg");
	this.shape_42.setTransform(-59.1,48.3,0.318,0.318);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJAAQgNgKAkABIgFATg");
	this.shape_43.setTransform(-59.4,48.3,0.318,0.318);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAVAAIgpADQAUgJAVAGg");
	this.shape_44.setTransform(-67.3,57.6,0.318,0.318);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJgIQANgQARAiIgpAEQAEgOAHgIg");
	this.shape_45.setTransform(-67.3,57.3,0.318,0.318);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAVgDIgpAHQAUgLAVAEg");
	this.shape_46.setTransform(-63.3,57.7,0.318,0.318);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgLgIQALgSAVAgIgpAJQADgPAGgIg");
	this.shape_47.setTransform(-63.3,57.3,0.318,0.318);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AARgFIgiALQAQgLASAAg");
	this.shape_48.setTransform(-59.9,55.4,0.318,0.318);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgMgGQAJgRAUAYIgiANQAAgOAFgGg");
	this.shape_49.setTransform(-59.9,55.1,0.318,0.318);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#36B0BC").s().p("AjuKgQgXgTgEgdQhToLDnmkQBJiGBhhwQBYhZAGgIQAWgZAggDQAhgCAZAVQAZAVADAhQADAhgVAZIhPBNQhaBihEB5QjYGBBLHdQAGAhgUAaQgTAbghAFIgMABQgdAAgWgTg");
	this.shape_50.setTransform(-59.3,28.5,0.318,0.318);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FCE39F").s().p("AAuAkIg7gGQgbgDgbgJQgigMACgIIAAgKQACgMAZgHQAYgGAWADIBQAFQATADAPAPQANAMgBANQgCALgPAHQgMAEgOAAIgLAAg");
	this.shape_51.setTransform(-61.5,48.6,0.318,0.318);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FCE39F").s().p("AgMBrQgMgCgGgPQgHgPACgVIARiHQABgTAIgEQAFgDANABQAPACAFAEQAJAGgCATIgQCHQgCAUgKAOQgIANgKAAIgCAAg");
	this.shape_52.setTransform(-66.9,54.9,0.318,0.318);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FCE39F").s().p("AgFBsQgMgQgDgXIgViAQgDgXAHgSQAGgSAOgCQANgCAKAPQAMAPAEAXIAUCAQAEAYgHASQgHASgOACIgDAAQgLAAgJgNg");
	this.shape_53.setTransform(-63.7,54.4,0.318,0.318);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FCE39F").s().p("AhyAFQAPgnAjgZQBDg0BhBKQAJARAEATQAIAmgaANQg6Aeg9ACIgFAAQhUAAgBhNg");
	this.shape_54.setTransform(-64.8,50.1,0.318,0.318);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FCE39F").s().p("AAVBdQgOgKgHgTIgxhnQgIgTABgQQABgRALgFQALgFAOAKQANAKAHASIAxBnQAIATgBARQgBAQgLAFQgEACgEAAQgIAAgIgGg");
	this.shape_55.setTransform(-61,52.8,0.318,0.318);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FCE39F").s().p("AAjC3QgUgBgRgUQgSgTgHgbIgmjsQgHgbAJgSQAJgSAUABQAUABAQATQATAUAHAaIAmDtQAHAagKASQgIASgSAAIgCAAg");
	this.shape_56.setTransform(59.8,-9.7,0.318,0.318);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#36B0BC").s().p("AgxgSQAjgiBSBIIiHAKQAAgeASgSg");
	this.shape_57.setTransform(-33.8,65.4,0.318,0.318);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#36B0BC").s().p("AhDAUQBShIAjAiQALALAFASIACATg");
	this.shape_58.setTransform(8.5,65.4,0.318,0.318);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#B5B5B5").ss(1,0,0,4).p("AgHjkIAADHQgBARABAUQADAsAIAbQAJAagKBAIgKA8");
	this.shape_59.setTransform(62.1,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.4,-66.3,137.1,132.6);


(lib.balloon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.setTransform(19.5,-23.1,0.319,0.319,0,0,0,27.9,31.2);
	this.instance.alpha = 0.449;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAOIgdgDIAUgUIgGgdIAbANIAYgPIgEAeIAXASIgeAFIgNAcg");
	this.shape.setTransform(1.7,-30,0.319,0.319);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC7020").s().p("AgUAXIgwgFIAighIgKgvIArAVIApgYIgHAwIAkAfIgwAIIgUAsg");
	this.shape_1.setTransform(-28,-12.4,0.319,0.319);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1C40B").s().p("AgiAnIhPgJIA3g3IgQhOIBIAiIBDgnIgLBPIA8AzIhPAPIghBIg");
	this.shape_2.setTransform(-12.1,-30,0.319,0.319);

	this.instance_1 = new lib.Path_4();
	this.instance_1.setTransform(28.5,-7.4,0.319,0.319,0,0,0,10.5,7.7);
	this.instance_1.alpha = 0.449;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC7020").s().p("AAAArIgpAWIAIgvIgjggIAwgHIAUgsIAVAsIAwAHIgjAgIAIAvg");
	this.shape_3.setTransform(7.9,19.9,0.319,0.319);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAaIgZAOIAFgdIgVgTIAdgEIAMgbIANAbIAdAEIgVATIAFAdg");
	this.shape_4.setTransform(-28,6.3,0.319,0.319);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1C40B").s().p("AAAAuIgsAYIAJgzIglgiIAzgIIAVguIAWAuIAzAIIglAiIAJAzg");
	this.shape_5.setTransform(0,22,0.319,0.319);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC7020").s().p("AAAArIgqAWIAIgvIgiggIAwgHIAUgrIAVArIAwAHIgjAgIAJAvg");
	this.shape_6.setTransform(28.5,0.4,0.319,0.319);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1C40B").s().p("AAABHIhFAlIANhPIg4g1IBPgMIAhhHIAjBHIBPAMIg6A1IAOBPg");
	this.shape_7.setTransform(-31.7,-4.8,0.319,0.319);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1C40B").s().p("AAAAaIgZAOIAFgdIgWgTIAegFIAMgaIANAaIAdAFIgVATIAFAdg");
	this.shape_8.setTransform(-8.4,19.9,0.319,0.319);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#499642").s().p("AppHnQjQhRiiiXQBXAlCLAjQEYBEEHgRQFvgZEbjAQFjjvDJnrQACDmhZDTQhXDJigCeQigCejRBYQjYBbjsACIgLAAQjkAAjThTg");
	this.shape_9.setTransform(5.7,14.8,0.319,0.319);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmB5QgYgEgUgPIAggqQATAOAigFQAigFgDgWQgBgIgFgFQgHgEgKAAIgbAAQghAAgSgOQgTgNgEgeQgFghAUgYQAVgZAogGQAxgHAhAYIggAqQgLgIgPgBQgGAAgNACQgOACgHAIQgFAHABAJQABAFAFAFQAHAFALAAIAbAAQAfgBASANQAVAPAEAhQAFAjgYAYQgWAXgnAGQgOACgOAAQgLAAgKgCg");
	this.shape_10.setTransform(18.3,7.1,0.319,0.319);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhghpICfgYIAIA0IhlAPIAFAoIBWgNIAIAyIhWANIAGApIBlgOIAHA0IifAXg");
	this.shape_11.setTransform(12.1,7.9,0.319,0.319);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgthxIA4gIIAjDrIg5AIg");
	this.shape_12.setTransform(7,8.7,0.319,0.319);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhthtIBdgOQAlgGAaAVQAXASAFAgQADAWgKATQgIAQgPAIIBBBcIhDAJIg1hSIgUADIAOBYIg7AJgAgLhGIghAEIAIAwIAggEQAKgCAGgIQAFgIAAgKQgCgKgIgGQgGgFgGAAIgGABg");
	this.shape_13.setTransform(2.2,9.6,0.319,0.319);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BnQgSgOgJgaQgFgOgFgkQgFgjABgPQAAgbAPgTQAVgeApgGQAlgGAfAXQATAOAIAaQAGAPAFAkQAFAhAAAQQgBAbgPATQgXAfgnAFIgPABQgdAAgZgSgAgIhDQgRACgFAMQgFAGAAAKQAAANAFAcQAEAeAEANQADAJAGAFQAIAJAPgCQAOgCAHgMQAEgHAAgJQAAgNgEgcQgEgegEgMQgDgKgGgFQgHgIgJAAIgGABg");
	this.shape_14.setTransform(-5,10.4,0.319,0.319);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYg5Ig6AJIgIg0ICtgaIAHA0Ig6AJIAbC3Ig6AJg");
	this.shape_15.setTransform(-11.7,11.2,0.319,0.319);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhSBmIAggrQATAPAigGQAigFgDgVQgBgJgGgEQgFgEgLAAIgbAAQghAAgSgOQgTgMgEgfQgFghAUgZQAUgYAogGQAzgHAfAYIgfAqQgLgJgPAAQgHgBgMACQgOACgHAJQgGAHACAIQABAHAFAEQAGAEALAAIAbAAQAiAAAQANQAUAPAFAgQAFAjgYAZQgXAXgnAFQgMADgOAAQgoAAgagVg");
	this.shape_16.setTransform(-17.5,12.3,0.319,0.319);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjBxQgXgEgSgOIAdgoQASAOAggFQAggFgDgUQgBgIgFgEQgFgEgLAAIgZAAQgeAAgRgNQgSgLgEgdQgEgfASgXQAUgXAlgFQAugHAeAXIgdAnQgKgIgOgBIgSACQgNACgGAIQgGAGABAIQABAHAFADQAGAEAKAAIAaAAQAeAAAQAMQASANAFAfQAFAhgXAXQgVAVgkAFQgOACgNAAIgSgBg");
	this.shape_17.setTransform(17.1,-3.7,0.319,0.319);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgjBxQgXgDgSgOIAegoQASANAfgFQAggFgDgTQgBgIgFgFQgFgEgLAAIgZAAQgeABgRgOQgSgMgEgcQgEgfASgWQAUgXAlgGQAugHAeAXIgdAnQgPgLgbAEQgNACgGAIQgGAGABAJQABAGAFADQAGAFAKAAIAagBQAeAAAQAMQASAOAFAfQAFAggWAXQgVAVglAGQgNACgMAAQgLAAgJgCg");
	this.shape_18.setTransform(11.2,-2.9,0.319,0.319);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhahjICVgVIAHAwIhfAPIAGAlIBQgMIAHAuIhQAMIAFAmIBfgOIAHAxIiUAWg");
	this.shape_19.setTransform(5.4,-2,0.319,0.319);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgwBgQgSgNgIgYQgEgOgFghQgFggABgOQAAgaAOgRQAVgdAlgFQAegFAZAPQAaAPALAjIg3AIQgKgXgUADQgOACgGALQgEAGAAAJQgBANAEAaQAEAcAFALQACAJAGAFQAJAIAMgCQAVgDADgYIA4gIQgBAkgVAWQgTAVghAFIgPABQgZAAgXgRg");
	this.shape_20.setTransform(-0.6,-1.2,0.319,0.319);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgwBgQgSgNgIgYQgEgNgFgiQgFggAAgOQABgaANgRQAWgcAkgGQAfgFAZAPQAaAPALAjIg4AIQgJgXgUADQgPACgFALQgEAGAAAJQgBANAEAaQAEAbAEAMQADAJAFAFQAJAIAMgCQAWgDADgYIA4gIQgBAkgVAWQgTAVghAFIgOABQgbAAgWgRg");
	this.shape_21.setTransform(-6.6,-0.3,0.319,0.319);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnBoQgcgTgFgkIgViNIA2gIIAVCMQACAPAJAIQAHAHAOgCQANgCAHgJQAHgKgCgPIgViNIA3gIIAVCOQAFAjgWAbQgVAZgjAFIgPABQgZAAgUgOg");
	this.shape_22.setTransform(-13.2,0.5,0.319,0.319);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgjBxQgXgEgSgOIAdgoQASAOAggFQAggFgDgUQgBgIgFgEQgGgEgKAAIgZAAQgeAAgRgNQgSgLgEgdQgEgfASgWQAUgXAlgGQAugHAeAXIgdAnQgLgIgNAAQgGgBgMACQgNACgGAIQgGAGABAIQABAHAFADQAHAFAJgBIAaAAQAeAAAQAMQATAOAEAeQAFAhgXAXQgVAVgkAFQgOACgNAAIgSgBg");
	this.shape_23.setTransform(-19.3,1.6,0.319,0.319);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AjejfIC9gbQBKgLA0ApQAwAlAJA/QAHAtgUAmQgQAggeATICEC4IiIAUIhtimIgnAGIAaCyIh2ARgAgXiQIhCAKIAOBgIBCgJQAVgEANgRQALgQgDgTQgDgUgPgMQgOgKgPAAIgJABg");
	this.shape_24.setTransform(11.1,-16.7,0.319,0.319);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhXDgQg8gpgLhMIgtk0IB1gRIAtExQAFAhATAQQASAQAdgEQAegFAOgVQAPgVgFghIgskxIB1gRIAtE0QALBNguA4QgtA2hNALQgRADgPAAQg3AAgtgfg");
	this.shape_25.setTransform(-3.9,-15.3,0.319,0.319);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgpDwQghgJgfgXQgmgcgRg0QgJgcgMhKQgKhHABgeQACg3AdgmQAXgfAdgSQAfgSAqgGQApgGAjAJQAgAIAgAXQAmAcARA0QAKAeAKBIQALBIgBAeQgCA2gcAmQgXAfgeASQgfASgqAGQgSADgQAAQgVAAgVgFgAgSiJQggAFgNAXQgHAOgBATQgBAbAJA6QAIA8AJAZQAGASAMALQAIAIAMAEQAMAFAPgCQAfgEANgZQAIgNAAgTQACgbgKg6QgIg8gIgZQgGgTgLgLQgQgPgVAAIgLABg");
	this.shape_26.setTransform(-17.4,-13,0.319,0.319);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#31662D").s().p("AgrgjICSgyIgdBJIAZAxIjIAxg");
	this.shape_27.setTransform(-1.5,32.8,0.319,0.319);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#55B04E").s().p("Am7QVQjThUijibQijibhajKQhejRgCjmQgCjkBZjSQBXjMCgieQChieDQhXQDZhbDtgCQDsgDDaBXQDSBUCjCbQCjCaBbDKQBdDRACDmQACDkhZDTQhXDMigCeQigCejRBXQjYBbjuACIgKAAQjmAAjVhUg");
	this.shape_28.setTransform(0,-3,0.319,0.319);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#55B04E").s().p("Ag1hzIAwgJIA2ARIB2DkIirhUIiiBXg");
	this.shape_29.setTransform(-1.1,35.1,0.319,0.319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.2,-39,74.4,78.1);


(lib.balloom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eyesblink();
	this.instance.setTransform(-25.7,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({x:-17.2,y:-8.7},10,cjs.Ease.get(1)).wait(23).to({x:-16.8},0).to({x:-6.7,y:-9.7},51,cjs.Ease.get(1)).to({x:-9.6},13,cjs.Ease.get(-1)).to({x:-25.7,y:-1.2},8).wait(152));

	// Layer 1
	this.instance_1 = new lib.balloonbody("synched",0);
	this.instance_1.setTransform(-11.4,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(281));

	// Layer 1
	this.instance_2 = new lib.balloon("synched",0);
	this.instance_2.setTransform(50.6,-55.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:40.6,y:-52.1},34,cjs.Ease.get(1)).to({x:50.6,y:-55.1},35,cjs.Ease.get(-1)).to({x:60.6,y:-53.1},35,cjs.Ease.get(1)).to({x:50.6,y:-55.1},36,cjs.Ease.get(-1)).wait(1).to({startPosition:0},0).to({x:40.6,y:-53.1},34,cjs.Ease.get(1)).to({x:50.6,y:-55.1},35,cjs.Ease.get(-1)).to({x:60.6,y:-53.1},35,cjs.Ease.get(1)).to({x:50.6,y:-55.1},35,cjs.Ease.get(-1)).wait(1));

	// Layer 1
	this.instance_3 = new lib.ballonrope("synched",0);
	this.instance_3.setTransform(49.6,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-18.7,x:44.3},34,cjs.Ease.get(1)).to({rotation:0,x:49.6},35,cjs.Ease.get(-1)).to({rotation:13,x:55.6,y:-6.2},35,cjs.Ease.get(1)).to({rotation:0,x:49.6,y:-5},36,cjs.Ease.get(-1)).wait(1).to({startPosition:0},0).to({rotation:-19.3,x:44.3},34,cjs.Ease.get(1)).to({rotation:0,x:49.6},35,cjs.Ease.get(-1)).to({rotation:14.1,x:55.8},35,cjs.Ease.get(1)).to({rotation:0,x:49.6},35,cjs.Ease.get(-1)).wait(1));

	// Layer 1
	this.instance_4 = new lib.shadow("synched",0);
	this.instance_4.setTransform(-23.7,90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(281));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.9,-94.2,167.7,188.4);


// stage content:
(lib.wranxanims = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.balloom();
	this.instance.setTransform(120.1,95,1,1,0,0,0,4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(156.2,95.8,167.7,188.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;