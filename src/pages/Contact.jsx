
const Contact = () => {
  const handleFormSubmit = (formData) => {
    // gives us an object with key value pairs
    const formInputData = Object.fromEntries(formData.entries());
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
            className="form-control"
          />

          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
            className="form-control"
          />

          <textarea
            name="message"
            required
            autoComplete="off"
            rows={10}
            placeholder="Enter your message"
            className="form-control"
          ></textarea>

          <button value="send" type="submit" className="btn btn-primary">
            {" "}
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
