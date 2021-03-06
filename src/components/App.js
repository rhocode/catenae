import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from './Layout'
import { IndexPage } from './IndexPage'
import { ProductsPage } from './ProductsPage'
import { SearchPage } from './SearchPage'
import { AthletePage } from './AthletePage'
import { NotFoundPage } from './NotFoundPage'
import { AboutUsPage } from './AboutUsPage'
import { ContactPage } from './ContactPage'
import { TermsPage } from './TermsPage'
import { CompliancePage } from './CompliancePage'
import {InformationRequest} from './InformationRequest'
import CartPage from './CartPage'
import { FAQ } from './FAQ'
import Product from './Product'
import AdminPage from './AdminPage'
import athletes from '../data/athletes'

const renderIndex = () => <IndexPage />
const renderFAQs = () => <FAQ />
const renderProducts = () => <ProductsPage />
const renderAboutUsPage = () => <AboutUsPage />
const renderContactPage = () => <ContactPage />
const renderTermsPage = () => <TermsPage />
const renderCompliancePage = () => <CompliancePage />
const renderAdminPage = () => <AdminPage />
const renderCartPage = () => <CartPage />
const renderSearchPage = ({ match, staticContext }) => <SearchPage query={match.params.query} />
const renderInformationRequest = () => <InformationRequest />
const renderProduct = ({ match, staticContext }) => <Product prod={match.params.prod} />
const renderAthlete = ({ match, staticContext }) => {
  const id = match.params.id
  const athlete = athletes.find(current => current.id === id)
  if (!athlete) {
    return <NotFoundPage staticContext={staticContext} />
  }

  return <AthletePage athlete={athlete} athletes={athletes} />
}

// const renderTest = ({ match, staticContext }) => {
//   firebase.database().ref('/data').once('value').then(function(snapshot) {
//     console.log(snapshot)
//     return <IndexPage />
//   })
//   return <NotFoundPage staticContext={staticContext} />
// }

export const App = () => (
  <Layout>
    <Switch>
      <Route exact path='/' render={renderIndex} />
      <Route exact path='/faqs' render={renderFAQs} />
      <Route exact path='/about' render={renderAboutUsPage} />
      <Route exact path='/terms' render={renderTermsPage} />
      <Route exact path='/contact' render={renderContactPage} />
      <Route exact path='/products' render={renderProducts} />
      <Route exact path='/products/:prod' render={renderProduct} />
      <Route exact path='/inforeq' render={renderInformationRequest} />
      <Route exact path='/compliance' render={renderCompliancePage} />
      <Route exact path='/athlete/:id' render={renderAthlete} />
      <Route exact path='/search/:query' render={renderSearchPage} />
      <Route exact path='/cart' render={renderCartPage} />
      <Route exact path='/admin' render={renderAdminPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
)

export default App
