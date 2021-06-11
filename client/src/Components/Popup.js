import { Button, Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import MoodBadIcon from '@material-ui/icons/MoodBad';
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
  dialogPaper: {
    height: '300px',
    width: '800px',
  },
  icon: {
    width: '10vh',
    height: '10vh',
    verticalAlign: 'middle'
  },
  PaperProps: {
  },
}))


const Popup = (props) => {

  const classes = useStyles();
  const { title, openPopup, setOpenPopup } = props;

  const handleClose = () => {
    setOpenPopup(false)
  }

  return (
    <div>
      <Dialog 
        open={openPopup} 
        onClose={handleClose} 
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle>
          <paper style={{display: 'flex'}}>
            <MoodBadIcon className={classes.icon} style={{flexGrow: '1', marginTop: '10px', postion: 'absolute' }}/>
            <Button onClick={handleClose} style={{ width: '15px', height: '30px', marginRight: '-15px', padding: '0'}}>{<CloseIcon />}</Button>
          </paper>
          <Typography variant="h3" style={{textAlign: "center", marginTop: '70px'}}>{title}</Typography>
        </DialogTitle>
      </Dialog>
    </div>
  )
}

export default Popup
