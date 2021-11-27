import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DisplayData from "./component/DisplayData";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `http://localhost:4000/graphql`,
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <DisplayData />
      </div>
    </ApolloProvider>
  );
}

export default App;
