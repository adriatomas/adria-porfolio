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
                      <span class="folio-types md:mb-8">
                        {{ porfolioItem.description }}
                      </span>
                      <button (click)="visitWebsite(porfolioItem.url)" class="mt-2 bg-transparent text-white border-solid border-[3px] border-white smoothscroll hover:text-[#fed136] hover:border-[#fed136] hover:bg-transparent" >Visit site</button>
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
      description: 'Next.js & Supabase · Race plan builder and workout log',
      image: 'assets/images/portfolio/running-tracker.webp',
      url: 'https://training-tracker-pied.vercel.app'
    },
    {
      title: 'Rumbo',
      description: 'Next.js, Supabase & MapLibre · Day-by-day trip planner',
      image: 'assets/images/portfolio/rumbo.webp',
      url: 'https://rumbo-theta.vercel.app'
    },
    {
      title: 'La Pizarra del Couch',
      description: 'Next.js & static rendering · A daily WOD, no database',
      image: 'assets/images/portfolio/lapizarradelcouch.webp',
      url: 'https://lapizarradelcouch.vercel.app'
    },
    {
      title: 'BOX',
      description: 'Next.js & Supabase · WOD email to weekly plan and weights',
      image: 'assets/images/portfolio/cross-box.webp',
      url: 'https://cross-box.vercel.app'
    },
  ];

  public visitWebsite(url: string): void {
    window.open(url, '_blank');
  }
}
