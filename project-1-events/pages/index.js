import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../Components/Events/event-list";

function HomePage(){
    const featuredEvents = getFeaturedEvents()
    return <div>
        <EventsList items={featuredEvents} />
    </div>
}

export default HomePage;