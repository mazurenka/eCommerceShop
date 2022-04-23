import React from "react";
import {ItemType} from "../App";

type ItemsPropsType = {
    items: Array<ItemType>
}

export const Items = (props: ItemsPropsType) => {
    return <main>
        { props.items.map(el => el.title)}
    </main>
}