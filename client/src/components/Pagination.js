import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

 
//props: numero max de paginas, pageSize, page,func para incrementar, func para decrementar
//<ReviewPagination currentPage={reviewPage} pageSize={reviewPageSize} totalCount={reviewTotalCount} increasePage={increaseReviewPage} decreasePage={decreaseReviewPage}/>
export default function Pagination(props) {
    const classes = useStyles();
    const totalPages = Math.ceil(props.totalCount/props.pageSize);  
    return (
        <div className={classes.root}>
        <ButtonGroup aria-label="outlined primary button group">
            <Button color={props.color} disabled={props.currentPage <= 1?true:false} onClick={props.decreasePage}> {'<'}</Button>
            <Button color={props.color} disabled={props.currentPage >= totalPages?true:false} onClick={props.increasePage}> {'>'} </Button>
        </ButtonGroup>
      </div>
    );
  }