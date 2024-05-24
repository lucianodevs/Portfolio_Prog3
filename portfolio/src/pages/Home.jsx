import Header from "../component/Header/"
import Main from "../component/Main/"
import Footer from '../component/Footer/'
import "../css/Home.css"



const Home = (props) => {
  console.log(props);
  return (
    
    <>
    <div  className='home'> 
    <Header Datos = {props.Datos} />
    <br /><br />
    <Main Datos = {props.Datos}/>
    <br /><br />
    <Footer Datos = {props.Datos}/>

    </div>

    </>
  )
}

export default Home