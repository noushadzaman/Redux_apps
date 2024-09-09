import './App.css'
import AddProductForm from './components/AddProductForm'
import Navbar from './components/Navbar'
import ProductContainer from './components/ProductContainer'

function App() {

  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="productWrapper">
          <ProductContainer />
          <AddProductForm />
        </div>
      </main>
    </>
  )
}

export default App
