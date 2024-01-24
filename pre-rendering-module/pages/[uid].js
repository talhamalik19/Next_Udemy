function UserDetails(props){
    return(
        <p>Talha - {props.id}</p>
    )
}

export async function getServerSideProps(context){
    const {params} = context;
    const id = params.uid;
    return{
        props:{
            id: id
        }
    }
}

export default UserDetails;