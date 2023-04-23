import "./subscribe.scss";

export const Subsribe = () => {
  return (
    <div className="column">
      <h3>Subscribe</h3>
      <ul className="column-ul">
        <div className="contact-item">
          <p className="boldp">Address:</p>
          <p>5919 Trussville Crossings Pkwy, Birmingham AL 35235</p>
        </div>
        <div className="contact-item">
          <p className="boldp">Phone:</p>
          <p>+905-588-8932</p>
        </div>
      </ul>
      <input placeholder="Enter Email..." />
    </div>
  );
};
