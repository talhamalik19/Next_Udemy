function UserProfile(props){
    return(
        <h1>{props.username}</h1>
    )
}

export async function getServerSideProps(){
    return{
        props:{
            username: "Talha Malik"
        }
    }
}

export default UserProfile;