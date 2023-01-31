import React from "react";

export function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>Вода кипит!</p>
    }
    return <p>Вода не кипит.</p>
}