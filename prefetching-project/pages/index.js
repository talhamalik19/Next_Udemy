import { getFeaturedEvents } from "../helper/api-utill";
import EventsList from "../Components/Events/event-list";
import Head from "next/head";

function HomePage(props){
    const featuredEvents = props.items;
    return <div>
        <Head>
            <title>Next JS Events</title>
            <meta name="description" content="Next Events Projects for Learning Next JS"/>
        </Head>
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