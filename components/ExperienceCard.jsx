import React, { useState } from 'react'
import { Icon } from '@iconify/react'

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Col,
    Collapse,
} from 'reactstrap'

import { Fade } from 'react-reveal'

const ExperienceCard = ({ data }) => {
    const [expanded, setExpanded] = useState(false)
    const expandedStyles = {
        maxHeight: expanded ? 'auto' : '60px',
        overflow: 'hidden',
    }

    return (
        <Col lg="6">
            <Fade left duration={2000}>
                <Card
                    style={{ flex: 1 }}
                    className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
                >
                    <CardBody className="">
                        <img
                            src={data.companylogo}
                            style={{
                                objectFit: 'cover',
                                left: 0,
                                right: 0,
                                top: '7rem',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                maxHeight: '7rem',
                                // maxWidth: '8rem',
                            }}
                            className="mb-3"
                            alt={data.companylogo}
                        />
                        <CardTitle tag="h4" className="mb-2">
                            {data.company}
                        </CardTitle>
                        <p>
                            <strong>
                                <a href={data.url}>{data.friendly_url}</a>
                            </strong>
                        </p>
                        <CardSubtitle tag="h5" className="mb-2">
                            {data.role}
                        </CardSubtitle>
                        <CardSubtitle>{data.date}</CardSubtitle>
                        <button
                            style={{
                                background: 'none',
                                color: '#777',
                                border: 'none',
                                padding: 0,
                                font: 'inherit',
                                cursor: 'pointer',
                                outline: 'inherit',
                                fontSize: '32px',
                            }}
                            onClick={() => {
                                setExpanded((prevState) => !prevState)
                            }}
                        >
                            {expanded ? (
                                <Icon icon="ci:chevron-up"></Icon>
                            ) : (
                                <Icon icon="ci:chevron-down"></Icon>
                            )}
                        </button>
                        <Collapse isOpen={expanded}>
                            <CardText
                                tag="div"
                                className="description my-3 text-left"
                            >
                                {data.desc}
                                <ul>
                                    {data.descBullets
                                        ? data.descBullets.map((desc) => {
                                              return (
                                                  <li
                                                      key={desc}
                                                      dangerouslySetInnerHTML={{
                                                          __html: desc,
                                                      }}
                                                  />
                                              )
                                          })
                                        : null}
                                </ul>
                            </CardText>
                        </Collapse>
                    </CardBody>
                </Card>
            </Fade>
        </Col>
    )
}

export default ExperienceCard
