import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="bg-white pb-40 pt-28">
      <div class="row section-intro mb-12">
        <div class="col-twelve">
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>

          <div class="intro-info">
            <img src="assets/images/profile-pic.webp" alt="Profile Picture" />

            <p class="lead">
              Hi there! I am a Frontend developer specialized in Angular.js and
              React.js. I have 5+ years of development experience building
              frontend products from scratch, developing and integrating APIs,
              working with a variety of databases.
            </p>
          </div>
        </div>
      </div>

      <div class="row about-content">
        <div class="col-six tab-full">
          <h3>Profile</h3>

          <ul class="info-list">
            @for (infoItem of infoList; track infoItem.title) {
            <li>
              <strong>{{ infoItem.title }}</strong>
              <span>{{ infoItem.value }}</span>
            </li>
            }
          </ul>
        </div>

        <div class="col-six tab-full">
          <h3>Skills</h3>

          <ul class="skill-bars">
            @for (skill of skillsList; track skill.title) {
            <li>
              <div class="progress percent{{ skill.value }}">
                <span>{{ skill.value }}%</span>
              </div>
              <strong>{{ skill.title }}</strong>
            </li>
            }
          </ul>
        </div>
      </div>

      <div class="row button-section">
        <div class="col-twelve">
          <a href="#contact" title="Hire Me" class="button stroke smoothscroll"
            >Hire Me</a
          >
          <a
            [href]="resumeUrl"
            title="Download CV"
            download="adria-tomas-altes-resume.pdf"
            class="button button-primary"
            >Download CV</a
          >
        </div>
      </div>
    </section>
  `,
  standalone: true,
})
export class AboutComponent {
  public infoList = [
    { title: 'Fullname:', value: 'Adrià Tomás' },
    { title: 'Birth: Date', value: 'October 24, 1994' },
    { title: 'Job:', value: 'Senior Frontend Developer' },
    {
      title: 'Website:',
      value: 'https://adriatomas.github.io/adria-porfolio/',
    },
    { title: 'Email:', value: 'adriatomas@hotmail.com' },
  ];

  public skillsList = [
    { title: 'HTML', value: 90 },
    { title: 'CSS', value: 90 },
    { title: 'Javascript', value: 90 },
    { title: 'Angular', value: 90 },
    { title: 'React', value: 80 },
    { title: 'Jest', value: 80 },
  ];

  public resumeUrl = 'assets/files/2025-resume-compressed.pdf';
}
