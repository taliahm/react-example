import React, { Component } from 'react';
import classNames from 'classnames';

export default class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.startSearch(this.state.searchQuery);
  }

  render() {
    const { isLoading } = this.props;
    const { searchQuery } = this.state;
    const inputClasses = classNames('control has-icon', {
      'is-loading': isLoading,
    });
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className={inputClasses}>
                <input
                  className="input"
                  type="text"
                  placeholder="Search for gifs"
                  value={searchQuery}
                  onChange={(e) => this.setState({ searchQuery: e.target.value })}
                />
                <span className="icon is-small">
                  <i className="fa fa-search"></i>
                </span>
              </p>
            </div>
          </form>
        </div>  
      </section>
    );
  }
}
