import React from "react";
import {ItemType} from "../App";
import {Item} from "./Item";

type ItemsPropsType = {
    items: Array<ItemType>
}

export const Items = (props: ItemsPropsType) => {
    return <main>
        {props.items.map(el => (
            <Item items={el}/>))}
    </main>
}