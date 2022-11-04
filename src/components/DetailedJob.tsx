import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import MapContainer from "./MapContainer";
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

  const onGoBack = () => {
    navigate(location?.state?.from ?? "/");
  };
  function getSalary() {
    if (jobOneValue !== undefined) {
      let str = jobOneValue.salary;
      if (str.includes("k")) {
        let newStr = parseInt(str.replace(/[^\d]/g, ""));
        let newString = String(newStr);
        Array.from(newString);
        let firstNumbers = newString.slice(0, 2);
        let secondNumbers = newString.slice(2, 4);
        return `€ ${firstNumbers} 000\u2013${secondNumbers} 000`;
      } else {
        return;
      }
    }
  }

  return (
    <div className="container h-full mx-auto w-full bg-red pb-9 pt-6 px-4 lg:w-[65%] lg:pt-7 md:w-[65%] md:pt-7 lg:px-0 md:pb-16 lg:pb-16 flex  justify-between">
      <div className="flex basis-[58%] flex-col">
        <section className="pl-5">
          <div className="flex justify-between w-full border-b-2 border-#3A4562">
            <h1 className="text-job text-headerColor font-bold">Job Details</h1>
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
          <div className="pt-10">
            <button className="text-white bg-button py-[18px] px-[30px] rounded-t-lg rounded-b-lg font-semibold text-xs mb-8">
              APPLY NOW
            </button>
            <div className="flex justify-between mb-2">
              <h2 className="text-headerColor text-2xl font-bold w-[69.3%] overflow-hidden min-h-[120px]">
                {jobOneValue && jobOneValue.title}
              </h2>
              <div className="w-[22.26%]">
                <p className="font-bold	text-xl text-headerColor">
                  {getSalary()}
                </p>
                <p className="font-normal text-lg">Brutto, per year</p>
              </div>
            </div>
            <p className="text-lg text-time font-sans mb-2">
              Posted{" "}
              {jobOneValue &&
                moment(jobOneValue.createdAt, "YYYYMMDD").fromNow()}
            </p>
            <p className="text-lg text-headerColor font-sans mb-10">
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
            <ul className="-ml-5 mb-8">
              {jobOneValue &&
                jobOneValue.benefits.map((item) => (
                  <li
                    key={nanoid()}
                    className="text-lg text-headerColor font-sans flex items-center"
                  >
                    <span className="block bg-listItem bg-no-repeat bg-center bg-auto w-[9px] h-[9px] mr-2.5"></span>
                    {item}
                  </li>
                ))}
            </ul>
            <button className="text-white bg-button py-[18px] px-[30px] rounded-t-lg rounded-b-lg font-semibold text-xs">
              APPLY NOW
            </button>
          </div>
        </section>
        <section className="pt-[86px] pl-5">
          <div className="border-b-2 border-#3A4562 mb-4">
            <h1 className="text-job text-headerColor font-bold mb-2.5">
              Additional info
            </h1>
          </div>
          <div>
            <p className="text-lg text-headerColor font-sans mb-2.5">
              Employment type
            </p>
            <ul className="flex mb-6">
              {jobOneValue &&
                jobOneValue.employment_type.map((item) => (
                  <li
                    key={nanoid()}
                    className="text-base text-emptype font-bold bg-bcEmptype py-4 mr-2 min-w-[222px] text-center rounded-t-lg rounded-b-lg border-borderColor border-y border-x"
                  >
                    {item}
                  </li>
                ))}
            </ul>
            <p className="text-lg text-headerColor font-sans mb-2.5">
              Benefits
            </p>
            <ul className="flex">
              {jobOneValue &&
                jobOneValue.benefits.map((item) => (
                  <li
                    key={nanoid()}
                    className="text-base text-textBenefits font-bold bg-bcBenefits py-4 mr-2 min-w-[222px] text-center rounded-t-lg rounded-b-lg border-borderColorYel border-y border-x"
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </section>
        <section className="pt-[86px] pl-5">
          <div className="w-full border-b-2 border-#3A4562 mb-3">
            <h1 className="text-job text-headerColor font-bold mb-2.5">
              Attached images
            </h1>
          </div>
          <ul className="flex mb-[98px]">
            {jobOneValue &&
              jobOneValue.pictures.map((item) => (
                <li
                  key={nanoid()}
                  className="w-[200px] h-[116px] overflow-hidden rounded-lg bg-item mr-2.5"
                >
                  <img src={item} alt="job" className="w-full odject-contain" />
                </li>
              ))}
          </ul>
          <button
            className="text-headerColor bg-goBackButton py-[18px] px-[26px] rounded-t-lg rounded-b-lg font-semibold text-xs fl flex"
            onClick={() => onGoBack()}
          >
            <span className="block bg-arrow bg-no-repeat bg-center bg-auto w-[10px] h-[15px] mr-[19px]"></span>
            RETURN TO JOB BOARD
          </button>
        </section>
      </div>
      <div className="flex basis-1/3">
        <div className="bg-mapColor"></div>
        <MapContainer />
      </div>
    </div>
  );
};

export default DetailedJob;
