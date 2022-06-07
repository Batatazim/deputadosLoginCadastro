import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDeputados from './../services/apiDeputados'


const Estados = () => {

    const [estados, setEstados] = useState([])

    useEffect(() => {
        apiDeputados.get('deputados?' && '/referencias/uf').then(resultado => {
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
            <Card>
                <Row className='m-2'>
                {estados.map(item => (
                     <Col>
                     <Card>
                     <Link className='btn btn-dark' style={{ width: '67px'}} to={'/deputadosporestadopag/'+item.sigla}>{item.sigla}</Link>
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