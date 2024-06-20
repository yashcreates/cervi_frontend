import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { addChatMessage } from '../../api/helpers';
import { getReportChat } from '../../api/helpers';
import { requestDoctor } from '../../api/helpers';


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

export default function SelectDoctor(props) {

    const open = props.openDoctorModal
    const doctors = props.doctors.doctors
    const data = props.reportData
    const handleClose = () => props.closeDoctorModal();

    const [doctorsList, setDoctorsList] = useState([])

    const assignDoctor = (name, doctorId) => {
        let text;
        if (window.confirm("Do you want to get a consultation from " + name + " ?") === true) {
            console.log(name, doctorId, data.patient.user_id, data.id)
            requestDoctor(data.patient.user_id, doctorId, data.id, props.token)
            .then(response => console.log(response))
        } else {
            text = "You canceled!";
        }
        console.log(text)
    }

    useEffect(()=>{
        if(doctors !== undefined && doctors.length > 0){
            setDoctorsList(doctors)
        }
        console.log(doctorsList)
    })

    const renderList = (list) => {
        if(list.length < 1) return null
        const rows= []
        list.forEach((doctor, index)=>{
            const row = (
                <div key={index} className='doctorListElem' onClick={()=>{assignDoctor(doctor.name, doctor.user_id)}}>
                    {index+1}. {doctor.name}
                    <hr/>
                </div>
            )
            rows.push(row)
        })
        return rows
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
                <div style={{fontWeight: "600"}}>
                    Select a doctor for consultation
                </div>
                <hr/>
                {renderList(doctorsList)}
            </Box>
        </Modal>
        </div>
  );
}