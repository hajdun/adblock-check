import './App.css'
import { AdBlockDetectedWrapper } from "adblock-detect-react";

function App() {

  return (
    <>
      <section id="center">
        <div>
          Adblock detection result in alert
        </div>
        <AdBlockDetectedWrapper>
          <div>{"Hello Ad Blocked Page"}</div>
        </AdBlockDetectedWrapper>
      </section>
    </>
  )
}

export default App
