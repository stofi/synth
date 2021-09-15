import Note from './Note';

type MusicalScale =
  | 'Major'
  | 'Minor'
  | 'Dorian'
  | 'Phrygian'
  | 'Lydian'
  | 'Mixolydian'
  | 'Locrian'

type ChordSymbol =
  | 'I'
  | 'II'
  | 'IV'
  | 'V'
  | 'i'
  | 'ii'
  | 'iii'
  | 'iiio'
  | 'iio'
  | 'io'
  | 'iv'
  | 'v'
  | 'vi'
  | 'vii'
  | 'viio'
  | 'vio'
  | 'vo'
  | '♭II'
  | '♭III'
  | '♭V'
  | '♭VI'
  | '♭VII'
  | '♭iii'
  | '♭vii'
  | '♯ivo'

type ScaleChords = {
  [key in MusicalScale]: ChordSymbol[]
}

const scaleChords: ScaleChords = {
  Major: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'viio'],
  Dorian: ['i', 'ii', '♭III', 'IV', 'v', 'vio', '♭VII'],
  Phrygian: ['i', '♭II', '♭III', 'iv', 'vo', '♭VI', '♭vii'],
  Lydian: ['I', 'II', 'iii', '♯ivo', 'V', 'vi', 'vii'],
  Mixolydian: ['I', 'ii', 'iiio', 'IV', 'v', 'vi', '♭VII'],
  Minor: ['i', 'iio', '♭III', 'iv', 'v', '♭VI', '♭VII'],
  Locrian: ['io', '♭II', '♭iii', 'iv', '♭V', '♭VI', '♭vii'],
}


export default class MusicTheory {
  scale: MusicalScale
  rootNote: Note

  static scaleChords: ScaleChords = {
    Major: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'viio'],
    Dorian: ['i', 'ii', '♭III', 'IV', 'v', 'vio', '♭VII'],
    Phrygian: ['i', '♭II', '♭III', 'iv', 'vo', '♭VI', '♭vii'],
    Lydian: ['I', 'II', 'iii', '♯ivo', 'V', 'vi', 'vii'],
    Mixolydian: ['I', 'ii', 'iiio', 'IV', 'v', 'vi', '♭VII'],
    Minor: ['i', 'iio', '♭III', 'iv', 'v', '♭VI', '♭VII'],
    Locrian: ['io', '♭II', '♭iii', 'iv', '♭V', '♭VI', '♭vii'],
  }

  constructor(scale: MusicalScale, rootNote: number) {
    this.scale = scale
    this.rootNote = new Note(rootNote)
  }

  getNotes(num: number): Note[] {
    const notes: Note[] = []
    for (let i = 0; i < num; i++) {
      notes.push(this.getNote(i))
    }
    return notes
  }

  getNote(offset: number): Note {
    return new Note(this.rootNote.midi + offset)
  }

  getScale(): Note[] {
    const notes: Note[] = []
    switch (this.scale) {
      case 'Major':
        ;[0, 2, 4, 5, 7, 9, 11].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'Minor':
        ;[0, 2, 3, 5, 7, 8, 10].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'Dorian':
        ;[0, 2, 3, 5, 7, 9, 10].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'Phrygian':
        ;[0, 1, 3, 5, 7, 8, 10].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'Lydian':
        ;[0, 2, 4, 6, 7, 9, 11].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'Mixolydian':
        ;[0, 2, 4, 5, 7, 9, 10].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'Locrian':
        ;[0, 1, 3, 5, 6, 8, 10].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      default:
        throw new Error('Unknown scale')
    }
    return notes
  }

  getChord(name: ChordSymbol): Note[] {
    const notes: Note[] = []
    switch (name) {
      case 'I':
        ;[0, 4, 7].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'ii':
        ;[2, 5, 9].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'iii':
        ;[4, 7, 11].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'IV':
        ;[5, 9, 12].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'V':
        ;[7, 10, 14].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'vi':
        ;[9, 12, 16].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'viio':
        ;[11, 15, 18].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'i':
        ;[1, 3, 6].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'ii':
        ;[2, 5, 8].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'iii':
        ;[4, 7, 10].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'iv':
        ;[5, 8, 11].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'v':
        ;[7, 10, 13].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'vi':
        ;[9, 12, 15].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'vii':
        ;[11, 14, 17].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'viio':
        ;[13, 16, 19].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case 'vo':
        ;[15, 18, 21].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case '♭II':
        ;[0, 3, 6].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case '♭III':
        ;[2, 5, 8].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case '♭V':
        ;[4, 7, 10].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case '♭VI':
        ;[5, 8, 11].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case '♭VII':
        ;[7, 10, 13].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case '♭iii':
        ;[2, 5, 8].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
      case '♭vii':
        ;[4, 7, 10].forEach((offset) => {
          notes.push(this.getNote(offset))
        })
        break
    }
    return notes
  }

  getScaleChords(): Note[][] {
    const notes: Note[][] = []
    const chordSymbols: ChordSymbol[] = MusicTheory.scaleChords[this.scale]
    chordSymbols.forEach((chordSymbol: ChordSymbol) => {
      const chord = this.getChord(chordSymbol)
      notes.push(chord)
    })
    return notes
  }
}
