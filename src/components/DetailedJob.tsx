
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link, useParams } from 'react-router-dom';
import {getJobsList} from '../serveces/jobs-api'
function DetailedJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (id !== '') {
      return
    }
    else {
      getJobsList(1)

    }
  }, [id]);

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

    return (
        <div className="container h-full mx-auto w-full bg-red pb-9 pt-6 px-4 lg:w-[65%] lg:pt-7 md:w-[65%] md:pt-7 lg:px-0 md:pb-16 lg:pb-16 flex  justify-between">
          <div className='flex basis-7/12 border-b-2 border-#3A4562 pb-1'>
            <div className='flex justify-between w-full'>
              <p className='text-job text-headerColor font-bold'>Job Details</p>
              <div>
                <span></span><button>Save to my list</button>
                <span></span><button>Share</button>
              </div>
            </div>
          </div>
          <div className='flex basis-1/3'></div>
        </div>      
     
    );
  }
  
  export default DetailedJob;