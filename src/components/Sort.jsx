
export default function Sort(){
//Recommended Syntax to Sort//
    const digits = [5,2,9,1];
    console.log(digits, "before");
    //digits.sort()
    //console.log(digits, "after")

//Extended (spread) Syntax to Sort//
      const sortedNums = [...digits].sort((a, b)=> a - b);
      console.log(digits, "after");
      console.log(sortedNums);

    return(
        <>
        <div>Sort Demo</div>
        </>
    )
}