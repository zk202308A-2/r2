import MenuDisplay from "./menuDisplay";

function KioskContainer() {

    const menus = [
        { mno: 1, name: '짜장면', price: 8000 },
        { mno: 2, name: '짬뽕', price: 9000 },
        { mno: 3, name: '볶음밥', price: 9800 },
        { mno: 4, name: '울면', price: 8500 },
        { mno: 5, name: '덴푸라', price: 18000 },
      ];
  

    return ( 
        <>
          <MenuDisplay arr={menus}></MenuDisplay>
        </>
     );
}

export default KioskContainer;