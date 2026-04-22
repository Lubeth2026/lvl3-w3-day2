import React from "react";
//Filter for the cats array//
//Filter creates a new array//
//Filter CALLBACK function is what actually returns the true or false (boolean)//

export default function Cats() {
  const name = "Garfield";
  const catNames = [name, "Midnight", "Shadow", "Lennox"];
 //Filter cats array//
  const filteredData = catNames.filter((catName)=> !catName.startsWith("L"));
//MAP cats array//
  const namesJSX = filteredData.map(catName => <p key={catName}>{catName}</p>);

  return (
    <>
      <div>
        <h2>Cats Names:</h2>
        {namesJSX}
      </div>
    </>
  );
}