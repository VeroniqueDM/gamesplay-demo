export default function Login() {
  return (
    <section id="login-page" className="auth">
      <htmlForm id="login">
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Sokka@gmail.com"
          />

          <label htmlFor="login-pass">Password:</label>
          <input type="password" id="login-password" name="password" />
          <input type="submit" className="btn submit" />
          <p className="field">
            <span>
              If you don't have profile click <a href="#">here</a>
            </span>
          </p>
        </div>
      </htmlForm>
    </section>
  );
}
