import {GrDrag} from 'react-icons/gr'
import {MdCheckBoxOutlineBlank} from 'react-icons/md'
import {BsFillCircleFill} from 'react-icons/bs'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {BsClock} from 'react-icons/bs'
import React, { useState } from "react";
import Tag from './Tag'

export const CollapsibleEmail = () => {

    const [isOpen, setIsOpen] = useState(false);


  return (

    <div className={isOpen ? 'collapsibleContainer':'emailHeaderContainer'}>
        <div className='emailHeaderItems'>
            <div className='emailHeaderIcons'>
                <GrDrag className='icons'/>
                <MdCheckBoxOutlineBlank className='icons'/>
                <BsFillCircleFill className='icons'
                    style={{color:'green'}}
                />
            </div>
            <div className="dayBox icons">
                <p>12</p>
                <p>JAN</p>
            </div>
            <div className='initials icons'>
                <p>TA</p>
            </div>
            <div className='emailDetails'>
                <h3>Email Subject</h3>
                <p>Sender</p>
                <p id='sender-email'> <span>&#60;</span>Sender Email<span>&#62;</span> | Date </p>
            </div>

            <div className='tags'>
                <Tag/>
                <Tag/> 
            </div>

            <div className='timeSent'>
                <BsClock className='timeSentItems'/>
                <p className='timeSentItems'> 1 Min</p>
            </div>

            <div className='dropDown'>
                <RiArrowDropDownLine 
                    style={{fontSize:'30px', color: '858585', cursor: 'pointer', transform: 'rotate(-90deg)'}}
                onClick={() => setIsOpen(!isOpen)}/>
            </div>
        </div>

        {isOpen && <div className='collapsedContainer'>
            <div className='senderHeader' >
                <h3>Leo M'anoban</h3>
                <p>12 Jan 2021 03:41PM</p>
            </div>


            <div className='senderDetails'>
                <p>From: Leo M'anoban</p>
                <p>Date: 12 Jan 2021 03:41PM</p>
                <p>Subject: New Project 3</p>
                <p>To: Isabel Bowen</p>
            </div>

            <div className='body'>
                <p>His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. 
                    He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.</p>
            </div>
        </div>}
        
    </div>
  )
}

export default CollapsibleEmail