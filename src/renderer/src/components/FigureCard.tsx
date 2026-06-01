import type { Country, CountryPeriod } from '../data/countryTypes'
import { PlaceholderIcon } from './PlaceholderIcon'
import { figureImage } from '../assets/figures'

interface Props {
  period?: CountryPeriod
  country?: Country
}

export function FigureCard({ period, country }: Props): JSX.Element {
  const figures = period?.figures ?? []

  return (
    <section className="panel figure-card">
      <h2 className="panel-title">Notable Figures</h2>

      {figures.length === 0 ? (
        <p className="muted">
          {country
            ? `No figures recorded for ${country.name} in this period.`
            : 'Select a country to see its notable figures.'}
        </p>
      ) : (
        <ul className="fig-list">
          {figures.map((f) => {
            const portrait = figureImage(f.image ?? f.name)
            const meta = `${f.title}${f.years ? ` · ${f.years}` : ''}`

            // Has art → big "character card" with the name overlaid.
            if (portrait) {
              return (
                <li key={f.name} className="fig-card">
                  <img className="fig-card-img" src={portrait} alt={f.name} draggable={false} />
                  <div className="fig-card-cap">
                    <span className="fig-name">{f.name}</span>
                    <span className="fig-title">{meta}</span>
                    {f.note && <span className="fig-note">{f.note}</span>}
                  </div>
                </li>
              )
            }

            // No art yet → compact placeholder row.
            return (
              <li key={f.name} className="fig-item">
                <span className="fig-portrait-mini" aria-label={`${f.name} portrait placeholder`}>
                  <PlaceholderIcon icon="ICON_PERSON" size={34} />
                </span>
                <span className="fig-item-body">
                  <span className="fig-name">{f.name}</span>
                  <span className="fig-title">{meta}</span>
                  {f.note && <span className="fig-note">{f.note}</span>}
                </span>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}
