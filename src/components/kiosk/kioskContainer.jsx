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

    const changeQty = (mno, amount) => {
      console.log("changeQty", mno, amount)
      //items안에 mno에 해당하는 item을 찾는다 
      const item = items.find(i => i.mno === mno)
      //item의 수량을 변경한다
      item.qty += amount 
      //상태가 변경되었다는 사실을 알려준다 setItems
      if(item.qty <= 0){
        setItems(items => items.filter(item => item.mno !== mno))
        return
      }
      setItems(state => [...items])
      
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
          <CartComponent items={items} changeQty={changeQty}></CartComponent>
        </>
     );
}

export default KioskContainer;