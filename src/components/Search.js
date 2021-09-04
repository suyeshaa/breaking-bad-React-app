import React, { useState } from "react";

export const Search = (props) => {
  const { txt } = props;

  const changeHandler = (e) => {
    txt(e.target.value);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters.."
          autoFocus
          onChange={changeHandler}
        />
      </form>
    </section>
  );
};
