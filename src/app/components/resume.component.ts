import {
  Component
} from '@angular/core';
import { EDUCATION } from '../constants/education';
import { WORK_EXPERIENCE } from '../constants/work-expecience';

@Component({
  selector: 'app-resume',
  template: `
    <section id="resume" class="grey-section" #resume>
      <div class="row section-intro">
        <div class="col-twelve">
          <h5>Resume</h5>
          <h1>More of my credentials.</h1>

          <p class="lead">
            All the experience and qualifications that I have acquired during my
            professional career.
          </p>
        </div>
      </div>

      <div class="row resume-timeline">
        <div class="col-twelve resume-header">
          <h2>Work Experience</h2>
        </div>

        <div class="col-twelve">
          <div class="timeline-wrap">
            @for (workExperience of workExperienceList; track
            workExperience.title) {
            <div class="timeline-block">
              <div class="timeline-ico">
                <i class="fa fa-briefcase"></i>
              </div>

              <div class="timeline-header">
                <h3>{{ workExperience.title }}</h3>
                <p>{{ workExperience.date }}</p>
              </div>

              <div class="timeline-content">
                <h4>{{ workExperience.company }}</h4>
                <div [innerHTML]="workExperience.description"></div>
              </div>
            </div>
            }
          </div>
        </div>
      </div>

      <div class="row resume-timeline">
        <div class="col-twelve resume-header">
          <h2>Education</h2>
        </div>

        <div class="col-twelve">
          <div class="timeline-wrap">
            @for (education of educationList; track education.title) {
            <div class="timeline-block">
              <div class="timeline-ico">
                <i class="fa fa-graduation-cap"></i>
              </div>

              <div class="timeline-header">
                <h3>{{ education.title }}</h3>
                <p>{{ education.date }}</p>
              </div>

              <div class="timeline-content">
                <h4>{{ education.school }}</h4>
                <div [innerHTML]="education.description"></div>
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
export class ResumeComponent {
  public workExperienceList = WORK_EXPERIENCE;
  public educationList = EDUCATION
}
