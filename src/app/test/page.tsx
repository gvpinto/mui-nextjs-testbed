import { CardHeader, Divider, FormControl, Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function BasicCard() {
  return (
    <Box
      component='section'
      sx={{ p: 2, width: { xs: 1, md: 2 / 3 } }}
    >
      {' '}
      <form>
        <Card sx={{ minWidth: 275, borderRadius: 3 }}>
          <CardHeader title='Sign up' />
          <Divider />
          <CardContent>
            <Box sx={{ flexGrow: 1, mt: 4, borderRadius: 2, padding: 2 }}>
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
          </CardContent>
          <CardActions>
            <Button
              variant='contained'
              sx={{ width: { xs: 1, md: 1 / 3 } }}
              type='submit'
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </form>
    </Box>
  );
}
