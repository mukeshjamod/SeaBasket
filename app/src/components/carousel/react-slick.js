import React from 'react';

const items = [
    {
      id: 1,
      name: "Item 1",
      image: "https://example.com/item1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Item 2",
      image: "https://example.com/item2.jpg",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // add more items here
  ];

  const renderItems = () => {
    return items.map((item) => (
      <div key={item.id}>
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    ));
  };
  

  export default renderItems;
  