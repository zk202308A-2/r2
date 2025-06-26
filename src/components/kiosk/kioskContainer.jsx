import { useState } from "react";
import CartComponent from "./cart";
import MenuDisplay from "./menuDisplay";

function KioskContainer() {

    const [items, setItems] = useState([])
    const addCart = function (mno) {
      //mno에 해당하는 menu를 찾아서 
      //items에 추가 
      //상태 변경
      console.log("addCart", mno)

       // 1. mno에 해당하는 menu를 찾습니다.
      const targetMenu = menus.find(menu => menu.mno === mno);

      // 2. 해당 메뉴가 존재하는 경우에만 items에 추가합니다.
      if (targetMenu) {
        // 3. 기존 items 배열에 targetMenu를 추가한 새로운 배열로 상태를 업데이트합니다.
        // 전개 구문(...)을 사용하여 불변성(immutability)을 유지합니다.
        setItems(prevItems => [...prevItems, {...targetMenu, qty:1}]);
      }
    }


    const menus = [
        { mno: 1, name: '짜장면', price: 8000 },
        { mno: 2, name: '짬뽕', price: 9000 },
        { mno: 3, name: '볶음밥', price: 9800 },
        { mno: 4, name: '울면', price: 8500 },
        { mno: 5, name: '덴푸라', price: 18000 },
      ];
  

    return ( 
        <>
          <MenuDisplay arr={menus} addCart={addCart}></MenuDisplay>
          <CartComponent items={items}></CartComponent>
        </>
     );
}

export default KioskContainer;