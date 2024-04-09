import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      
      <h2>Recipes</h2>
      <Link to="/en/recipes/deep-mediterranean-quiche">mediterranean quiche</Link><p></p>
      <Link to="/en/recipes/vegan-chocolate-and-nut-brownies">vegan chocolate and nut brownies</Link><p></p>
      <Link to="/en/recipes/super-easy-vegetarian-pasta-bake">Pasta bake</Link><p></p>
      <Link to="/en/recipes/watercress-soup">Soup</Link><p></p>
      <Link to="/en/recipes/victoria-sponge-cake">Sponge cake</Link><p></p>
      <Link to="/en/recipes/gluten-free-pizza">Pizza</Link><p></p>
      <Link to="/en/recipes/thai-green-curry">Curry</Link><p></p>
      <Link to="/en/recipes/crema-catalana">catalana</Link><p></p>
      <Link to="/en/recipes/fiery-chili-sauce">Chili</Link><p></p>
      <Link to="/en/recipes/borscht-with-pork-ribs">Pork ribs</Link><p></p>


      <p>This isn't my english bulldog, but I do like English bulldogs</p>
    </Layout>
  )
}


//<StaticImage
//alt="English Bulldog"
//src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bulldog_inglese.jpg/640px-Bulldog_inglese.jpg"
// />
export default IndexPage

export const Head = () => <Seo title Home Page />

