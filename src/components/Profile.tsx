import { GithubUserProps } from "../types/data.types";

interface Props {
  data: GithubUserProps[] | null
  userSearched: string
}

const Profile = ({data, userSearched}:Props) => {

  const user = data ? data.map(user => {
    if(user.login === userSearched) return user;
  }):null;

  console.log(user)

  return (
    <div className="container-profile">
      <ul>
        {user ? user.map((props) => (
          <li key={props?.id}>{props?.login}</li>
        )):'No hay'}
      </ul>
    </div>
  );
}

export default Profile;