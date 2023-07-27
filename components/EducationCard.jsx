import React from 'react'
import { Card, CardBody, Badge } from 'reactstrap'

import { Fade } from 'react-reveal'

const EducationCard = ({ education }) => {
    return (
        <Fade left duration={2000}>
            <Card className="shadow mt-4">
                <CardBody>
                    <div className="d-flex px-3">
                        <div className="pl-4">
                            <h5 className="text-info">
                                {education.schoolName}
                            </h5>
                            <h6>
                                {education.subHeader}
                                {education.duration}
                            </h6>

                            {education.grade && (
                                <strong>{education.grade}</strong>
                            )}
                            <p className="description mt-3">{education.desc}</p>

                            {education.descBullets
                                ? education.descBullets.map(
                                      ({ qualification, grade }, i) => {
                                          return (
                                              <div key={i}>
                                                  <strong>
                                                      {qualification}
                                                  </strong>
                                                  <p>{grade}</p>
                                              </div>
                                          )
                                      }
                                  )
                                : null}
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Fade>
    )
}

export default EducationCard
