import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import './style.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const columns: GridColDef[] = [
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
];

function Student({ rows }: { rows: any }) {
  const navigate = useNavigate();
  return (
    <div style={{ height: 700, width: '100%' }}>
      <h1>Students</h1>
      <Button variant="contained" onClick={() => navigate('/new-student')}>
        Add new
      </Button>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
export default Student;
