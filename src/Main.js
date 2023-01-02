import React from "react"
import Card from "./Card"
import data from "./data"

export default function Main(){
    const cardElements = data.map(values => {
        return  <Card 
                    key={values.title}
                    img={values.imageUrl}
                    countryName={values.location}
                    link={values.googleMapsUrl}
                    locationVisited={values.title}
                    date={values.startDate+ " - " + values.endDate} 
                    desc={values.description}
                />
    })   
    return (
        <div>
          {cardElements}
        </div>
    )
}