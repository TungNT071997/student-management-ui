import { TextField, Grid, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { createStudent } from './apis/createStudent';
export default function AddNewStudent() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: any) => {
    createStudent(data);
    reset();
  };
  return (
    <div>
      <h1> Add New Student</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              {...register('firstName')}
              label="First Name"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              {...register('lastName')}
              label="Last Name"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              {...register('phoneNumber')}
              label="Phone Number"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              {...register('email')}
              label="Email"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              {...register('dateOfBirth')}
              label="date of birth"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              {...register('address')}
              label="address"
              variant="standard"
              fullWidth
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}
