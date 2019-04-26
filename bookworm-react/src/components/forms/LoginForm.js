import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';

class LoginForm extends Component{
    state ={
        data:{
            email: '',
            password:''
        },
        loading: false,
        error: {}
    };

   onChange = e =>
            this.setState({
                data: {...this.state.data, [e.target.name]: e.target.value}
            }); 

    onSUbmit = () =>{
        const errors =  this.validate(this.state.data);
        this.setState({ errors });
    };

    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email ="Invalid email"; 
        if (!data.password) errors.password = "Can't be blank";
        return errors;
    } 
            

    render(){
        const { data } = this.state;

        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="example@example.com"
                        value={data.email}
                        onChange={this.onChange}
                        />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Make it secure"
                        value={data.password}
                        onChange={this.onChange}
                        />
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}

export default LoginForm;