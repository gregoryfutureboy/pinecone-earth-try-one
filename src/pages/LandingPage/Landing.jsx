import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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
              return <div>Loading</div>
            }

            return (
              <h1>
                {landingPages[0].h1}
              </h1>
            )
          }
        }
      </Query>
    )
  }
}

export default Landing;