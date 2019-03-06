import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled, { keyframes } from 'styled-components';

import BlackLogo from './../../assets/images/pineconeLogoBlack.svg';

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
  margin-top: 3rem;
`

const StyledH3 = styled.h3`
  margin: 0;
  margin-bottom: -1rem;
  color: #F12B5D;
  letter-spacing: 0.1rem;
`

const PineconeBlackLogo = styled.img`
  margin: 0;
  width: 255px;
  animation: ${spinning} 42s linear infinite;
`

const GET_LANDING = gql`
  query {
    landingPages {
      h1
      h3
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

            return (
              <LandingContainer>
                <PineconeBlackLogo src={BlackLogo} alt='pinecone-black-logo' />
                <TextContainer>
                  <StyledH3>
                    {landingPages[0].h3}
                  </StyledH3>
                <h1>
                  {landingPages[0].h1}
                </h1>
                </TextContainer>
              </LandingContainer>
            )
          }
        }
      </Query>
    )
  }
}

export default Landing;