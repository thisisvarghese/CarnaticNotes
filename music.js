//const synth = new Tone.Synth().toMaster()
//synth.triggerAttackRelease('C4', '8n')
const tonic = document.getElementById("tonic").value;

const sa = new Tone.Oscillator(tonic, "sine").toDestination();

document.getElementById("Sa").addEventListener("click", function() {
 // if (Tone.Transport.state !== 'started') {
 //   Tone.Transport.start();
 // } else {
  //  Tone.Transport.stop();
 // }
// create a synth
				//const synth = new Tone.Synth().toDestination();
// play a note from that synth
				//synth.triggerAttackRelease("C4", "8n");
//await Tone.start()		
//const synth = new Tone.Synth().toMaster()
//synth.triggerAttackRelease('C4', '8n')

 // alert( 'Hello, world!' );
 //const amOsc = new Tone.AMOscillator(240, "sine", "square").toDestination().start();
 //const osc = new Tone.Oscillator(440, "sine").toDestination().start();
 //var tonic = document.getElementById("tonic").value;

//alert( 'tonic' + tonic);
//document.write(tonic.blink());
 if (sa.state == 'stopped') {
    sa.start();
	sa.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		sa.stop();
		//alert( 'Stopped'+ osc.state);
		}

});

const Re1 = new Tone.Oscillator(tonic*16/15, "sine").toDestination();
document.getElementById("Re1").addEventListener("click", function() {
 // if (Tone.Transport.state !== 'started') {
 //   Tone.Transport.start();
 // } else {
  //  Tone.Transport.stop();
 // }
// create a synth
				//const synth = new Tone.Synth().toDestination();
// play a note from that synth
				//synth.triggerAttackRelease("C4", "8n");
//await Tone.start()		
//const synth = new Tone.Synth().toMaster()
//synth.triggerAttackRelease('C4', '8n')

 // alert( 'Hello, world!' );
 //const amOsc = new Tone.AMOscillator(240, "sine", "square").toDestination().start();
 //const osc = new Tone.Oscillator(440, "sine").toDestination().start();
 //var tonic = document.getElementById("tonic").value;

//alert( 'Freq' + tonic*16/15);
 if (Re1.state == 'stopped') {
    Re1.start();
	Re1.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Re1.stop();
		//alert( 'Stopped'+ osc.state);
		}

});


const Re2 = new Tone.Oscillator(tonic*9/8, "sine").toDestination();
document.getElementById("Re2").addEventListener("click", function() {
//alert( 'Freq' + tonic*16/15);
 if (Re2.state == 'stopped') {
    Re2.start();
	Re2.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Re2.stop();
		//alert( 'Stopped'+ osc.state);
		}

});

const Re3 = new Tone.Oscillator(tonic*6/5, "sine").toDestination();
document.getElementById("Re3").addEventListener("click", function() {
//alert( 'Freq' + tonic*16/15);
 if (Re3.state == 'stopped') {
    Re3.start();
	Re3.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ga1.stop();
		//alert( 'Stopped'+ osc.state);
		}

});

const Ga1 = new Tone.Oscillator(tonic*9/8, "sine").toDestination();
document.getElementById("Ga1").addEventListener("click", function() {
//alert( 'Freq' + tonic*9/8);
 if (Ga1.state == 'stopped') {
    Ga1.start();
	Ga1.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ga1.stop();
		//alert( 'Stopped'+ osc.state);
		}

});

const Ga2 = new Tone.Oscillator(tonic*6/5, "sine").toDestination();
document.getElementById("Ga2").addEventListener("click", function() {
//alert( 'Freq' + tonic*6/5);
 if (Ga2.state == 'stopped') {
    Ga2.start();
	Ga2.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ga3.stop();
		//alert( 'Stopped'+ osc.state);
		}

});

const Ga3 = new Tone.Oscillator(tonic*5/4, "sine").toDestination();
document.getElementById("Ga3").addEventListener("click", function() {
//alert( 'Freq' + tonic*5/4);
 if (Ga3.state == 'stopped') {
    Ga3.start();
	Ga3.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ga31.stop();
		//alert( 'Stopped'+ osc.state);
		}

});

const Ma1 = new Tone.Oscillator(tonic*4/3, "sine").toDestination();
document.getElementById("Ma1").addEventListener("click", function() {
//alert( 'Freq' + tonic*4/3);
 if (Ma1.state == 'stopped') {
    Ma1.start();
	Ma1.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ma1.stop();
		//alert( 'Stopped'+ osc.state);
		}

});


const Ma2 = new Tone.Oscillator(tonic*17/12, "sine").toDestination();
document.getElementById("Ma2").addEventListener("click", function() {
//alert( 'Freq' + tonic*17/12);
 if (Ma2.state == 'stopped') {
    Ma2.start();
	Ma2.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ma2.stop();
		//alert( 'Stopped'+ osc.state);
		}

});






const Pa = new Tone.Oscillator(tonic*3/2, "sine").toDestination();
document.getElementById("Pa").addEventListener("click", function() {
//alert( 'Freq' + tonic*3/2);
 if (Pa.state == 'stopped') {
    Pa.start();
	Pa.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Pa.stop();
		//alert( 'Stopped'+ osc.state);
		}

});


const Dha1 = new Tone.Oscillator(tonic*8/5, "sine").toDestination();
document.getElementById("Dha1").addEventListener("click", function() {
//alert( 'Freq' + tonic*8/5);
 if (Dha1.state == 'stopped') {
    Dha1.start();
	Dha1.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Dha1.stop();
		//alert( 'Stopped'+ osc.state);
		}

});


const Dha2 = new Tone.Oscillator(tonic*5/3, "sine").toDestination();
document.getElementById("Dha2").addEventListener("click", function() {
//alert( 'Freq' + tonic*5/3);
 if (Dha2.state == 'stopped') {
    Dha2.start();
	Dha2.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Dha2.stop();
		//alert( 'Stopped'+ osc.state);
		}

});

const Dha3 = new Tone.Oscillator(tonic*9/5, "sine").toDestination();
document.getElementById("Dha3").addEventListener("click", function() {
//alert( 'Freq' + tonic*9/5);
 if (Dha3.state == 'stopped') {
    Dha3.start();
	Dha3.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Dha3.stop();
		//alert( 'Stopped'+ osc.state);
		}

});

const Ni1 = new Tone.Oscillator(tonic*5/3, "sine").toDestination();
document.getElementById("Ni1").addEventListener("click", function() {
//alert( 'Freq' + tonic*16/15);
 if (Ni1.state == 'stopped') {
    Ni1.start();
	Ni1.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ni1.stop();
		//alert( 'Stopped'+ osc.state);
		}

});

const Ni2 = new Tone.Oscillator(tonic*9/5, "sine").toDestination();
document.getElementById("Ni2").addEventListener("click", function() {
//alert( 'Freq' + tonic*9/5);
 if (Ni2.state == 'stopped') {
    Ni2.start();
	Ni2.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ni2.stop();
		//alert( 'Stopped'+ osc.state);
		}

});

const Ni3 = new Tone.Oscillator(tonic*15/8, "sine").toDestination();
document.getElementById("Ni3").addEventListener("click", function() {
//alert( 'Freq' + tonic*15/9);
 if (Ni3.state == 'stopped') {
    Ni3.start();
	Ni3.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Ni3.stop();
		//alert( 'Stopped'+ osc.state);
		}

});

const Saa = new Tone.Oscillator(tonic*2, "sine").toDestination();
document.getElementById("Saa").addEventListener("click", function() {
//alert( 'Freq' + tonic*15/9);
 if (Saa.state == 'stopped') {
    Saa.start();
	Saa.stop("+1");
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		Saa.stop();
		//alert( 'Stopped'+ osc.state);
		}

});