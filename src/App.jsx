import './App.css'
import Estado1 from './Estado1'
import Estado2 from './Estado2'
import Estado3 from './Estado3'
import XMLData from 'https://drive.google.com/open?id=18zLpr4NK1srlyNvS3B4-q-pg0nFd325e&authuser=0';

var rawFile = new XMLHttpRequest();
rawFile.open("GET", XMLData, false);
rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
            var xmlasstring = rawFile.responseText;
            console.log('Your xml file as string', xmlasstring)
        }
    }


function App() {

  return (
    <>
      <Estado1></Estado1>
    </>
  )
}

export default App
