function MenuDisplay({ arr }) {

    return (
      <>
        <ul>
          {makeLi(arr)}
        </ul>
      </>
    );
  }

  function makeLi(arr) {
    return arr.map(({ mno, name, price }) =>
    <li
    key={mno}
    className="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center"
    >
    <div className="font-bold text-lg">{name}</div>
    <div className="text-gray-700">No. {mno}</div>
    <div className="text-blue-600 font-semibold">${price}</div>
    </li>
)

  }
  
  export default MenuDisplay;