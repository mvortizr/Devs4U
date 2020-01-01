import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadImage(props) {
  
 	const classes = useStyles();
 	const[image, setImage] = React.useState('')

	const onFileChange = (e)=> {
		setImage(e.target.files[0])
    }


    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', image)
        axios({ method: 'put',
        validateStatus: function(status) {
          return status >= 200 && status < 500; 
        },
        url:`/profile/edit`, 
        withCredentials:true,
        data: formData
      }).then(res => {
            console.log(res)
        })
    }

return (
    <div className={classes.root}>
     <form onSubmit={onSubmit}>
	      <input
	        accept="image/*"
	        className={classes.input}
	        id="contained-button-file"
	        multiple
	        type="file"
	        name="image"
	        onChange={onFileChange}
	      />
	      <label htmlFor="contained-button-file">
	        <Button variant="contained"  type="submit">
	          Cambiar foto
	        </Button>
      </label>
      </form>
    </div>
  );
}


