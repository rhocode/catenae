import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';
import { IndexPage } from './IndexPage';
import { ProductsPage } from './ProductsPage';
import { AthletePage } from './AthletePage';
import { NotFoundPage } from './NotFoundPage';
import athletes from '../data/athletes';

const renderIndex = () => <IndexPage />;
const renderProducts = () => <ProductsPage />;
const renderAthlete = ({ match, staticContext }) => {
  const id = match.params.id;
  const athlete = athletes.find(current => current.id === id);
  if (!athlete) {
    return <NotFoundPage staticContext={staticContext} />;
  }

  return <AthletePage athlete={athlete} athletes={athletes} />;
};

export const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" render={renderIndex} />
      <Route exact path="/products" render={renderProducts} />
      <Route exact path="/athlete/:id" render={renderAthlete} />
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
);

export default App;
