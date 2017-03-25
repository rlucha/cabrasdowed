import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import tilt from 'tilt.js';
import PhotoGallery, { GalleryContainer } from './gallery';
import { CdwCabrasForThem } from './cabras-for-them';
import { CdwInfo } from './cabras-info';
import { CdwMap } from './cabras-map';
import { CdwProjects } from './cabras-projects';

import './scss/index.scss';

const App = props => (
  <div className="cdw">
    <div className="cdw-card">
      <CdwPoster />
    </div>
    <div className="cdw-card">
      <CdwInfo />
    </div>
    <div className="cdw-card">
      <CdwMap />
    </div>
    <div className="cdw-card">
      <GalleryContainer />
    </div>
    <div className="cdw-card">
      <CdwProjects />
    </div>
  </div>
);

const CdwPoster = props => (
  <div className="cdw-poster">
    <div className="cdw-poster-illustration" style={{backgroundImage:'url(assets/illustration.jpg)'}} />
    <div className="cdw-poster-date">
      <div className="cdw-poster-date-day">11</div>
      <div className="cdw-poster-date-month">June</div>
      <div className="cdw-poster-date-year">2017</div>
    </div>
    <div className="cdw-poster-title">Mei & Rob</div>
    <div className="cdw-poster-subtitle">Guest Star: Bruno</div>
    <div className="cdw-poster-saveTheDate">Save <br />the <br />date</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

$(() => {
  $('.cdw-card:first-child').tilt({
    perspective: 400
  });
});
