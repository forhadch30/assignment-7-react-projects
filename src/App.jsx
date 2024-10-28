import { useState } from "react"
import AvailableCont from "./components/AvailableCont/AvailableCont"
import Banner from "./components/Navbar/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Subscribe from "./components/Subscribe/Subscribe"
import Footer from "./components/Footer/Footer"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify"
function App() {
  const [available, setAvailable] = useState({
    cart: true,
    status: 'cart'
  })
  const [count, setCount] = useState(0);
  const [selectedPlayer, setPlayers] = useState([])


  const handleCount = (cou) => {
    const addCount = count + cou;
    setCount(addCount)
  }
  const handleAvailable = (sta) => {
    if (sta === 'cart') {
      setAvailable({
        cart: true,
        status: 'cart'
      })
    }
    else {
      setAvailable({
        cart: false,
        status: 'selected'
      })
    }
  }
  const successWorn = (noti) => {
    toast.warn(`${noti}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const successWor = (worn) => {
    toast.warn(`${worn}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const successNotification = (success) => {
    toast.success(`${success}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const handleChoosePlayer = player => {
    const isExist = selectedPlayer.find((p) => p.id === player.id);
    if (selectedPlayer.length <= 5) {
      if (count >= player.price) {
        if (!isExist) {
          setPlayers([...selectedPlayer, player])
          successNotification('Congrates !! Marnus Labuschagne is now in your squad')
          setCount(count - player.price)
        }
        else {
          successWorn('already selected player')
        }
      }
      else{
        successWorn("No money Account")
      }
    }
    else {
      successWorn("already 6 player haven")
    }
  }
  // eslint-disable-next-line no-unused-vars
  const [deleted, setDeleted] = useState([])

  const handleDeletedBtn = (id) => {
    const deleted = selectedPlayer.find((p) => p.id === id);
    setDeleted(deleted)

    const deletedPlayer = selectedPlayer.filter((p) => p.id !== id);
    setPlayers(deletedPlayer)
    successWor('remove player')
  }

  return (
    <>
      <div className="lg:w-10/12 mx-auto ">
        <Navbar count={count}></Navbar>
        <Banner handleCount={handleCount}></Banner>
        <AvailableCont
          handleChoosePlayer={handleChoosePlayer}
          handleAvailable={handleAvailable}
          selectedPlayer={selectedPlayer}
          handleDeletedBtn={handleDeletedBtn}
          available={available}
        ></AvailableCont>
        <Subscribe></Subscribe>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
