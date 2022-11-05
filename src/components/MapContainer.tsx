import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
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
type Props = {
  jobOneValue: Job;
};
const MapContainer: React.FC<Props> =({jobOneValue})=> {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAlHq2CNbwXtAncINBoMbbXd4Lo4lucn4k",
  });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return <Map jobOneValue={jobOneValue}/>;
}
const Map: React.FC<Props> =({jobOneValue})=>  {
  let center
  if(jobOneValue!== undefined){
    center = {lat: jobOneValue.location.lat, lng: jobOneValue.location.long};
  }
  
  return (
    <div className="w-[100%]">
    <div className="bg-mapColor h-[218px] w-[100%] bg-circle bg-no-repeat bg-left bg-auto flex justify-center items-center flex-col rounded-t-lg">
      <div className="flex justify-start flex-col">
      <p className="text-mapText text-xl font-bold text-start mb-2">{jobOneValue && jobOneValue.name}</p>
      <p className="text-mapText font-sans text-start mb-2 font-normal text-lg"><span></span>{jobOneValue && jobOneValue.address}</p>
      <p className="text-mapText font-sans text-start mb-2 font-normal text-lg">{jobOneValue && jobOneValue.phone}</p>
      <p className="text-mapText font-sans text-start font-normal text-lg">{jobOneValue && jobOneValue.email}</p>
      </div>
     </div>
    
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="h-[218px] w-[100%] rounded-b-lg bg-mapColor"
    >
      <Marker position={{ lat: jobOneValue.location.lat, lng: jobOneValue.location.long }} />
    </GoogleMap>
    </div>
  );
}

export default MapContainer;