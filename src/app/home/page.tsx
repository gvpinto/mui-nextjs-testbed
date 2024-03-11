'use client';
import { Button, FormControl, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useFormState } from 'react-dom';
import { signupUser } from '../lib/home/actions';

const initialState = {
  message: '',
};

export default function Page() {
  const [state, formAction] = useFormState(signupUser, initialState);

  return (
    <form action={formAction}>
      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <Grid
          container
          spacing={2}
          rowSpacing={{ xs: 2, md: 4 }}
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <FormControl fullWidth={true}>
              <TextField
                required
                label='First Name'
                id='firstname'
                aria-describedby='firstname'
                size='small'
              />
              {/* <FormHelperText id='firstname'>Enter your first name</FormHelperText> */}
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <FormControl fullWidth={true}>
              <TextField
                required
                label='Last Name'
                id='lastname'
                aria-describedby='lastname'
                size='small'
              />
              {/* <FormHelperText id='lastname'>Enter your last name</FormHelperText> */}
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <FormControl fullWidth={true}>
              <TextField
                required
                label='Firm Name'
                id='firmname'
                aria-describedby='firmname'
                size='small'
              />
              {/* <FormHelperText id='firmname'>Enter the name of the Firm</FormHelperText> */}
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <FormControl fullWidth={true}>
              <TextField
                required
                label='Email Address'
                id='email'
                aria-describedby='email'
                size='small'
              />
              {/* <FormHelperText id='email'>Enter the firms email address</FormHelperText> */}
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            display='flex'
            justifyContent='center'
            marginTop={{ xs: 1, md: 2 }}
          >
            <Button
              variant='contained'
              sx={{ width: { xs: 1, md: 1 / 3 } }}
              type='submit'
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
