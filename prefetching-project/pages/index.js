import { getFeaturedEvents } from "../helper/api-utill";
import EventsList from "../Components/Events/event-list";

function HomePage(props){
    const featuredEvents = props.items;
    return <div>
        <EventsList items={featuredEvents} />
    </div>
}

export async function getStaticProps(){
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            items: featuredEvents
        },
        revalidate: 1500,
    }
}
export default HomePage;