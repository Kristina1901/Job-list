import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link, useParams } from 'react-router-dom';
import {getJobsList} from '../serveces/jobs-api'
interface Job {
  id: string;
  title: string;
  name: string;
  location: Coordinates,
  address: string,
  pictures: Array<string>,
  createdAt: string,
  salary: string
  
}
interface Coordinates {
  lat: number;
  long: number
}
let moment = require('moment');
function DetailedJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [job, setJob] = React.useState<Job>();
  const [salary, setSalary] = React.useState<number>(0);
  const [listJobs, setListJobs] = React.useState<Array<Job>>([]);
  useEffect(() => {
    getJobsList(1).then(data => {getJob(data)})
  });
  function getJob(arr:Job[]) {
    let newArray = arr.find(item => item.id === id)
    setJob(newArray)
       
   }

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  function getSalary() {
    if (job !== undefined) {
      let str = job.salary
    if(str.includes('k')) {
      let newStr = parseInt(str.replace(/[^\d]/g, ''))
      let newString = String(newStr)
       Array.from(newString)
      let firstNumbers = newString.slice(0, 2)
      let secondNumbers = newString.slice(2, 4)
      return `€ ${firstNumbers} 000\u2013${secondNumbers} 000`
      
    }
    else{
       return
    }

  }
     
  }
  return (
        <div className="container h-full mx-auto w-full bg-red pb-9 pt-6 px-4 lg:w-[65%] lg:pt-7 md:w-[65%] md:pt-7 lg:px-0 md:pb-16 lg:pb-16 flex  justify-between">
          <section className='flex basis-[58%] flex-col'>
            <div className='flex justify-between w-full border-b-2 border-#3A4562 pl-5'>
              <h1 className='text-job text-headerColor font-bold'>Job Details</h1>
              <div className='flex gap-x-8 pt-2'>
               <div className='flex items-center gap-x-4'><div className='bg-list bg-no-repeat bg-center bg-auto w-[18px] h-[20px]'></div><button className='text-lg text-headerColor font-normal'>Save to my list</button></div>
                <div className='flex items-center gap-x-4'><div className='bg-dots bg-no-repeat bg-center bg-auto w-[18px] h-[20px]'></div><button className='text-lg text-headerColor font-normal'>Share</button></div>
              </div>
            </div>
            <div className='pt-10 pl-5'>
              <button className='text-white bg-button py-[18px] px-[30px] rounded-t-lg rounded-b-lg font-semibold text-xs mb-8'>
              APPLY NOW</button>
              <div className='flex justify-between mb-2'>
                <h2 className='text-headerColor text-2xl font-bold w-[69.3%] overflow-hidden min-h-[120px]'>{job && job.title}</h2>
                <div className='w-[22.26%]'>
                <p className='font-bold	text-xl text-headerColor'>{getSalary()}</p>
                <p className='font-normal text-lg'>Brutto, per year</p>
                </div>
                </div>
                <p className='text-lg text-time font-sans mb-2'>Posted {job && moment(job.createdAt, "YYYYMMDD").fromNow()}</p>
                <p className='text-lg text-headerColor font-sans mb-10'>At WellStar, we all share common goals. 
                  That’s what makes us so successful – and such an integral part of our communities. We want the same things, for our organization, for our patients, and for our colleagues. 
                  As the most integrated healthcare provider in Georgia, this means we pride ourselves on investing in the communities that we serve. 
                  We continue to provide innovative care models, focused on improving quality and access to healthcare.</p>
                  <h3 className='font-bold text-headerColor text-xl mb-2'>Responsopilities</h3>
                 <p className='text-lg text-headerColor font-sans mb-10'>Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. 
                  This is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.</p>
                <p className='text-lg text-headerColor font-sans mb-10'>The ideal candidate will have five or more years of experience in cardiac surgery. 
                  This candidate should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular assist device placement, and extra corporeal membrane oxygenation.
                </p>
                <p className='text-lg text-headerColor font-sans  mb-10'>Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta metro region. 
                  With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. 
                  The cardiac service line is the only center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.
                </p>
            </div>
            <div className='pl-5'>
            <h3 className='font-bold text-headerColor text-xl mb-2'>Compensation & Benefits:</h3>
            <ul className='-ml-5'>
             <li>Hi</li>
            </ul>
            </div>
            </section>
          <div className='flex basis-1/3'></div>
        </div>      
     
    );
  }
  
  export default DetailedJob;