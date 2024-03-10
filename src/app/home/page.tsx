import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Page() {
  return (
    <Grid
      container
      gap={1}
      sx={{ mt: 4 }}
    >
      <Grid
        item
        xs={12}
        md={8}
        display='flex'
        justifyContent='center'
      >
        <p>xs=12 md=8</p>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ bgcolor: 'yellow', alignSelf: 'center' }}
      >
        <p style={{ backgroundColor: 'blue', display: 'inline-block' }}>xs=12 md=4</p>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
      >
        <p>xs=12 md=4</p>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
      >
        <p>xs=12 md=8</p>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
      >
        <p>xs=12 md=8</p>
      </Grid>
    </Grid>
  );
}
