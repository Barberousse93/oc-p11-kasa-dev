import React from 'react'
import '../styles/containers/HostContainer.css'
import Notation from '../components/Notation.jsx'
import Host from '../components/Host.jsx'

function HostContainer(datas) {
  const notation = datas.notation
  const host = datas.host
  return (
    <div className="hostContainer">
      <Host host={host}></Host>
      <Notation notation={notation} />
    </div>
  )
}

export default HostContainer
