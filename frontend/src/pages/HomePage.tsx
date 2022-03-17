import React from 'react'
import Banner from '../components/Banner'
import VacsinReview from '../components/VacsinReview'
import VacsinReviewthree from '../components/VacsinReviewthree'
import VacsinReviewtwo from '../components/VacsinReviewtwo'
import VacsinSteps from '../components/VacsinSteps'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      {/* <Banner/> */}
      <Banner/>
      <VacsinSteps />
      <VacsinReview/>
      <VacsinReviewtwo/>
      <VacsinReviewthree/>
      
    </div>
  )
}

export default HomePage