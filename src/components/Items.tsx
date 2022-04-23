import React from "react";
import {ItemType} from "../App";

type ItemsPropsType = {
    items: ItemType
}

export const Items = (props: ItemsPropsType) => {
    return <main>
        { props.items.title }
    </main>
}