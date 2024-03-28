import React from 'react';

export default function ParticipantList({ participants, editParticipant, deleteParticipant }) {
    return (
        <div className="list-group" style={{ minHeight: '100vh' }}>
          {participants.map((participant, index) => (
            <div key={index} className="list-group-item">
              <div className="row align-items-center">
                <div className="col-sm">
                  Nama: {participant.nama}
                </div>
                <div className="col-sm">
                  Tempat Lahir: {participant.tempatLahir}
                </div>
                <div className="col-sm">
                  Tanggal Lahir: {participant.tanggalLahir}
                </div>
                <div className="col-sm">
                  Alamat: {participant.alamat}
                </div>
                <div className="col-sm-auto">
                  <button className="btn btn-sm btn-info" onClick={() => editParticipant(index)}>Edit</button>
                  <button className="btn btn-sm btn-danger ml-2" onClick={() => deleteParticipant(index)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
}
