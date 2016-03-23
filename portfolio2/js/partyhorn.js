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



(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC7020").s().p("AgJAUIgdAGIAOgaIgOgYIAcAFIASgVIAFAdIAaALIgaAMIgEAdg");
	this.shape.setTransform(-5.3,-5.7,0.215,0.215);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1C40B").s().p("AgFANIgTADIAIgQIgIgPIATADIAKgNIADASIARAHIgRAIIgCASg");
	this.shape_1.setTransform(-1.6,-5.3,0.215,0.215);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#36B0BC").s().p("AgFANIgTAEIAJgRIgJgPIASADIALgNIADASIARAHIgRAIIgCASg");
	this.shape_2.setTransform(-8.5,1.1,0.215,0.215);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC7020").s().p("AgGANIgSAEIAJgRIgJgPIASADIALgNIADASIARAHIgRAIIgCATg");
	this.shape_3.setTransform(-3.1,-1.4,0.215,0.215);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1C40B").s().p("AgNAdIgoAIIASglIgTgiIAoAHIAageIAGApIAlAQIgkASIgFAog");
	this.shape_4.setTransform(-6.9,-3.2,0.215,0.215);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#31662D").s().p("AgpFCQhAgIg2grQg1grgfhDQAjgjAUgyQAVgzAAg4QAAhig1hHQAdgtApgeQA+guBIAAQBrAABMBeQBNBfAACEQAABZglBLQgjBKg7AqQhEAqhMAAg");
	this.shape_5.setTransform(5,0.5,0.215,0.215);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#31662D").s().p("AhMAUIAKAAQBMAABEgoQg9AphEAAIgZgBg");
	this.shape_6.setTransform(5.7,7,0.215,0.215);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7CD474").s().p("AjWDlQhUhgAAiFQABiHBXhhQBYhhB6AAQB7AABYBhQBYBhgBCHQAABbgqBOQgpBNhGAqQA8gqAjhKQAkhMAAhYQABiEhOhfQhMhfhsAAQhHABg+AtQg7AtgjBMIgRAwIgBAAIgGAaIAAABIgFAcIgDAYIABBJQACAOAFAYIABADIAEARIAAADQAIAaANAdQAfBDA1AqQA1ArBAAJQh4gFhVhgg");
	this.shape_7.setTransform(4.3,0.4,0.215,0.215);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC7020").s().p("AgJAVIgcAFIANgaIgOgYIAdAFIASgVIAEAdIAaALIgaANIgDAcg");
	this.shape_8.setTransform(-4.8,1.8,0.215,0.215);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#499642").s().p("AjwDqIAWpAIHLAkIjYCFIgnDSIAgC9ICYB1g");
	this.shape_9.setTransform(-0.9,-0.1,0.215,0.215);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#499642").s().p("AiaDMQhFhVAAh3QAAh3BFhUQBEhVBfAAQBfAAA9BVQA7BSAAB5QAAAQgCAQQgKBwg4BHQg7BKhYAAQhfAAhEhVg");
	this.shape_10.setTransform(-5.9,-1.3,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-7.5,21.4,15);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC7020").s().p("AgJAUIgdAGIAOgaIgOgYIAcAFIASgVIAFAdIAaALIgaAMIgEAdg");
	this.shape.setTransform(-5.3,-5.7,0.215,0.215);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1C40B").s().p("AgFANIgTADIAIgQIgIgPIATADIAKgNIADASIARAHIgRAIIgCASg");
	this.shape_1.setTransform(-1.6,-5.3,0.215,0.215);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#36B0BC").s().p("AgFANIgTAEIAJgRIgJgPIASADIALgNIADASIARAHIgRAIIgCASg");
	this.shape_2.setTransform(-8.5,1.1,0.215,0.215);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC7020").s().p("AgGANIgSAEIAJgRIgJgPIASADIALgNIADASIARAHIgRAIIgCATg");
	this.shape_3.setTransform(-3.1,-1.4,0.215,0.215);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1C40B").s().p("AgNAdIgoAIIASglIgTgiIAoAHIAageIAGApIAlAQIgkASIgFAog");
	this.shape_4.setTransform(-6.9,-3.2,0.215,0.215);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#31662D").s().p("AgpFCQhAgIg2grQg1grgfhDQAjgjAUgyQAVgzAAg4QAAhig1hHQAdgtApgeQA+guBIAAQBrAABMBeQBNBfAACEQAABZglBLQgjBKg7AqQhEAqhMAAg");
	this.shape_5.setTransform(5,0.5,0.215,0.215);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#31662D").s().p("AhMAUIAKAAQBMAABEgoQg9AphEAAIgZgBg");
	this.shape_6.setTransform(5.7,7,0.215,0.215);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7CD474").s().p("AjWDlQhUhgAAiFQABiHBXhhQBYhhB6AAQB7AABYBhQBYBhgBCHQAABbgqBOQgpBNhGAqQA8gqAjhKQAkhMAAhYQABiEhOhfQhMhfhsAAQhHABg+AtQg7AtgjBMIgRAwIgBAAIgGAaIAAABIgFAcIgDAYIABBJQACAOAFAYIABADIAEARIAAADQAIAaANAdQAfBDA1AqQA1ArBAAJQh4gFhVhgg");
	this.shape_7.setTransform(4.3,0.4,0.215,0.215);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC7020").s().p("AgJAVIgcAFIANgaIgOgYIAdAFIASgVIAEAdIAaALIgaANIgDAcg");
	this.shape_8.setTransform(-4.8,1.8,0.215,0.215);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#499642").s().p("AjwDqIAWpAIHLAkIjYCFIgnDSIAgC9ICYB1g");
	this.shape_9.setTransform(-0.9,-0.1,0.215,0.215);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#499642").s().p("AiaDMQhFhVAAh3QAAh3BFhUQBEhVBfAAQBfAAA9BVQA7BSAAB5QAAAQgCAQQgKBwg4BHQg7BKhYAAQhfAAhEhVg");
	this.shape_10.setTransform(-5.9,-1.3,0.215,0.215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-7.5,21.4,15);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#191919").s().p("AgtohIC0geIAARlIkNAag");
	this.shape.setTransform(13.5,57.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,115.3);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AEE4E8").s().p("AveBYQmagkAAg0QAAgyGaglQGaglJEAAQJFAAGZAlQGbAlAAAyQAAA0mbAkQmaAlpEAAQpDAAmbglg");
	this.shape.setTransform(0,0,0.296,0.296);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.4,-3.7,82.9,7.5);


(lib.partyhorn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC7020").s().p("AgIASIgYAEIALgWIgMgUIAZAEIAPgTIAEAZIAXAKIgWALIgEAZg");
	this.shape.setTransform(-29.9,-9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#36B0BC").s().p("AgHASIgZAFIALgXIgMgUIAZAEIAPgTIAFAZIAWAKIgWALIgDAZg");
	this.shape_1.setTransform(-88.2,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC7020").s().p("AgIASIgYAFIALgXIgMgUIAZAEIAPgTIAFAZIAWAKIgWALIgEAZg");
	this.shape_2.setTransform(-69.5,-6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1C40B").s().p("AgMAcIgnAHIASgjIgTggIAmAGIAZgdIAGAnIAkAQIgjAQIgFAng");
	this.shape_3.setTransform(-109.7,-4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#31662D").s().p("Ar/BSIX/inQADAXgTAZIgUAWI3PBkg");
	this.shape_4.setTransform(-77.6,8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#499642").s().p("AuBgmQgOg9AjgtIbHgUQA9BlgZBIQgMAlgYAQI3SBnQjvhTgbh4g");
	this.shape_5.setTransform(-90.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.5,-16.5,180.6,33.1);


(lib.horntoptail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#499642").s().p("AgwDEQj7iBBvlGQgCA1AUA0QAnBpBuAAQBrAABPCZQAoBOASBOIgFAAQiRAAh5hAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.3,-26,44.7,52.1);


(lib.hornfronthand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCE39F").s().p("AgWBuQgTgOgEgXIgTiAQgEgXAOgTQAOgTAXgDQAWgEASAOQATAOAEAXIATCAQAEAXgOATQgOATgYADIgJABQgPAAgPgLg");
	this.shape.setTransform(14.4,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCE39F").s().p("AgXBuQgSgOgDgYIgUh/QgDgXAOgTQANgTAYgDQAUgEAUAOQASAOAEAXIATCAQADAXgOATQgNATgYADIgJABQgPAAgQgLg");
	this.shape_1.setTransform(0.2,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCE39F").s().p("AgOBvQgUgMgFgXIgdh+QgFgXAMgUQANgTAXgGQAXgFARANQAUAMAFAXIAdB+QAFAXgMAUQgNAUgXAFIgNABQgNAAgOgJg");
	this.shape_2.setTransform(-13.9,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCE39F").s().p("AgaBcQgSgFgJgQQgJgRAFgRIAehiQAGgSAQgJQAOgJASAFQASAGAJAQQAJAQgGASIgdBiQgGASgQAJQgIAFgLAAQgGAAgHgCg");
	this.shape_3.setTransform(12.9,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-12.6,42.1,44.9);


(lib.hornbottomtail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#499642").s().p("AiwBYQhPjhDEiSQATgOB4ChQA+BRA5BRQhBAChBAhQiABEAACdQhOhUgnhyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-28.6,40,57.2);


(lib.hornbackhand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCE39F").s().p("Ah4B+QhHgugjhOQgJibCwgHQA+gCBNARQA9AOApASQA3AYgLBPQgGAlgQAjQhyBjhiAAQg6AAg2gjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-16.1,45.7,32.3);


(lib.hornarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B0BC").s().p("AilF1QhlhAgDi6QgCi4BglSICRApQhZE4ABCkQAAA3AKAjQAJAdANAIQAaAQBJgiQBPglBOhFIBkBwQg9A2hEApQh2BIhZAAQg4AAgrgbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-40,54.1,80.1);


(lib.cheek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCF0CF").s().p("AgGhaQgShegjg/QCnCQhEC9QghBfhCBDQBViZggi5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-24.8,12.1,49.7);


(lib.blowmouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE9D15").s().p("Ag3A9QgXgZAAgkQAAgiAXgaQAYgaAfAAQAgAAAYAaQAXAaAAAiQAAAkgXAZQgYAaggAAQgfAAgYgag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-8.7,15.9,17.5);


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


(lib.eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE9D15").s().p("AgaApQgLgRAAgYQAAgXALgRQALgRAPgBQAPABAMARQALARAAAXQAAAYgLARQgMASgPgBQgPABgLgSg");
	this.shape.setTransform(2.6,-7.4,0.331,0.331);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CE9D15").s().p("AgaApQgLgRAAgYQAAgXALgRQAMgRAOAAQAQAAALARQALARAAAXQAAAYgLARQgLARgQABQgOAAgMgSg");
	this.shape_1.setTransform(-4.5,-7.4,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-9.4,9.7,3.9);


(lib.blinklids = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCE39F").s().p("AoRD3IAAntIQjAAIAAHtg");
	this.shape.setTransform(-4.6,-0.6,0.187,0.187,0,0,0,-24.9,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-4.6,19.8,9.3);


(lib.idlepartyhat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B0BC").s().p("AgxgSQAjgiBSBJIiHAJQAAgeASgSg");
	this.shape.setTransform(-25,86.6,0.315,0.315);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#36B0BC").s().p("AhDAVQBShJAjAiQASASAAAeg");
	this.shape_1.setTransform(16.9,86.6,0.315,0.315);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC7020").s().p("AAAAbIgZANIAFgdIgWgTIAegEIAMgbIANAbIAeAEIgWATIAFAdg");
	this.shape_2.setTransform(-2,-52.3,0.315,0.315);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC7020").s().p("AAAAbIgZANIAFgdIgVgTIAdgEIAMgbIAMAbIAeAEIgVATIAFAdg");
	this.shape_3.setTransform(16.3,-46.3,0.315,0.315);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1C40B").s().p("AAAArIgqAWIAJgvIgjggIAwgHIAUgsIAVAsIAwAHIgjAgIAJAvg");
	this.shape_4.setTransform(0.1,-46.5,0.315,0.315);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1C40B").s().p("AAABHIhFAlIAOhOIg5g2IBOgMIAihHIAjBHIBPAMIg5A2IANBOg");
	this.shape_5.setTransform(5.8,-55.7,0.315,0.315);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5F5F5").s().p("AAAArIgpAXIAIgwIgjggIAwgHIAUgsIAVAsIAwAHIgjAgIAIAwg");
	this.shape_6.setTransform(1.5,-62,0.315,0.315);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC7020").s().p("AAAArIgpAWIAHgvIgiggIAwgHIAUgsIAVAsIAwAHIgjAgIAIAvg");
	this.shape_7.setTransform(13.9,-59.1,0.315,0.315);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC7020").s().p("AAABHIhFAlIANhPIg5g1IBPgMIAihHIAjBHIBOAMIg5A1IAOBPg");
	this.shape_8.setTransform(7.3,-71.2,0.315,0.315);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC7020").s().p("AgXBSQgtgNgYgiQgYghAKghQAKghAngPQAmgPArANQAtAOAYAhQAYAigKAfQgKAjgmAPQgVAHgWAAQgSAAgVgGg");
	this.shape_9.setTransform(23.7,-36.1,0.315,0.315);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC7020").s().p("AgQA6QgUgGgKgVQgJgWAHgWQAHgZAUgNQAUgNASAHQAVAGAJAWQAJAVgHAWQgHAYgTAOQgOAIgLAAQgHAAgHgCg");
	this.shape_10.setTransform(20.1,-37.5,0.315,0.315);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC7020").s().p("AgXBSQgsgNgZgiQgYgiAKggQAKgiAngPQAngOAqANQAtANAYAiQAYAhgKAgQgKAigmAPQgVAIgWAAQgSAAgVgGg");
	this.shape_11.setTransform(16,-37.5,0.315,0.315);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC7020").s().p("AgQA6QgVgGgJgVQgJgWAHgWQAHgZAUgMQATgNATAGQAVAGAJAVQAJAWgHAWQgHAZgTAMQgOAJgMAAQgHAAgGgCg");
	this.shape_12.setTransform(13.4,-41.1,0.315,0.315);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC7020").s().p("AgeBnQgzgPgbgpQgagpAMgpQANgrAtgUQAtgUAxAPQAzAPAbApQAbAqgNApQgNArgtAUQgZALgbAAQgTAAgXgHg");
	this.shape_13.setTransform(9.4,-39.7,0.315,0.315);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EC7020").s().p("AgWBOQgggKgQgdQgQgeAJgfQAKggAdgQQAegQAfAJQAgAKAQAeQAQAdgJAfQgKAggeAQQgSAKgUAAQgJAAgNgDg");
	this.shape_14.setTransform(4.1,-40,0.315,0.315);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC7020").s().p("AhOA9QghgaAAgjQAAgiAhgaQAhgZAtABQAugBAhAZQAhAaAAAiQAAAjghAaQghAZguAAQgtAAghgZg");
	this.shape_15.setTransform(-0.8,-39.3,0.315,0.315);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC7020").s().p("AgjArQgPgSAAgZQAAgYAPgSQAPgSAUAAQAVAAAPASQAPASAAAYQAAAZgPASQgPASgVAAQgUAAgPgSg");
	this.shape_16.setTransform(-4.3,-42,0.315,0.315);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC7020").s().p("AhZBMQglggAAgsQAAgsAlgfQAlggA0AAQA0AAAmAgQAmAfgBAsQABAsgmAgQgmAgg0AAQg0AAglggg");
	this.shape_17.setTransform(-7.8,-39.5,0.315,0.315);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EC7020").s().p("Ag4A5QgYgXAAgiQAAggAYgYQAYgYAgAAQAiAAAXAYQAYAYAAAgQAAAigYAXQgXAYgiAAQggAAgYgYg");
	this.shape_18.setTransform(-13,-38.3,0.315,0.315);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#499642").s().p("AkmMNQDciShFrRQgjlphPlNIIoYZg");
	this.shape_19.setTransform(16,-62.9,0.315,0.315);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#55B04E").s().p("AEyLtQm6hGoABTIK/49IJRaHQh3gzjfgkg");
	this.shape_20.setTransform(6.1,-61.2,0.315,0.315);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EC7020").s().p("AguApIAAhRIBdAAIAABRg");
	this.shape_21.setTransform(24.4,-34.8,0.315,0.315);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EC7020").s().p("AgfALIAAgWIA/AAIAAAWg");
	this.shape_22.setTransform(-27.2,-33.8,0.315,0.315);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E45B0E").s().p("ASWhqQtSlCuCB+QkZAnj9BQQg6ASguAQQMck3NoCCQEhAqEHBYQCEArBJAjIgiHsg");
	this.shape_23.setTransform(0.2,-23.1,0.315,0.315);

	this.instance = new lib.Path_25();
	this.instance.setTransform(33,42.4,0.315,0.315,0,0,0,13.5,58.4);
	this.instance.alpha = 0.27;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F5D581").s().p("AmfBJQllgNjgghQPIAnJJhCQEmgjBjgqIAvAeIgvArQoSBSo0AAQiHAAiIgFg");
	this.shape_24.setTransform(1.5,25.1,0.315,0.315);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CE9D15").s().p("AgWApQgKgRAAgYQAAgXAKgRQAKgSAMAAQAOAAAJASQAKAQAAAYQAAAYgKARQgJASgOAAQgMAAgKgSg");
	this.shape_25.setTransform(-42.8,-7.5,0.315,0.315);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E8C566").s().p("AhLBMQgfggAAgsQAAgsAfgfQAgggArABQAsgBAgAgQAfAfAAAsQAAAsgfAgQggAggsAAQgrAAggggg");
	this.shape_26.setTransform(-44.7,-7.5,0.315,0.315);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FCE39F").s().p("AhiCQQg8gsgLhIQgMhHAqg8QArg7BIgMQA1gJAzAZQAxAYAbAwIARCAQgMAzgmAkQgnAlg1AJQgQACgPAAQg0AAgughg");
	this.shape_27.setTransform(-45.7,-7.3,0.315,0.315);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BC8A0C").s().p("AgWApQgKgRAAgYQAAgXAKgRQAKgSAMAAQANAAAKASQAKARAAAXQAAAYgKARQgKASgNAAQgMAAgKgSg");
	this.shape_28.setTransform(38.4,-7.5,0.315,0.315);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D8AF41").s().p("AhLBMQgfgggBgsQABgsAfgfQAgggArABQAsgBAgAgQAfAfAAAsQAAAsgfAgQggAggsAAQgrAAggggg");
	this.shape_29.setTransform(40.3,-7.5,0.315,0.315);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F5D581").s().p("AgeCvQg1gJgnglQgmgkgMgzIASiAQAbgwAxgYQAygZA1AJQBIAMArA7QAqA8gMBHQgLBJg8ArQguAhg1AAQgOAAgQgCg");
	this.shape_30.setTransform(41.3,-7.3,0.315,0.315);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AE5217").s().p("Ah2gqIESAMIAEAPIk/A6g");
	this.shape_31.setTransform(-3.3,41,0.315,0.315);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F08421").s().p("AkqASQAigZAqAAQAyAAAjAhQA1grBFAAQAzAAAtAaQATgoAngaQAogbAwAAQBCAAAvAvQhGgWg7AIQhaALgmBOQgkgPgugEQhagJgwA1QgdgVgngIQhPgQg3BDQAJgpAggag");
	this.shape_32.setTransform(-19.8,-41.2,0.315,0.315);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F08421").s().p("AhvGCQgmgvAAg7QAAg9AngvQg9gXgmg1Qgmg2AAhCQAAhXA+g+QA9g9BYAAQAQAAAUADIAAgDQAAhXA7g+QA+g9BXgBQATAAAVAFQiJAUg+BwQgfA4gEA0QjoBbBCCNQAhBJBQA1QhSBFAZBdQARA+A9A/Qg5gNgkgug");
	this.shape_33.setTransform(-40.9,-24.2,0.315,0.315);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E45B0E").s().p("ABSFAQAVhXg9hKQA1g7AThJQAmiPiohHQAOgtgXg2Qguhsi6grQAfgJAcAAQBXAAA+A+QA8A9AABXIgBADQAVgDAQAAQBXAAA+A+QA+A9AABYQAABBgnA2QglA1g9AXQAmAvAAA9QAABBgrAwQgqAwg/AIQA4hAAPg/g");
	this.shape_34.setTransform(38.6,-24.1,0.315,0.315);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#36B0BC").s().p("AjcA/QDKlkFvhqIAAEjIjPAUIAND1In3DzQAbieBlizg");
	this.shape_35.setTransform(26.2,36.6,0.315,0.315);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F5D581").s().p("AgrA2IAAk5IBYo2IAtAXIAAZDIi0AZg");
	this.shape_36.setTransform(34.4,-1.1,0.315,0.315);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#36B0BC").s().p("AiaCdIANj1IjPgUIAAkjQFvBqDKFkQBlCzAbCeg");
	this.shape_37.setTransform(-30,36.6,0.315,0.315);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#138893").s().p("AhRhDIE+jRIBwAuIifBAIA2DgIpQDbg");
	this.shape_38.setTransform(26.2,40.5,0.315,0.315);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EC7020").s().p("Al8AuIDwn/ID4AAIERIJIl+Gag");
	this.shape_39.setTransform(-2.4,53.9,0.315,0.315);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#138893").s().p("AjTA9IARjvIiahCIELgSIGuINg");
	this.shape_40.setTransform(-30,40.9,0.315,0.315);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EC7020").s().p("AiJDEIh6jGIBzjAIEJgBICLCzIiBDUg");
	this.shape_41.setTransform(-2.5,33.8,0.315,0.315);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#36B0BC").s().p("AAAmFQBzhsCLhCQBGghAtgLIAARlQhwAYlDAkIkvAeQABqIFwldg");
	this.shape_42.setTransform(25.6,43.2,0.315,0.315);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D0D0D0").s().p("AjoECIEYnoIgvjJIAbgiIC+C5IAPILIjXDfg");
	this.shape_43.setTransform(-8.9,47.3,0.315,0.315);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D0D0D0").s().p("AjoDzIAPoLIC+i5IAbAiIgvDJIEYHoIj6DQg");
	this.shape_44.setTransform(5,47.3,0.315,0.315);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D0D0D0").s().p("AACjnQAzhaA+hGIAzgyIkINsIhDAHQAEmECjkdg");
	this.shape_45.setTransform(17.6,47.8,0.315,0.315);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#36B0BC").s().p("AhgIwQiZgWh3gUIAAxlIAfAKQAoANAsAVQCLBCByBsQFxFdAAKIQiigEkvgsg");
	this.shape_46.setTransform(-29.3,43.2,0.315,0.315);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ao6hLIF6gUQG4ghFDg9Ig/BvIr5EMg");
	this.shape_47.setTransform(19.1,30,0.315,0.315);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D0D0D0").s().p("AB3HEIk0uIIA6A7QBGBMA7BgQC6EuAGFzg");
	this.shape_48.setTransform(-21.4,47.5,0.315,0.315);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D0D0D0").s().p("AmpisINTA5IpCEgg");
	this.shape_49.setTransform(15.2,33.7,0.315,0.315);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AndhOIg/hvQETBGGuAeQDXAPChAAIj3EIg");
	this.shape_50.setTransform(-23.9,30,0.315,0.315);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D0D0D0").s().p("AmOhzIMeg5IjTFZg");
	this.shape_51.setTransform(-20,33.7,0.315,0.315);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AniJNQnLgWkpgtIAAxjQD7BAG0AgQNlA/OZifIAARjQo/BQp5AAQj7AAkGgNg");
	this.shape_52.setTransform(-1.9,43.1,0.315,0.315);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#138893").s().p("AieA8IAoiyIEVAoIicDFg");
	this.shape_53.setTransform(-21.2,63.8,0.315,0.315);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#36B0BC").s().p("AjGAKIBkm3IEpANIlSGuIDPGVIh4ALg");
	this.shape_54.setTransform(-21.8,73.6,0.315,0.315);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FCE39F").s().p("AniXXQnLgWkpgtMAAAgqZQBKgfCFgnQEIhOEfgnQOVh8MiE3MAAAAqZQo/BQp5AAQj7AAkGgNg");
	this.shape_55.setTransform(-1.9,13.9,0.315,0.315);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#138893").s().p("AiehOIEVgoIAoCyIihA7g");
	this.shape_56.setTransform(13,63.8,0.315,0.315);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#36B0BC").s().p("AhDGjIDPmVIlSmuIEpgNIBkG3IiTGkg");
	this.shape_57.setTransform(13.6,73.6,0.315,0.315);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EC7020").s().p("ARiHoQgygyAAhHQAAgvAZgpQAXgnAogXQgggdgSgnQgTgpAAguIAAgDQgUADgPAAQg2AAgvgaQgtgZgdgoQgUAogmAZQgoAagwAAQhDAAgvgvQgvguAAhCIAAgDQgngJgggXQgggWgVgiQgLAogiAZQghAagrAAQgpAAghgYQgggYgNglQgfAngtAXQguAXg0AAQgTAAgRgDQgQADgTAAQg0AAgugXQgtgXgfgnQgNAlggAYQghAYgpAAQgrAAgigaQghgZgLgoQgVAiggAWQggAXgnAJIAAADQAABDgvAtQgvAvhDAAQgwAAgogaQgmgZgUgoQgdAogtAZQgvAag2AAQgPAAgVgDIABADQAAAtgTAqQgSAnggAdQAoAXAXAnQAYApAAAvQAABHgyAyQgyAyhHAAQhGAAgygyQgzgyAAhHQAAg8AngwQg9gXgmg1Qgmg3AAhCQAAhWA+g9QA9g+BYAAQATAAARADIAAgCQAAhYA9g+QA+g9BXAAQBDAAA2AmIgCgVQAAgyAjgjQAjgjAyAAQAxAAAkAjQA0gtBGAAQA1AAAtAcQATgrAngaQAogaAwAAQAxAAApAbQAnAbASArQAfgtAvgaQAxgaA4AAQATAAAQADQARgDATAAQA4AAAxAaQAvAaAeAtQATgrAngbQAogbAxAAQAxAAAoAaQAnAaATArQAtgcA1AAQBGAAA0AtQAjgjAyAAQAyAAAjAjQAjAjAAAyQAAALgCAKQA2gmBDAAQBXAAA+A9QA9A+AABYIAAACQASgDASAAQBYAAA9A+QA+A9AABWQAABCgmA3QgmA1g9AXQAmAvAAA9QAABHgyAyQgyAyhHAAQhHAAgygygANFjeIARAQIAIgXQgNAGgMABgAtVjOIARgQQgMgBgNgGg");
	this.shape_58.setTransform(-1,-26.9,0.315,0.315);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgCgJQAJAJgGAKg");
	this.shape_59.setTransform(41.8,69.6,0.315,0.315);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgNgJQAkgBgNAKQgGAFgMAFg");
	this.shape_60.setTransform(42.2,69.6,0.315,0.315);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgUAAQAUgGAVAJg");
	this.shape_61.setTransform(50,78.8,0.315,0.315);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgVAKQASgiANAQQAHAIAEAOg");
	this.shape_62.setTransform(50,78.5,0.315,0.315);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgUgDQAVgEAUALg");
	this.shape_63.setTransform(46,78.9,0.315,0.315);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgUAGQAUggAMASQAHAIACAPg");
	this.shape_64.setTransform(46,78.6,0.315,0.315);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgRgFQATAAAPALg");
	this.shape_65.setTransform(42.6,76.7,0.315,0.315);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgRABQAVgYAJARQAFAGgBAOg");
	this.shape_66.setTransform(42.6,76.4,0.315,0.315);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#36B0BC").s().p("ACwKyQghgFgTgbQgTgaAFghQBLndjYmBQhEh5hahiIhPhNQgVgZADghQADghAZgVQAZgVAhACQAhADAVAZQAGAIBYBZQBhBwBJCGQDnGjhTIMQgEAdgXATQgWATgdAAg");
	this.shape_67.setTransform(42.1,50,0.315,0.315);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FCE39F").s().p("AhRAgQgQgHgCgLQgBgNANgMQAPgPATgDIBQgFQAWgDAYAGQAaAHABALIAAAKQACAJgiALQgbAKgbADIg7AFIgNABQgNAAgKgEg");
	this.shape_68.setTransform(44.3,69.9,0.315,0.315);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FCE39F").s().p("AgHBfQgJgOgDgVIgQiHQgCgSAJgHQAFgEAPgBQANgCAFADQAIAFACASIAQCHQACAVgHAPQgGAQgMABIgDAAQgKAAgHgMg");
	this.shape_69.setTransform(49.6,76.1,0.315,0.315);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FCE39F").s().p("AgRB5QgOgCgHgSQgGgSADgXIAUiBQAEgXAMgPQAKgPANACQAOACAHASQAHASgEAXIgVCBQgDAXgMAPQgJANgLAAIgDAAg");
	this.shape_70.setTransform(46.4,75.7,0.315,0.315);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FCE39F").s().p("AAZBSQg9gCg6geQgagOAIglIANglQBhhJBDA0QAjAZAPAnQgBBNhVAAIgEAAg");
	this.shape_71.setTransform(47.5,71.4,0.315,0.315);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FCE39F").s().p("AgsBhQgLgFgBgRQgBgQAIgTIAxhnQAHgSAOgKQANgKALAFQALAFABARQABAQgIATIgxBnQgHATgOAJQgJAHgIAAQgDAAgEgCg");
	this.shape_72.setTransform(43.8,74,0.315,0.315);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.1,-87.5,102.3,175.1);


(lib.horntailanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.horntoptail("synched",0);
	this.instance.setTransform(-24.3,-24);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.hornbottomtail("synched",0);
	this.instance_1.setTransform(-20,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-28.6,40,57.2);


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


(lib.partyhornanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.horntailanim();
	this.instance.setTransform(-98.4,16.9,0.269,0.269,0,0,0,-20.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).to({_off:true},28).wait(28));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC7020").s().p("AgJAUIgdAGIAOgaIgOgYIAcAFIASgVIAFAdIAaALIgaAMIgEAdg");
	this.shape.setTransform(-81,4.6,0.215,0.215);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1C40B").s().p("AgFANIgTADIAIgQIgIgPIATADIAKgNIADASIARAHIgRAIIgCASg");
	this.shape_1.setTransform(-77.3,5,0.215,0.215);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#36B0BC").s().p("AgFANIgTAEIAJgRIgJgPIASADIALgNIADASIARAHIgRAIIgCASg");
	this.shape_2.setTransform(-84.2,11.4,0.215,0.215);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC7020").s().p("AgGANIgSAEIAJgRIgJgPIASADIALgNIADASIARAHIgRAIIgCATg");
	this.shape_3.setTransform(-78.8,8.9,0.215,0.215);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1C40B").s().p("AgNAdIgoAIIASglIgTgiIAoAHIAageIAGApIAlAQIgkASIgFAog");
	this.shape_4.setTransform(-82.6,7.1,0.215,0.215);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#31662D").s().p("AgpFCQhAgIg2grQg1grgfhDQAjgjAUgyQAVgzAAg4QAAhig1hHQAdgtApgeQA+guBIAAQBrAABMBeQBNBfAACEQAABZglBLQgjBKg7AqQhEAqhMAAg");
	this.shape_5.setTransform(-70.7,10.8,0.215,0.215);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#31662D").s().p("AhMAUIAKAAQBMAABEgoQg9AphEAAIgZgBg");
	this.shape_6.setTransform(-70,17.3,0.215,0.215);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7CD474").s().p("AjWDlQhUhgAAiFQABiHBXhhQBYhhB6AAQB7AABYBhQBYBhgBCHQAABbgqBOQgpBNhGAqQA8gqAjhKQAkhMAAhYQABiEhOhfQhMhfhsAAQhHABg+AtQg7AtgjBMIgKAWIgHAaIgBAAIgGAaIAAABIgFAcIgDAYIABBJQACAOAFAYIABADIAEARIAAADQAIAaANAdQAfBDA1AqQA1ArBAAJQh4gFhVhgg");
	this.shape_7.setTransform(-71.4,10.7,0.215,0.215);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC7020").s().p("AgJAVIgcAFIANgaIgOgYIAdAFIASgVIAEAdIAaALIgaANIgDAcg");
	this.shape_8.setTransform(-80.5,12.1,0.215,0.215);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#499642").s().p("AjwDqIAWpAIHLAkIjYCFIgnDSIAgC9ICYB1g");
	this.shape_9.setTransform(-76.6,10.2,0.215,0.215);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#499642").s().p("AiaDMQhFhVAAh3QAAh3BFhUQBEhVBfAAQBfAAA9BVQA7BSAAB5QAAAQgCAQQgKBwg4BHQg7BKhYAAQhfAAhEhVg");
	this.shape_10.setTransform(-81.6,9,0.215,0.215);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(-73.1,10.3);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(-70.7,10.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},64).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},13).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},28).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},9).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).to({_off:true,x:-70.7},9,cjs.Ease.get(1)).wait(54).to({_off:false,x:-75.7},9).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},9,cjs.Ease.get(1)).wait(13).to({startPosition:0},0).to({scaleX:0.37,scaleY:0.37,x:-97.3,y:13.6},5).wait(1).to({x:-91.7,y:14.8,alpha:0},0).wait(28).to({startPosition:0},0).wait(1).to({x:-97.3,y:13.6,alpha:1},0).to({scaleX:1,scaleY:1,x:-70.7,y:10.3},5).wait(1).to({startPosition:0},0).to({_off:true,x:-75.7},9).wait(12));

	// Layer 3
	this.instance_3 = new lib.hornfronthand("synched",0);
	this.instance_3.setTransform(-57.7,8.8,0.274,0.274);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({x:-55.2},0).to({x:-52.8},9,cjs.Ease.get(1)).wait(48).to({startPosition:0},0).wait(6).to({startPosition:0},0).to({x:-57.7},9).wait(12));

	// Layer 1
	this.instance_4 = new lib.partyhorn("synched",0);
	this.instance_4.setTransform(-43,13.1,0.17,0.274);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({x:-40.5},0).to({x:-38.1},9,cjs.Ease.get(1)).wait(13).to({startPosition:0},0).to({scaleX:0.36},5).wait(30).to({startPosition:0},0).to({scaleX:0.17},5).wait(1).to({startPosition:0},0).to({x:-43},9).wait(12));

	// Layer 1
	this.instance_5 = new lib.hornbackhand("synched",0);
	this.instance_5.setTransform(-57.2,14.1,0.274,0.274);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(64).to({x:-54.7},0).to({x:-52.3},9,cjs.Ease.get(1)).wait(54).to({startPosition:0},0).to({x:-57.2},9).wait(12));

	// Layer 1
	this.instance_6 = new lib.hornarm("synched",0);
	this.instance_6.setTransform(-53.3,23.3,0.333,0.333);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(64).to({x:-50.7},0).to({scaleX:0.26,x:-49.5},9,cjs.Ease.get(1)).wait(54).to({startPosition:0},0).to({scaleX:0.33,x:-53.3},9).wait(12));

	// Layer 7
	this.instance_7 = new lib.cheek("synched",0);
	this.instance_7.setTransform(-30.8,11.3,0.215,0.215,180);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(83).to({_off:false},0).to({scaleX:0.36,scaleY:0.36,x:-33.6,alpha:1},3,cjs.Ease.get(1)).wait(33).to({startPosition:0},0).to({scaleX:0.15,scaleY:0.15,x:-32.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(18));

	// Layer 8
	this.instance_8 = new lib.cheek("synched",0);
	this.instance_8.setTransform(-43.1,11.1,0.215,0.215);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(83).to({_off:false},0).to({scaleX:0.33,scaleY:0.33,x:-41,alpha:1},3,cjs.Ease.get(1)).wait(33).to({startPosition:0},0).to({scaleX:0.12,scaleY:0.12},10,cjs.Ease.get(-1)).to({_off:true},1).wait(18));

	// Layer 9
	this.instance_9 = new lib.blowmouth("synched",0);
	this.instance_9.setTransform(-33.9,11.1,0.371,0.371);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65).to({_off:false},0).to({scaleX:0.94,scaleY:0.94},5,cjs.Ease.get(1)).wait(7).to({startPosition:0},0).to({startPosition:0},6,cjs.Ease.get(-1)).wait(1).to({scaleX:0.3,scaleY:0.3,x:-37.1,y:11.2},0).to({_off:true},46).wait(18));

	// Layer 1
	this.instance_10 = new lib.eyesblink();
	this.instance_10.setTransform(-10,0.2,1,1,0,0,0,0,-1.9);

	this.instance_11 = new lib.eyes();
	this.instance_11.setTransform(-30,2.2,1,1,0,0,0,0,-1.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(52).to({x:-30,y:2.2},12,cjs.Ease.get(1)).to({_off:true},1).wait(65).to({_off:false},0).to({x:-10,y:0.2},9,cjs.Ease.get(1)).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(65).to({_off:false},0).wait(21).to({scaleY:0.29,y:-0.6},5,cjs.Ease.get(1)).wait(1).to({y:-1.2},0).wait(1).to({y:-0.1},0).wait(1).to({y:-0.6},0).wait(1).to({y:-1.2},0).wait(1).to({y:-0.1},0).wait(1).to({y:-0.6},0).wait(1).to({y:-1.2},0).wait(2).to({y:-0.1},0).wait(1).to({y:-0.6},0).wait(1).to({y:-1.2},0).wait(1).to({y:-0.1},0).wait(1).to({y:-1.6},0).wait(1).to({y:-0.1},0).wait(1).to({y:-2.1},0).wait(1).to({y:-0.1},0).wait(1).to({y:0.5},0).wait(1).to({y:-1.2},0).wait(2).to({y:-0.6},0).wait(1).to({y:-2.4},0).wait(1).to({y:-0.1},0).wait(2).to({y:-0.6},0).wait(2).to({y:-1.2},0).wait(2).to({y:-0.1},0).wait(4).to({scaleY:1,y:2.2},0).to({_off:true},7).wait(18));

	// Layer 1
	this.instance_12 = new lib.idlepartyhat("synched",0);
	this.instance_12.setTransform(-6.6,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(148));

	// Layer 1
	this.instance_13 = new lib.shadow("synched",0);
	this.instance_13.setTransform(-9.7,90.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(148));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.4,-85,130.9,178.9);


// stage content:
(lib.wranxanims = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.partyhornanim();
	this.instance.setTransform(113.2,97.2,1,1,0,0,0,-20.9,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(167.7,102.8,130.9,178.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;