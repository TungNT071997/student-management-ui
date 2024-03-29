import { Button } from '@mui/material';
import {
  DataGrid,
  GridColDef, GridValueGetterParams
} from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { deleteStudent } from './apis/deleteStudent';
import { useStudent } from './hooks/useStudent';
import './style.scss';

function Student() {
  const navigate = useNavigate();
  const { students, deleteStudentById } = useStudent();
  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 200 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      description: 'This column has a list of actions.',
      sortable: false,
      width: 200,
      renderCell: (params) => {
        const navigate = useNavigate();
        return (
          <strong>
            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {
                deleteStudent(params.id as string);
                deleteStudentById(params.id as string);
              }}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {
                navigate(`/edit-student/${params.id}`);
              }}
            >
              Edit
            </Button>
          </strong>
        );
      },
    },
  ];
  console.log(students);
  return (
    <>
      <Button variant="contained" onClick={() => navigate('/new-student')}>
        AddNew
      </Button>
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={students}
          columns={columns}
          getRowId={(row) => row._id}
        />
      </div>
    </>
  );
}
export default Student;
