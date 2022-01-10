import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export interface SimpleDialogProps {
  open: boolean;
}

export function SimpleDialog(props: SimpleDialogProps) {
  const { open } = props;

  const handleClose = () => {
    console.log("close dialog");
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">ログイン</DialogTitle>
    </Dialog>
  );
}
