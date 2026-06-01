// Procedural UI sound effects via the Web Audio API — no audio files, no
// licensing, works offline. Three cues:
//   tick()  — a crisp dial tick (fired as the year changes; fast = fast ticking)
//   click() — a soft UI click for buttons
//   cloth() — a fabric/parchment rustle when a country is selected on the map
//
// The AudioContext is created lazily and resumed on the first user gesture
// (autoplay policy), so the first sound always comes from a real interaction.

let ctx: AudioContext | null = null
let master: GainNode | null = null
let enabled = true

function ac(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Ctor = window.AudioContext || (window as any).webkitAudioContext
      if (!Ctor) return null
      ctx = new Ctor()
      master = ctx.createGain()
      master.gain.value = 0.5
      master.connect(ctx.destination)
    } catch {
      return null
    }
  }
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

export function setSoundEnabled(on: boolean): void {
  enabled = on
}
export function isSoundEnabled(): boolean {
  return enabled
}

/** A short burst of decaying white noise, used to build ticks & rustles. */
function noiseBuffer(c: AudioContext, dur: number, shape: number): AudioBuffer {
  const len = Math.max(1, Math.ceil(c.sampleRate * dur))
  const buf = c.createBuffer(1, len, c.sampleRate)
  const data = buf.getChannelData(0)
  for (let i = 0; i < len; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, shape)
  }
  return buf
}

/** Crisp dial tick — a tiny band-passed noise click. */
export function tick(): void {
  const c = ac()
  if (!c || !enabled || !master) return
  const now = c.currentTime
  const dur = 0.028
  const src = c.createBufferSource()
  src.buffer = noiseBuffer(c, dur, 1)
  const bp = c.createBiquadFilter()
  bp.type = 'bandpass'
  bp.frequency.value = 2700
  bp.Q.value = 7
  const g = c.createGain()
  g.gain.setValueAtTime(0.0001, now)
  g.gain.linearRampToValueAtTime(0.5, now + 0.0015)
  g.gain.exponentialRampToValueAtTime(0.0001, now + dur)
  src.connect(bp)
  bp.connect(g)
  g.connect(master)
  src.start(now)
  src.stop(now + dur)
}

/** Soft UI click for buttons — a quick pitched pop with a noise transient. */
export function click(): void {
  const c = ac()
  if (!c || !enabled || !master) return
  const now = c.currentTime
  const osc = c.createOscillator()
  osc.type = 'triangle'
  osc.frequency.setValueAtTime(430, now)
  osc.frequency.exponentialRampToValueAtTime(190, now + 0.05)
  const og = c.createGain()
  og.gain.setValueAtTime(0.0001, now)
  og.gain.exponentialRampToValueAtTime(0.22, now + 0.004)
  og.gain.exponentialRampToValueAtTime(0.0001, now + 0.08)
  osc.connect(og)
  og.connect(master)
  osc.start(now)
  osc.stop(now + 0.09)

  // tiny attack transient
  const src = c.createBufferSource()
  src.buffer = noiseBuffer(c, 0.015, 2)
  const hp = c.createBiquadFilter()
  hp.type = 'highpass'
  hp.frequency.value = 1500
  const ng = c.createGain()
  ng.gain.setValueAtTime(0.12, now)
  ng.gain.exponentialRampToValueAtTime(0.0001, now + 0.02)
  src.connect(hp)
  hp.connect(ng)
  ng.connect(master)
  src.start(now)
  src.stop(now + 0.02)
}

/** Cloth / parchment rustle — low-passed noise with a quick filter sweep. */
export function cloth(): void {
  const c = ac()
  if (!c || !enabled || !master) return
  const now = c.currentTime
  const dur = 0.24
  const src = c.createBufferSource()
  src.buffer = noiseBuffer(c, dur, 1.6)
  const lp = c.createBiquadFilter()
  lp.type = 'lowpass'
  lp.Q.value = 0.7
  lp.frequency.setValueAtTime(700, now)
  lp.frequency.exponentialRampToValueAtTime(2100, now + 0.06)
  lp.frequency.exponentialRampToValueAtTime(450, now + dur)
  const g = c.createGain()
  g.gain.setValueAtTime(0.0001, now)
  g.gain.linearRampToValueAtTime(0.32, now + 0.025)
  g.gain.exponentialRampToValueAtTime(0.0001, now + dur)
  src.connect(lp)
  lp.connect(g)
  g.connect(master)
  src.start(now)
  src.stop(now + dur)
}
