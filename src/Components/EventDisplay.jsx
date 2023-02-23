import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { BiLink } from 'react-icons/bi'
import { TbExternalLink } from 'react-icons/tb'
import { AiFillCaretDown } from 'react-icons/ai'
export const EventDisplay = (props) => {
    const stringFormatter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).split('_').join(' ');
    }
    const dateConverter = (epoch) => { 
        let date = new Date(epoch);
        return <div className='p-3 ring-4 ring-pink rounded-xl'>
            <h1 className='text-pink font-extrabold text-2xl'>{months[date.getMonth()].substring(0, 3)} {date.getDay()}</h1>
            <h1 className='text-pink font-extrabold text-2xl'>{date.getHours() < 10 ? '0' : ''}{date.getHours()}:{date.getMinutes() < 10 ? '0' : ''}{date.getMinutes()}</h1>
        </div>;
    }
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const handleRelatedEvents = (event) => { 
        props.setRelatedEvents(event);
        props.setSearch("");
        props.setSort("startTime");
        props.setFilter({
            workshop: false,
            activity: false,
            tech_talk: false
        })
    }

    const clearRelated = () => { 
        props.setRelatedEvents(null);
    }

    const events = props.data?.map(
        (event, idx) =>
            <div key={idx}>
                <div className='grid gap-3 bg-grey rounded-xl lg:p-8 p-6 drop-shadow-lg shadow-pureBlack w-full'>
                    <span className='flex gap-3'>
                        <h1 className='bg-blue text-white px-3 py-1 my-auto w-fit rounded-full font-extrabold text-lg'>{stringFormatter(event.event_type)}</h1>
                        <h1 className='bg-yellow text-black px-3 py-1 my-auto w-fit rounded-full font-extrabold text-lg'>{stringFormatter(event.permission)}</h1>
                    </span>
                        <h1 className=' text-white py-1 w-fit rounded-full font-extrabold text-2xl'>{stringFormatter(event.name)}</h1>
                    <hr className='text-white '/>
                <h1 className='py-1 w-fit rounded-full text-md text-white mb-2'>{stringFormatter(event.description)}</h1>
                <div className='grid lg:grid-cols-2 md:grid-cols-2'>
                    {event.speakers[0] && <div className='mb-3'>
                        <h1 className=' text-white py-1 w-fit rounded-full font-extrabold text-2xl'>Speakers</h1>
                        <span className='flex gap-5'>
                            {event.speakers?.map((speaker, idx) =>
                                <div className='mt-2' key={idx}>
                                    <div className="h-24 w-24 rounded-full my-2" style={{ backgroundImage: `url("https://images.pexels.com/photos/7586689/pexels-photo-7586689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`, backgroundSize: "cover" }} />
                                    <h1 className='text-white font-bold text-lg text-center'>{speaker.name}</h1>
                                </div>
                            )}
                        </span>
                    </div>}
                    <div>
                        <h1 className=' text-white py-1 w-fit rounded-full font-extrabold text-2xl'>Event details</h1>
                        <span className='flex lg:gap-8 gap-3 my-4 white'>
                            {dateConverter(event.start_time)} 
                            <FaLongArrowAltRight className='text-white text-3xl font-extrabold my-auto'/>
                            {dateConverter(event.end_time)}
                        </span>
                    </div>
                </div>
                    <div className='lg:flex md:flex gap-5 grid'>
                        {
                        // eslint-disable-next-line react/jsx-no-target-blank
                        }<a className='flex bg-gradient-to-r from-pink to-purple rounded-full py-2 px-5 text-center px-auto text-white lg:text-xl text-md w-fit font-extrabold shadow-md hover:shadow-pink shadow-purple transition-all duration-200' href={event.public_url ? event.public_url : event.private_url} target="_blank">More details <TbExternalLink  className='my-auto ml-2 text-2xl'/></a>
                        <button onClick={() => { handleRelatedEvents(event) }} className='flex text-center bg-gradient-to-r from-green to-blue rounded-full py-2 px-5 px-auto text-white lg:text-xl text-md  w-fit font-extrabold shadow-md hover:shadow-green shadow-blue transition-all duration-200'>Related events <BiLink className='my-auto ml-2 text-2xl text-white' /></button>
                </div>
                </div>
                {props.relatedEvents && props.relatedEvents.id === event.id && 
                    <div className='my-3 flex gap-5'>
                        <AiFillCaretDown className='text-yellow font-bold text-2xl my-auto' />
                        <h1 className='text-yellow my-auto font-bold lg:text-xl text-md'>Events related to {event.name}:</h1>
                        <button onClick={clearRelated} className='ml-auto text-black font-bold my-auto bg-yellow rounded-full px-3 py-2 shadow-md shadow-black hover:shadow-yellow duration-200 transition text-lg'>Clear</button>
                    </div>
                }
            </div>
    )
  return (
    <div className='col-span-2 grid gap-3 w-full'>
          {events}
    </div>
  )
}

export default EventDisplay;