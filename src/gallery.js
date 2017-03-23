import React, { Component } from 'react';

class GalleryContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isGalleryShown: false
    };

    this.isGalleryShown = this.isGalleryShown.bind(this);
  }

  isGalleryShown() {
    this.setState({ isGalleryShown: true });
  }

  render() {
    const isGalleryShown = this.state.isGalleryShown;
    let gallery;

      gallery = 
        <div className="cdw-photo-gallery-container">
          <div className="cdw-photo-gallery-header">
            <div className="cdw-photo-gallery-header-title">
              Fotohistoria
            </div>
            <div className="cdw-photo-gallery-header-subtitle">
              Para los que nos conocéis y los que no, este es un breve resumen de nuestra historia
            </div>
            {/*<div className="cdw-photo-gallery-header-view-more" onClick={this.isGalleryShown}>
              Ver nuestra historia
            </div>*/}
        </div>

        <div className="cdw-photo-gallery">
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei01.jpg" width="320" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei02.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei03.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei04.jpg" width="320" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei06.jpg" width="320" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei10.jpg" width="320" height="160" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei05.jpg" width="160" height="320" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei09.jpg" width="160" height="160" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei11.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei12.jpg" width="160" height="320" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei13.jpg" width="320" height="320" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei14.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei16.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei17.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei19.jpg" width="320" height="160" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei18.jpg" width="160" height="160" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/mei20.jpg" width="160" height="240" alt="" />
          
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob01.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob02.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob03.jpg" width="320" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob04.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob05.jpg" width="160" height="160" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob06.jpg" width="320" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob07.jpg" width="320" height="160" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob08.jpg" width="320" height="160" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob09.jpg" width="320" height="160" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob10.jpg" width="160" height="160" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob11.jpg" width="160" height="160" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob12.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob13.jpg" width="320" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob14.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob19.jpg" width="160" height="160" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob16.jpg" width="160" height="320" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob15.jpg" width="160" height="160" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob17.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/rob18.jpg" width="160" height="240" alt="" />

          <img className="cdw-photo-gallery-img" src="assets/gallery/juntos01.jpg" width="320" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/juntos02.jpg" width="320" height="320" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/juntos03.jpg" width="320" height="160" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/juntos14.jpg" width="320" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/juntos11.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/juntos12.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/juntos04.jpg" width="320" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/juntos05.jpg" width="320" height="160" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/juntos07.jpg" width="320" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/juntos08.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/juntos10.jpg" width="160" height="240" alt="" />
          <img className="cdw-photo-gallery-img" src="assets/gallery/juntos09.jpg" width="320" height="240" alt="" />
        </div>
      </div>      

    return gallery; 
  }

  componentDidMount() {
    var wall = new Freewall('.cdw-photo-gallery');

    wall.reset({
      selector: 'img',
      gutterX: 4,
      gutterY: 4,
      fixSize: 0,
      cellW: 80,
      cellH: 80,
      onResize: function() {
        wall.fitWidth();
      }
    });
    wall.fitWidth();
  }
}

export { GalleryContainer };
