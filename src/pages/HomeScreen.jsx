import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDeputados from './../services/apiDeputados'


const HomeScreen = () => {


    const [partidos, setPartidos] = useState([])
    const [estados, setEstados] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        apiDeputados.get('partidos/').then(resultado => {
            //console.log(resultado.data)
            setPartidos(resultado.data.dados)
        })
    }, [])

    useEffect(() => {
        apiDeputados.get('deputados?' && '/referencias/uf').then(resultado => {
            console.log(resultado.data)
            setEstados(resultado.data.dados)
        })
    }, [])


  return (
    <div style={{ marginTop: "120px" }}>
        <Container className='mt-5'>

            <Row xs={1} sm={1} md={1} lg={2} xl={2}>

                <Col className="mb-3">
                    <Card className='p-2 bg-light'>
                        <Card className='m-2 bg-dark text-light align-items-center'>
                            <h4>Deputados por Estado</h4>
                        </Card>
                        <Card className='m-2'>
                            <Row xs={3} sm={3} md={3} lg={3} xl={3} className='p-2'>
                            {estados.slice(0,9).map(item => (
                                <Col >
                                    <Card className='bg-light align-items-center my-2'>
                                    <h5><Link className="btn btn-light w-100" to={'/deputadosporestadopag/'+item.sigla}>{item.sigla}</Link></h5>
                                    </Card>
                                </Col>
                            ))}
                            </Row>
                        </Card>
                        <Link to={'/estados'} className='btn btn-success'>Ver todos os Estados</Link>
                    </Card>
                </Col>

                <Col className="mb-3">
                    <Card className='p-2 bg-light'>
                        <Card className='m-2 bg-dark text-light align-items-center'>
                            <h4>Principais Partidos</h4>
                        </Card>
                        <Card className='m-2'>
                            <Row xs={3} sm={3} md={3} lg={3} xl={3} className='p-2'>
                            {partidos.slice(0,9).map(item => (
                                <Col >
                                    <Card className='bg-light align-items-center my-2'>
                                        <h5><Link className="btn btn-light w-100" to={'/detalhespartido/' + item.id}>{item.sigla}</Link></h5>
                                    </Card>
                                </Col>
                            ))}
                            </Row>
                        </Card>
                        <Link to={'/partidos'} className='btn btn-success'>Ver todos os Partidos</Link>
                    </Card>
                </Col>

            </Row>
            <Card className='m-5'>
                <Link to={'/login'}>Teste Tela de Login (tira dps)</Link>
            </Card>
            <Card className='m-5'>
                <Link to={'/cadastro'}>Teste Tela de Cadastro (tira dps)</Link>
            </Card>

        </Container>
    </div>
  )
}

export default HomeScreen