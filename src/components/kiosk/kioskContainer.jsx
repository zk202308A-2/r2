import { useState } from "react";
import CartComponent from "./cart";
import MenuDisplay from "./menuDisplay";

function KioskContainer() {

    const [items, setItems] = useState([])
    const addCart = function (mno) {

      console.log("addCart", mno)
      const targetMenu = menus.find(menu => menu.mno === mno);

      if (targetMenu) {
        //items안에 mno값의 itemd이 존재하는지 확인
        const oldItem = items.find(item => item.mno === mno)
        //있다면 qty만 1 증가 시키고 상태변경 
        if(oldItem){
          oldItem.qty += 1
          setItems(() => [...items])
        }else {
          //없다면 items에 qty속성 추가
          setItems(prevItems => [...prevItems, {...targetMenu, qty:1}]);
        }
        
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