import React from "react";
import { Container, Card, Row } from "react-bootstrap";


const NewsItem = () => {
    const description = [
        {id: "3", title: "sport", description: "Real winning La Liga"},
        {id: "18", title: "sporrrt", description: "Real winningdtds La Liga"},
        {id: "19", title: "sporrsfhart", description: "Real winningdtds La Ligfsga"},
        {id: "20", title: "sporrsfhart", description: "Real winningdtds La Ligfsga"},
        {id: "21", title: "sporrsfhart", description: "Real winningdtds La Ligfsga"},
        {id: "22", title: "sporrsfhart", description: "Real winningdtds La Ligfsga"}
    ]

    return(
      
       <Row style={{marginRight: 0}}>{description.map(info => 
            <Container
                key={info.id}
                className="justify-content-center "
            >
                <Card  style={{width: 600}} className="p-4 mt-5 m-auto">
                    <h3>{info.title}</h3>
                    <p>{info.description}</p>
                </Card>
            </Container>
        )}
        </Row>
    )
}

export default NewsItem;