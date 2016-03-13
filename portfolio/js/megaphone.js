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



(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#191919").s().p("AgNioIA2gJIAAFbIhRAIg");
	this.shape.setTransform(4.2,17.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.4,35.7);


(lib.sound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEDED6").s().p("AmyDWIgMgMQgNgNAAgSQAAgSANgOIMzlgQAMgNATAAQASAAANANIAMAMQANANAAASQAAATgNAMIszFhQgNANgTAAQgRAAgNgNg");
	this.shape.setTransform(4.6,18.3,0.305,0.305);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEDED6").s().p("AjJDWIgMgMQgNgNAAgSQAAgTANgNIFhlgQANgNASAAQASAAANANIAMALQANAOAAASQAAASgNANIlhFhQgNANgSAAQgSAAgNgNg");
	this.shape_1.setTransform(16.3,36.6,0.305,0.305);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEDED6").s().p("AF1DWIszlhQgNgMAAgTQAAgTANgNIAMgLQANgNARAAQATAAANANIMzFgQANANAAATQAAASgNANIgMAMQgNANgSAAQgTAAgMgNg");
	this.shape_2.setTransform(4.6,-18.2,0.305,0.305);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEDED6").s().p("AqdAoQgNgNAAgSIAAgPQAAgTANgMQAMgNATgBIT9gBQASAAANANQANANAAASIAAAPQAAASgNANQgMANgTAAIz9ACQgSAAgNgNg");
	this.shape_3.setTransform(-5.2,0,0.305,0.305);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DEDED6").s().p("ACMDWIlhlhQgNgMAAgTQAAgSANgNIAMgMQANgNASAAQASAAANANIFhFhQANANAAASQAAATgNAMIgMAMQgNANgSAAQgSAAgNgNg");
	this.shape_4.setTransform(19.1,-36.5,0.305,0.305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-43.4,52,87);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AEE4E8").s().p("AveBYQmagkAAg0QAAgyGaglQGaglJEAAQJFAAGZAlQGbAlAAAyQAAA0mbAkQmaAlpEAAQpDAAmbglg");
	this.shape.setTransform(0,0,0.296,0.296);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.4,-3.7,82.9,7.5);


(lib.hornarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B0BC").s().p("AilF1QhlhAgDi6QgCi4BglSICRApQhZE4ABCkQAAA3AKAjQAJAdANAIQAaAQBJgiQBPglBOhFIBkBwQg9A2hEApQh2BIhZAAQg4AAgrgbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-40,54.1,80.1);


(lib.mouthopen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE9D15").s().p("AhMD3QhPgUg9giQApgaAQhGQAfiKh+jcQBBAcBdAOQC3AcCIhGQAZBfAGBsQAMDVhcBCQg5AphTAAQgxAAg9gPg");
	this.shape.setTransform(0,0,0.354,0.354);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9.3,18.1,18.6);


(lib.megaphonehand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD783").s().p("Ah6AfQgHgLgBgOQAAgNAFgLQAGgMAIAAIDbgJQAIgBAHALQAHAKAAAPQABANgGAKQgFALgJABIjbAJIAAAAQgIAAgGgJg");
	this.shape.setTransform(-1.7,2.8,0.233,0.233);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCD783").s().p("Ah6AeQgHgKAAgPQgBgMAGgLQAFgLAIgBIDbgJQAJAAAGAKQAHAKAAAPQABANgGALQgFALgJAAIjaAJIgBAAQgIAAgGgKg");
	this.shape_1.setTransform(-1.9,0.5,0.233,0.233);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCD783").s().p("Ah6AfQgHgLgBgOQAAgNAGgLQAEgLAJgBIDbgJQAIAAAHAKQAGAKABAPQABANgFALQgGALgJAAIjbAJIAAAAQgIAAgGgJg");
	this.shape_2.setTransform(-1.9,-2,0.233,0.233);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCD783").s().p("AgIDBQgVAAgQgKQgPgKABgMIAOlFQABgNAQgIQAQgIATABQAWABARAJQAPAKgBAMIgOFFQgBANgQAIQgPAHgRAAIgFAAg");
	this.shape_3.setTransform(3.6,-1.7,0.233,0.233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E8E89").s().p("AhugSIgEgwIDlgRIgBCng");
	this.shape_4.setTransform(-0.3,-4.9,0.233,0.233);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BCBCB5").s().p("Ah3k9IDvARIgaJiIi5AIg");
	this.shape_5.setTransform(-0.3,0,0.233,0.233);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-7.4,10,14.9);


(lib.megaphone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A48").s().p("AC9AuIl+gfQgPgBgKgKQgJgIABgNQABgNALgIQALgJAPABIF+AgQAPABAKALQAJAHAAAOQgCAMgLAIQgKAIgMAAIgEgBg");
	this.shape.setTransform(34.8,3.6,0.275,0.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A48").s().p("AC9AuIl/gfQgOgCgKgKQgKgIACgMQABgNALgIQALgJAPABIF+AgQAPABAKAKQAKAIgBANQgBANgMAIQgKAIgMAAIgEgBg");
	this.shape_1.setTransform(34.4,12,0.275,0.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A48").s().p("AC8AvIl+ggQgOgCgKgKQgKgIACgMQABgNALgIQALgJAPABIF+AgQAPACAJAKQAKAIgBAMQgBANgLAJQgKAHgNAAIgEAAg");
	this.shape_2.setTransform(34.4,9.2,0.275,0.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A48").s().p("AC9AuIl+gfQgPgBgKgKQgKgIACgNQABgNALgIQALgJAPABIF+AgQAPACAJAKQAKAIgBANQgBAMgLAIQgKAIgMAAIgEgBg");
	this.shape_3.setTransform(34.6,6.4,0.275,0.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E8E89").s().p("AB4j7QggizhQitQgXg3gbguIgVgkQGRJNjiH4QhGCeh7CDQg+BBgxAjQGemlhmo8g");
	this.shape_4.setTransform(-2.4,2.8,0.275,0.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BCBCB5").s().p("Ag9CcQiQh6Agh0QAgh1CbgzQBPgZBJgDQAbC1gcDMQgOBpgUBDQh3g7hJhAg");
	this.shape_5.setTransform(-27.2,1.8,0.275,0.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#363533").s().p("AgZN4QhOgChGhIQhDhFgxh9QhqkIAMluQAKlwB5kBQA5h6BHhBQBJhEBNACQCfAFBpEIQBqEIgMFuQgLFwh4EBQh2D9iaAAIgGgBg");
	this.shape_6.setTransform(-33.1,0,0.275,0.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DEDDD5").s().p("AgcPsQhkgDhYhRQhVhPhAiNQiGkrAMmeQAMmgCYkiQBIiJBahKQBdhMBhADQBkADBYBRQBVBPBACNQCGErgMGeQgNGgiXEiQhICJhaBKQhZBJheAAIgHAAg");
	this.shape_7.setTransform(-31.6,0,0.275,0.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BCBCB5").s().p("A0ovLMAozAPwIAQAwQASA8AGA+QAVDGhhCMMgodAGrg");
	this.shape_8.setTransform(8.3,-0.1,0.275,0.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6E6E6A").s().p("AhHrlIAZAjQAeAtAbA0QBdCnAoCwQB/Iym6G+g");
	this.shape_9.setTransform(-2.5,2.6,0.275,0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.1,-27.6,90.2,55.3);


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


(lib.idlebody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36B0BC").s().p("AgOgFQALgKAYAVIgpADQABgJAFgFg");
	this.shape.setTransform(-24.8,64.3,1.01,1.01);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#36B0BC").s().p("AgUAGQAZgVAKAKQAGAFAAAJg");
	this.shape_1.setTransform(16.8,64.3,1.01,1.01);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC7020").s().p("AgNAMIAAgXIAbAAIAAAXg");
	this.shape_2.setTransform(24.2,-56.1,1.01,1.01);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC7020").s().p("AgJADIAAgFIATAAIAAAFg");
	this.shape_3.setTransform(-27,-55.1,1.01,1.01);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E45B0E").s().p("AFiggQkHhjkVAmQhpAPhLAaQDvhYEDAnQCQAVBbArIgLCXg");
	this.shape_4.setTransform(1.1,-44.5,1.01,1.01);

	this.instance = new lib.Path_5();
	this.instance.setTransform(32.9,20.2,1.01,1.01,0,0,0,4.1,17.8);
	this.instance.alpha = 0.27;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5D581").s().p("AiAAWQhugDhGgLQEsAMC1gUQBagKAfgNIAPAKIgPANQikAYiuAAIhUgCg");
	this.shape_5.setTransform(1.5,3.3,1.01,1.01);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CE9D15").s().p("AgGANQgDgGAAgHQAAgGADgFQADgGADAAQAEAAADAGQADAFAAAGQAAAHgDAGQgDAFgEAAQgDAAgDgFg");
	this.shape_6.setTransform(-42.5,-29,1.01,1.01);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E8C566").s().p("AgWAXQgKgJAAgOQAAgNAKgJQAKgKAMAAQANAAAKAKQAKAJAAANQAAAOgKAJQgKAKgNAAQgMAAgKgKg");
	this.shape_7.setTransform(-44.3,-29,1.01,1.01);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCE39F").s().p("AgdAsQgSgOgEgWQgEgVANgSQANgSAXgEQAPgDAPAIQAPAHAJAPIAFAmQgEAQgLALQgMAMgRADIgJABQgPAAgOgLg");
	this.shape_8.setTransform(-45.3,-28.8,1.01,1.01);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BC8A0C").s().p("AgGANQgDgGAAgHQAAgGADgFQADgGADAAQAEAAADAGQADAFAAAGQAAAHgDAGQgDAFgEAAQgDAAgDgFg");
	this.shape_9.setTransform(38.2,-29,1.01,1.01);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D8AF41").s().p("AgWAXQgKgJAAgOQAAgNAKgJQAJgKANAAQANAAAKAKQAKAJAAANQAAAOgKAJQgKAKgNAAQgNAAgJgKg");
	this.shape_10.setTransform(40,-29,1.01,1.01);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5D581").s().p("AgIA2QgRgDgMgMQgLgLgEgQIAFgmQAJgPAPgHQAPgIAQADQAWAEANASQANASgDAVQgEAWgSAOQgPALgQAAIgIgBg");
	this.shape_11.setTransform(41,-28.8,1.01,1.01);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AE5217").s().p("AgjgMIBTAEIABAFIhhAQg");
	this.shape_12.setTransform(-3.2,19.1,1.01,1.01);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F08421").s().p("AhbAGQAKgHANAAQAQAAALAJQAQgNAVAAQAOABAPAGQAFgLANgIQAMgIAPAAQAVAAAOAPQgWgHgSACQgcADgMAXQgLgEgOgBQgbgDgPAQQgIgHgNgCQgYgFgRAVQADgMAKgIg");
	this.shape_13.setTransform(-19.6,-62.5,1.01,1.01);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F08421").s().p("AghB3QgMgOAAgTQAAgSAMgPQgTgHgMgRQgLgQgBgTQABgbASgTQAUgTAaAAIALABIAAgBQAAgbASgTQATgUAbAAQAHAAAFACQgqAGgTAjQgKARgBAQQhHAcAVArQALAWAYARQgZAVAHAdQAGATASAUQgRgEgLgPg");
	this.shape_14.setTransform(-40.6,-45.6,1.01,1.01);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E45B0E").s().p("AAMAxQARgSAGgXQAMgrgzgWQAEgOgHgQQgOgig6gNQAKgDAJAAQAbAAATATQARATAAAbIAAABIALgBQAbAAAUATQASATABAbQgBATgMARQgLAQgTAHQAMAPAAATQAAAUgNAPQgOAPgTACQArgxgigog");
	this.shape_15.setTransform(38.3,-45.5,1.01,1.01);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#36B0BC").s().p("AhDATQA+htBxggIAABaIhAAFIAEBLIibBLQAJgwAfg4g");
	this.shape_16.setTransform(26,14.8,1.01,1.01);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F5D581").s().p("AgMAQIAAhfIAaivIAOAHIAAHvIg3AHg");
	this.shape_17.setTransform(34.1,-22.7,1.01,1.01);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#36B0BC").s().p("AguAwIADhLIhAgFIAAhaQBxAgA+BtQAfA4AIAwg");
	this.shape_18.setTransform(-29.7,14.8,1.01,1.01);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#138893").s().p("AgYgUIBhhBIAjAPIgxATIAQBFIi2BEg");
	this.shape_19.setTransform(26,18.6,1.01,1.01);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC7020").s().p("Ah1AOIBLidIBLAAIBVCgIh2B/g");
	this.shape_20.setTransform(-2.3,31.9,1.01,1.01);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#138893").s().p("AhAASIAFhIIgwgVIBTgFICDChg");
	this.shape_21.setTransform(-29.7,19,1.01,1.01);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EC7020").s().p("AgpA8Igmg8IAjg7IBRAAIArA3IgoBAg");
	this.shape_22.setTransform(-2.4,12,1.01,1.01);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#36B0BC").s().p("AAAh3QA5g2A5gOIAAFbQgjAHhiAMIheAJQAAjHBxhsg");
	this.shape_23.setTransform(25.4,21.3,1.01,1.01);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D0D0D0").s().p("AhHBQIBViWIgOg+IAJgLIA6A5IAFChIhDBFg");
	this.shape_24.setTransform(-8.8,25.4,1.01,1.01);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D0D0D0").s().p("AhHBLIAFihIA7g5IAHALIgOA+IBWCWIhMBAg");
	this.shape_25.setTransform(5,25.4,1.01,1.01);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D0D0D0").s().p("AABhGQAPgcATgWQAJgLAHgFIhQEPIgVACQABh4AyhXg");
	this.shape_26.setTransform(17.5,25.8,1.01,1.01);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#36B0BC").s().p("AhxCgIAAlbIAkAOQArAUAiAiQByBsAADHQhQgDiTgZg");
	this.shape_27.setTransform(-29.1,21.3,1.01,1.01);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiwgWIB1gGQCIgLBjgSIgTAhIjqBTg");
	this.shape_28.setTransform(19,8.2,1.01,1.01);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D0D0D0").s().p("AAlCMIhekXIASASQAVAYASAeQA5BcABBzg");
	this.shape_29.setTransform(-21.2,25.5,1.01,1.01);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D0D0D0").s().p("AiDg1IEHASIiyBYg");
	this.shape_30.setTransform(15.2,11.8,1.01,1.01);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AiTgYIgTghQBVAVCEAJQBCAFAyAAIhMBRg");
	this.shape_31.setTransform(-23.7,8.2,1.01,1.01);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D0D0D0").s().p("Ah6gjID1gSIhBBqg");
	this.shape_32.setTransform(-19.8,11.8,1.01,1.01);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AiVC2QiNgHhdgOIAAlaQBPAUCHAJQELAUEdgxIAAFaQizAZjFAAQhLAAhRgEg");
	this.shape_33.setTransform(-1.8,21.2,1.01,1.01);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#138893").s().p("AgwATIAMg3IBVANIgxA8g");
	this.shape_34.setTransform(-21,41.7,1.01,1.01);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#36B0BC").s().p("Ag8ACIAfiGIBaAEIhnCEIA/B9IgkAEg");
	this.shape_35.setTransform(-21.6,51.5,1.01,1.01);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FCE39F").s().p("AiVHPQiNgHhdgOIAAtHQBdgnCOgTQEbgmD4BgIAANHQiyAZjEAAQhMAAhSgEg");
	this.shape_36.setTransform(-1.8,-7.7,1.01,1.01);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#138893").s().p("AgwgXIBUgNIANA3IgxASg");
	this.shape_37.setTransform(12.9,41.7,1.01,1.01);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#36B0BC").s().p("AgTCBIA+h9IhoiEIBcgEIAfCGIguCDg");
	this.shape_38.setTransform(13.5,51.5,1.01,1.01);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EC7020").s().p("AFbCXQgPgPAAgXQAAgOAHgNQAIgMAMgHQgVgUAAgcIAAgBIgLABQgjAAgUgbQgGALgMAIQgMAIgPAAQgUAAgPgPQgPgNAAgUIAAgBQgYgFgOgWQgEAMgKAIQgKAIgOAAQgMAAgKgIQgKgGgEgNQgVAbghAAIgLgBIgKABQghAAgVgbQgEAMgKAHQgKAIgNAAQgNAAgKgIQgKgIgEgMQgOAWgZAFIAAABQAAAUgOANQgPAPgUAAQgPAAgMgIQgNgIgGgLQgJAMgOAHQgOAIgRAAIgLgBIAAABQAAAdgVATQAMAHAIAMQAHANAAAOQAAAXgPAPQgQAPgWAAQgWAAgPgPQgQgPAAgXQAAgSAMgPQgTgHgLgQQgMgRAAgVQAAgZATgTQATgTAbgBIALACIAAgCQAAgaATgUQATgSAbgBQAVABARAMIgBgHQAAgPALgLQALgLAPAAQAQAAALALQAQgPAVAAQARAAAOAJQAGgNAMgIQAMgIAPgBQAPABANAIQAMAJAGANQAJgOAPgIQAPgIARgBIAKABIALgBQAkABAUAeQAGgNAMgJQANgIAPgBQAPABAMAIQAMAIAGANQANgJASAAQAVAAAQAPQAKgLARAAQAPAAALALQALALAAAPIgBAHQARgMAVgBQAbABATASQATAUAAAaIAAACIALgCQAbABATATQATATAAAZQAAAVgMARQgLAQgTAHQAMAPAAASQAAAXgQAPQgPAPgWAAQgWAAgQgPgAEDhDIAFAEIACgGIgHACgAkHg/IAFgEIgIgCg");
	this.shape_39.setTransform(-1,-48.3,1.01,1.01);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgDgCQARAAgQAFg");
	this.shape_40.setTransform(41.9,47.5,1.01,1.01);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgFADQAFgJADAFIADAFg");
	this.shape_41.setTransform(49.6,56.3,1.01,1.01);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFABQAFgIADAGQADABAAAEg");
	this.shape_42.setTransform(45.7,56.4,1.01,1.01);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgEAAQAFgGADAFQABABAAAEg");
	this.shape_43.setTransform(42.3,54.2,1.01,1.01);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#36B0BC").s().p("AA2DVQgKgBgGgIQgGgJACgKQAXiUhBh1QgVgmgcgeIgZgYQgGgIAAgKQABgKAIgHQAIgGAKABQAKAAAHAIIAdAeQAdAjAWApQBICBgaCiQgBAJgHAGQgHAGgJAAg");
	this.shape_44.setTransform(41.7,28,1.01,1.01);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FCE39F").s().p("AgYAKQgFgCgBgEQAAgEAEgDQAFgFAGAAIAXgBQAGgCAIADQAIACABADIAAADQAAABgKAEQgJADgIABIgRABIgEABIgHgBg");
	this.shape_45.setTransform(44,47.8,1.01,1.01);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FCE39F").s().p("AgBAdQgDgEgBgHIgFgoQAAgGACgCQACgBAFgBQACAAACABQACABABAGIAFAoQABAHgCAFQgDAEgDABIgBAAQgDAAgBgEg");
	this.shape_46.setTransform(49.2,54,1.01,1.01);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FCE39F").s().p("AgEAlQgEAAgDgGQgCgGABgHIAHgmQABgHAEgFQABgFAEABQAEABADAFQACAGgBAHIgHAmQgBAHgDAFQgCAEgDAAIgBAAg");
	this.shape_47.setTransform(46.1,53.5,1.01,1.01);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FCE39F").s().p("AAHAZQgSAAgRgKQgIgEACgLIAEgLQAegWAUAQQALAIAEAKQAAAYgbAAIgBAAg");
	this.shape_48.setTransform(47.1,49.3,1.01,1.01);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FCE39F").s().p("AgNAeQgDgCAAgFQgBgFADgGIAOgfQABgFAFgDQAEgDADABQAEACAAAFQAAAFgCAGIgPAeQgBAGgEADQgDACgCAAIgDAAg");
	this.shape_49.setTransform(43.4,51.9,1.01,1.01);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-65.2,101.5,130.5);


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


(lib.megaphoneanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_111 = new cjs.Graphics().p("AkkEkQh5h5AAirQAAiqB5h6QB6h5CqAAQCrAAB5B5QB6B6AACqQAACrh6B5Qh5B6irAAQiqAAh6h6g");
	var mask_graphics_112 = new cjs.Graphics().p("AlIEuQh+h9AAixQAAiwB+h+QB9h9CyAAQCvAAB+B9QB9B+AACwQAACxh9B9Qh+B+ivAAQiyAAh9h+g");
	var mask_graphics_113 = new cjs.Graphics().p("AmXE0QiAiAAAi0QAAizCAiAQCAiAC1AAQCyAACACAQCACAAACzQAAC0iACAQiACAiyAAQi1AAiAiAg");
	var mask_graphics_114 = new cjs.Graphics().p("AmyE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACBCBQCBCAAAC1QAAC2iBCAQiBCBi0AAQi2AAiBiBg");
	var mask_graphics_115 = new cjs.Graphics().p("AlWE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACACBQCBCAAAC1QAAC2iBCAQiACBi0AAQi2AAiBiBg");
	var mask_graphics_116 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_117 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_118 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_119 = new cjs.Graphics().p("Ak6E2QiBiAAAi2QAAi1CBiAQCAiBC3AAQC0AACACBQCBCAAAC1QAAC2iBCAQiACBi0AAQi3AAiAiBg");
	var mask_graphics_120 = new cjs.Graphics().p("AlOE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACBCBQCBCAAAC1QAAC2iBCAQiBCBi0AAQi2AAiBiBg");
	var mask_graphics_121 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_122 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_123 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_124 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_125 = new cjs.Graphics().p("AlYE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACBCBQCBCAAAC1QAAC2iBCAQiBCBi0AAQi2AAiBiBg");
	var mask_graphics_126 = new cjs.Graphics().p("AmKE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACBCBQCBCAAAC1QAAC2iBCAQiBCBi0AAQi2AAiBiBg");
	var mask_graphics_127 = new cjs.Graphics().p("AmoE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACBCBQCBCAAAC1QAAC2iBCAQiBCBi0AAQi2AAiBiBg");
	var mask_graphics_128 = new cjs.Graphics().p("AmyE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACBCBQCBCAAAC1QAAC2iBCAQiBCBi0AAQi2AAiBiBg");
	var mask_graphics_129 = new cjs.Graphics().p("AlzE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACACBQCBCAAAC1QAAC2iBCAQiACBi0AAQi2AAiBiBg");
	var mask_graphics_130 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_131 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_132 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_133 = new cjs.Graphics().p("AkkEkQh5h5AAirQAAiqB5h6QB6h5CqAAQCrAAB5B5QB6B6AACqQAACrh6B5Qh5B6irAAQiqAAh6h6g");
	var mask_graphics_134 = new cjs.Graphics().p("AlIEuQh+h9AAixQAAiwB+h+QB9h9CyAAQCvAAB+B9QB9B+AACwQAACxh9B9Qh+B+ivAAQiyAAh9h+g");
	var mask_graphics_135 = new cjs.Graphics().p("AmXE0QiAiAAAi0QAAizCAiAQCAiAC1AAQCyAACACAQCACAAACzQAAC0iACAQiACAiyAAQi1AAiAiAg");
	var mask_graphics_136 = new cjs.Graphics().p("AmyE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACBCBQCBCAAAC1QAAC2iBCAQiBCBi0AAQi2AAiBiBg");
	var mask_graphics_137 = new cjs.Graphics().p("AlWE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACACBQCBCAAAC1QAAC2iBCAQiACBi0AAQi2AAiBiBg");
	var mask_graphics_138 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_139 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_140 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_141 = new cjs.Graphics().p("Ak6E2QiBiAAAi2QAAi1CBiAQCAiBC3AAQC0AACACBQCBCAAAC1QAAC2iBCAQiACBi0AAQi3AAiAiBg");
	var mask_graphics_142 = new cjs.Graphics().p("AlOE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACBCBQCBCAAAC1QAAC2iBCAQiBCBi0AAQi2AAiBiBg");
	var mask_graphics_143 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_144 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_145 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_146 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_147 = new cjs.Graphics().p("AlYE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACBCBQCBCAAAC1QAAC2iBCAQiBCBi0AAQi2AAiBiBg");
	var mask_graphics_148 = new cjs.Graphics().p("AmKE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACBCBQCBCAAAC1QAAC2iBCAQiBCBi0AAQi2AAiBiBg");
	var mask_graphics_149 = new cjs.Graphics().p("AmoE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACBCBQCBCAAAC1QAAC2iBCAQiBCBi0AAQi2AAiBiBg");
	var mask_graphics_150 = new cjs.Graphics().p("AmyE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACBCBQCBCAAAC1QAAC2iBCAQiBCBi0AAQi2AAiBiBg");
	var mask_graphics_151 = new cjs.Graphics().p("AlzE2QiBiAAAi2QAAi1CBiAQCBiBC2AAQC0AACACBQCBCAAAC1QAAC2iBCAQiACBi0AAQi2AAiBiBg");
	var mask_graphics_152 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_153 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");
	var mask_graphics_154 = new cjs.Graphics().p("Ak1E2QiBiAAAi2QAAi1CBiAQCAiBC1AAQC2AACACBQCBCAAAC1QAAC2iBCAQiACBi2AAQi1AAiAiBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(111).to({graphics:mask_graphics_111,x:-22.3,y:6.2}).wait(1).to({graphics:mask_graphics_112,x:-45.5,y:4.2}).wait(1).to({graphics:mask_graphics_113,x:-53.7,y:3}).wait(1).to({graphics:mask_graphics_114,x:-56.4,y:2.7}).wait(1).to({graphics:mask_graphics_115,x:-47.2,y:2.7}).wait(1).to({graphics:mask_graphics_116,x:-32.2,y:2.7}).wait(1).to({graphics:mask_graphics_117,x:-13.8,y:2.7}).wait(1).to({graphics:mask_graphics_118,x:-33.3,y:2.7}).wait(1).to({graphics:mask_graphics_119,x:-44.5,y:2.7}).wait(1).to({graphics:mask_graphics_120,x:-46.4,y:2.7}).wait(1).to({graphics:mask_graphics_121,x:-38.8,y:2.7}).wait(1).to({graphics:mask_graphics_122,x:-28.8,y:2.7}).wait(1).to({graphics:mask_graphics_123,x:-18.8,y:2.7}).wait(1).to({graphics:mask_graphics_124,x:-36.8,y:2.7}).wait(1).to({graphics:mask_graphics_125,x:-47.4,y:2.7}).wait(1).to({graphics:mask_graphics_126,x:-52.4,y:2.7}).wait(1).to({graphics:mask_graphics_127,x:-55.4,y:2.7}).wait(1).to({graphics:mask_graphics_128,x:-56.4,y:2.7}).wait(1).to({graphics:mask_graphics_129,x:-50.2,y:2.7}).wait(1).to({graphics:mask_graphics_130,x:-43.8,y:2.7}).wait(1).to({graphics:mask_graphics_131,x:-31.3,y:2.7}).wait(1).to({graphics:mask_graphics_132,x:-18.8,y:2.7}).wait(1).to({graphics:mask_graphics_133,x:-22.3,y:6.2}).wait(1).to({graphics:mask_graphics_134,x:-45.5,y:4.2}).wait(1).to({graphics:mask_graphics_135,x:-53.7,y:3}).wait(1).to({graphics:mask_graphics_136,x:-56.4,y:2.7}).wait(1).to({graphics:mask_graphics_137,x:-47.2,y:2.7}).wait(1).to({graphics:mask_graphics_138,x:-32.2,y:2.7}).wait(1).to({graphics:mask_graphics_139,x:-13.8,y:2.7}).wait(1).to({graphics:mask_graphics_140,x:-33.3,y:2.7}).wait(1).to({graphics:mask_graphics_141,x:-44.5,y:2.7}).wait(1).to({graphics:mask_graphics_142,x:-46.4,y:2.7}).wait(1).to({graphics:mask_graphics_143,x:-38.8,y:2.7}).wait(1).to({graphics:mask_graphics_144,x:-28.8,y:2.7}).wait(1).to({graphics:mask_graphics_145,x:-18.8,y:2.7}).wait(1).to({graphics:mask_graphics_146,x:-36.8,y:2.7}).wait(1).to({graphics:mask_graphics_147,x:-47.4,y:2.7}).wait(1).to({graphics:mask_graphics_148,x:-52.4,y:2.7}).wait(1).to({graphics:mask_graphics_149,x:-55.4,y:2.7}).wait(1).to({graphics:mask_graphics_150,x:-56.4,y:2.7}).wait(1).to({graphics:mask_graphics_151,x:-50.2,y:2.7}).wait(1).to({graphics:mask_graphics_152,x:-43.8,y:2.7}).wait(1).to({graphics:mask_graphics_153,x:-31.3,y:2.7}).wait(1).to({graphics:mask_graphics_154,x:-18.8,y:2.7}).wait(27));

	// Layer 1
	this.instance = new lib.sound("synched",0);
	this.instance.setTransform(-83.4,3.1);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111).to({_off:false},0).wait(70));

	// Layer 1
	this.instance_1 = new lib.megaphone("synched",0);
	this.instance_1.setTransform(-22.8,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100).to({startPosition:0},0).to({x:-16.8},10,cjs.Ease.get(1)).to({scaleY:1.11},4,cjs.Ease.get(1)).to({scaleY:1},3).to({scaleY:1.07},3,cjs.Ease.get(1)).to({scaleY:1},3).to({scaleY:1.13},5,cjs.Ease.get(1)).to({scaleY:1},4).wait(1).to({startPosition:0},0).to({scaleY:1.11},4,cjs.Ease.get(1)).to({scaleY:1},3).to({scaleY:1.07},3,cjs.Ease.get(1)).to({scaleY:1},3).to({scaleY:1.13},5,cjs.Ease.get(1)).to({scaleY:1},3).wait(1).to({startPosition:0},0).to({x:-22.8},9).wait(17));

	// Layer 4
	this.instance_2 = new lib.mouthopen("synched",0);
	this.instance_2.setTransform(33.8,12.2,0.608,0.346);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(111).to({_off:false},0).to({scaleY:0.68},3).to({scaleX:0.17,scaleY:0.15},3).to({scaleX:0.61,scaleY:0.42},3).to({scaleY:0.15},3).to({scaleY:0.75},5).to({scaleY:0.37},4).wait(1).to({scaleY:0.35},0).to({scaleY:0.68},3).to({scaleX:0.17,scaleY:0.15},3).to({scaleX:0.61,scaleY:0.42},3).to({scaleY:0.15},3).to({scaleY:0.75},5).to({scaleY:0.37},4).to({_off:true},1).wait(26));

	// Layer 1
	this.instance_3 = new lib.megaphonehand("synched",0);
	this.instance_3.setTransform(-0.1,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({startPosition:0},0).to({x:5.9},10,cjs.Ease.get(1)).wait(44).to({startPosition:0},0).to({x:-0.1},10).wait(17));

	// Layer 1
	this.instance_4 = new lib.eyesblink();
	this.instance_4.setTransform(47.3,1.6,1,1,0,0,0,0,-1.9);

	this.instance_5 = new lib.eyes();
	this.instance_5.setTransform(34.8,4.6,1,1,0,0,0,0,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},100).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},43).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},9).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({x:34.8,y:4.6},10,cjs.Ease.get(1)).to({_off:true},1).wait(44).to({_off:false},0).to({x:47.3,y:1.6},9).wait(17));

	// Layer 7
	this.instance_6 = new lib.idlebody("synched",0);
	this.instance_6.setTransform(53.2,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(154).to({startPosition:0},0).wait(27));

	// Layer 8
	this.instance_7 = new lib.hornarm("synched",0);
	this.instance_7.setTransform(6.7,34.2,0.287,0.287,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(100).to({startPosition:0},0).to({scaleX:0.18,x:11.2},10,cjs.Ease.get(1)).wait(44).to({startPosition:0},0).to({scaleX:0.29,x:6.7},10).wait(17));

	// Layer 9
	this.instance_8 = new lib.shadow("synched",0);
	this.instance_8.setTransform(50,90.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,-40.3,171.8,134.3);


// stage content:
(lib.wranxanims2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.megaphoneanim();
	this.instance.setTransform(120,122.9,1,1,0,0,0,18,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(154.1,150.7,171.8,134.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;