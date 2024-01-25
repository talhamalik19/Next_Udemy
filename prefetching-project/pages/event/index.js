import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../helper/api-utill';
import EventsList from '../../Components/Events/event-list';
import EventsSearch from '../../Components/Events/event-search';

function AllEventsPage(props) {
  const router = useRouter()
  const events = props.items;

  function findEventsHandler(year, month) {
    const fullPath = `/event/${year}/${month}`;
    
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsList items={events} />
    </Fragment>
  );
}

export async function getStaticProps(){
  const allEvents = await getAllEvents();

  return{
    props: {
      items : allEvents 
    },
    revalidate: 60,
  }
}

export default AllEventsPage;
