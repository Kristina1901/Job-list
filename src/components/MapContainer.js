import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

function MapContainer() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAlHq2CNbwXtAncINBoMbbXd4Lo4lucn4k",
  });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return <Map />;
}
const center = { lat: 44, lng: -80 };
function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="h-[218px] w-[201px]"
    >
      <Marker position={{ lat: 44, lng: -80 }} />
    </GoogleMap>
  );
}

export default MapContainer;
