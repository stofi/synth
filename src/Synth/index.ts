import Note from '../MusicTheory/Note';

type Waveform = 'sine' | 'square' | 'sawtooth' | 'triangle' | 'custom'

export default class Synth {
  waveform: Waveform
  sampleRate: number
  audioContext: AudioContext
  gainNode: GainNode

  constructor(waveform: Waveform) {
    this.waveform = waveform
    this.sampleRate = 44100
    this.audioContext = new (window as any).AudioContext()
    this.gainNode = this.audioContext.createGain()
    this.setGain(0.25)
  }
  setGain(gain: number) {
    this.gainNode.gain.value = gain
  }
  playNote(note: Note, duration: number) {
    const frequency = Math.pow(2, (note.midi - 69) / 12) * 440
    const osc = this.audioContext.createOscillator()
    osc.type = this.waveform
    osc.frequency.value = frequency
    osc.connect(this.gainNode)
    this.gainNode.connect(this.audioContext.destination)
    osc.start(0)
    setTimeout(() => {
      osc.stop()
    }, duration * 1000)
  }
  stopAllNotes() {
    this.gainNode.disconnect()
  }
  playChord(chord: Note[], duration: number) {
    chord.forEach((note) => this.playNote(note, duration))
  }

  // playMinor7thChord(root: number, duration: number) {
  //   this.playChord([root + 4, root + 7, root + 11], duration)
  // }
}
