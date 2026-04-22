
//Filter for the numbers array//
//Filter a new array//
//Filter CALLBACK function is what actually returns the true or false (boolean)//

export default function Numbers(){
//Filter numbers array//
    const numbers = [1,2,3,4,5];
    const bigNumbers = numbers.filter((number)=> number>3);
//MAP numbers array//
    const jsxNumbers = bigNumbers.map((number)=> (
        <div key={number}>
        <p>Numbers Filter: <span>{number}</span></p>
        </div>
    ))
    {console.log(jsxNumbers)};

    return(
        <>
        <div>{jsxNumbers}</div>
        </>
    )
}