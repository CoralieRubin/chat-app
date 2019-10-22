import React from 'react';
import './contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false,
    };
  }
  render() {
    return (
      <div className="Contact">
        <figure className="avatar">
          <img src={this.props.image} alt={this.props.name} />
        </figure>
        <div className="columnRight">
          <cite className="name">{this.props.name}</cite>
          <div
            className="status"
            onClick={event => {
              const newStatus = !this.state.online;
              this.setState({ online: newStatus });
            }}
          >
            <text
              className={this.state.online ? 'status-online' : 'status-offline'}
            ></text>

            <text className="status-text">
              {this.state.online ? 'online' : 'offline'}
            </text>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
