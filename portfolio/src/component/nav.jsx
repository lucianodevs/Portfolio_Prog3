import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import yo from "../assets/yo2.jpg"
import "../css/nav.css/"
import ChromeReaderModeRoundedIcon from '@mui/icons-material/ChromeReaderModeRounded';



function ResponsiveAppBar() {

  return (
    <AppBar className="nav3" position="static">
      <Container maxWidth="xl">

        <Toolbar disableGutters>
          <Tooltip title="Portfolio">
            <ChromeReaderModeRoundedIcon fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 10 }} />
          </Tooltip>
          <Typography
            variant="h6"
            noWrap
            component=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'cursive',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',

            }}
          >
            <h1>Luciano Alberto Gatti</h1>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

          <Box >
            <Tooltip title="Luciano Gatti">
              <Avatar id="avat" className="avatar" alt="Remy Sharp" src={yo} />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// componente creado atraves de la libreia mui 