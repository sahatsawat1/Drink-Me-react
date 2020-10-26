import React from 'react'
import { Link } from 'react-router-dom'
import { Action } from './styles'
import styled from 'styled-components'
import image from '../../assets/banner.jpg'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

function Login () {

  const DialogAfter = styled(Dialog)`
  
  `
  
  const BtnRgt = styled.span`
  color: blue;
  `
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const DialogActions = styled.div`
    display: flex;
    justify-content: center;
    padding: 8px 24px;
  `

  const DialogContentText = styled.div`
    text-align: center;
  `

  const Context =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 55%;
  `

  const BannerWrap = styled.div`
    display: flex;
    img{
      width: 62%;
    }
  `

  const DialogWrapper = styled.div`
    width: 100%;
    padding: 4%;
    background-color: #DFCFAF;
    color: rgb(28, 29, 34);
  `
  const Button = styled.div`
    background-color: rgba(28, 29, 34, 1);
    border: 1px solid #1C1D22;
    border-radius: 7px;
    padding: 10px 20px;
    color: #DFCFAF;
    font-size: 16px;
    text-align: center;
    font-weight:700;
    width: 100%;
    transition: .2s;
    &:hover{
      color: #DFCFAF;
      background-color: rgba(28, 29, 34, 0.9);
      border: 1px solid #1C1D22;
    }
  `
  

  return (
    <Action>
      <Link onClick={handleClickOpen}>LOGIN</Link>
      <DialogAfter
        maxWidth = "md"
        open={open}
        onClose={handleClose}
        className='text'
        >
        <BannerWrap>
        <img src={image} />
          <DialogWrapper>
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="username"
                label="Username"
                type="username"
                fullWidth
              />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
              />
            </DialogContent>

            <Context>

              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Login
                </Button>
              </DialogActions>

              <DialogContentText>
                Are you have account?{' '}
                <Link to="/register" onClick={handleClose} color="blue">
                  <BtnRgt><Link to='/SignUp'>register</Link></BtnRgt>
                </Link>
              </DialogContentText>

            </Context>

          </DialogWrapper>
        </BannerWrap>
      </DialogAfter>
    </Action>
  )
}
export default Login
