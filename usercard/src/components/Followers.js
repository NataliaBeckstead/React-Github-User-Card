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
                            <p className='username'>Profile: {follower.login}</p>
                            <GitHubCalendar username={follower.login} />
                        </div>
                    </div>
                )
            })

        )
    }
}

export default Followers;