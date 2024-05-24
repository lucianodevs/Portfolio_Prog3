import Home from "./pages/Home"
import "./css/App.css"
import background from "./assets/halo.jpg";


function App() {

  const Datos = {
    nombre: "Luciano Alberto Gatti",
    edad: 34,
    direccion: "Crisostomo Alvarez 2301",
    email: "cordobes127@hotmail.com",
    tel: 3814653856,
    cuil: "20-33881378-4",
    nacionalidad: "Argentina",
    estado_civil: "concubinato",
    equipo: "Boca Juniors",
    hija: "Mia",
    virtudes: ["Puntual", "Respetuoso", "Proactivo", "Comunicacion", "Trabajo en equipo"],
    lenguajes: ["Csharp", "JavaScript", "SQL-Server", "MySQL", "React", "CSS"],
    hobbies: ["Futbol", "Basquet", "Correr"],
    mascotas: ["Milo", "Simba", "Kamu"],
    trabajos: ["Transporte Santa Rita", "Freddo", "Hotel Floresta", "Cyber Speed"],
    cursos: ["Tecnico en reparacion de PC y Redes Informaticas", "Introduccion a Git y Github", "Se Programar - Argentina Programa", "Operador avanzado de PC"]

}
//destructurar
// const {nombre, edad, direccion,email, tel, cuil, nacionalidad, estado_civil, equipo, hija,virtudes,lenguajes,hobbies,mascotas, trabajos, cursos} = Datos

  return (
    <div style={{ backgroundImage: `url(${background})` }}>

      <Home Datos = {Datos}/>

    </div>
  )
}

export default App
