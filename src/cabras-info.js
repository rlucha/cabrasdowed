import React from 'react';

const CdwInfo = props => (
  <div className="cdw-info">
    <div className="cdw-info-presents">Cabras & Co. Records presents:</div>
    <hr />
    <div className="cdw-info-tour-title">Cabras do Wed! Tour</div>
    <div className="cdw-info-tour-place">Live at la barraca d'Amparo</div>
    <div className="cdw-info-tour-place2">Pintor Martí Girbés, 11 - El Palmar, Valencia</div>
    <hr />
    <div className="cdw-info-main-date">
      <div className="cdw-info-main-date-day">11</div>
      <div className="cdw-info-main-date-monthyear">JUN 2017</div>
    </div>
    <div className="cdw-info-additional-date">
      <div className="cdw-info-additional-date-doors">
        <div className="cdw-info-additional-date-doors-day">Sunday afternoon</div>
        <div className="cdw-info-additional-date-doors-open">Doors open at 12 P.M.</div>
      </div>
      <hr />
      <div className="cdw-info-additional-date-confirm"> Please confirm your assistance </div>
    </div>
    <hr />
    <div>
      <a className="cdw-info-confirm" href="https://docs.google.com/forms/d/e/1FAIpQLScDLcU52WwH_y2aJc8AA-7yhMn0PBNMrYJ9iqNrkt9GljK7cA/viewform?usp=pp_url&entry.1498135098&entry.2606285">Pincha aquí para confirmar asistencia</a>
    </div>

  </div>
);

export { CdwInfo };
