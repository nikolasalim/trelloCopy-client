import React, { useEffect } from "react";
import ApolloClient, { gql } from "apollo-boost";
import AuthPageContainer from "./components/AuthPageContainer";
import { ApolloProvider, Query } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const SOME_QUERY = gql`
  {
    boards {
      id
      title
      description
    }
  }
`;

function App() {
  useEffect(() => {});

  return (
    <ApolloProvider client={client}>
      <div>
        <Query query={SOME_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            {
              console.log("data is", data.boards);
            }
            return <p>{data.boards[0].title}</p>;
          }}
        </Query>
        <AuthPageContainer />
      </div>
    </ApolloProvider>
  );
}

export default App;
