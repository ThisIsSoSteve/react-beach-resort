import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  let types = getUnique(rooms, "type");
  types = ["all", ...types];

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {" "}
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");

  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms"></Title>
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* select guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end select guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">Room Price £{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>
        {/* end room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            ></input>
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            ></input>
          </div>
        </div>
        {/* end size */}
        {/* extra */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            ></input>
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            ></input>
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/* end extra */}
      </form>
    </section>
  );
}
