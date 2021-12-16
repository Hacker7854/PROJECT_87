
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image , function(Img){
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		 block_image_object.set({
        top:block_y,
		left:block_x  	
		 });
		 canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') {
		new_image('https://freepngimg.com/thumb/harry_potter/9-2-harry-potter-png-hd.png');
    console.log("Harry Potter");
		
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('https://64.media.tumblr.com/6bfa99aefaf23c2ccdc7f92ab31f181c/tumblr_o1a9lkdMEz1rxkqbso1_1280.png');
		console.log("Hermione Granger");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('https://www.nicepng.com/png/full/312-3129359_ron-weasley-png.png');
		console.log("Ron Weasley");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('https://www.seekpng.com/png/full/232-2323905_neville-longbottom-png-harry-potter-wand-neville-longbottom.png');
		console.log("Neville Longbottom");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	     new_image('https://www.pngkit.com/png/full/229-2298077_l-hagrid01-caph-hpe3-hagrid-cutout.png');
		 console.log("Hagrid");
	}
	
}

