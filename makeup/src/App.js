import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchMakeup } from './store/actions/index';
import SearchForm from './components/SearchForm'
import ItemList from './components/ItemList';
import background from './images/background.jpg';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

const App = (props) => {
  const search = (event, input) => {
    event.preventDefault();
    props.fetchMakeup(input);
  }

  return (
    <div className="App">
      <header className='app-header' style={{'backgroundImage': `url(${background})`, 'backgroundPosition': 'center', 'backgroundSize': 'cover', 'backgroundRepeat': 'no-repeat'}}>
        <h1>Makeup Junkie</h1>
        <div>Find your favorite beauty product</div>
        <SearchForm search={search}/>
        
      </header>
      <div className='app-content'>  
        {props.isFetching && <Loader type='Puff' color="#e3e3e3" height={150} width={150} />}
        {props.makeupList.length > 0 && <ItemList list={props.makeupList}/>}
        {props.error && <div>{props.error}</div>}
      </div>
      <footer>
        <div>Source: <a href='http://makeup-api.herokuapp.com/'>Makeup API</a></div>
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    makeupList: state.makeupList,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchMakeup })(App);
