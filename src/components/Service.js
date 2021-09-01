
import React, { useState, useEffect } from 'react'
import CardsData from '../components/CardsData'
import Loader from '../components/Loader'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Service = (props) => {
  const [cardData, setCardData] = useState([])
  const [isLoader, setIsLoader] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")


  // ========== GET METHOD ---- USING FETCH - ASYNC - AWAIT =================
  // const getData = async () => {
  //   // try{
  //   // const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  //   // setCardData(await response.json());
  //   // }
  //   // catch(error){
  //   //  document.write(error);
  //   // }

  // }

  // ================= GET METHOD ---- USING AXIOS ==========================
  const getData = () => {
    setIsLoader(true)

    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        setCardData(response.data)
        setIsLoader(false)

      })
      .catch((error) => {
        setIsLoader(false)
        // to display the actual error(which is an object) caught by the catch method is converted into string and then displayed on the DOM 
        const err = JSON.stringify(error);
        console.log("TYPEOF", typeof (err))
        setErrorMsg("Sorry Something went wrong" + err)

      })
  }

  useEffect(() => {
    getData();
  }, []);

  const removeCard = (remId) => {
    console.log(remId);
    const newCardData = cardData.filter((deleteId) => {
      return deleteId.id != remId;
    })
    setCardData(newCardData);
  }


  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">

            {(isLoader) ? <Loader /> : null}
            {(errorMsg) ? <p>{errorMsg}</p> : null}

            <div className="row gy-4">

              {
                cardData.map((cardValue, index) => {
                  return (
                    <div key={cardValue.id} className="col-md-6 col-lg-4">
                      <div className="card">
                        <CardsData
                          id={cardValue.id}
                          url={cardValue.url}
                          title={cardValue.title}
                        />
                        <div className="btnclass">
                          <NavLink to="/" className="btn-card">Read More</NavLink>
                          <button onClick={() => removeCard(cardValue.id)} className="btn-card"> Remove </button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Service


