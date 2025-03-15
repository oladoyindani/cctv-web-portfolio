// src/pages/Services.js
import React from 'react';

function Services() {
  const galleryItems = [
    { id: 1, title: 'Indoor CCTV', imageUrl: 'https://www.clearway.co.uk/wp-content/uploads/2021/07/types-of-CCTV-camera-1024x683.jpg' },
    { id: 2, title: 'Outdoor CCTV', imageUrl: 'https://www.clearway.co.uk/wp-content/uploads/2019/06/19_06_03-GDPR-CCTV-Camera_860x486-500x275.jpg' },
    { id: 3, title: 'Exterior CCTV', imageUrl: 'https://www.clearway.co.uk/wp-content/uploads/2022/01/cctv-fixture-scaled-500x275.jpg' },
    { id: 4, title: 'Interior CCTV', imageUrl: 'https://www.clearway.co.uk/wp-content/uploads/2022/01/fixed-cctv-solutions-500x275.jpg' },
  ];

  return (
    <div className="container section text-center">
      <h1 className="mb-4 text-warning">Our Premium Services</h1>
      <div className="row">
        {galleryItems.map(item => (
          <div key={item.id} className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img src={item.imageUrl} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
