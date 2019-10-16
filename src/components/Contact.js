import React from 'react';
import './contact.css';

function Contact({ image, name, status }) {
  return (
    <div className="Contact">
      <figure className="avatar">
        <img src={image} alt={name} />
      </figure>
      <div className="columnRight">
        <cite className="name">{name}</cite>
        <div className="status">
          <span className={status ? 'status-online' : 'status-offline'}></span>
          <span className="status-text">{status ? 'online' : 'offline'}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
