import React from 'react'
import Sidebar from './Sidebar';
import EventDisplay from './EventDisplay';
import { useState, useEffect, useRef } from 'react';

export const Events = (props) => {
    // Accessing API & processing data

    const [eventData, setEventData] = useState();

    const [displayData, setDisplayData] = useState();

    const [search, setSearch] = useState("");

    const [sort, setSort] = useState("startTime");

    const [filter, setFilter] = useState({
        workshop: false,
        activity: false,
        tech_talk: false
    });

    const [relatedEvents, setRelatedEvents] = useState(null);
    const scrollHere = useRef(null)


    useEffect(() => {
        fetch("https://api.hackthenorth.com/v3/events")
            .then(res => res.json())
            .then(data => {
                if (data !== eventData) {
                    setEventData(data)
                }
            })
    })

    function compareAlpha(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    function compareStartTime(a, b) {
        if (a.start_time < b.start_time) {
            return -1;
        }
        if (a.start_time > b.start_time) {
            return 1;
        }
        return 0;
    }

    useEffect(() => { 
        if (eventData) {
            let display = eventData;
            // Now, we will apply filters according to the permission (public/private based on login state),
            // Search bar, sort, and filter options.

            // Permission control:
            if (!props.loginState) {
                display = display.filter(event => event.permission === "public");
            }

            // Search control:
            display = display.filter((event) => {
                //if no input the return the original
                if (search === '') {
                    return event;
                }
                //return the item which contains the user input
                else {
                    return event.name.toLowerCase().includes(search)
                }
            })

            // Sort control:
            if (sort === "alphabetical") {
                display = display.sort(compareAlpha);
            } else if (sort === "startTime") {
                display = display.sort(compareStartTime);
            }

            // Filter control:
            // Find out if ANY filter is applied
            let filterOn = false;
            for (const property in filter) {
                if (filter[property]) {
                    filterOn = true;
                }
            }
            if (filterOn) {
                display = display.filter(event => (filter[event.event_type] || (relatedEvents && event.id === relatedEvents.id)));
            }

            // Related events control:
            if (relatedEvents) {
                display = display.filter(event => event.id === relatedEvents.id || relatedEvents.related_events.includes(event.id))
                display.sort(function (x, y) { return x.id === relatedEvents.id ? -1 : y.id === relatedEvents.id ? 1 : 0; });
                // Move the highlighted event to the top
            }
            setDisplayData(display);
        }
    }, [props.loginState, eventData, search, sort, filter, relatedEvents])

    useEffect(() => { 
        if (relatedEvents) {
            scrollHere.current.scrollIntoView()
        }
    }, [relatedEvents])
    return (
        <div className='grid grid-cols-3 gap-5' ref={scrollHere}>
            <Sidebar className='col-span-1' setSearch={setSearch} search={search} setSort={setSort} sort={sort} filter={filter} setFilter={setFilter} />
            <EventDisplay className='col-span-2' data={displayData} setSearch={setSearch} setSort={setSort} setFilter={setFilter} setRelatedEvents={setRelatedEvents} relatedEvents={relatedEvents} />
        </div>
    )
}

export default Events;