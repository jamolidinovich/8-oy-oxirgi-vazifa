import React from "react";

function Card(props) {
  console.log(props.data.img.props.src);
  return (
    <div className="w-[350px] shadow-xl p-4 rounded-xl">
      <div>
        <h3 className="text-black font-bold mb-4">{props.data.name}</h3>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          height: "130px",
        }}
      >
        <img
          width={"50px"}
          height={"50px"}
          src={props.data.img.props.src}
          alt=""
        />
        <p className="mt-6  w-[500px] text-black">{props.data.desc}</p>
      </div>
      <input
        style={{ marginLeft: "270px" }}
        type="checkbox"
        className="toggle  [--tglbg:white] bg-lime-600 hover:bg-lime-600 border-lime-900"
      />
    </div>
  );
}

export default Card;
