import { Fragment } from "react";
import { useRouter } from "next/router";

import { getFilteredEvents } from "../../helper/api-utill";
import EventsList from "../../Components/Events/event-list";
import Button from "../../Components/ui/button";

function FilteredEventsPage(props) {
  const filteredEvents = props.items;
  const hasError = props.hasError

 if(filteredEvents){
   if (filteredEvents.length === 0) {
     return (
       <>
         <p className="center">No Events Found for the choosen filter</p>;
         <div className="center">
           <Button href="/event">Show All Events</Button>
         </div>
       </>
     );
   }
 }

  if (hasError) {
    return (
      <Fragment>
        <p>Invalid Filter</p>

        <div className="center">
          <Button href="/event">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <EventsList items={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const date = params.slug;

  const filteredYear = date[0];
  const filteredMonth = date[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      items: filteredEvents,
      numYear: numYear,
      numMonth: numMonth,
    },
  };

  // const filteredEvents = getFilteredEvents()
}

export default FilteredEventsPage;
