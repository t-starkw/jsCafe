import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import './App.css';

// apollo client configuration
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/jscafe',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar />
        {/* <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/menu' component={Menu} />
        </Switch> */}
        <Canvas>
          <Experience />
        </Canvas>
      </div>
    </ApolloProvider>
  );
}

export default App;
