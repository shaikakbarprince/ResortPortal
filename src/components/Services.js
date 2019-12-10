import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaBeer,FaShuttleVan} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free cocktails",
                info:"We provide the best cocktails in the country, it's originated and very chilled if you can taste it!"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"You can go for a hiking at our place, we provide all the equipment's for hiking like safety gear snacks, and water!"
            },{
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"we provide shuttle services for free wherever you wanna go on this island be it a airport pickup or drop we do it all, isn't it great!"
            },{
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"Ahh this is the strongest beer you'll have in your life, we brew it personally here, if you don't like it you can order the brands you like, we have it all!"
            }
        ]
    }
    render() {
        return (
            <div>
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                return <article key={index} className="service">
                    <span> {item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
                    })}
                </div>
                
            </div>
        )
    }
}
