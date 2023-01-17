import React from 'react';
import styled from "styled-components";
import Header from './components/Header';
import PlaylistCreationPage from './components/PlaylistCreationPage';
import PlaylistManagerPage from './components/PlaylistManagerPage';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
  background-color: greenyellow;
`

class App extends React.Component {
  state = {
    currentPage: "playlistCreationForm"
  }

  changePage = (currentPage) => {
    this.setState({currentPage: currentPage});
  }

  render () {
    const renderCurrentePage = () => {
      if (this.state.currentPage === "playlistCreationForm") {
        return <PlaylistCreationForm />
      } else if (this.state.currentPage === "playlistManagePage")  {
        return <PlaylistManagerPage />
      }
    }
    
    return (
      <AppContainer>
        <Header 
        changePage={this.changePage}
        />
      {renderCurrentePage()}
      </AppContainer>  
    );
  }
  
}

export default App;
