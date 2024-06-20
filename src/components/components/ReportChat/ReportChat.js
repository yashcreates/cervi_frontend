import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { addChatMessage } from '../../api/helpers';
import { getReportChat } from '../../api/helpers';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '90%',
  maxWidth: "400px",
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
    const open = props.windowOpen
    const handleClose = () => props.closeChatWindow();

    const [message, setMessage] = React.useState('')
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        console.log(props.reportID)
        setMessage('')
        getReportChat(props.token, props.reportID)
            .then(result=>{
                console.log(result)
                setMessages(result.messages)
        })
    },[open])

    const displayChat = (messages) => {
        const rows = []
        if(messages===null) return
        messages.forEach((message, index)=>{
            let sender = null
            let messageClass = null
            let heading
            if(message.sender === props.userType) {
                heading="You"
                messageClass = 'selfMessage'
            } else {
                heading=message.sender
                messageClass = 'otherMessage'
            }
            // if(message.sender==="patient") {
            //     sender = "Patient"
            //     messageClass = 'patientMessage'
            // }
            let row = (
                <div key={index}>
                    <div className='chatsList'>
                        <div>
                            <span className={messageClass}>
                                <div className='messageHeading'>{heading}</div>
                                <div>
                                    {message.message}
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            )
            rows.push(row)
        })
        return rows
    }


    const sendMessage = (token, reportID, message) => {
        if(message===null) return
        if(message.length===0) return
        addChatMessage(token, reportID, message)
        .then(res=>{
            getReportChat(props.token, props.reportID)
            .then(result=>{
                console.log(result)
                setMessages(result.messages)
            })
        })
        .then(setMessage(''))
    }

    return (
        <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div>{displayChat(messages)}</div>
                <hr/>
                <div className='chatAddMessageDiv'>
                    <TextField id="outlined-basic" label="Add message" variant="standard" 
                        fullWidth
                        onChange={(e)=>{setMessage(e.target.value)}}
                        value={message}
                    />
                    <Button
                        className='chatSendMessageButton'
                        variant='outlined'
                        onClick={()=>{
                            sendMessage(props.token, props.reportID, message)
                        }}
                    >
                        Send
                    </Button>
                </div>
            </Box>
        </Modal>
        </div>
  );
}