import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/pages/DetailAppt.css'
import Appts from '../datas/logements.json'
import Slider from '../components/Slider.jsx'
import ApptNomLocation from '../components/ApptNomLocation.jsx'
import Tags from '../components/Tags.jsx'
import HostContainer from '../containers/HostContainer.jsx'
import Collapse from '../components/Collapse.jsx'
import ApptVide from '../datas/logtVide.json'

const DetailAppt = () => {
  const navigate = useNavigate()
  const [appart, setAppart] = useState(ApptVide[0])

  const { id } = useParams()
  useEffect(() => {
    const apptDatas = Appts.filter((item) => item.id === id)
    if (!apptDatas[0]) {
      navigate('/error')
    } else {
      setAppart(apptDatas[0])
    }
  }, [id])

  return (
    <div className="detailContainer">
      <Slider images={appart.pictures}></Slider>
      <div className="nomTagHost">
        <div className="nomTag">
          <ApptNomLocation title={appart.title} location={appart.location} />
          <Tags tags={appart.tags}></Tags>
        </div>
        <HostContainer
          notation={appart.rating}
          host={appart.host}
        ></HostContainer>
      </div>
      <div className="detailDescContainer">
        <div className="detailCollapse">
          <Collapse titre="Description" contenu={appart.description} />
        </div>
        <div className="detailCollapse">
          <Collapse
            className="detailCollapse"
            titre="Equipements"
            contenu={
              <ul className="listeEquipements">
                {appart.equipments.map((item, index) => (
                  <li className="equipement" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default DetailAppt
