import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components';
import PrepTime from '../components/prepTime';
import { StaticImage } from 'gatsby-plugin-image';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
`;

const Image = styled.img`
    flex: 0 0 auto;
    margin-right: 20px;
`;

const pageTemplate2 = props => {
    const data = {
        nodeArticle: props.pageContext.data
    }

    console.log(data);
    
    return (
        <>
        <Title><h1>{data.nodeArticle?.title}</h1></Title>
        {data.nodeArticle?.body.value}
        <Image src={data.nodeArticle?.mediaImage.mediaImage.url}></Image>
        </>
    )
}


export default pageTemplate2
