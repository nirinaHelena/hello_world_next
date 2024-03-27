import Footer from "./components/Footer"
import Header from "./components/Header"

const HomePage : React.FC = () => {
  return (
    <>
      <Header/>
        <h1>
          Hello Helena
        </h1>
        <h3>This is the home page</h3>
      <Footer/>
    </>
  )
}
export default HomePage;