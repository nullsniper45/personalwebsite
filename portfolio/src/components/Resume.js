import "../css/Resume.css";

export default function Resume() {
  return (
    <>
      <div class="main-header">
        <h1 class="page-title">Resume</h1>
        <span class="experience-badge">3.8 Years of Experience</span>
      </div>
      <div class="resume-container">
        <div class="column">
          <h2 class="section-title">Education</h2>

          <TimelineCard
            year="2009"
            college="MallaReddy Institute of Technology and Sciences"
            role="UX Designer"
            description="Duis posuere, quam non imperdiet egestas, eros enim mattis mauris,
              in posuere lacus arcu quis felis. Etiam interdum erat non enim
              venenatis fermentum."
          />

          <div class="timeline-item">
            <div class="timeline-date-pill">2008</div>
            <div class="timeline-meta">University of Studies</div>
            <h3 class="timeline-title">Graphic Design</h3>
            <p class="timeline-text">
              Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis
              iaculis, feugiat risus quis, aliquet urna. Quisque fringilla
              mollis risus, eu pulvinar dolor.
            </p>
          </div>

          <div class="timeline-item">
            <div class="timeline-date-pill">2007</div>
            <div class="timeline-meta">University of Studies</div>
            <h3 class="timeline-title">Frontend Development</h3>
            <p class="timeline-text">
              Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor
              aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
              lobortis ante.
            </p>
          </div>
        </div>

        <div class="column">
          <h2 class="section-title">Experience</h2>

          <div class="timeline-item wide-date">
            <div class="timeline-date-pill">2016 - Current</div>
            <div class="timeline-meta">Rolling Thunder</div>
            <h3 class="timeline-title">Lead UI/UX Designer</h3>
            <p class="timeline-text">
              Praesent dignissim sollicitudin justo, sed elementum quam lacinia
              quis. Phasellus eleifend tristique posuere. Sed vitae dui nec
              magna.
            </p>
          </div>

          <div class="timeline-item wide-date">
            <div class="timeline-date-pill">2013 - 2016</div>
            <div class="timeline-meta">Locost Accessories</div>
            <h3 class="timeline-title">Senior UI/UX Designer</h3>
            <p class="timeline-text">
              Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae
              nulla tristique, ornare felis id, congue libero. Nam volutpat
              euismod quam.
            </p>
          </div>

          <div class="timeline-item wide-date">
            <div class="timeline-date-pill">2011 - 2013</div>
            <div class="timeline-meta">Sagebrush</div>
            <h3 class="timeline-title">Junior UI/UX Designer</h3>
            <p class="timeline-text">
              Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu,
              congue vitae nunc ac, sodales ultricies diam. Nullam justo leo,
              tincidunt sit amet.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Certificates Section */}
        <section className="section">
          <h2 className="section-title">Certificates</h2>
          <div className="grid-layout">
            <CertificateCard
              logo="{less}"
              title="Psychology of Interaction Design"
              id="XXXX"
              date="19 April 2018"
            />
            <CertificateCard
              logo="jQuery"
              title="Psychology of Interaction Design"
              id="XXXX"
              date="19 April 2018"
            />
          </div>
        </section>

        {/* Skills Section */}
        <div className="grid-layout">
          <section className="section">
            <h2 className="section-title">Design Skills</h2>
            <SkillBar name="UI/UX Design" level={75} />
            <SkillBar name="Graphic Design" level={85} />
          </section>

          <section className="section">
            <h2 className="section-title">Coding Skills</h2>
            <SkillBar name="HTML / CSS" level={100} />
            <SkillBar name="JavaScript" level={90} />
          </section>
        </div>
      </div>
    </>
  );
}

const CertificateCard = ({ logo, title, id, date }) => (
  <div className="certificate-card">
    <div className="certificate-logo">
      <span>{logo}</span>
    </div>
    <div className="certificate-info">
      <h3>{title}</h3>
      <p className="id">Membership ID: {id}</p>
      <p className="date">{date}</p>
    </div>
  </div>
);

const SkillBar = ({ name, level }) => (
  <div className="skill-item">
    <div className="skill-header">
      <span className="skill-name">{name}</span>
      <span className="skill-percentage">{level}%</span>
    </div>
    <div className="progress-bg">
      <div className="progress-fill" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);



function TimelineCard({ year, college, role, description }) {
  return (
    <div class="timeline-item">
      <div class="timeline-date-pill">{year}</div>
      <div class="timeline-meta">{college}</div>
      <h3 class="timeline-title">{role}</h3>
      <p class="timeline-text">{description}</p>
    </div>
  );
}
