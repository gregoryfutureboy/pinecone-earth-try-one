import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled, { keyframes } from 'styled-components';

const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LandingContainer = styled.div`
  font-family: 'courier';
  display: flex;
  height: 98vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 5rem;

  @media (max-width: 475px) {
    margin-top: 4.2rem;
  }
`

const StyledH3 = styled.h3`
  margin: 0;
  margin-bottom: -1rem;
  color: #F12B5D;
  letter-spacing: 0.1rem;
`

const StyledH1 = styled.h1`
  @media (max-width: 475px) {
    font-size: 24px;
    margin-top: 1.2rem;
  }
`

const PineconeBlackLogo = styled.img`
  margin: 0;
  width: 333px;
  animation: ${spinning} 42s linear infinite;

  @media (max-width: 475px) {
    width: 222px;
  }
`

const GET_LANDING = gql`
  query {
    landingPages {
      h1
      h3
      logo {
        url
      }
    }
  }
`

class Landing extends Component {
  render() {
    return (
      <Query query={GET_LANDING}>
        {
          ({ data, loading, error }) => {
            console.log(data)
            if(error) {
              return <div>error</div>
            }

            const { landingPages } = data;
            
            if(loading || !landingPages) {
              return null
            }

            return landingPages.map((assets) => (
              <LandingContainer key={assets.h1}>
                <PineconeBlackLogo src={assets.logo.url} alt='pinecone-black-logo' />
                <TextContainer>
                  <StyledH3>
                    {assets.h3}
                  </StyledH3>
                  <StyledH1>
                    {assets.h1}
                  </StyledH1>
                </TextContainer>
              </LandingContainer>
            ))
          }
        }
      </Query>
    )
  }
}

export default Landing;