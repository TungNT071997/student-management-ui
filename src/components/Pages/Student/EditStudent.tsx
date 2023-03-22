import { Button, Grid, TextField } from '@mui/material';
import { useEditStudent } from './hooks/useEditStudent';
import { styled } from '@mui/material/styles';

const StyledContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export type Student = {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  dateOfBirth: string;
  address: string;
};

export default function EditStudent() {
  const { handleSubmit, onSubmit, register } = useEditStudent();

  return (
    <StyledContainer>
      <div>
        <h1> Edit Student</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <TextField
                {...register('firstName')}
                InputLabelProps={{ shrink: true }}
                label="First Name"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                {...register('lastName')}
                InputLabelProps={{ shrink: true }}
                label="Last Name"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                {...register('phoneNumber')}
                label="Phone Number"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                {...register('email')}
                label="Email"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                {...register('dateOfBirth')}
                label="date of birth"
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                {...register('address')}
                label="address"
                variant="standard"
                fullWidth
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </form>
      </div>
    </StyledContainer>
  );
}
