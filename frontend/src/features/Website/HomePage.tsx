import React from 'react'
import Banner from '../../components/Banner'
import ShowProduct from '../../components/ShowProduct'


import TemVector from '../../components/TemVector/TemVector'
import VacsinReview from '../../components/VacsinReview'
import VacsinReviewthree from '../../components/VacsinReviewthree'
import VacsinReviewtwo from '../../components/VacsinReviewtwo'
import VacsinSteps from '../../components/VacsinSteps'
import VactionList from '../../components/VactionList/VactionList'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
     
      <Banner/>
      <VacsinSteps />
     
     
      
    
      <VacsinReview/>
      <VactionList/>
     
      <VacsinReviewtwo/>
      <ShowProduct/>
      <VacsinReviewthree/>
      {/* <TemVector/> */}
     
     
      
    </div>
  )
}

export default HomePage