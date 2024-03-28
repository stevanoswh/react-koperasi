import React from 'react';

export default function ParticipantForm({ participantData, setParticipantData, submitForm, clearForm, editIndex }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParticipantData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form className="mb-3">
      <input type="hidden" value={editIndex} onChange={(e) => setEditIndex(e.target.value)} />
      <div className="form-group">
        <label>Nama:</label>
        <input
          type="text"
          className="form-control"
          name="nama"
          value={participantData.nama}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Tempat Lahir:</label>
        <input
          type="text"
          className="form-control"
          name="tempatLahir"
          value={participantData.tempatLahir}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Tanggal Lahir:</label>
        <input
          type="date"
          className="form-control"
          name="tanggalLahir"
          value={participantData.tanggalLahir}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Alamat:</label>
        <input
          type="text"
          className="form-control"
          name="alamat"
          value={participantData.alamat}
          onChange={handleChange}
        />
      </div>
      <button type="button" className="btn btn-primary mt-3" onClick={submitForm}>Submit</button>
      {editIndex !== '' && <button type="button" className="btn btn-warning ml-2" onClick={clearForm}>Cancel Edit</button>}
    </form>
  );
}
