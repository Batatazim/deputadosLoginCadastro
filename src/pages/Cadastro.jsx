import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Cadastro = () => {
  return (
    <div className='mt-5'>
        <Card className='mt-5 align-items-center p-5 mb-5'>
            <Card className='align-items-center bg-success text-light mt-5' style={{ width: '550px' }}>
                <h2>Cadastrar-se</h2>
            </Card>
            <Card className='align-items-center bg-dark text-light mb-5' style={{ width: '550px', height: '20px' }}>
                <p style={{ fontSize: '8pt'}} >Sua Wiki de Deputados</p>
            </Card>

            <Row>
                <Row>
                    <Col>
                        <Form.Group className='mb-3' controlId="nome">
                            <Form.Control type="text" placeholder="Nome"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId="sobrenome">
                            <Form.Control type="text" placeholder="Sobrenome"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Form.Group className='mb-3' controlId="cpf">
                        <Form.Control type="text" placeholder="CPF"/>
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className='mb-3' controlId="cep">
                            <Form.Control type="text" placeholder="CEP"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId="email">
                            <Form.Control type="email" placeholder="E-mail"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className='mb-3' controlId="nascimento">
                            <Form.Control type="date" placeholder="Insira sua data de nascimento"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId="telefone">
                            <Form.Control type="text" placeholder="Telefone"/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                  <Form.Group className='mb-3' controlId="senha">
                            <Form.Control type="password" placeholder="Senha"/>
                  </Form.Group>
                </Row>

            </Row>
            <Row>
                <Col>
                    <Link className='btn btn-danger' to={-1}>Voltar</Link>
                </Col>
                <Col>
                    <Link style={{ width: '150px' }} className='btn btn-dark' to={""}>Cadastrar-se</Link>
                </Col>
            </Row>
            </Card>
    </div>
  )
}

export default Cadastro