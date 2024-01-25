import { Fragment } from "react";

import { getAllEvents, getEventById } from "../../helper/api-utill";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
// import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage(props) {
  const event = props.items;

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const eventById =await getEventById(params.eventId);
  if(!eventById){
    return{
      notFound: true
    }
  }

  return {
    props: {
      items: eventById
    },
    revalidate: 30
  };
}

export async function getStaticPaths() {
  const allEvents = await getAllEvents();

  const ids = allEvents.map(events=>(events.id))
  const paramsIds = ids.map(id=>({params: {eventId: id}}))
  return{
    paths: paramsIds,
    fallback: true,
  }
}

export default EventDetailPage;
