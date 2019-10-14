import React from 'react';
import './contact.css';

function Contact(props) {
  return (
    <div className="Contact">
      <figure className="avatar">
        <img src={props.avatar} alt={props.name} />
      </figure>
      <div className="columnRight">
        <cite className="name">{props.name}</cite>
        <div className="status">
          <span
            className={props.online ? 'status-online' : 'status-offline'}
          ></span>
          <span className="status-text">
            {props.online ? 'online' : 'offline'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
