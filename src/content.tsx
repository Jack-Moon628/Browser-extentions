import * as React from "react";
import { render } from "react-dom";
const r = document.getElementById("content");
const Hello = (props: {who: string }) => (
    <p>Hello, {props.who}</p>
);


render(<Hello who="mary" />, r);