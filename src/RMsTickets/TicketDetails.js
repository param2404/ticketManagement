/* eslint-disable */
import React, { useState, useEffect } from "react";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import { Close } from '@material-ui/icons';
import { Grid, IconButton, Typography, TextField, Modal, Backdrop, Fade } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "70px"
    },
    mbody: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        width: "40%",
        maxWidth: "1000px",
        height: '95%',
        overflow: 'auto'
    },
    root: {
        flexGrow: 1
    },
    margin: {
        margin: theme.spacing(1),
        color: '#000000'
    },
    body: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formfield: {
        marginBottom: '1em',
        width: '100%',
    },
    switch: {
        width: "100%",
        padding: theme.spacing(2),
    },
    button: {
        color: '#fff',
        backgroundColor: '#df5a28',
    },
    errorMessage: {
        color: 'red'
    },
    headerDatePicker: {
        width: ' 100 %'
    }
}
));

function TicketDetails(props) {
    const classes = useStyles()
    const [open, setOpen] = useState(true)
    const { details } = props

    const handleClose = () => {
        setOpen(false)
        props.onDetailsClose()
    }


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            // onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.mbody} id="modalDynamicHeight">
                    <div
                        style={{
                            padding: '2px',
                            display: 'flex',
                            color: 'white',
                            justifyContent: 'space-between',
                        }}
                    > <div xs={6}>
                            <Typography style={{ fontSize: '1.17em', fontWeight: 'bold', color: "#000000", paddingTop: '0.5rem', paddingLeft: '1rem' }}>TICKET DETAILS</Typography>
                        </div>
                        <div xs={6}>
                            <IconButton onClick={handleClose} href="#" style={{ float: 'right', zIndex: '100', color: '#000000' }}>
                                <Close />
                            </IconButton>
                        </div>
                    </div>
                    <div className={classes.body}>
                        <Grid container className={classes.formfield}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Ticket Number"
                                    id="outlined-start-adornment"
                                    className={clsx(classes.margin)}
                                    value={details.ticketNumber || ''}
                                    variant="outlined"
                                    fullWidth
                                    disabled
                                /></Grid>
                        
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    label="RM Name"
                                    id="outlined-start-adornment"
                                    className={clsx(classes.margin)}
                                    value={details.rmName || ''}
                                    variant="outlined"
                                    fullWidth
                                    disabled
                                /></Grid>
                        

                        
                           
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Retailer Address"
                                    id="outlined-start-adornment"
                                    className={clsx(classes.margin)}
                                    value={details.retailerAddress || ''}
                                    variant="outlined"
                                    fullWidth
                                    disabled
                                /></Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    label="Retailer Contact Number"
                                    id="outlined-start-adornment"
                                    className={clsx(classes.margin)}
                                    value={details.registedMobileNumber || ''}
                                    variant="outlined"
                                    fullWidth
                                    disabled
                                /></Grid>
                        </Grid>
                    </div>
                </div>
            </Fade >
        </Modal >

    )
}


export default (TicketDetails)
