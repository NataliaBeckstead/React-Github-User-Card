import React, {Component} from 'react'
import GitHubCalendar from 'react-github-calendar';

class Followers extends Component {

    render(){
        return(
            this.props.followers.map(follower => {
                return (
                    <div className='card'>
                        <img src={follower.avatar_url} />
                        <div className='card-info'>
                            <h3 className='name'>{follower.userName}</h3>
                            <p className='username'>Profile: {follower.login}</p>
                            <p>{follower.location}</p>
                            <p><a href={follower.html_url} /></p>
                            <p>Followers: {follower.followers}</p>
                            <p>Following: {follower.following}</p>
                            <GitHubCalendar username={follower.login} />
                        </div>
                    </div>
                )
            })

        )
    }
}

export default Followers;