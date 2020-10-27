import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import {UsableOrderContext} from '../../contexts/OrderContext'

const Container = styled.div`
  width: 26%;
  padding: 1% 5%;
  &:nth-child(3n+0){
    padding-left: 0;
  }
  &:nth-child(3n-2){
    padding-right: 0;
  }
`

const CardWrapper = styled.div`
  border-radius: 12px;
  width: 100;
  padding: 22%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: ${props => (props.color === 'ว่าง' ? 'rgba(0, 174, 29, 1)' : 'rgba(242, 153, 74, 1)')};
  border-color: ${props => (props.color === 'ว่าง' ? 'rgba(0, 174, 29, 1)' : 'rgba(242, 153, 74, 1)')};
  border: 8px solid;
  &:hover{
    background-color: ${props => (props.color === 'ว่าง' ? 'rgba(108, 242, 74, 1)' : 'rgba(255, 197, 145, 1)')};
    color: #fff;
    border-color: ${props => (props.color === 'ว่าง' ? 'rgba(0, 174, 29, 1)' : 'rgba(242, 153, 74, 1)')};
  }
`

const Card = styled.div`
  display: flex;
  p{
    font-size: 24px;
  }
`

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const { state, setState} = useContext(UsableOrderContext);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container onClick={handleOpen}>
        <CardWrapper color={props.state}>
          <Card>
            <p>{props.children}</p>
          </Card>
          <p>B01</p>
        </CardWrapper>
      </Container>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>

          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>

          <button onClick={() => ( state.box1 === 'ว่าง' ? setState({...state,box1 : 'ไม่ว่าง'}) : setState({...state,box1 : 'ว่าง'}) )}></button>
          
        </Fade>

      </Modal>
    </>
  );
}