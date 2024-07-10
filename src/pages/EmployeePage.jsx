import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { fetchEmployees, updateEmployee, createEmployee } from '../redux/features/employee/employeeSlice';
import EmployeeList from '../components/employee/EmployeeList';
import EmployeeForm from '../components/employee/EmployeeForm';

Modal.setAppElement('#root');  

export default function EmployeePage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState(null);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
      dispatch(fetchEmployees({ page: currentPage, size: itemsPerPage }));
    }, [dispatch, currentPage]);

    const openModal = () => {
      setModalIsOpen(true);
    };

    const closeModal = () => {
      setModalIsOpen(false);
      setCurrentEmployee(null);
    };

    const handleEdit = (employee) => {
      setCurrentEmployee(employee);
      openModal();
    };

    const handleCreate = () => {
      setCurrentEmployee(null);
      openModal();
    };

    const handleSave = async (data, id) => {
      try {
          const action = id ? updateEmployee(data) : createEmployee(data);
          await dispatch(action).unwrap();
          closeModal();
          dispatch(fetchEmployees({ page: currentPage, size: itemsPerPage }));
      } catch (error) {
          console.error('Error when saving:', error);
      }
    };

    const handlePageClick = (selectedPage) => {
      setCurrentPage(selectedPage.selected);
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '750px',
            background: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1100  // Higher than typical navbar z-index
        }
    };

    return (
      <div className="container" style={{marginTop: '120px'}}>
        <h1>Employee Management</h1>
        <button className="btn btn-primary mb-3" onClick={handleCreate}>Create New Employee</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Employee Form"
          style={customStyles}
        >
          <button type="button" className="btn-close" style={{ position: 'absolute', top: 10, right: 10, border: 'none', background: 'none' }} onClick={closeModal} aria-label="Close">
            <span aria-hidden="true" style={{ color: 'red', fontSize: '1.5em' }}>&times;</span>
          </button>
          <EmployeeForm employee={currentEmployee} onSave={handleSave} onCancel={closeModal} />
        </Modal>
        <EmployeeList onEdit={handleEdit} onPageChange={handlePageClick} />
      </div>
    );
}
