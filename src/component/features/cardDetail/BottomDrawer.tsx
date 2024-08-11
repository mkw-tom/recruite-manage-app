import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CardDetail from './CardDetail';
import { useSelectPost } from '../../../state/context/SelectPostContext';
import CardDetailButtons from './CardDetailButtons';
const BottomDrawer = () => {
  const { showDetail, setShowDetail } = useSelectPost();
  const toggleDrawer = (newOpen: boolean) => () => {
    setShowDetail(newOpen);
  };

  const drawerBleeding = 56;

  const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
    // display: 'none',
  }));

  const Puller = styled('div')(({ theme }) => ({
    width: 30,
    height: 8,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
  }));

  return (
    <div>
      <div className="h-full lg:hidden">
        {/* <CssBaseline /> */}
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              height: `calc(70% - ${drawerBleeding}px)`,
              overflow: 'visible',
            },
          }}
        />
        {/* <Box sx={{ textAlign: 'center', pt: 1 }}>
          <Button onClick={toggleDrawer(true)}>Open</Button>
        </Box> */}
        <SwipeableDrawer
          // container={container}
          anchor="bottom"
          open={showDetail}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
          className="lg:hidden shadow-lg"
        >
          <StyledBox
            sx={{
              position: 'absolute',
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: 'visible',
              right: 0,
              left: 0,
            }}
            className="rounded-t-2xl border-t-2 border-t-gray-100 lg:hidden"
          >
            <Puller />
            <Typography
              sx={{ p: 2, color: 'text.secondary', fontWeight: 'bold' }}
            >
              イベントの詳細
            </Typography>
          </StyledBox>
          <div
            style={{
              padding: '2',
              height: 'auto',
              overflow: 'auto',
            }}
            className="lg:hidden"
          >
            <CardDetailButtons />
            <CardDetail />
          </div>
        </SwipeableDrawer>
      </div>
    </div>
  );
};

export default BottomDrawer;
