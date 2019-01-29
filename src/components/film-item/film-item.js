import React from 'react';
import PropTypes from 'prop-types';
import './film-item.css'

const FilmItem = ({title}) => (
            <div className='film-item-container'>
                <img className='film-image' src={require('../assets/18d9d66d9715841e4e19fa5c5fb02ab1.jpg')}/>
                <h4>{title}</h4>
            </div>
  );

FilmItem.propTypes = {};

export default FilmItem;
