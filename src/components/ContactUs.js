import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <a href="https://github.com/pammu453">
                <span style={{ color: "white" }}>Github : </span>
                {resumeData.Github}</a> <br />
              <a href="mailto:pramodsavant2001@gmail.com">
                <span style={{ color: "white" }}>Gmail : </span>
                {resumeData.Gmail}
              </a>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}