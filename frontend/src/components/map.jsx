// import "./map.css"

function Map({className}) {
  return (
    // return map here
    // <div className="map-section bg-white rounded-xl border-2 border-gray-100">
      <iframe
        src="./../flood_risk_map_with_clusters12.html"
        title="Mumbai Population Map"
        className={className}
      />
    // </div>
  );
}

export default Map;
