import * as Tone from 'tone'
import React, { Component } from 'react'

import * as bassSettings from './tunes/bass.js'
import * as melodySettings from './tunes/melody.js'
import * as metaloveSettings from './tunes/metalove.js'
import * as highSettings from './tunes/high.js'

import ToneSynth from './modules/ToneSynth.jsx'

import SC_Button from './components/SC_Button'
import SC_Slider from './components/SC_Slider'
import SC_Knob from './components/SC_Knob'

let highSynth
let highChorus
let highPingPongDelay

let bassSynth
let bassChorus
let bassPingPongDelay
let bassFreeverb

let melodySynth
let melodyChorus
let melodyPingPongDelay
let melodyFreeverb

export default class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      highSettings,
      bassSettings,
      melodySettings,
      metaloveSettings
    }
  }


  handleMelodyStart = () => {
    const {melodySettings} = this.state


    //
    melodySynth = new Tone.Synth(melodySettings.synth)
    melodyChorus = new Tone.Chorus(melodySettings.chorus).start()

    melodyPingPongDelay = new Tone.PingPongDelay(
      melodySettings.pingPongDelay
    ).toDestination()

    melodyFreeverb = new Tone.Freeverb(
      melodySettings.freeverb
    ).toDestination()

    melodySynth.chain(melodyChorus, melodyPingPongDelay, melodyFreeverb)

    const melodyPart = new Tone.Part((time, note) => {
      melodySynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, melodySettings.sequence.steps).start(0)

    melodyPart.loopEnd = melodySettings.sequence.duration
    melodyPart.loop = true
    //
    //
    const sampler = new Tone.Sampler({
    	urls: {
    		A1: "metalove.mp3",
    		A2: "metalove.mp3",
    	},
    	baseUrl: "http://localhost:3000/samples/",
    	// onload: () => {
    	// 	sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 10);
    	// }
    }).toDestination();

    const metalovePart = new Tone.Part((time, note) => {
      sampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, metaloveSettings.sequence.steps).start(0)

    metalovePart.loopEnd = metaloveSettings.sequence.duration
    metalovePart.loop = true

    Tone.Transport.start()
  }

  handleBassStart = () => {
    const { bassSettings} = this.state

    //
    //
    bassSynth = new Tone.Synth(bassSettings.synth)
    bassChorus = new Tone.Chorus(bassSettings.chorus).start()

    bassPingPongDelay = new Tone.PingPongDelay(
      bassSettings.pingPongDelay
    ).toDestination()

    bassFreeverb = new Tone.Freeverb(
      bassSettings.freeverb
    ).toDestination()

    bassSynth.chain(bassChorus, bassPingPongDelay, bassFreeverb)



    const bassPart = new Tone.Part((time, note) => {
      bassSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, bassSettings.sequence.steps).start(0)

    bassPart.loopEnd = bassSettings.sequence.duration
    bassPart.loop = true
    //
    //

    Tone.Transport.start()
  }


  handleHighStart = () => {
    const { highSettings} = this.state

    //
    //


    let freeverb = new Tone.Freeverb().toDestination();

    highSynth = new Tone.Synth(highSettings.synth).connect(freeverb);
    highChorus = new Tone.Chorus(highSettings.chorus).start()

    highPingPongDelay = new Tone.PingPongDelay(
      highSettings.pingPongDelay
    ).toDestination()

    highSynth.chain(highChorus, highPingPongDelay, freeverb)



    const highPart = new Tone.Part((time, note) => {
      highSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, highSettings.sequence.steps).start(0)

    highPart.loopEnd = highSettings.sequence.duration
    highPart.loop = true
    //
    //

    Tone.Transport.start()
  }

  handleBassValueChange = (property, value) => {
    const { bassSettings } = this.state

    if (property === 'synthType') {
      bassSynth.oscillator.type = value
      bassSettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      bassSynth.envelope.attack = value
      bassSettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      bassSynth.envelope.decay = value
      bassSettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      bassSynth.envelope.sustain = value
      bassSettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      bassSynth.envelope.release = value
      bassSettings.synth.envelope.release = value
    } else if (property === 'pingPongDelayWet') {
      bassPingPongDelay.wet.value = value
      bassSettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      bassChorus.wet.value = value
      bassSettings.chorus.wet = value
    } else if (property === 'freeverbWet') {
      bassFreeverb.wet.value = value
      bassSettings.freeverb.wet = value
    }

    this.setState({
      bassSettings
    })
  }

  handleHighValueChange = (property, value) => {
    const { highSettings } = this.state

    if (property === 'synthType') {
      highSynth.oscillator.type = value
      highSettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      highSynth.envelope.attack = value
      highSettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      highSynth.envelope.decay = value
      highSettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      highSynth.envelope.sustain = value
      highSettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      highSynth.envelope.release = value
      highSettings.synth.envelope.release = value
    } else if (property === 'pingPongDelayWet') {
      highPingPongDelay.wet.value = value
      highSettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      highChorus.wet.value = value
      highSettings.chorus.wet = value
    }

    this.setState({
      highSettings
    })
  }

  handleMelodyValueChange = (property, value) => {
    const { melodySettings } = this.state

    if (property === 'synthType') {
      melodySynth.oscillator.type = value
      melodySettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      melodySynth.envelope.attack = value
      melodySettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      melodySynth.envelope.decay = value
      melodySettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      melodySynth.envelope.sustain = value
      melodySettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      melodySynth.envelope.release = value
      melodySettings.synth.envelope.release = value
    } else if (property === 'pingPongDelayWet') {
      melodyPingPongDelay.wet.value = value
      melodySettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      melodyChorus.wet.value = value
      melodySettings.chorus.wet = value
    } else if (property === 'freeverbWet') {
      melodyFreeverb.wet.value = value
      melodySettings.freeverb.wet = value
    }

    this.setState({
      melodySettings
    })
  }


  render() {
    const { bassSettings, melodySettings } = this.state

    return (
      <div className="Container">
        <div className="desclaimer">
          your love is a wire <br/>
          make it sound out loud <br/>
          <br/>
          press cmd + R to restart your feeling of love
        </div>
        <div className="start">
          <div className="melody">
            <SC_Button
              text="left"
              handleClick={this.handleMelodyStart}
            />
          </div>
          <div className="high">
            <SC_Button
              text="center"
              handleClick={this.handleHighStart}
            />
          </div>
          <div className="bass">
            <SC_Button
              text="right"
              handleClick={this.handleBassStart}
            />
          </div>
        </div>

        <div className="one">
          <ToneSynth
            settings={melodySettings}
            handleValueChange={this.handleMelodyValueChange}
          />
          <div className="knobs">
            <SC_Knob
              name="chorus"
              property="chorusWet"
              min={0}
              max={1}
              step={0.01}
              value={melodySettings.chorus.wet}
              handleChange={this.handleMelodyValueChange}
            />
            <SC_Knob
              name="delay"
              property="pingPongDelayWet"
              min={0}
              max={1}
              step={0.01}
              value={melodySettings.pingPongDelay.wet}
              handleChange={this.handleMelodyValueChange}
            />
            <SC_Knob
              name="freeverb"
              property="freeverbWet"
              min={0}
              max={1}
              value={melodySettings.freeverb.wet}
              handleChange={this.handleMelodyValueChange}
            />

          </div>
        </div>

        <div className="two">
          <ToneSynth
            settings={bassSettings}
            handleValueChange={this.handleBassValueChange}
          />
          <div className="knobs">
            <SC_Knob
              name="chorus"
              property="chorusWet"
              min={0}
              max={1}
              value={bassSettings.chorus.wet}
              handleChange={this.handleBassValueChange}
            />
            <SC_Knob
              name="delay"
              property="pingPongDelayWet"
              min={0}
              max={1}
              value={bassSettings.pingPongDelay.wet}
              handleChange={this.handleBassValueChange}
            />
            <SC_Knob
              name="freeverb"
              property="freeverbWet"
              min={0}
              max={1}
              value={bassSettings.freeverb.wet}
              handleChange={this.handleBassValueChange}
            />

          </div>
        </div>

        <div className="three">
          <ToneSynth
            settings={highSettings}
            handleValueChange={this.handleHighValueChange}
          />
          <div className="knobs">
            <SC_Knob
              name="chorus"
              property="chorusWet"
              min={0}
              max={1}
              value={highSettings.chorus.wet}
              handleChange={this.handleHighValueChange}
            />
            <SC_Knob
              name="delay"
              property="pingPongDelayWet"
              min={0}
              max={1}
              value={highSettings.pingPongDelay.wet}
              handleChange={this.handleHighValueChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
