import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import * as mqtt from 'mqtt/dist/mqtt'
import Estado1 from './Estado1'
import Estado2 from './Estado2'
import Estado3 from './Estado3'


var options = [{
  host: 'localhost',
  port: '1883'
}]

var client = mqtt.connect("mqtt://46.17.108.113", options);

var topics = "/TEF/lamp114/attrs/S1"

client.subscribe(topics);
console.log("Client subscribed ");

var estado = 1

function App() {

  return (
    <>
      <Estado3></Estado3>
    </>
  )
}

export default App
