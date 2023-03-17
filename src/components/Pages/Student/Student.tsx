
import './style.scss';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


function Student({ rows }: { rows: any }) {
  const navigate = useNavigate();
  return (
    <div style={{ height: 700, width: '100%' }}>
      <h1>Students</h1>
      <Button variant="contained" onClick={() => navigate('/new-student')}>
        Add new
      </Button>
      <table className="table mt-8" >
    <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col" >PhoneNumber</th>
                <th scope="col" >Birth of Day</th>
                <th scope="col" >Address</th>
                <th></th>
            </tr>
    </thead>
    <tbody>
       
            <tr>
                <th scope="row">1</th>
                <td>tung thanh</td>
                <td>nguyen</td>
                <td>0352502957</td>
                <td>21/07/1997</td>
                <td>tphcm</td>
                <td>
                
                    <Link to={"/student/edit"} className="btn btn-link">sửa</Link>
                    <a href="" className="btn btn-link" data-toggle="modal" data-id="id" data-target="#delete-student-modal">xóa</a>
                    
                </td>
            </tr>
       
    </tbody>
</table>


    </div>



  );
  
}
export default Student;
