import React from 'react';
import { useState, useEffect } from 'react';
import {getJobsList} from '../serveces/jobs-api'
import { iso1A3Code} from '@ideditor/country-coder'; 
import ReactPaginate from 'react-paginate';
interface Job {
    id: string;
    title: string;
    name: string;
    location: Coordinates,
    address: string,
    pictures: Array<string>,
    createdAt: string
}
interface Coordinates {
    lat: number;
    long: number
}
interface CurrentPage {
    selected: number;
   
}
let moment = require('moment');
function JobsList() {
    const [listJobs, setListJobs] = React.useState<Array<Job>>([]);
    const [page, setPage] = React.useState<number>(1);
    
    useEffect(() => {
        getJobsList(page).then(data => {setListJobs(data); getArrayOflocation(data)})
    },[page])
    function getArrayOflocation(arr:Job[]) {
     let newArray = arr.map(item => iso1A3Code([item.location.long, item.location.lat], { level: 'territory' }))
     console.log(newArray)
    }
    const handlePageClick = (data:CurrentPage) => {
        let num = data.selected + 1;
        setPage(num)
        console.log(num)
      };
      
  return (
    <div className="container mx-auto w-full pb-7 pt-2 px-2.5 lg:w-[73%] lg:pt-7 md:w-[73%] md:pt-7 lg:px-0 md:pb-16 lg:pb-16">
      <ul className='mb-7 lg:mb-12 mg:mb-12'>{
      listJobs.map(({ id, title, name, address, pictures, createdAt}) => (
    <li key={id} className="bg-white rounded-lg mb-[8px] pt-4 pb-7 px-4 w-full lg:py-6 md:py-6 flex flex-col mg:flex-row lg:flex-row gap-y-3.5">
        <div className='w-100% lg:w-[75%] mg:w-[75%] flex'>
        <div className='h-[66px] w-[66px] rounded-full overflow-hidden lg:h-[85px] lg:w-[85px] mg:h-[85px] mg:w-[85px]'>
        <img src={pictures[2]} alt="office" className='w-full odject-contain'/>
            </div>
     <div className='w-[79%] ml-5 mg:w-[95%] lg:w-[95%] lg:ml-7 mg:ml-7'>
      <div className='lg:w-[74%] mg:w-[74%]'>
      <p className='max-h-12.5 overflow-hidden lg:max-h-full font-normal mg:max-h-full  text-headerColor text-lg	lg:text-xl mg:text-xl mb-1 lg:mb-2 mg:mb-2 lg:font-bold mg:font-bold'>{title}</p>
      <p className='max-h-12.5 overflow-hidden lg:max-h-full mg:max-h-full text-textColor font-normal text-base mb-1 lg:mb-2 mg:mb-2'>Department name {name}-AKN</p>
      <p className='max-h-12.5 overflow-hidden lg:max-h-full mg:max-h-full text-textColor font-normal text-base flex'><span className='bg-location bg-no-repeat bg-center bg-auto w-4 h-5 mr-2'></span>{address}</p>
      </div>
      </div>
      </div>
      <div className='flex -order-1 justify-around lg:-order-none mg:-order-none '>
      <ul className='mr-8 flex min-w-24 items-center lg:ml-auto mg:ml-auto'>
      <li className='bg-mobileRate bg-no-repeat bg-center bg-auto w-2.5 h-2.5 lg:w-5 lg:h-5 mg:w-5 mg:h-5 lg:bg-rate mg:bg-rate'></li>
      <li className='bg-mobileRate bg-no-repeat bg-center bg-auto w-2.5 h-2.5 lg:w-5 lg:h-5 mg:w-5 mg:h-5 lg:bg-rate mg:bg-rate'></li>
      <li className='bg-mobileRate bg-no-repeat bg-center bg-auto w-2.5 h-2.5 lg:w-5 lg:h-5 mg:w-5 mg:h-5 lg:bg-rate mg:bg-rate'></li>
      <li className='bg-mobileRate bg-no-repeat bg-center bg-auto w-2.5 h-2.5 lg:w-5 lg:h-5 mg:w-5 mg:h-5 lg:bg-rate mg:bg-rate'></li>
      <li className='bg-mobileRate bg-no-repeat bg-center bg-auto w-2.5 h-2.5 lg:w-5 lg:h-5 mg:w-5 mg:h-5 lg:bg-rate mg:bg-rate'></li>
        </ul>
      <div className='flex flex-col px-1.75'>
        <div className='hidden lg:block mg:block lg:bg-post bg-no-repeat bg-center bg-auto w-4 h-5 ml-auto'></div>
      <div className='grow flex items-end'>
        <p className='text-textColor font-normal text-sm lg:text-base mg:text-base'>Posted {moment(createdAt, "YYYYMMDD").fromNow()}</p></div>
        </div>
      </div>
    </li>
  ))}
      </ul>
      <div className='flex justify-center'>
      <div className="hidden bg-sepator bg-no-repeat bg-center bg-auto w-px р-8px relative left-14 lg:block mg:block'">
  </div>
      <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={18}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          pageClassName="mr-2 text-buttonColor text-base w-8 h-8 font-bold lg:text-xl mg:text-xl relative text-center"
          pageLinkClassName="pageLink"
          breakClassName="mr-2 text-buttonColor text-base w-8 h-8 font-bold lg:text-xl mg:text-xl"
          previousClassName={'hidden text-2xl text-arrowColor font-bold mr-11 w-8 h-8 text-start pb-1 pr-12 lg:block mg:block'}
          containerClassName="flex bg-white rounded-r-lg rounded-l-lg pl-6 pr-4 pt-3 pb-2.5"
          activeClassName="after:content-[''] after:ml-0.5 after:absolute after:top-[25px] after:bg-link after:w-0.5 after:h-8 after:rotate-90"
          previousLinkClassName="pageLinkWord"
        //   nextClassName={
        //     currentPage === pagination() ? 'buttonDisable' : 'buttonNext'
        //   }
          nextClassName={'hidden text-2xl text-arrowColor font-bold mr-2 pl-12 lg:block mg:block ml-7'}
        />
        <div className="bg-sepator bg-no-repeat bg-center bg-auto relative right-14 lg:w-px lg:р-8px mg:w-px mg:р-8px'">
  </div>
       </div>
    </div>
  );
}

export default JobsList;
