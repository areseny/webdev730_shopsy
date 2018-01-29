import { connect } from "react-redux";
import UserShow from "./user_show";
import { getUser } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({ users, session }, { match }) => ({
  user: users[match.params.userId],
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserShow)
);
