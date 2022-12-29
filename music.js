//const synth = new Tone.Synth().toMaster()
//synth.triggerAttackRelease('C4', '8n')
const tonic = document.getElementById("tonic").value;
//Here are the ratios of the various notes to the root note...

const Sa = new Tone.Oscillator(tonic, "sine").toDestination();
const Re1 = new Tone.Oscillator(tonic*16/15, "sine").toDestination();
const Re2 = new Tone.Oscillator(tonic*9/8, "sine").toDestination();
const Re3 = new Tone.Oscillator(tonic*6/5, "sine").toDestination();
const Ga1 = new Tone.Oscillator(tonic*9/8, "sine").toDestination();
const Ga2 = new Tone.Oscillator(tonic*6/5, "sine").toDestination();
const Ga3 = new Tone.Oscillator(tonic*5/4, "sine").toDestination();
const Ma1 = new Tone.Oscillator(tonic*4/3, "sine").toDestination();
const Ma2 = new Tone.Oscillator(tonic*17/12, "sine").toDestination();
const Pa = new Tone.Oscillator(tonic*3/2, "sine").toDestination();
const Dha1 = new Tone.Oscillator(tonic*8/5, "sine").toDestination();
const Dha2 = new Tone.Oscillator(tonic*5/3, "sine").toDestination();
const Dha3 = new Tone.Oscillator(tonic*9/5, "sine").toDestination();
const Ni1 = new Tone.Oscillator(tonic*5/3, "sine").toDestination();
const Ni2 = new Tone.Oscillator(tonic*9/5, "sine").toDestination();
const Ni3 = new Tone.Oscillator(tonic*15/8, "sine").toDestination();
const Saa = new Tone.Oscillator(tonic*2, "sine").toDestination();


//Here are the functions for differnent ragas with their formulas

function MayaMalavagowla() {
const MayamalavagowlaRaga = [
    Sa,
    Re1,
    Ga3,
	Ma1,
	Pa,
	Dha1,
	Ni3,
	Saa];
SaraliVarisai01(MayamalavagowlaRaga);
}

function DhiraShankarabharanam() {
const DhiraShankarabharanamRaga = [
    Sa,
    Re2,
    Ga3,
	Ma1,
	Pa,
	Dha2,
	Ni3,
	Saa];
SaraliVarisai01(DhiraShankarabharanamRaga);
}

function NataBhairavi() {
const NataBhairaviRaga = [
    Sa,
    Re2,
    Ga2,
	Ma1,
	Pa,
	Dha1,
	Ni2,
	Saa];
SaraliVarisai01(NataBhairaviRaga);
}


function WesternBlues() {
const WesternBluesRaga = [
    Sa,
    Re3,
    Ma1,
	Ma2,
	Pa,
	Ni2,
	Saa];
SaraliVarisai01(WesternBluesRaga);
}

function Kalyani() {
const Kalyani = [
    Sa,
    Re2,
    Ga3,
	Ma2,
	Pa,
	Dha2,
	Ni2,
	Saa];
SaraliVarisai01(Kalyani);
}


document.getElementById("Sa").addEventListener("click", Saf);
document.getElementById("Re1").addEventListener("click", Re1f);
document.getElementById("Re2").addEventListener("click", Re2f);
document.getElementById("Re3").addEventListener("click", Re3f);
document.getElementById("Ga1").addEventListener("click", Ga1f);
document.getElementById("Ga2").addEventListener("click", Ga2f);
document.getElementById("Ga3").addEventListener("click", Ga3f);
document.getElementById("Ma1").addEventListener("click", Ma1f);
document.getElementById("Ma2").addEventListener("click", Ma2f);
document.getElementById("Pa").addEventListener("click", Paf);
document.getElementById("Dha1").addEventListener("click", Dha1f);
document.getElementById("Dha2").addEventListener("click",Dha2f);
document.getElementById("Dha3").addEventListener("click", Dha3f);
document.getElementById("Ni1").addEventListener("click", Ni1f);
document.getElementById("Ni2").addEventListener("click", Ni2f);
document.getElementById("Ni3").addEventListener("click", Ni3f);
document.getElementById("Saa").addEventListener("click", Saaf);
document.getElementById("Kill").addEventListener("click",Kill);
document.getElementById("MayaMalavagowla").addEventListener("click", MayaMalavagowla);
document.getElementById("DhiraShankarabharanam").addEventListener("click", DhiraShankarabharanam);
document.getElementById("NataBhairavi").addEventListener("click", NataBhairavi);
document.getElementById("WesternBlues").addEventListener("click", WesternBlues);
document.getElementById("Kalyani").addEventListener("click", Kalyani);

function Kill(){
	location.reload();
}

function Saf() {
 if (Sa.state == 'stopped') {
    Sa.start();
	Sa.stop("+1");
	//info.textContent = 'Frequency is ' + Sa;
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Sa.stop();
		//alert( 'Stopped'+ osc.state);
		}

}

function Re1f() {
 if (Re1.state == 'stopped') {
    Re1.start();
	Re1.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Re1.stop();
		//alert( 'Stopped'+ osc.state);
		}

}

function Re2f() {
 if (Re2.state == 'stopped') {
    Re2.start();
	Re2.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Re2.stop();
		//alert( 'Stopped'+ osc.state);
		}

}


function Re3f() {
 if (Re3.state == 'stopped') {
    Re3.start();
	Re3.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Re3.stop();
		//alert( 'Stopped'+ osc.state);
		}

}

function Ga1f() {
 if (Ga1.state == 'stopped') {
    Ga1.start();
	Ga1.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ga1.stop();
		//alert( 'Stopped'+ osc.state);
		}

}

function Ga2f() {
 if (Ga2.state == 'stopped') {
    Ga2.start();
	Ga2.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ga2.stop();
		//alert( 'Stopped'+ osc.state);
		}

}

function Ga3f() {
 if (Ga3.state == 'stopped') {
    Ga3.start();
	Ga3.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ga3.stop();
		//alert( 'Stopped'+ osc.state);
		}

}

function Ma1f() {
 if (Ma1.state == 'stopped') {
    Ma1.start();
	Ma1.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ma1.stop();
		//alert( 'Stopped'+ osc.state);
		}

}

function Ma2f() {
 if (Ma2.state == 'stopped') {
    Ma2.start();
	Ma2.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ma2.stop();
		//alert( 'Stopped'+ osc.state);
		}

}


function Paf() {
 if (Pa.state == 'stopped') {
    Pa.start();
	Pa.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Pa.stop();
		//alert( 'Stopped'+ osc.state);
		}

}

function Dha1f() {
 if (Dha1.state == 'stopped') {
    Dha1.start();
	Dha1.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Dha1.stop();
		//alert( 'Stopped'+ osc.state);
		}

}

function Dha2f() {
 if (Dha2.state == 'stopped') {
    Dha2.start();
	Dha2.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Dha2.stop();
		//alert( 'Stopped'+ osc.state);
		}

}

function Dha3f() {
 if (Dha3.state == 'stopped') {
    Dha3.start();
	Dha3.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Dha3.stop();
		//alert( 'Stopped'+ osc.state);
		}

}

function Ni1f() {
 if (Ni1.state == 'stopped') {
    Ni1.start();
	Ni1.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ni1.stop();
		//alert( 'Stopped'+ osc.state);
		}

}

function Ni2f() {
 if (Ni2.state == 'stopped') {
    Ni2.start();
	Ni2.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ni2.stop();
		//alert( 'Stopped'+ osc.state);
		}

}

function Ni3f() {
 if (Ni3.state == 'stopped') {
    Ni3.start();
	Ni3.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ni3.stop();
		//alert( 'Stopped'+ osc.state);
		}

}

function Saaf() {
 if (Saa.state == 'stopped') {
    Saa.start();
	Saa.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Saa.stop();
		//alert( 'Stopped'+ osc.state);
		}

}





function PlayRaga(Raga) {
	for (i = 0; i < Raga.length; i++) {
     console.log("somehtin" + i );
	 //Raga[i].start();
	 //Raga[i].stop("+1");
	 PlayNote(Raga[i]);
	 //setTimeout( () => PlayNote(Raga[i]), i*1000 );
	 //delay(i*1000).then(() => { PlayNote(Raga[i])});
}
}

//const interval = 0; //jest set to 0 for identifying the stop command

function SaraliVarisai01(Raga) {
//	alert( 'Started'+ interval);
//if(interval!== 0) javascript_abort(); 
var interval = 1000; // how much time should the delay between two iterations be (in milliseconds)?



var loop = function () {
  return new Promise(function (outerResolve) {
    var promise = Promise.resolve();
    var i = 0;
    var next = function () {
      var el = Raga[i];
      // your code here
	  PlayNote(Raga[i]);
	  //end code
      console.log(el);
      if (++i < Raga.length) {
        promise = promise.then(function () {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve();
              next();
            }, interval);
          });
        });
      } else {
        setTimeout(outerResolve, interval);
        // or just call outerResolve() if you don't want to wait after the last element
      }
    };
    next();
  });
};

loop().then(function () {
  console.log('Loop finished.');
  SaraliVarisai01(Raga.reverse());
});

}


function PlayNote(Note) {
	Note.start();
	 Note.stop("+1");
}

function PlayTheNote(Note) {
 if (Note.state == 'stopped') {
    Note.start();
	Note.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Re3.stop();
		//alert( 'Stopped'+ osc.state);
		}
}

function javascript_abort()
{
   throw new Error('This is not an error. This is just to abort javascript');
}
