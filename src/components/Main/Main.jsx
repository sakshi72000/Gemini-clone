import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'
const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
      <div className="main-container">

        {!showResult
        ?<>
        
        <div className="greed">
            <p><span>Hello, Dev.</span></p>
            <p>How can I Help You Today</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautifual paces to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, vel!</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Program for Addition of two numbers</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>What is OSI Model</p>
                <img src={assets.code_icon} alt="" />
            </div>

        </div>
        </>
        :<div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading
                ?<div className='loader'>
                    <hr />
                    <hr />
                    <hr />

                </div>
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
            </div>

        </div>
        }



        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e) => setInput(e.target.value)} value ={input}  type="text" placeholder='Enter a Prompt here' />
                <div>
                    <img src={assets.gallery_icon } alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="bottom-info">
               Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps 
            </p>
        </div>
      </div>
    </div>
  )
}

export default Main
