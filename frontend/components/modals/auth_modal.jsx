import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionLoginContainer from '../session_form/session_login_container';
import SessionSignupContainer from '../session_form/session_signup_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.history.goBack();
  }

  render() {
    let form;
    if (this.props.formType === "Login") {
      form = <SessionLoginContainer/>;
    } else {
      form = <SessionSignupContainer/>;
    }
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          {form}
        </Modal>
      </div>
    );
  }
}

export default App;
