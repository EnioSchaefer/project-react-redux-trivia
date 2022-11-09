import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });

    this.validationLogin();
  };

  validationLogin = () => {
    const { email, name } = this.state;
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let result;
    if (email.match(mailformat)) {
      result = true;
    } else {
      result = false;
    }
    return !(result && name.length > 0);
  };

  render() {
    const { email, name } = this.state;
    return (
      <form>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={ name }
            onChange={ (e) => this.handleChange(e) }
            id="name"
            data-testid="input-player-name"
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={ email }
            onChange={ (e) => this.handleChange(e) }
            id="email"
            data-testid="input-gravatar-email"
          />
        </label>
        <button
          type="button"
          data-testid="btn-play"
          disabled={ this.validationLogin() }
          onClick={ () => {} }
        >
          Play
        </button>
      </form>
    );
  }
}

export default Login;