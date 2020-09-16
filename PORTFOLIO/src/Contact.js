import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+([^<>()[\],;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      text: null,
      errors: {
        fullName: '',
        email: '',
        text: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'text':
        errors.text = 
          value.length < 50
            ? 'text must be at least 50 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className="Contact" id="contact">
        <h2>Contact Me</h2>
        <form onSubmit={this.handleSubmit} noValidate>

          <div className="row">
            <div className="col-md-5">
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate style={{width: "48rem"}} />
              {errors.fullName.length > 0 &&<span className='error'>{errors.fullName}</span>}
            </div>
          </div>

          <div className='row'>
            <div className="col-md-5">
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate style={{width: "48rem"}} />
              {errors.email.length > 0 &&
              <span className='error'>{errors.email}</span>}
            </div>
          </div>

          <div className='row'>
            <div className="col-md-5">
              <label htmlFor="text">Text</label>
              <input type='text' name='text' onChange={this.handleChange} noValidate style={{width: "48rem" ,height: "18rem"}} />
              {errors.text.length > 0 &&
              <span className='error'>{errors.text}</span>}
            </div>
          </div>

          <div className='submit'>
            <div className="row">
              <div className="col-md-5">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;