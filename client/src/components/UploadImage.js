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
  buscarFotoButton:{
  	margin:'10px 0px 10px 0px'
  },
  imageName:{
  	textOverflow:'ellipsis',
  	width:'120px',
  	overflow:'hidden',
  	whiteSpace:'nowrap'
  }
}));

export default function UploadImage(props) {
  
  const classes = useStyles();
  const [image, setImage] = React.useState({preview: '', raw: ''})
  const[imageName,setImageName] = React.useState('Elija una foto...')
  
  const handleChange = (e) => {
    
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0]
    })

    setImageName(e.target.files[0].name)



  }

  const handleUpload = async (e) => {
    e.preventDefault()

    if (image.raw === ''){
    	alert('Debe buscar una foto de perfil primero')
    } 
   	else {
	    const formData = new FormData()
	    formData.append('image', image.raw)
	  	//console.log('formData',formData)
	    try {
	      //await axios.put('/profile/addphoto', {image: image.raw}, config)
	      axios({ method: 'put',
	        validateStatus: function(status) {
	          return status >= 200 && status < 500; 
	        },
	        url:`/profile/addphoto`, 
	        withCredentials:true,
	        data:formData,
	      })
	      .then(response =>{
	          console.log('upload res',response)

	          if(response.status === 200 || response.status === 201 ){
	               props.changeFotoLink(response.data.imageCloudData.url)
	          } 
	          
	      })
	      
	    } catch (error) {
	      console.log(error.response)
	    }
	}
  }

return (
   <div className={classes.root}>
   {console.log('image',image)}
    <form onSubmit={handleUpload}>   
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="contained-button-file">
      	<div className={classes.imageName}> {imageName} </div>
        <Button variant="contained" component="span" className={classes.buscarFotoButton}>
          Buscar foto
        </Button>
      </label>
      	<Button variant="contained" component="button" type="submit">
          Cambiar foto
        </Button>
      </form> 
    </div>
  );
}


