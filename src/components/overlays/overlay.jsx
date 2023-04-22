export const Overlay = (props) => {
  return (
    <div
      className={`overlay${props.showMenu ? " displayFlex" : " displayNone"}`}
      onClick={props.ShowSideMenu}
    />
  );
};
