import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <div className="fullscreen-outer text-center text-lg-left">
        <div className="fullscreen-inner">
          <div className="row header mb-3 mb-lg-5">
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start pb-3 pb-lg-0">
              <img src="./ameyo-logo.png" className="ameyo-logo"/>
            </div>
            <a href="#contact-section" className="col-lg-3 d-flex row justify-content-center align-items-center justify-content-lg-end">
              <div>
                <p className="ml-lg-3 text-xl bolders">📨 contact</p>
              </div>
            </a>
            <a className="col-lg-3 d-flex row justify-content-center align-items-center justify-content-lg-end" href="http://bit.ly/ameyolandingpage">
            <div>
              <p className="ml-lg-5 text-xl bolders">⬇️ download</p>
            </div>
            </a> 
          </div>
          <div className="first-screen-content-outer d-flex">
            <div className="first-screen-content-inner row m-auto justify-content-center">
              <div className="col-lg-5 d-flex flex-column h-fit m-auto">
                <h1 className="bold text-xl">Spend less time on to-dos. Have more time to be. With Ameyo.</h1>
                <p>Develop habits, organize your tasks, and take control of your life.</p>
                <div className="">
                  <ChromeButton/>
                </div>
              </div>
              <div className="col-lg-7 d-flex p-0 pl-lg-4 justify-content-center justify-content-lg-end align-items-center mt-4 mt-lg-0">
                <img src="main.gif" className="placeholder"></img>
              </div>
            </div>
          </div> 
        </div>
      </div>
      
      <img src="./blue-wave.png" className="wave"/>

      <div className="fullscreen-outer blue py-5">
        <div className="fullscreen-inner">
          <div className="row align-items-center">
            <div className="col-lg-5 text-lg text-center text-lg-left">
              <p>Every day at midnight... </p>
              <p>All completed “Habits” will uncheck</p>
              <p>Completed “Today” items will move to “Yesterday”</p>
              <p>Completed “Yesterday” items will move to history</p>
              <p>A new beautiful background image will be shown</p>
            </div>
            <div className="col-lg-7 justify-content-lg-end justify-content-center d-flex h-fit">
              <img src="midnight.gif" className="placeholder"/>
            </div>
          </div>
        </div>
      </div>

     
      <img src="./yellow-wave.png" className="wave blue"/>
      

      <div className="fullscreen-outer yellow py-5 d-flex">
        <div className="fullscreen-inner m-auto">
            <p className="text-center text-lg">Never again forget what you did three wednesdays ago with infinite history 📖</p>
            <div className="d-flex justify-content-center">
              <img src="history.gif" className="placeholder"/>
            </div>            
        </div>
      </div>

      <img src="./red-wave.png" className="wave yellow"/>

      <div className="fullscreen-outer red py-5 d-flex">
        <div className="fullscreen-inner m-auto">
            <p className="text-center text-lg">Track how consistently you complete your habits and see your ticket velocity 🚀</p>
            <div className="d-flex justify-content-center">
              <img src="statistics.gif" className="placeholder"/>
            </div> 
        </div>
      </div>

      <img src="./blue-wave.png" className="wave red"/>

      <div className="fullscreen-outer blue d-flex" style={{padding: "100px 0 100px 0"}}>
        <div className="fullscreen-inner m-auto" id="contact-section">
            <div>
              <p className="text-center p-0" style={{fontSize: "200px"}}>💬</p>
              <p className="text-center text-xl">Need help or have feedback? </p>
              <p className="text-center text-lg px-2">Send us an email at <a className="bold underline" href="mailto:alexjcyphus@gmail.com">alexjcyphus@gmail.com</a> or fill out the survey in Ameyo’s Setting’s page.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

const ChromeButton = () => {
  return (
    <a href="http://bit.ly/ameyolandingpage" className="chrome-button-link d-flex">
      <div className="chrome-button-outer d-flex m-auto">
        <div className="col-auto d-flex pr-0 pl-2">
          <img src="./chromestore-icon.png" className="chromestore-icon"/>
        </div>
        <div className="col d-flex align-middle justify-content-centers">
          <div className="h-fit align-self-center">
            <p className="m-0 text-md">download now in the</p>
            <p className="m-0 text-md">chrome web store</p>
          </div>
        </div>
      </div>
    </a>
  )
}
export default App;