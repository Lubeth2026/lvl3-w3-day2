import React from "react";
import Numbers from "./Numbers";
import Cats from "./Cats";
import Sort from "./Sort";

//How arrays actually work//
//MAP for the pet array//
//MAP looping over each item/Taking item & passing it in as a parameter//
//MAP turns Data into Elements//
export default function Primary() {
  const name = "Milo";
  const petNames = [name, "Luna", "Daisy"];
 
  const jsxNames = petNames.map(petName => <p key={petName}>{petName}</p>);

  return (
    <>
      <div>
        <h2>Pet Names:</h2>
        {jsxNames}
        <Numbers/>
        <Cats/>
        <Sort/>
      </div>
    </>
  );
}