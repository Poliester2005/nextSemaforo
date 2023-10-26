import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as mqtt from 'mqtt/dist/mqtt'

var client = mqtt.connect("mqtt://46.17.108.113:1883");

var topics = ["/TEF/lamp114/attrs/S1", "/TEF/lamp114/attrs/S2", "/TEF/lamp114/attrs/S3", "/TEF/lamp114/attrs/S4"]

client.subscribe(topics);
console.log("Client subscribed ");

function App() {
  const [count, setCount] = useState(0)

  var note;
  client.on("message", function (topic, message) {
    note = message.toString();
    // Updates React state with message
    setMsg(note);
    console.log(note);
    client.end();
  });

  

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Hello MQTT in React</h1>
          <p>The message payload is: {msg}</p>
        </header>
      </div>
    </>
  )
}

export default App
