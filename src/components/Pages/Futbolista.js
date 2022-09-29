import React from 'react'
import Card from 'react-bootstrap/Card';

function Futbolista(props) {
    return (
        <>
            <h1>Pagina de Jugadores</h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://phantom-marca.unidadeditorial.es/fecb09489e5712164fd1c8c0f6afdd7a/resize/1320/f/jpg/assets/multimedia/imagenes/2022/07/30/16591778851898.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        <h2>Sobre el Jugador</h2>
                        <ul>
                            <li>Jugador Portugues</li>
                            <li>Juega en Manchester United</li>
                        </ul>
                        <h2>Sus redes</h2>
                        <ol>
                            <li><a href="https://instagram.com/cr7">Instagram</a></li>
                        </ol>
                    </Card.Text>

                </Card.Body>
            </Card>
        </>
    )
}

export default Futbolista