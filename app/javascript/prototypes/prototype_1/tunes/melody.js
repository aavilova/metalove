const synth = {
  volume: -25,
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

const pingPongDelay = { wet: 0.2, delayTime: 0.25, maxDelayTime: 1 }

const freeverb = {
  wet: 0.3,
  type: 'sine',
  roomSize : .5 ,
  dampening : 3000
}

const sequence = {
  steps: [
    {
      time: '0:4:0',
      noteName: 'C4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:0:2',
      noteName: 'A4',
      duration: '1n',
      velocity: 1
    },
    {
      time: '1:1:0',
      noteName: 'E4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:0',
      noteName: 'G4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '2:3:0',
      noteName: 'C4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:1',
      noteName: 'E4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:2',
      noteName: 'G4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:5:0',
      noteName: 'D4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:1:0',
      noteName: 'G4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:1:2',
      noteName: 'E4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:1:3',
      noteName: 'D5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:0',
      noteName: 'C4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:3:0',
      noteName: 'G4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:2',
      noteName: 'C5',
      duration: '4n',
      velocity: 1
    }
  ],
  duration: '2m'
}

export { synth, chorus, pingPongDelay, freeverb, sequence }
