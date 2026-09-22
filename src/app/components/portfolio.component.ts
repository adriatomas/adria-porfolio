import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  template: `
    <section id="portfolio">
      <div class="row section-intro">
        <div class="col-twelve">
          <h5>Portfolio</h5>
          <h1>Check Out Some of My Works.</h1>

          <p class="lead">
            Side projects I have designed, built and shipped end to end over the
            last few months.
          </p>
        </div>
      </div>

      <div class="row portfolio-content">
        <div class="col-twelve">
          <div
            id="folio-wrapper"
            class="flex flex-wrap justify-center gap-y-8 sm:mx-3"
          >
            @for (porfolioItem of porfilioList; track porfolioItem.title) {
            <div class="folio-item min-w-auto max-w-[500px]">
              <div class="item-wrap">
                <img [src]="porfolioItem.image" [alt]="porfolioItem.title" />
                <div class="overlay">
                  <div class="folio-item-table">
                    <div class="folio-item-cell flex justify-center flex-col items-center h-full px-8 text-center">
                      <h3 class="folio-title">{{ porfolioItem.title }}</h3>
                      <p class="folio-desc">{{ porfolioItem.description }}</p>
                      <span class="folio-types">{{ porfolioItem.tech }}</span>
                      <button (click)="visitWebsite(porfolioItem.url)" class="mt-4 bg-transparent text-white border-solid border-[3px] border-white smoothscroll hover:text-[#fed136] hover:border-[#fed136] hover:bg-transparent" >Visit site</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  standalone: true,
})
export class PortfolioComponent {
  porfilioList = [
    {
      title: 'Running Tracker',
      description:
        'A training-plan manager for race preparation: the whole block from today to the start line, session by session, with every run logged and the plan reshaped when you miss one.',
      tech: 'Next.js · TypeScript · Supabase · Recharts',
      image: 'assets/images/portfolio/running-tracker.webp',
      url: 'https://training-tracker-pied.vercel.app'
    },
    {
      title: 'Rumbo',
      description:
        'Trip planning without twenty browser tabs: drop your own points on a map, sort them day by day and add your notes. Built on open map tiles, so no API keys and no per-load billing.',
      tech: 'Next.js · TypeScript · Supabase · MapLibre GL',
      image: 'assets/images/portfolio/rumbo.webp',
      url: 'https://rumbo-theta.vercel.app'
    },
    {
      title: 'La Pizarra del Couch',
      description:
        'A WOD generator for the days you have no idea what to train: open it and the session is already on the board. Computed from the date, so everyone gets the same one.',
      tech: 'Next.js · TypeScript · Static rendering · Vitest',
      image: 'assets/images/portfolio/lapizarradelcouch.webp',
      url: 'https://lapizarradelcouch.vercel.app'
    },
    {
      title: 'BOX',
      description:
        'A training and load manager for CrossFit athletes: the week\'s WODs in one place, and your working weight per movement tracked session after session.',
      tech: 'Next.js · React 19 · TypeScript · Supabase',
      image: 'assets/images/portfolio/cross-box.webp',
      url: 'https://cross-box.vercel.app'
    },
  ];

  public visitWebsite(url: string): void {
    window.open(url, '_blank');
  }
}
