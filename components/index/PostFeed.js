// import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

class PostFeed extends React.Component {
  state = {};

  render() {
    return <div>PostFeed</div>;
  }
}

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing(1) * 2
  },
  title: {
    padding: theme.spacing(1) * 2
  }
});

export default withStyles(styles)(PostFeed);
