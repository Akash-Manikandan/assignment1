import React, { useEffect, useState } from "react";
import styles from "./LocationApi.module.scss";
const LocationApi = () => {
  const [city, setCity] = useState("Chennai");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  function getCity(coordinates: number[]) {
    var xhr = new XMLHttpRequest();
    var lat = coordinates[0];
    var lng = coordinates[1];

    // Paste your LocationIQ token below.
    xhr.open(
      "GET",
      "https://us1.locationiq.com/v1/reverse.php?key=pk.92c044cb59469808ccbf076bd15a0085&lat=" +
        lat +
        "&lon=" +
        lng +
        "&format=json",
      true
    );
    xhr.send();
    xhr.onreadystatechange = processRequest;
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e: any) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        var city1 = response.address.city;
        setCity(city1);
        return;
      }
    }
  }
  function getCoordinates() {
    var options = {
      timeout: 50000,
      maximumAge: 0,
    };

    function success(pos: any) {
      var crd = pos.coords;
      var lat = crd.latitude.toString();
      var lng = crd.longitude.toString();
      var coordinates = [lat, lng];
      //console.log(`Latitude: ${lat}, Longitude: ${lng}`);
      setLatitude(Math.round(Number(lat) * 100) / 100);
      setLongitude(Math.round(Number(lng) * 100) / 100);
      getCity(coordinates);
      return;
    }

    function error(err: any) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  useEffect(() => {
    getCoordinates();
  }, []);

  return (
    <div className={styles.container}>
      <div>City: {city}</div>
      <div className={styles.latLong}>
        <div>Latitude: {latitude}</div>
        <div>Longitude: {longitude}</div>
      </div>
    </div>
  );
};

export default LocationApi;
