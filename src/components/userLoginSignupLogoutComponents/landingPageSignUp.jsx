import NextInput from "../inputs/NextInput";

const LandingPageSignUpLogin = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="content">
          <div className="upperContent">
            <h2>Welcome to Site</h2>
            <h3>Site Tagline</h3>
          </div>
          <div className="signInContainer">
            <NextInput
              ButtonText={"Sign Up"}
              ButtonClass={`signupButton signUpAndLogInButton`}
              Linked={"/signup"}
            />
            <NextInput
              ButtonText={"Log In"}
              ButtonClass={`loginButton signUpAndLogInButton`}
              Linked={"/login"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default LandingPageSignUpLogin;
