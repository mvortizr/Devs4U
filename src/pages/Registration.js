import React from 'react';
import {TextField, Button, Typography, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    marginGrid: {
        marginTop: theme.spacing(5),
    }
}));

const Registration = props => {

   const [values, setValues] = React.useState({
        email: '',
        firstName:'',
        lastName:'',
        password: '',
    });
   
    const classes = useStyles();

    /*Funcion vincula el estado del componente con el valor de los campos*/
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    
    return(
        <>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                className={classes.marginGrid}
                spacing={2}
            >
                    <Grid item xs={12}>
                        <Typography component="h3" variant="h3">
                            Registrate
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="h5" variant="h5">
                            como {props.role}
                         </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Nombre"
                            margin="normal"
                            onChange={handleChange('firstName')}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Apellido"
                            margin="normal"
                            onChange={handleChange('lastName')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Correo"
                            margin="normal"
                            autoComplete="email"
                            type="email"
                            onChange={handleChange('email')}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Contraseña"
                            margin="normal"
                            autoComplete="password"
                            type="password"
                            onChange={handleChange('password')}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Confirmar contraseña"
                            margin="normal"
                            autoComplete="password"
                            type="password"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" color="primary">        
                            Registrate
                        </Button>
                    </Grid>
                </Grid>
            </>
        );

}

export default Registration;