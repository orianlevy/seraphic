import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const COLORS_PALETTE = [
    "#FA8072",
    "#FF6347",
    "#800080",
    "#B0C4DE",
    "#ADD8E6",
    "#00BFFF",
]
const ItemWrapper = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  background-color: ${({index}) => COLORS_PALETTE[index]};
  height: ${({height}) => height+10}px;
  margin: 7px;
  color: ${({index}) => COLORS_PALETTE[index]};
`;

const BarGraphItem = ({value, index}) => {
   const [localIndex, setLocalIndex] = useState(index);
    useEffect(() => {
        if (index >= COLORS_PALETTE.length) {
            setLocalIndex(index % 6)
        }
    }, []);

    return (
        <ItemWrapper height={value} index={localIndex}>
            <span>{value}</span>
        </ItemWrapper>
    );
};

export default BarGraphItem;
