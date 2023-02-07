import React from "react";
import "./BarGraph.css"
import styled from "styled-components";
import BarGraphItem from "../BarGraphItem/BarGraphItem";

const Wrapper = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  width: ${({width}) => width*30}px;
  
`;

const BarGraph = ({data, count}) => {
    return (
        <Wrapper width={count}>
            <div className="graphContainer">
                {data.map((item, index)=>{return <BarGraphItem key={index} index={index} className="label" value={item.value}/>})}
            </div>
            <div className="labels">
                {data.map((item, index)=>{return <div key={index} className="label">{item.label}</div>})}
            </div>

        </Wrapper>
    )
}

export default BarGraph;
