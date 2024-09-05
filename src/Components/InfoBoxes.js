import React, { useState } from 'react';
import './InfoBoxes.css';

const boxData = [
  {
    title: 'Reliable Solutions for a Successful Supply Chain',
    description:
      "Partner with Khataro Simulator, a trusted truck shipment provider driving business growth for over a decade. Our advanced platform connects you to the technology, expertise, and logistics network you need to optimize your supply chain—whether it's full truckload, less than truckload (LTL), or specialized freight solutions.",
    extendedDescription:
      'We offer advanced logistics, intelligent transportation systems, and real-time shipment tracking to ensure that your goods arrive safely and on time. No matter the size of your shipment, Khataro Simulator ensures cost-effective and reliable solutions.',
    buttonText: 'Get a Quote',
    buttonClass: 'quote-button',
  },
  {
    title: 'Long Haul Freight',
    description:
      'Access a network that matches thousands of shipments daily. Streamline your shipping process by connecting with a diverse range of carriers and shippers across North America.',
    extendedDescription:
      'Our long-haul freight services cover thousands of miles, providing reliable and consistent transportation solutions. Whether you need to move large or specialized freight, we have the resources and expertise to manage your shipments.',
    buttonText: 'Learn More',
    buttonClass: 'learn-more-button',
  },
  {
    title: 'Flexible Solutions to Meet Your Needs',
    description:
      'Adapt quickly with our customizable multi-modal and equipment solutions. Your business requires flexibility, and we deliver. Scale your operations seamlessly with Khataro Simulator.',
    extendedDescription:
      'With access to a wide range of equipment, we can handle diverse shipping requirements. From temperature-controlled shipments to oversized freight, we tailor solutions to your unique business needs.',
    buttonText: 'Learn More',
    buttonClass: 'learn-more-button',
  },
  {
    title: 'Manage and Track Shipments with Ease',
    description:
      'Stay ahead with real-time tracking and management. Our user-friendly platform allows you to generate quotes, build loads, and track your shipments—all in one place.',
    extendedDescription:
      'Our platform provides a centralized hub for managing your entire supply chain. Track shipments, manage loads, and receive real-time updates on the status of your cargo.',
    buttonText: 'Lean More',
    buttonClass: 'login-button',
  },
];

function InfoBoxes() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between showing and hiding
  };

  return (
    <div id="info-boxes">
      {boxData.map((box, index) => (
        <div key={index} className="info-box">
          <h3>{box.title}</h3>
          <p>{box.description}</p>
          <button
            className={box.buttonClass}
            onClick={() => toggleDescription(index)}
          >
            {box.buttonText}
          </button>
          {activeIndex === index && (
            <div className="extended-description">
              <p>{box.extendedDescription}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default InfoBoxes;
