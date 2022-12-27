//const synth = new Tone.Synth().toMaster()
//synth.triggerAttackRelease('C4', '8n')


const osc = new Tone.Oscillator(440, "sine").toDestination();

document.getElementById("play-button").addEventListener("click", function() {
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

 if (osc.state == 'stopped') {
    osc.start();
	//osc.start.triggerAttackRelease('8n')
	//alert( 'Started'+ osc.state);
 } else {
		osc.stop();
		//alert( 'Stopped'+ osc.state);
		}

});