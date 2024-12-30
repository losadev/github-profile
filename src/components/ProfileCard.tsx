import { GithubUserProps } from "../types/data.types"

interface Props {
  data: GithubUserProps[]
  userSearched: string
}

const ProfileCard = ({data, userSearched}:Props) => {
  return (
    <div className="container-profile-card">
      <ul>
        {data.map(user => (
          user.login.includes(userSearched) ? <li>{user.login}</li>:''
        ))}
      </ul>
    </div>
  )
}

export default ProfileCard;