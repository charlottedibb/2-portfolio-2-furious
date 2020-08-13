import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="form-container">
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mjvgkayo"
          method="POST"
        >
          <h2>Get in touch</h2>
          <p>
            Have an interesting project? Drop me a line I'm very nice I
            promise.
          </p>
            <div className="form-group">
              <label>Your name</label>
              <input type="text" name="name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="4"></textarea>
            </div>
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <button className="submit">Send Message</button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
