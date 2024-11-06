import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume" style={{backgroundColor:"lightgray"}}>

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item" key={item.UniversityName}>
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}

                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p className='achivement-center'>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item" key={item.CompanyName}>
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <ul className="skills">
              {
                <div>
                  <div>
                    <strong style={{ color: "black" }}>
                      Programming languages:
                    </strong> JavaScript, TypeScript, HTML, CSS.   
                  </div>
                  <div>
                    <strong style={{ color: "black" }}>
                    Frameworks / Libraries:
                    </strong> React.js, Node.js, Express.js, GraphQL (Apollo Client, Apollo Server), Next.js, Tailwind CSS, Redux, Redux Toolkit, Express.js, Material UI
                  </div>
                  <div>
                    <strong style={{ color: "black" }}>
                    Databases:
                    </strong> MySQL, MongoDB, PostgreSQL.
                  </div>

                  <div>
                    <strong style={{ color: "black" }}>
                      Tools / Platform:
                    </strong> Git, Postman, GitHub, VS Code.
                  </div>
                </div>
              }

            </ul>
          </div>

        </div>

      </section>
    );
  }
}