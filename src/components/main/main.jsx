import React, { useContext,useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets/assets'
import { GeminiContext } from '../context';

const Main = () => {
        const [input, setInput] = useState("");
        const { answer, loading, askGemini,showResult,question } =useContext(GeminiContext);

    const handleAsk = () => {
        if (!input.trim()) return alert("Please enter a question.");
        askGemini(input);
        setInput("");
  };
  return (
    <>
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon}/>
            </div>
            <div className="main-container">

                {!showResult?<>
                    <div className="greet">
                    <p><span>Hello,Dev.</span></p>
                    <p>How can i help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>suggest beautifull places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>

                    <div className="card">
                        <p>improve the readability of the following code</p>
                        <img src={assets.bulb_icon} alt=""/>
                    </div>

                    <div className="card">
                        <p>brainstrom team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt=""/>
                    </div>

                    <div className="card">
                        <p>briefly summarize this concepts:urban planning</p>
                        <img src={assets.code_icon} alt=""/>
                    </div>
                </div>
                
                </>:<div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt=""/>
                            <p> {question}</p>  
                        </div>
                        <div className='result-data'>
                            <img src={assets.gemini_icon}alt=""/>
                            {loading? <div className='loader'><hr/>
                                <hr/>
                                <hr/>
                                
                            </div>:<p>{answer}</p>}
                            

                        </div>
                    </div>}

                
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter your prompt here' value={input} onChange={(e)=>setInput(e.target.value)} />
                        <div>
                            <img src={assets.gallery_icon} alt=''/>
                            <img src={assets.mic_icon} alt=''/>
                            {input?<img src={assets.send_icon} alt='' onClick={()=>handleAsk()}/>:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info,including about people,so double check its responses.
                    </p>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Main;