import _ from 'lodash';  //underscore js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDui0UMRc4VEL-ehuNkxpFmF7JSbpJlGoA';

//create new componant this componant should produce some html


class App extends Component{

    constructor(props){
      super(props);

      this.state = {
         videos: [],
         selectedVideo : null
        };
          this.videoSearch('nike');
    }

      videoSearch(term){
        YTSearch({key:API_KEY,term:term},(videos) => {
          this.setState({
            videos: videos,
            selectedVideo : videos[0]
          });

        });
      }


  render() {

    const videoSearch = _.debounce((term)=> {this.videoSearch(term)}, 300);
  return (
    <div>
    <SearchBar onSearchTermChange={videoSearch} />
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList
    onVideoselect = {selectedVideo => this.setState({selectedVideo})}
    videos={this.state.videos} />
    </div>
  );

}

}


ReactDOM.render(<App />,document.querySelector('.container'));
