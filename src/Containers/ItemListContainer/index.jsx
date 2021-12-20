import React from "react"
import { useEffect, useState } from "react";
import MockedItems from "../../mock/MockedItems";
import ItemList from "../../components/ItemList";


const ItemListContainer = () => {


        const [items, setItem] = useState([]);


        useEffect(() => {
          const itemPromeise = new Promise((res, rej) => {
            res(MockedItems);
          });
      
          itemPromeise.then((res) => setItem(res));
        }, [items]);
        
        return <ItemList items={items} />;
       
      };
      

export default ItemListContainer;