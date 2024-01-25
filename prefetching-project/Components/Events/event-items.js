import Link from "next/link";
import classes from './event-items.module.css'
import Button from "../ui/button";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";

function EventItem({title, image, id, date, location}){
    const humanReadableDate = new Date(date).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    const eventsLocation = location.replace(', ', '\n');
    const eventRedirect = `event/${id}` 
    return <li className={classes.item}>
        <img src={`/${image}`} alt=''/>
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <DateIcon/>
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon/>
                    <p>{eventsLocation}</p>
                </div>
            </div>
            <div className={classes.actions}>
                <Button href={eventRedirect}>Explore Event <span className={classes.icon}><ArrowRightIcon/></span></Button>
            </div>
        </div>
    </li>

}

export default EventItem;