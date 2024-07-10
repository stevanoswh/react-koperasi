import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { deleteEmployee, fetchEmployees } from '../../redux/features/employee/employeeSlice';
import { useEffect, useState } from 'react';

export default function EmployeeList({ onEdit }) {
  const { employees, paging } = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(fetchEmployees({ page: currentPage, size: itemsPerPage }));
  }, [dispatch, currentPage]);

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id))
      .unwrap()
      .then(() => {
        dispatch(fetchEmployees({ page: currentPage, size: itemsPerPage }));
      })
      .catch((error) => console.error('Deletion failed:', error));
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="list-group" style={{ minHeight: '60vh' }}>
      {employees.map((employee) => (
        <div key={employee.id} className="list-group-item list-group-item-action">
          <div className="row align-items-center g-3">
            <div className="col-md-3 col-lg-2 text-truncate">
              <strong>Name:</strong> {employee.fullName}
            </div>
            <div className="col-md-3 col-lg-2 text-truncate">
              <strong>Email:</strong> {employee.email}
            </div>
            <div className="col-md-3 col-lg-2 text-truncate">
              <strong>Phone:</strong> {employee.phoneNumber}
            </div>
            <div className="col-md-3 col-lg-2 text-truncate">
              <strong>Position:</strong> {employee.position}
            </div>
            <div className="col-md-3 col-lg-2 text-truncate">
              <strong>Status:</strong> {employee.status ? 'Active' : 'Inactive'}
            </div>
            <div className="col-md-6 col-lg-2 text-end">
              <button className="btn btn-info btn-sm" onClick={() => onEdit(employee)}>
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm ms-2"
                onClick={() => handleDelete(employee.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={paging.totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}
