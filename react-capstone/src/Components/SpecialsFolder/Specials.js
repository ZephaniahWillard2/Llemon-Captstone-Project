import React from "react";
import './SpecialsStyles.css';
import FoodCard from "../FoodItems/FoodCard";


const specials = [
  {
    id: 1,
    title: "Greek salad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit. ",
    image:'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: "$14.99",
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit.",
    image:'https://images.pexels.com/photos/5639423/pexels-photo-5639423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: "$ 7.99",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit.",
    image:'https://images.pexels.com/photos/12035555/pexels-photo-12035555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: "$ 6.00",
  },
];

const Specials = () => {

  return (
    <div className="specials">
      <div className="header-container">
      </div>

      <div className="header-list">
        {specials.map((special) => (
          <FoodCard
            key={special.id}
            title={special.title}
            description={special.description}
            image={special.image}
            price={special.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;