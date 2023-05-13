import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function Test1() {
    const match = useRouteMatch();

    return (
        <>
            <Link to={`${match.url}/test`}>test2</Link>
            <div>Test</div>
        </>
    );
}

export default Test1;
