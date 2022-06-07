import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDeputados from './../services/apiDeputados'


const Estados = () => {

    const [estados, setEstados] = useState([])

    useEffect(() => {
        apiDeputados.get('deputados?').then(resultado => {
            console.log(resultado.data)
            setEstados(resultado.data.dados)
        })
    }, [])
  return (
    <div style={{ marginTop: "120px" }}>
        <Card>
            <Card className='bg-dark text-light align-items-center p-2 m-2'>
                <h1>Todos os Estados</h1>
            </Card>
            <Card className='p-2 bg-light'>
                <Row className='m-2'>
                {estados.slice(0,27).map(item => (
                     <Col>
                     <Card className='bg-dark align-items-center my-2'>
                     <Link className='btn btn-dark' style={{ width: '100px'}} to={'/deputadosporestadopag/'+item.siglaUf}>{item.siglaUf}</Link>
                     </Card>
                     </Col>
                ))}
                </Row>
            </Card>
        </Card>
    </div>
  )
}

export default Estados