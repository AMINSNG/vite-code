import React from "react";
import { useNavigate, useParams } from "react-router";

export default function dynamicthemeswitch() {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  function routeuser() {
    navigate("/");
  }

  return (
    <div>
      <div>User {params.userid}</div>;
      <button onClick={routeuser}>vavigate to home</button>
    </div>
  );
}
