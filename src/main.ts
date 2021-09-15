import './style.css'
import Synth from './Synth'
import MusicTheory from './MusicTheory'

const sine = new Synth('sine')
const mt = new MusicTheory('Minor', 59)

const app = document.querySelector<HTMLDivElement>('#app')!

window.mt = mt
window.sine = sine


// listen for keydown
document.addEventListener('keydown', (e) => {
  // if keys is numeral
  if (e.keyCode >= 48 && e.keyCode <= 57) {
    const note = e.keyCode - 48
    sine.stopAllNotes()
    sine.playChord(mt.getScaleChords()[note],1)
  }
})



app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
