import React from 'react';
import './site.style.scss';

import siteApi from './site.api';

class SiteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: [],
    };
    this.showAllSites = this.showAllSites.bind(this)
  }

  showAllSites = () => {
    siteApi.getAll(1).then(response => {
      if (response.data) {
       console.log(response.data);
       this.setState({sites: response.data})
      } else {
        console.log(response);
      }
    });
  };

  componentDidMount() {
    this.showAllSites();
  }

  render() {
    return (
      <div className="SiteComponent">
        SiteComponent...
      </div>
    );
  }
}

export default SiteComponent;
