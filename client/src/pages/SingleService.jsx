import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '../components/card/DataBig'

export default function SingleService() {
    const {serviceId} = useParams()
    let currentService = {}
    Data.forEach((service) => {
        if(service.id == serviceId) currentService = service
    })
  return (
    <div>
        <img src={currentService.src} alt="" />
    </div>
  )
}
