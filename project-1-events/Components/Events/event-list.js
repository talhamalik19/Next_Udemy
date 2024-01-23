import EventItem from "./event-items";
import classes from './event-list.module.css'

function EventsList({ items }) {
    console.log(items)
  return (
    <ul className={classes.list}>
      {items.map((events) => (
        <EventItem
        key={events.id}
          id={events.id}
          title={events.title}
          date={events.date}
          location={events.location}
          image={events.image}
        />
      ))}
    </ul>
  );
}

export default EventsList;
