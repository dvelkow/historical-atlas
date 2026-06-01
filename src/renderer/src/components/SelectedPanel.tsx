import type { Country, CountryPeriod } from '../data/countryTypes'
import type { Era } from '../data/types'

interface Props {
  country?: Country
  period?: CountryPeriod
  era: Era
  year: number
}

export function SelectedPanel({ country, period, era, year }: Props): JSX.Element {
  if (!country) {
    return (
      <section className="panel selected-panel">
        <h2 className="panel-title">Selected Country</h2>
        <p className="muted">Click a country on the map to explore its history, relations, and figures in {fmtYear(year)}.</p>
      </section>
    )
  }

  return (
    <section className="panel selected-panel">
      <h2 className="panel-title">Selected Country</h2>

      <div className="sp-head">
        <span className="sp-swatch" style={{ background: country.color }} aria-hidden />
        <div className="sp-name-block">
          <h3 className="sp-name">
            {period ? period.name : country.name}
            {period && showModernTag(country, period) && (
              <span className="sp-modern"> (Modern {country.name})</span>
            )}
          </h3>
        </div>
      </div>

      {!period ? (
        <div className="sp-inactive">No recorded polity for {country.name} in {fmtYear(year)}. Try another year.</div>
      ) : (
        <>
          <dl className="sp-facts">
            <Fact label="Era">{era.name}</Fact>
            <Fact label="Period">
              {fmtYear(period.startYear)} – {fmtYear(period.endYear)}
            </Fact>
            {period.capital && <Fact label="Capital">{period.capital}</Fact>}
            {period.government && <Fact label="Government">{period.government}</Fact>}
          </dl>

          {(period.religion?.length || period.culture?.length) && (
            <div className="sp-tags">
              {period.religion?.map((r) => (
                <span key={`r-${r}`} className="tag tag--religion" title="Religion">
                  {r}
                </span>
              ))}
              {period.culture?.map((c) => (
                <span key={`c-${c}`} className="tag tag--culture" title="Culture">
                  {c}
                </span>
              ))}
            </div>
          )}

          <p className="sp-desc">{period.summary}</p>
        </>
      )}

      <p className="sp-approx">⚑ Modern borders; historical extent is approximate.</p>
    </section>
  )
}

function Fact({ label, children }: { label: string; children: React.ReactNode }): JSX.Element {
  return (
    <div className="sp-fact">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  )
}

function fmtYear(y: number): string {
  return y <= 0 ? '1 CE' : `${y} CE`
}

/**
 * Whether to append "(Modern <country>)" to a period's name. Shown only when the
 * polity is genuinely the modern country's ancestor — skipped for multinational
 * empires (modernEquivalent: false), for the contemporary era (it already *is*
 * the modern state), and where the period name already starts with the modern
 * name + " (" (e.g. "United Kingdom (Pax Britannica)") to avoid redundancy.
 */
export function showModernTag(country: Country, period: CountryPeriod): boolean {
  return (
    period.modernEquivalent !== false &&
    period.eraId !== 'contemporary' &&
    !period.name.startsWith(`${country.name} (`)
  )
}
