
import { Link } from 'react-router-dom'
import './App.css'

import Overview from './Components/Dashboard/Overview'
import SubscriptionGrowth from './Components/Dashboard/SubscriptionGrowth'
import JoinRequest from './Components/Dashboard/JoinRequest'
import user from './assets/images/use4.png'
import car1 from './assets/images/car.png'
import car2 from './assets/images/car2.png'
import car3 from './assets/images/car3.png'


function App() {
  /** Get total user statistics API */



  const tableData =[
    {
      key: 1,
      id : 1,
      name: 'dindiniya',
      img: user,
      contact : '08 +123 456',
      email : 'bockelboy@att.com',
      location : 'Kent, Utha',
      car : 'AIM Mychro',
      carLocation : 'United State',
      carImg : car1

    },
    {
      key: 2,
      id : 2,
      name: 'dindiniya',
      img: user,
      contact : '08 +123 456',
      email : 'bockelboy@att.com',
      location : 'Kent, Utha',
      car : 'AIM Mychro',
      carLocation : 'United State',
      carImg : car2

    },
    {
      key: 3,
      id : 3,
      name: 'dindiniya',
      img: user,
      contact : '08 +123 456',
      email : 'bockelboy@att.com',
      location : 'Kent, Utha',
      car : 'AIM Mychro',
      carLocation : 'United State',
      carImg : car3

    }
  ]
   
  

  const data = [
    {
      title: 'Total User',
      count: 18.6,
    },
    {
      title: 'Total Premium User',
      count: 18.6,
    },
    {
      title: 'Total Selling Products ',
      count: 20.9,
    },
    {
      title: 'Total Earning',
      count: 20.9,
    },

  ]

  return (
    <>
      <div className='grid-4 '>
        {
          data?.map((item, index) => <div className='w-full h-full border-r-2 center-center flex-col gap-3  bg-[white]  ' key={index}>
            <div className='my-10 text-center space-y-4'>
              <p className='text-3xl font-semibold'>{item?.count}K</p>
              <p className=' '>{item?.title}</p>
            </div>
          </div>)
        }
      </div>
      <div className='grid-2 mt-3 gap-3'>
        <div className='w-full h-full bg-white p-4 rounded-md'>
          <SubscriptionGrowth />
        </div>
        <div className='w-full h-full bg-white p-4 rounded-md'>
          <Overview />
        </div>

      </div>
      <div className='mt-3 bg-white rounded-md'>
        <div className='between-center gap-2 mb-3 p-5'>
          <p className='text-xl'>Who can be premium user</p> <Link to={`/total-join-request`}>
            View All
          </Link>
        </div>
        <JoinRequest tableData={tableData} pagination={false} />
      </div>
    </>
  )
}

export default App
