let input, button, greeting;

function setup() {
  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'What else do we need?');


  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);



//conversation between husband and wife about grocery shopping
 //Honey! Did you get the list?
 //yes, I have it.

}

function greet() {

  var conversation=["Honey! Did you get the list?", "Yes, I have it.", "Great, what else do we need?"];
  var shoppinglist=["eggs", "potatoes", "fish"];
  const txt=input.value();
  shoppinglist.push(txt);



for(var i =0; i<conversation.length; i++) {
  print(conversation[i]);
  a= createElement('p' , conversation[i]);
//a.position(20,500);
}
for(var b=0; b<shoppinglist.length; b++){
 // push();
  print(shoppinglist[b]);

  s = createElement('p' , shoppinglist[b]);
//s.position(20,600);
  //pop();


}

  print("Ok, let's go then");
}
