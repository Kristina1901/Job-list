import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import MapContainer from "./MapContainer";
import { useParams } from "react-router-dom";
interface Job {
  id: string;
  title: string;
  name: string;
  location: Coordinates;
  address: string;
  pictures: Array<string>;
  createdAt: string;
  salary: string;
  benefits: Array<string>;
  employment_type: Array<string>;
  phone: string;
  email: string;
}
interface Coordinates {
  lat: number;
  long: number;
}
let moment = require("moment");

type Props = {
  jobOneValue?: Job;
};

export const DetailedJob: React.FC<Props> = ({ jobOneValue }) => {
  const navigate = useNavigate();
  const location = useLocation();
  let { id } = useParams();

  const onGoBack = () => {
    navigate(location?.state?.from ?? "/");
  };
  function getSalary() {
    let str = getridofNull().salary;
    if (str.includes("k")) {
      let newStr = parseInt(str.replace(/[^\d]/g, ""));
      let newString = String(newStr);
      Array.from(newString);
      let firstNumbers = newString.slice(0, 2);
      let secondNumbers = newString.slice(2, 4);
      return `€ ${firstNumbers} 000\u2013${secondNumbers} 000`;
    }
  }
  function getridofNull() {
    if (jobOneValue === undefined) {
      let jobValue = JSON.parse(localStorage.getItem(id));
      console.log(jobValue);
      return jobValue;
    } else {
      console.log(jobOneValue);
      return jobOneValue;
    }
  }

  return (
    <div className="container mx-auto w-full pb-7 pt-2 px-2.5 lg:w-[73%] lg:pt-7 md:w-[73%] md:pt-7 lg:px-0 md:pb-16 lg:pb-16 lg:flex lg:justify-between">
      <div className="flex flex-col mb-[63px] lg:mb-0 mg:mb-0 lg:w-[57.4%] lg:pl-5 mg:pl-5">
        <section className="order-1">
          <div className="w-full relative lg:border-b-2 border-#3A4562 mg:border-b-2 border-#3A4562 mg:flex mg:justify-between lg:flex lg:justify-between">
            <h1 className="text-job text-headerColor font-bold border-b-2 border-#3A4562 lg:border-none mg:border-none pb-2.5 lg:pb-1 mg:pb-1">
              Job Details
            </h1>
            <div className="flex gap-x-8 pt-2">
              <div className="flex items-center gap-x-4">
                <div className="bg-list bg-no-repeat bg-center bg-auto w-[18px] h-[20px]"></div>
                <button className="text-lg text-headerColor font-normal">
                  Save to my list
                </button>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="bg-dots bg-no-repeat bg-center bg-auto w-[18px] h-[20px]"></div>
                <button className="text-lg text-headerColor font-normal">
                  Share
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-10 mg:mt-10">
            <button className="hidden text-white bg-button py-[18px] px-[30px] rounded-t-lg rounded-b-lg font-semibold text-xs mb-8 mg:block lg:block">
              APPLY NOW
            </button>
            <div className="flex-col mb-2 mg:justify-between lg:justify-between mg:flex-row lg:flex-row mg:flex lg:flex">
              <h2 className="text-headerColor mb-1 text-2xl font-bold lg:w-[69.3%] mg:w-[69.3%] overflow-hidden min-h-[120px] lg:md-0 mg:mb-0">
                {getridofNull().title}
              </h2>
              <div className="flex items-end flex-col">
                <p className="font-bold	text-xl text-headerColor order-2 mg:order-1 lg:order-1 ">
                  {getSalary()}
                </p>
                <p className="font-normal text-lg order-1 mg:order-2 lg:order-2">
                  Brutto, per year
                </p>
              </div>
            </div>
            <p className="text-lg text-time font-sans relative bottom-[60px] lg:static mg:static lg:mb-2 mg:mb-2 w-[100px] lg:w-full mg:w-full">
              Posted {moment(getridofNull().createdAt, "YYYYMMDD").fromNow()}
            </p>
            <p className="text-lg text-headerColor font-sans mb-10 -mt-[28px] lg:mt-0 mg:mt-0">
              At WellStar, we all share common goals. That’s what makes us so
              successful – and such an integral part of our communities. We want
              the same things, for our organization, for our patients, and for
              our colleagues. As the most integrated healthcare provider in
              Georgia, this means we pride ourselves on investing in the
              communities that we serve. We continue to provide innovative care
              models, focused on improving quality and access to healthcare.
            </p>
            <h3 className="font-bold text-headerColor text-xl mb-2">
              Responsopilities
            </h3>
            <p className="text-lg text-headerColor font-sans mb-10">
              Wellstar Medical Group, a physician-led multi-specialty group in
              Atlanta, Georgia, is currently recruiting for a BC/BE
              cardiothoracic surgeon to join their existing cardiovascular
              program. This is an opportunity to play a key role on a
              multidisciplinary team of cardiologists and surgeons.
            </p>
            <p className="text-lg text-headerColor font-sans mb-10">
              The ideal candidate will have five or more years of experience in
              cardiac surgery. This candidate should be facile with off-pump
              revascularization, complex aortic surgery, minimally invasive
              valve and valve repair, transcatheter valve replacement, surgical
              atrial fibrillation ablation, ventricular assist device placement,
              and extra corporeal membrane oxygenation.
            </p>
            <p className="text-lg text-headerColor font-sans  mb-10">
              Wellstar is one of the largest integrated healthcare systems in
              the Southeast with 11 hospitals in Atlanta metro region. With two
              open heart programs at Kennestone Regional Medical Center and
              Atlanta Medical Center, Wellstar cardiac surgeons perform over
              1200 cardiac procedures per year. The cardiac service line is the
              only center in Georgia with the Joint Commission’s Comprehensive
              Cardiac Center certification.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-headerColor text-xl mb-2">
              Compensation & Benefits:
            </h3>
            <p className="text-lg text-headerColor font-sans">
              Our physicians enjoy a wide range of benefits, including:
            </p>
            <ul className="lg:-ml-5 mg:-ml-5 mb-8">
              {getridofNull().benefits.map((item: string) => (
                <li
                  key={nanoid()}
                  className="text-lg text-headerColor font-sans flex items-center"
                >
                  <span className="block bg-listItem bg-no-repeat bg-center bg-auto w-[9px] h-[9px] mr-2.5"></span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex justify-center lg:justify-start mg:justify-start">
              <button className="text-white bg-button py-[18px] px-[30px] rounded-t-lg rounded-b-lg font-semibold text-xs">
                APPLY NOW
              </button>
            </div>
          </div>
        </section>
        <section className="pt-[55px] order-3 lg:order-2 mg:order-2 lg:pt-[86px] mg:pt-[86px]">
          <div className="border-b-2 border-#3A4562 mb-4">
            <h1 className="text-job text-headerColor font-bold mb-2.5">
              Additional info
            </h1>
          </div>
          <div>
            <p className="text-lg text-headerColor font-sans mb-2">
              Employment type
            </p>
            <ul className="flex mb-6 flex-wrap lg:flex-nowrap">
              {getridofNull().employment_type.map((item: string) => (
                <li
                  key={nanoid()}
                  className="text-base mb-2 text-emptype font-bold bg-bcEmptype py-4 mr-2 min-w-[122px] text-center rounded-t-lg rounded-b-lg border-borderColor border-y border-x lg:mb-0 lg:min-w-[222px] mg:min-w-[222px]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-headerColor font-sans mb-2.5">
              Benefits
            </p>
            <ul className="flex flex-wrap lg:flex-nowrap">
              {getridofNull().benefits.map((item: string) => (
                <li
                  key={nanoid()}
                  className="text-base text-textBenefits mb-2 font-bold bg-bcBenefits py-4 mr-2 min-w-[134px] text-center rounded-t-lg rounded-b-lg border-borderColorYel border-y border-x lg:mb-0 lg:min-w-[222px] mg:min-w-[222px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="pt-[135px] order-2 lg:order-3 mg:order-3 lg:pt-[86px] mg:pt-[86px]">
          <div className="w-full border-b-2 border-#3A4562 mb-3">
            <h1 className="text-job text-headerColor font-bold mb-2.5">
              Attached images
            </h1>
          </div>
          <ul className="flex mb-0 lg:mb-[98px] mg:mb-[98px]">
            {getridofNull().pictures.map((item: string) => (
              <li
                key={nanoid()}
                className="w-[200px] h-[116px] overflow-hidden rounded-lg bg-item mr-2.5"
              >
                <img src={item} alt="job" className="w-full odject-contain" />
              </li>
            ))}
          </ul>
          <button
            className="hidden text-headerColor bg-goBackButton py-[18px] px-[26px] rounded-t-lg rounded-b-lg font-semibold text-xs fl lg:flex mg:flex"
            onClick={() => onGoBack()}
          >
            <span className="block bg-arrow bg-no-repeat bg-center bg-auto w-[10px] h-[15px] mr-[19px]"></span>
            RETURN TO JOB BOARD
          </button>
        </section>
      </div>
      <div className="lg:w-[31.9%] px-1 lg:px-0 mg:px-0">
        <div className="border-b-2 border-#3A4562 mb-6 lg:hidden mb:hidden">
          <h1 className="text-job text-headerColor font-bold mb-2.5">
            Contacts
          </h1>
        </div>
        <div className="bg-mapColor bg-mobileRate bg-no-repeat bg-center bg-auto"></div>
        <MapContainer jobOneValue={getridofNull()} />
      </div>
    </div>
  );
};
