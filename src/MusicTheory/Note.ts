type NoteName =
  | 'C'
  | 'C#'
  | 'D'
  | 'D#'
  | 'E'
  | 'F'
  | 'F#'
  | 'G'
  | 'G#'
  | 'A'
  | 'A#'
  | 'B'
  | 'Db'
  | 'Eb'
  | 'Gb'
  | 'Ab'
  | 'Bb'

export default class Note {
  static names: NoteName[] = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ]

  midi: number

  constructor(midi: number) {
    this.midi = midi
  }

  get name(): NoteName {
    return Note.getName(this.midi)
  }

  get octave(): number {
    return Note.getOctave(this.midi)
  }

  static getName(midi: number): NoteName {
    return Note.names[midi % 12]
  }

  static getOctave(midi: number): number {
    return Math.floor(midi / 12) - 1
  }
}
