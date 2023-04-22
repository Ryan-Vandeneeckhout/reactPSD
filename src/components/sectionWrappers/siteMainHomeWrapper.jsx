import "./siteMainHomeWrapper.scss";

export const SiteHomeMainWrapper = (props) => {
  const { children } = props;

  return (
    <section className={`site-main-home-wrapper ${props.wrapperSpecialClass}`}>
      <div className="wrapper">{children}</div>
    </section>
  );
};
