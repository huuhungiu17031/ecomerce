import React from "react";
// import { useEffect } from "";
function ProductScreen(props) {
  const id = props.match.params.id;
  // useEffect(() => {
      
  //     return () => {
          
  //     }
  // }, [])
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-4"></div>
        <div className="col-sm-12 col-md-4"></div>
        <div className="col-sm-12 col-md-4"></div>
      </div>
    </div>
  );
}

export default ProductScreen;
