const Registration = () => {
  return (
    <div className="card shadow w-25 mx-auto mt-5 mb-5 p-3">
      <h2 className="text-center mt-4 mb-3">Registration</h2>
      <form className="card-body">
        <div className="form-floating mb-4 mt-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name:"
            className="form-control"
          />
          <label htmlFor="fistName">First Name:</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name:"
            className="form-control"
          />
          <label htmlFor="lastName">Last Name:</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address:"
            className="form-control"
          />
          <label htmlFor="email">Email Address:</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password:"
            className="form-control"
          />
          <label htmlFor="password">Password:</label>
        </div>
        <div className="form-floating mb-4">
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password:"
            className="form-control"
          />
          <label htmlFor="fistName">Confirm Password:</label>
        </div>
      </form>
    </div>
  );
};

export default Registration;
