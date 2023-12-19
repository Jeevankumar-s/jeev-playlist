import {Component} from 'react'
import styled from 'styled-components'
import MusicItem from '../MusicItem'

const initialTracksList = [
  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-perfect-img.png',
    name: 'Perfect',
    genre: 'Pop',
    duration: '4:04',
  },
  {
    id: '40f97965-ff45-469e-a635-b2ef9f1642ed',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shape-of-you-img.png',
    name: 'Shape of You',
    genre: 'Divide',
    duration: '4:24',
  },
  {
    id: '782f916b-4056-44ec-a95f-5115c3f84904',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-visiting-hours.png',
    name: 'Visiting Hours',
    genre: 'Folk-Pop',
    duration: '3:49',
  },
  {
    id: 'fcf0dc77-3427-457c-9ee0-91b1dc39fece',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shivers-img.png',
    name: 'Shivers',
    genre: 'Dance-Pop',
    duration: '3:58',
  },
  {
    id: '9c1bb890-d4d5-4edf-9d95-6959d716b442',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-bad-habits-img.png',
    name: 'Bad Habits',
    genre: 'Dance-Pop',
    duration: '4:01',
  },
  {
    id: '2216db9c-647f-4814-b880-179740e4d748',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-castle-on-the-hill-img.png',
    name: 'Castle on the Hill',
    genre: 'Pop&Rock',
    duration: '4:48',
  },
  {
    id: 'a5e30966-b760-4660-bf08-073135f7d010',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-happier-img.png',
    name: 'Happier',
    genre: 'Pop',
    duration: '3:36',
  },
  {
    id: '2d5c9bc0-b8b0-41c6-aa55-cb3b659d8604',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-photograph-img.png',
    name: 'Photograph',
    genre: 'Folk music',
    duration: '4:26',
  },
  {
    id: 'efd3d621-2c05-4941-acdc-0a1a0786bc53',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-galway-girl-img.png',
    name: 'Galway Girl',
    genre: 'Pop',
    duration: '3:20',
  },
  {
    id: 'e4b8e3b8-7776-4c09-8abc-ba328a8babe9',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-i-dont-care-img.png',
    name: "I Don't Care",
    genre: 'Pop',
    duration: '3:38',
  },
]

const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`
const ArtistBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 450px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 100px;
`
const ArtistName = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 42px;
  color: #ffffff;
`
const ArtistInfo = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 32px;
  color: #ffffff;
`
const PlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-right: 50px;
`
const PlayListHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 32px;
  color: #ffffff;
`
const SearchInput = styled.input`
  height: 30px;
  width: 18%;
  padding-left: 15px;
  color: #cbd5e1;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
const MusicList = styled.ul`
  padding: 0;
  margin-left: 50px;
  margin-right: 50px;
`
const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const NoSongsText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`

class MusicPlaylist extends Component {
  state = {
    searchInput: '',
    playList: initialTracksList,
  }

  onChangeSearchInput = e => {
    this.setState({
      searchInput: e.target.value,
    })
  }

  onClickDeleteTrack = id => {
    const {playList} = this.state
    const updatedPlayList = playList.filter(each => each.id !== id)
    this.setState({playList: updatedPlayList})
  }

  renderNoSongsView = () => (
    <EmptyContainer>
      <NoSongsText>No Songs Found</NoSongsText>
    </EmptyContainer>
  )

  render() {
    const {playList, searchInput} = this.state
    const searchResults = playList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <BgContainer>
        <ArtistBg data-testid="artist-details">
          <ArtistName>
            Ed Sheeran
            <br />
          </ArtistName>
          <ArtistInfo>Singer</ArtistInfo>
        </ArtistBg>
        <PlayListContainer>
          <PlayListHeading>Songs Playlist</PlayListHeading>
          <SearchInput
            type="search"
            value={searchInput}
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
        </PlayListContainer>
        {searchResults.length === 0 ? (
          this.renderNoSongsView()
        ) : (
          <MusicList>
            {searchResults.map(each => (
              <MusicItem
                key={each.id}
                MusicItemDetails={each}
                onClickDeleteTrack={this.onClickDeleteTrack}
              />
            ))}
          </MusicList>
        )}
      </BgContainer>
    )
  }
}

export default MusicPlaylist
