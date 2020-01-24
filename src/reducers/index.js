import {combineReducers} from 'redux';

 const songsReducer=()=>{

    return [
        
       {title:'baby', duration:'4:08'},
       {title:'one love', duration:'4:04'},
       {title:'mirrors', duration:'3:08'},
       {title:'Mr.Brightside', duration:'2:08'}

    ];

};

 const selectedSongReducer=(selectedSong=null,action)=>{

    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
 
};

export default combineReducers({
    
    songs:songsReducer,
    selectedSong:selectedSongReducer
});