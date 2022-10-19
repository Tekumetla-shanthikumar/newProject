
import Navbar from './components/Navbar';
import Logo from './components/Logo';
// import YouTube from './components/skeleton';
// import Cards from './components/Cards';
import CatGrid from './components/Container/CatGrid';
// import Footer from './components/Footer/Footer'


import Grids from './components/Grids';
import Footer from './components/Footer/Footer'
import MasonryImageList from './components/Image List/image'


export default function App() {
  return (
    <div>
      <Navbar />
      <Logo />
      <Grids />
      <CatGrid />
      <MasonryImageList />
      <Footer />

      
    </div>
  )
}
