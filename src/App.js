import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';
import UploadForm from "./components/UploadForm";
import Nav_bar from "./components/Nav_bar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// const searchClient = algoliasearch('B1G2GM9NG0', 'aadef574be1f9252bb48d4ea09b5cfe5');
const searchClient = algoliasearch('ABETVSGKO0', 'f0dc115e155e7ca2d8b94912b9985db3');
const index = searchClient.initIndex('your_index_name');


class App extends Component {
  render() {
    return (
      <div>

      <Nav_bar></Nav_bar>
        <div className="container">
          
          
          <InstantSearch searchClient={searchClient} indexName="products">
            <div className="search-panel">
              <div className="search-panel__results">
                <SearchBox
                  className="searchbox"
                  translations={{
                    placeholder: '',
                  }}
                />
                <Hits hitComponent={function Hit(props) {
                return (
                  <div>

                    <img src={'https://ikea-dataset.s3-eu-east-2.amazonaws.com/'+ props.hit.dims_image} align="left" alt={props.hit.name} />
                    <div className="hit-name">
                      <Highlight attribute="name" hit={props.hit} />
                    </div>
                    <div className="hit-description">
                      <Highlight attribute="description" hit={props.hit} />
                    </div>
                    <div className="hit-price">£{props.hit.price}</div>
                  </div>
                );
              }} />
                {/* <div className="pagination">
                  <Pagination />
                </div> */}
              </div>
            </div>
          </InstantSearch>
          <UploadForm></UploadForm>
        </div>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <article>
      <h1>
        <Highlight attribute="name" hit={props.hit} />
      </h1>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
