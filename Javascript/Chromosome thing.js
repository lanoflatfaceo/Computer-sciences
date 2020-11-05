
var isNeutered=true;
var isDog=false;
var weightLB=16;
var isCat=false;
var isElephant=false;

//calculate weight in KG and RER (Resting Energy Requirement)
var weightKG =weightLB/2.2;
var restingEnergyReq=70* Math.pow(weightKG, 0.75);

//Output daily caloric needs
if (isDog==true) {
  if (isNeutered) {
    println(1.6 * restingEnergyReq);
  } else{
    println(1.8 * restingEnergyReq);
  }

} elseif(isCat==true) {//cat
  if (isNeutered){
    println(1.2 * restingEnergyReq);
    }else{
      println(1.4 *restingEnergyReq);
    }
} elseif(isElephant==true){

}


// elephants and lions
if
