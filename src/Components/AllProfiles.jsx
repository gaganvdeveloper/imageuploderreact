import axios from "axios";
import React, { useEffect, useState } from "react";

const AllProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/profiles")
      .then((response) => {
        console.log(response.data.body);
        setProfiles(response.data.body);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>AllProfiles</h1>

      {profiles.map((p, index) => {
        return (
          <div key={index}>
            <img src={("" + p.filePath).substring(59)} width={300} height={300}   alt="Imag" />
          </div>
        );
      })}
    </div>
  );
};

export default AllProfiles;
