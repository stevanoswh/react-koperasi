import React, { useState } from 'react';
import ParticipantForm from '../components/participant/ParticipantForm'
import ParticipantList from '../components/participant/ParticipantList'

function ParticipantApp() {
  const [participants, setParticipants] = useState([]);
  const [participantData, setParticipantData] = useState({ nama: '', tempatLahir: '', tanggalLahir: '', alamat: '' });
  const [editIndex, setEditIndex] = useState('');

  const submitForm = () => {
    if (editIndex === '') {
      setParticipants([...participants, participantData]);
    } else {
      const updatedParticipants = [...participants];
      updatedParticipants[editIndex] = participantData;
      setParticipants(updatedParticipants);
    }
    clearForm();
  };

  const editParticipant = (index) => {
    setEditIndex(index);
    setParticipantData(participants[index]);
  };

  const deleteParticipant = (index) => {
    const updatedParticipants = participants.filter((_, i) => i !== index);
    setParticipants(updatedParticipants);
  };

  const clearForm = () => {
    setEditIndex('');
    setParticipantData({ nama: '', tempatLahir: '', tanggalLahir: '', alamat: '' });
  };

  return (
    <div className="container mar-top">
      <h2>Daftar Peserta Koperasi</h2>
      <ParticipantForm 
        participantData={participantData} 
        setParticipantData={setParticipantData} 
        submitForm={submitForm} 
        clearForm={clearForm} 
        editIndex={editIndex} 
      />
      <h2 style={{marginTop: "50px"}}>List Peserta</h2>
      <ParticipantList
        participants={participants} 
        editParticipant={editParticipant} 
        deleteParticipant={deleteParticipant} 
      />
    </div>
  );
}

export default ParticipantApp;
