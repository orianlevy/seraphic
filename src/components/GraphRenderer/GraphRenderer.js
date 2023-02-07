import React, { useMemo, useState } from "react";
import "./GraphRenderer.scss";
import BarGraph from "../BarGraph/BarGraph";

const GraphRenderer = ({ render, data }) => {
    const [count, setCount] = useState(data.length);
    const dataSlice = useMemo(() => data.slice(0, count), [data, count]);

    return (
        <div className="graph-renderer">
            <header className="buttons">
                <button
                    onClick={() => setCount((count) => (count > 2 ? count - 1 : count))}
                >
                    -
                </button>
                <span>{count} cols.</span>
                <button
                    onClick={() =>
                        setCount((count) => (count < data.length ? count + 1 : count))
                    }
                >
                    +
                </button>
            </header>

            <BarGraph data={dataSlice} count={count}/>
        </div>
    );
};

export default GraphRenderer;
