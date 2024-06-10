import React from "react";

interface Props {
  array: number[];
}

const Dstructuring: React.FC<Props> = ({ array }) => {
  //   const copyArray = [...array];
  //   const one = copyArray.shift();
  //   const two = copyArray.shift();

  const [one, two, ...copyArray] = array;

  return (
    <div className="text-[3rem]">
      <div>Dstructuring</div>
      <div>
        <div>array</div>
        {array.map((num) => num + " ")}
        <div>one</div>
        {one}
        <div>two</div>
        {two}
        <div>copy array</div>
        {copyArray}
      </div>
    </div>
  );
};

export default Dstructuring;