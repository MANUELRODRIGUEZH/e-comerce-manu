import React from "react"
import { useEffect, useState } from "react";
import MockedItems from "../../mock/MockedItems";

const ItemListContainer = () => {


        const [item, setItem] = useState([]);


        useEffect(() => {
          const itemPromeise = new Promise((res, rej) => {
            res(MockedItems);
          });
      
          itemPromeise.then((res) => setItem(res));
        }, [item]);
        
        return <Itemlist items={items}/>
        /*(
         <>
            {Item.map((categoria) => {
              return (
                <a key={categoria.catId} href={categoria.ruta} style={styles.link}>
                  <li>{categoria.nombre}</li>
                </a>
              );
            })}
          </>
        );*/
      };
      

export default ItemListContainer;