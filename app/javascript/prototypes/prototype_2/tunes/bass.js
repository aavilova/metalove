const synth = {
  volume: -10,
  detune: 0,
  portamento: 0.05,
  envelope: {
    attack: 0.05,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 1.5,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'sine',
    modulationType: 'sine',
    phase: 0,
    harmonicity: 0.5
  }
}

const chorus = {
  wet: 0.3,
  type: 'sine',
  frequency: 1.5,
  delayTime: 3.5,
  depth: 0.7,
  spread: 180
}

const pingPongDelay = { wet: 1, delayTime: 0.25, maxDelayTime: 1 }

const freeverb = {
  wet: 0.3,
  type: 'sine',
  roomSize : 0.7 ,
  dampening : 3000
}

const sequence = {
  steps: [
    {
      time: '0:1:0',
      noteName: 'A3',
      duration: '3n',
      velocity: .2
    },
    {
      time: '0:2:0',
      noteName: 'A3',
      duration: '3n',
      velocity: .2
    },
    {
      time: '0:3:0',
      noteName: 'A3',
      duration: '3n',
      velocity: .2
    },
    {
      time: '0:4:0',
      noteName: 'A3',
      duration: '3n',
      velocity: .2
    },
    {
      time: '0:5:0',
      noteName: 'B3',
      duration: '1n',
      velocity: .2
    },
    {
      time: '1:0:0',
      noteName: 'B3',
      duration: '1n',
      velocity: .2
    },
    {
      time: '1:1:0',
      noteName: 'B3',
      duration: '1n',
      velocity: .2
    },
    {
      time: '1:2:0',
      noteName: 'B3',
      duration: '1n',
      velocity: .2
    },
    {
      time: '1:3:0',
      noteName: 'B3',
      duration: '1n',
      velocity: .2
    },
    {
      time: '1:4:0',
      noteName: 'B3',
      duration: '1n',
      velocity: .2
    },
    {
      time: '1:5:0',
      noteName: 'B3',
      duration: '1n',
      velocity: .2
    },
  ],
  duration: '2m'
}

export { synth, chorus, pingPongDelay, freeverb, sequence }
