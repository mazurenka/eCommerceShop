import React from "react";
import {ItemType} from "../App";
import {Item} from "./Item";

type ItemsPropsType = {
    items: Array<ItemType>
    addToOrder: (id: string,
                 title: string,
                 img: string,
                 desc: string,
                 category: string,
                 price: string) => void
}

export const Items = (props: ItemsPropsType) => {
    return <main>
        {props.items.map(el => (
            <Item key={el.id} item={el} addToOrder={props.addToOrder}/>))}
    </main>
}