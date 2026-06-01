import type { Era, HistEvent } from '../data/types'
import { eras, MAX_YEAR } from '../data'
import { PlaceholderIcon } from './PlaceholderIcon'

interface Props {
  year: number
  era: Era
  events: HistEvent[]
  onPickEra: (eraId: string) => void
  onPickEvent: (year: number) => void
}

export function Timeline({ year, era, events, onPickEra, onPickEvent }: Props): JSX.Element {
  return (
    <div className="timeline">
      <div className="timeline-events">
        <div className="timeline-events-head">
          <span className="tl-kicker">Events near</span>
          <span className="tl-year">{fmtYear(year)}</span>
        </div>
        <div className="tl-event-track">
          {events.length === 0 && <span className="muted">No major events nearby.</span>}
          {events.map((ev) => {
            const near = Math.abs(ev.year - year) <= 3
            return (
              <button
                key={ev.id}
                className={near ? 'tl-event tl-event--near' : 'tl-event'}
                onClick={() => onPickEvent(ev.year)}
                title={ev.description}
              >
                <span className="tl-event-top">
                  <PlaceholderIcon icon={ev.icon} size={16} />
                  <span className="tl-event-year">{fmtYear(ev.year)}</span>
                </span>
                <span className="tl-event-title">{ev.title}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="timeline-eras">
        {eras.map((e) => {
          const isActive = e.id === era.id
          return (
            <button
              key={e.id}
              className={isActive ? 'era-btn era-btn--active' : 'era-btn'}
              onClick={() => onPickEra(e.id)}
              title={e.blurb}
            >
              <span className="era-btn-name">{e.name}</span>
              <span className="era-btn-range">
                {fmtShort(e.startYear)}–{e.endYear >= MAX_YEAR ? 'now' : fmtShort(e.endYear)}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function fmtYear(y: number): string {
  return y <= 0 ? '1 CE' : `${y} CE`
}

function fmtShort(y: number): string {
  return y <= 0 ? '1' : String(y)
}
