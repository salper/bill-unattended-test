import './App.scss';
import {PropTypes} from 'react';

const App = ({children}) => children;

App.propTypes = {children: PropTypes.element.isRequired};

export default ({children}) => children;
