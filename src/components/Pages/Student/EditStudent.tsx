export default function EditStudent( ) {
    return ( 
<div className="mt-4">
    <h3>Update Student</h3>
    <form className="mt-4" method="POST" >
        <div className="form-group">
            <label > firstName</label > 
            <input type="text" className="form-control" value="firstname" id="name"  name="name" /> 
            
        </div>
        <div className="form-group">
            <label > lastName</label>
            <input type="text" className="form-control"  value="lastname" id="name"  name="name" />
            
        </div>
        <div className="form-group">
            <label > Email</label>
            <input type="text" className="form-control" value="email" id="Email"  name="Email" />
            
        </div>
        <div className="form-group">
            <label >Phone</label>
            <input type="text" className="form-control" value="PhoneNumber" id="phone"  name="phone"/>
            
        </div>
  
  
  <button type="submit" className="btn btn-primary">Lưu lại</button>
</form>
</div>
    )
}