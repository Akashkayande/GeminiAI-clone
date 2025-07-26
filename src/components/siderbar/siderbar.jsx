import React, { useContext, useState } from 'react'
import './sidebar.css';
import { assets } from '../../assets/assets/assets'
import { GeminiContext } from '../context';

const Siderbar = () => {
    const [exstended,setexstended]=useState(false)
    const {history}=useContext(GeminiContext);
  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>setexstended(prev=>!prev)} className='menu' src={assets.menu_icon}alt='menu'  />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="plus icon"/>
                {exstended?<p>New chat</p>:null}
            </div>
            {exstended?<div className="resent">
                <p className="recent-title">resent</p>
                {history.map((item,i)=>{
                    return (
                        <div className="recent-entry">
                            <img src={assets.message_icon}/>
                            <p>{item.slice(0,18)}...</p>
                        </div>
                    )
                })}
                
            </div>:null}
            
            
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry ">
                <img src={assets.question_icon} alt=""/>
                {exstended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt=""/>
                {exstended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt=""/>
                {exstended?<p>Settings</p>:null}
            </div>
        </div>

    </div>
  )
}

export default Siderbar