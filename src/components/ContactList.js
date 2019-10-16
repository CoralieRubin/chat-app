import React from 'react';
import Contact from './Contact';

const List = [
  {
    avatar: 'https://randomuser.me/api/portraits/thumb/men/74.jpg',
    name: 'Hazel Morris',
    online: false,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/thumb/men/53.jpg',
    name: 'Sean Freeman',
    online: false,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    name: 'Brad Gibson',
    online: true,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/thumb/women/16.jpg',
    name: 'Marie Kelly',
    online: true,
  },
  {
    avatar: 'https://randomuser.me/api/portraits/thumb/women/12.jpg',
    name: 'Ellen Nelson',
    online: false,
  },
];

function ContactList() {
  return (
    <div>
      {List.map(item => (
        <Contact name={item.name} image={item.avatar} status={item.online} />
      ))}
    </div>
  );
}

export default ContactList;
