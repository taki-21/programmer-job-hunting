
import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

type Location = {
  hash: string,
  pathname: string,
  search: string,
  state: string | undefined
}

interface ScrollToTopProps {
  location: Location
}

class ScrollToTop extends PureComponent<ScrollToTopProps> {
  componentDidUpdate(prevProps: ScrollToTopProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop as any)