import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const UploadProfile = () => {
  const nav = useNavigate();

  const handleUpload = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    axios
      .post(`http://localhost:8080/profiles`, formData)
      .then((response) => {
        console.log(response.data);
        nav("/all");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>UploadProfile</h1>
      <form>
        <input
          type="file"
          name="file"
          id="file"
          onChange={(e) => {
            handleUpload(e.target.files[0]);
          }}
        />
      </form>
    </div>
  );
};

export default UploadProfile;
