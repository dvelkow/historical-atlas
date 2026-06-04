import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  MAX_YEAR,
  MIN_YEAR,
  eraForYear,
  getCountry,
  periodFor,
  relationsAt,
  eventsNear
} from './data'
import { click as clickSound, setSoundEnabled } from './audio'
import { WorldMap } from './components/WorldMap'
import { YearDial } from './components/YearDial'
import { SelectedPanel } from './components/SelectedPanel'
import { RelationsPanel } from './components/RelationsPanel'
import { FigureCard } from './components/FigureCard'
import { Timeline } from './components/Timeline'

// A representative year inside each era for the bottom era strip to jump to.
const ERA_YEARS: Record<string, number> = {
  roman: 100,
  'late-antique': 400,
  'early-medieval': 800,
  'high-medieval': 1150,
  'late-medieval': 1400,
  'early-modern': 1650,
  revolutionary: 1805,
  'long-19th': 1880,
  'world-wars': 1916,
  'cold-war': 1960,
  contemporary: 2010
}

export default function App(): JSX.Element {
  const [year, setYearRaw] = useState(1700)
  const [selectedId, setSelectedId] = useState<string | null>('france')
  const [soundOn, setSoundOn] = useState(true)

  // A soft click on any button press.
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.('button')
      if (el) clickSound()
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [])

  const toggleSound = useCallback(() => {
    setSoundOn((v) => {
      const next = !v
      setSoundEnabled(next)
      return next
    })
  }, [])

  const setYear = useCallback((next: number) => {
    setYearRaw(Math.max(MIN_YEAR, Math.min(MAX_YEAR, Math.round(next))))
  }, [])

  const era = useMemo(() => eraForYear(year), [year])
  const country = useMemo(() => (selectedId ? getCountry(selectedId) : undefined), [selectedId])
  const period = useMemo(() => periodFor(country, year), [country, year])
  const relations = useMemo(() => relationsAt(country, year), [country, year])
  const timelineEvents = useMemo(
    () => eventsNear(year, selectedId ?? undefined, 9),
    [year, selectedId]
  )

  const selectCountry = useCallback((id: string) => setSelectedId(id), [])
  const jumpToEra = useCallback(
    (eraId: string) => {
      const y = ERA_YEARS[eraId]
      if (y != null) setYear(y)
    },
    [setYear]
  )
  const focusEvent = useCallback((eventYear: number) => setYear(eventYear), [setYear])

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark" aria-hidden>
            <svg viewBox="0 0 40 40" width="34" height="34">
              <circle cx="20" cy="20" r="18" fill="none" stroke="#caa14a" strokeWidth="1.4" />
              <path d="M20 4 L23 20 L20 36 L17 20 Z" fill="#caa14a" opacity="0.9" />
              <path d="M4 20 L20 17 L36 20 L20 23 Z" fill="#caa14a" opacity="0.55" />
              <circle cx="20" cy="20" r="2.4" fill="#0b0f17" stroke="#caa14a" strokeWidth="1" />
            </svg>
          </div>
          <div className="brand-text">
            <h1>Historical Atlas</h1>
            <span>Explore the past. Understand the world.</span>
          </div>
        </div>

        <div className="topbar-actions">
          <button
            className="sound-toggle"
            onClick={toggleSound}
            title={soundOn ? 'Mute sounds' : 'Enable sounds'}
            aria-label="Toggle sound"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 9 H7 L11 5 V19 L7 15 H4 Z" fill="currentColor" stroke="none" />
              {soundOn ? (
                <>
                  <path d="M14.5 9.5 a3.5 3.5 0 0 1 0 5" />
                  <path d="M17 7 a7 7 0 0 1 0 10" />
                </>
              ) : (
                <path d="M15 9.5 l5 5 M20 9.5 l-5 5" />
              )}
            </svg>
          </button>
          <span className="approx-flag" title="Borders are approximate historical reconstructions.">
            EUROPE · APPROXIMATE
          </span>
        </div>
      </header>

      <div className="stage">
        <aside className="left">
          <SelectedPanel country={country} period={period} era={era} year={year} />
          <FigureCard period={period} country={country} />
        </aside>

        <main className="center">
          <WorldMap year={year} selectedId={selectedId} onSelect={selectCountry} />
          <YearDial year={year} era={era} onChange={setYear} min={MIN_YEAR} max={MAX_YEAR} />
        </main>

        <aside className="right">
          <RelationsPanel
            country={country}
            period={period}
            relations={relations}
            year={year}
            onSelect={selectCountry}
          />
        </aside>
      </div>

      <footer className="bottombar">
        <Timeline
          year={year}
          era={era}
          events={timelineEvents}
          selectedId={selectedId}
          selectedName={country?.name}
          onPickEra={jumpToEra}
          onPickEvent={focusEvent}
        />
      </footer>
    </div>
  )
}
