import Header from "./Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
    </div>
  );
};

export { Layout };

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};