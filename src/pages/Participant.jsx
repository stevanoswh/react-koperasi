import React, { useEffect, useState } from 'react';
import NasabahForm from '../components/participant/ParticipantForm'
import NasabahList from '../components/participant/ParticipantList'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNasabahs, deleteNasabah, updateNasabah, createNasabah } from '../redux/features/nasabah/nasabahSlice';

export default function ParticipantApp() {
  const [currentNasabah, setCurrentNasabah] = useState(null);
  const dispatch = useDispatch();
  const nasabahList = useSelector(state => state.nasabah.nasabahList);

  useEffect(() => {
    dispatch(fetchNasabahs());
  }, [dispatch]);

  const handleEdit = (nasabah) => {
    setCurrentNasabah(nasabah); 
  };


  const handleDelete = (id) => {
    dispatch(deleteNasabah(id));
  };

  const handleSave = (nasabahData) => {
    if (currentNasabah) {
      dispatch(updateNasabah({ ...nasabahData, id: currentNasabah.id }));
    } else {
      dispatch(createNasabah(nasabahData));
    }
    setCurrentNasabah(null);  // Reset the current nasabah
  };

  return (
    <div className="container mar-top">
      <h2>Daftar Nasabah Koperasi</h2>
      <NasabahForm nasabah={currentNasabah} onSave={handleSave} />
      <h2 style={{ marginTop: "50px" }}>List Nasabah</h2>
      <NasabahList
        nasabahList={nasabahList}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}