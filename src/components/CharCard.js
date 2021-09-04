import React from "react";
import load from "../assets/spinner.gif";

const CharCard = (props) => {
  const { items, loading } = props;

  const list = items.map((el) => {
    return (
      <div className="card" key={el.id}>
        <div className="card-inner">
          <div className="card-front">
            <img src={el.img} alt="" />
          </div>
          <div className="card-back">
            <h1>{el.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {el.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {el.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {el.birthday}
              </li>
              <li>
                <strong>Status:</strong>
                {el.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="cards">
      {loading ? (
        <img
          className="center"
          src={load}
          alt="loading..."
          style={{ width: "200px", margin: "auto", display: "block" }}
        />
      ) : (
        list
      )}
    </section>
  );
};

export default CharCard;
