import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const App = props =>
  <div className="cdw">
    <div className="cdw-card">
      <CdwPoster />
    </div>
    <div className="cdw-card">
      <CdwInfo />
    </div>
  </div>

const CdwPoster = props =>
  <div className="cdw-poster">
    <div className="cdw-poster-illustration"></div>
    <div className="cdw-poster-date">
      <div className="cdw-poster-date-day">11</div>
      <div className="cdw-poster-date-month">June</div>
      <div className="cdw-poster-date-year">2017</div>
    </div>
    <div className="cdw-poster-title">Mei & Rob</div>
    <div className="cdw-poster-subtitle">Guest Star: Bruno</div>
    <div className="cdw-poster-saveTheDate">Save <br />the <br />date</div>
  </div>

const CdwInfo = props =>
  <div className="cdw-info">
    <div className="cdw-info-presents">Cabras & Co. Records present: Coming Soon</div>
  </div>

 ReactDOM.render(<App />, document.getElementById('root'));
