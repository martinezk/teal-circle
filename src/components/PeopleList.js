import React from 'react';
import {PropTypes} from 'prop-types';
import Person from './Person';

const PeopleList = ({people}) => (
    <div>
      {people.map((person) => 
        <Person key={person.email} person={person} />  
      )}
    </div>
);

PeopleList.propTypes = {
  people: PropTypes.array.isRequired
};

export default PeopleList;