import React, { useState, useEffect, useRef } from "react";
import CardCategory from "./CardCategory";


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data)
      })
  }, [])



    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Productos por categoria
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              {
                categories.map((category, i) => (
                  <CardCategory category={category} key={category.name + i} />
                ))
              }
              
            </div>
          </div>
        </div>
      </div>
    );
}

export default Categories;