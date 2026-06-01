import type { Country, CountryPeriod, RelationType } from '../data/countryTypes'
import type { ResolvedRelation } from '../data/countries'
import type { PlaceholderIcon as IconToken } from '../data/types'
import { PlaceholderIcon } from './PlaceholderIcon'

interface Props {
  country?: Country
  period?: CountryPeriod
  relations: ResolvedRelation[]
  year: number
  onSelect: (id: string) => void
}

const GROUPS: { type: RelationType; title: string; icon: IconToken }[] = [
  { type: 'war', title: 'Wars & Conflicts', icon: 'ICON_WAR' },
  { type: 'ally', title: 'Allies & Alignments', icon: 'ICON_ALLY' },
  { type: 'interaction', title: 'Notable Interactions', icon: 'ICON_INTERACTION' }
]

export function RelationsPanel({ country, relations, year, onSelect }: Props): JSX.Element {
  return (
    <section className="panel relations-panel">
      <h2 className="panel-title">Relations</h2>

      {!country ? (
        <p className="muted">Select a country to see its alliances, wars, and interactions.</p>
      ) : relations.length === 0 ? (
        <p className="muted">No recorded relations for {country.name} in {fmtYear(year)}.</p>
      ) : (
        <div className="rel-groups">
          {GROUPS.map((g) => {
            const rows = relations.filter((r) => r.type === g.type)
            if (rows.length === 0) return null
            return (
              <div key={g.type} className={`rel-group rel-group--${g.type}`}>
                <div className="rel-group-head">
                  <PlaceholderIcon icon={g.icon} size={18} />
                  <span className="rel-group-title">{g.title}</span>
                  <span className="rel-group-count">{rows.length}</span>
                </div>
                <ul className="rel-list">
                  {rows.map((r, i) => {
                    const clickable = !!r.target
                    return (
                      <li key={`${r.to}-${i}`}>
                        <button
                          className="rel-row"
                          onClick={clickable ? () => onSelect(r.to) : undefined}
                          disabled={!clickable}
                          title={r.note}
                        >
                          <span
                            className="rel-swatch"
                            style={{ background: r.target?.color ?? '#6b7280' }}
                          />
                          <span className="rel-main">
                            <span className="rel-other">{r.target?.name ?? r.to}</span>
                            <span className="rel-label">{r.label}</span>
                          </span>
                          {r.icon && (
                            <span className="rel-meta">
                              <PlaceholderIcon icon={r.icon} size={16} />
                            </span>
                          )}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

function fmtYear(y: number): string {
  return y <= 0 ? '1 CE' : `${y} CE`
}
