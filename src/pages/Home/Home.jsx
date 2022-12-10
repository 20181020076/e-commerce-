import './Home.scss'
const Home = () => {
  return (
    <div className="home">
      <div className='home__title'>
        <h1>Hola! Bienvenidos a nuestra tienda Virtual</h1>
      </div>
      <div className='home__img'>
        <img src="/images/principal.png" alt="" />
      </div>
      <div className='home__descripcion'>
        animate a conocer el nuevo mundo de la moda
      </div>
    </div>
  )
}

export default Home