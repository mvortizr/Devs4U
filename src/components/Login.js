import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component{

    state = {
        mail: ' ',
        password: ' '
    };

    handleChange = name => event => { 
        this.setState({ [name]: event.target.value });
    };

    render(){
        return(
            <>
            {console.log(this.state)};
          
            <TextField
            label="Nombre"
            margin="normal"
            onChange={this.handleChange('mail')}
            />

            <TextField
            label="Contraseña"
            margin="normal"
            onChange={this.handleChange('password')}
            />

            <Button variant="contained">        
                Iniciar Sesión
            </Button>
            </>
        );
    };

}

export default Login;