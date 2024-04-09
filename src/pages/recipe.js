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

const Contain = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const ContainRight = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;

`;

const ContainLeft = styled.div`
    flex: 0 1 50%;
    display: flex;
    flex-wrap: wrap;
`;
const Image = styled.img`
    flex: 0 0 auto;
    margin-right: 20px;
`;

const Time = styled.div`
    font-size: 1.5em;
    flex: 0 1 50%;
    margin: 0%;
`;

const CookTime = styled.div`
    flex: 0 1 50%;
    margin: 0%;
    font-size: 1.5em;
`;

const NumServings = styled.div`
    flex: 0 1 50%;
    margin: 0%;
    font-size: 1.5em;
`;

const Difficulty = styled.div`
    flex: 0 1 50%;
    margin: 0%;
    font-size: 1.5em;
`;

const pageTemplate = props => {
    const data = {
        nodeFood: props.pageContext.data
    }

    console.log(data);
    
    return (
        <>
        <Title>{data.nodeFood?.title}</Title>
        {data.nodeFood?.summary.value}
        <Contain>
            
            <Image src={data.nodeFood?.mediaImage.mediaImage.url}/>
            
            <ContainRight>

            <Time><div><StaticImage src="../images/preptime.png"/></div>Prep Time: {data.nodeFood?.preparationTime}</Time>
            <CookTime><div><StaticImage src="../images/cooktime.png"/></div>Cook Time: {data.nodeFood?.cookingTime}</CookTime>
            <NumServings><div><StaticImage src="../images/servings.png"/></div>Number of Servings: {data.nodeFood?.numberOfServings}</NumServings>
            <Difficulty><div><StaticImage src="../images/difficulty.png"/></div>Difficulty: {data.nodeFood?.difficulty}</Difficulty>
            </ContainRight>
            
        </Contain>
        <Contain>
            <ContainLeft>
            <div>{data.nodeFood?.ingredients.map((dat,i) => (
                <div key={i}>
                    <p>{dat.trim()}</p>
                </div>
                )
                )
                }
            </div>
            </ContainLeft>
            

            <ContainRight>
            {data.nodeFood?.recipeInstruction.value}

            </ContainRight>

        </Contain>
        </>
    )
}


export default pageTemplate
