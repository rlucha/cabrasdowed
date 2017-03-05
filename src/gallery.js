import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

export default class PhotoGallery extends React.Component {
  render() {
    return <Gallery photos={PHOTO_SET} />;
  }
}

const GalleryContainer = props => (
  <div className="cdw-photo-gallery">
    <div className="cdw-photo-gallery-title"> Our Pictures </div>
    <PhotoGallery cols="2" />
  </div>
);

const PHOTO_SET = [
  {
    src: 'http://lorempixel.com/200/100/',
    width: 200,
    height: 100,
    lightboxImage: {
      src: 'http://lorempixel.com/100/300/'
    }
  },
  {
    src: 'http://lorempixel.com/100/100/',
    width: 100,
    height: 100,
    lightboxImage: {
      src: 'http://lorempixel.com/100/300/'
    }
  },
  {
    src: 'http://lorempixel.com/100/200/',
    width: 100,
    height: 200,
    lightboxImage: {
      src: 'http://lorempixel.com/100/200/'
    }
  },
  {
    src: 'http://lorempixel.com/200/200/',
    width: 200,
    height: 200,
    lightboxImage: {
      src: 'http://lorempixel.com/300/200/'
    }
  }
];

export { GalleryContainer };
