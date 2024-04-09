import React from 'react'
import styled from 'styled-components';

const Time = styled.h4`
    font-size: 1.5em;
    flex: 0 1 50%;
    margin: -1.5%;
`;


const PrepTime = ({children}) => (
    <Time>
        Prep Time:
        {children}
    </Time>
)

export default PrepTime