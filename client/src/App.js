import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DisplayData from "./component/DisplayData";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${process.env.REACT_APP_GRAPHQL}`,
});
function App() {
  console.log(process.env.REACT_APP_GRAPHQL)
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <DisplayData />
      </div>
    </ApolloProvider>
  );
}

export default App;
