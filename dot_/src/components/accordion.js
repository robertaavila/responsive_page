import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './accordion.css'
import '../App.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function SimpleAccordion() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography className={classes.heading}>Lorem ipsum</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="new_row">
                        <div className="column_left">
                            <img className="img_border" src={require('../imgs/forest_640.jpg')} alt="forest"/>
                        </div>
                        <div className="column_right">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </p>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Lorem ipsum</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="new_row">
                        <div className="column_left">
                            <img className="img_border" src={require('../imgs/forest_640.jpg')} alt="forest"/>
                        </div>
                        <div className="column_right">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </p>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Lorem ipsum</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="new_row">
                        <div className="column_left">
                            <img className="img_border" src={require('../imgs/forest_640.jpg')} alt="forest"/>
                        </div>
                        <div className="column_right">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </p>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Lorem ipsum</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="new_row">
                        <div className="column_left">
                            <img className="img_border" src={require('../imgs/forest_640.jpg')} alt="forest"/>
                        </div>
                        <div className="column_right">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </p>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}