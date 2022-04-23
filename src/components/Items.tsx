import React from "react";
import {ItemType} from "../App";

type ItemsPropsType = {
    items: Array<ItemType>
}

export const Items = (props: ItemsPropsType) => {
    return <main>
        {props.items.map(el => (
            <h1>{el.title}</h1>))}
    </main>
}