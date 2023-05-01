import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FavoriteList.css";
import { GrFormView, GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

export default function FavoriteList() {
  const myPackages = JSON.parse(localStorage.getItem("listData"));

  const [list, setList] = useState(myPackages);
  const [view, setView] = useState("");
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  function handleDelete(name) {
    if (myPackages.length !== 1) {
      const deleted = list.filter((item) => name !== item);
      localStorage.setItem("listData", JSON.stringify(deleted));
      setList(deleted);
    } else {
      const deleted = list.filter((item) => name !== item);
      setList(deleted);
      localStorage.removeItem("listData");
    }
  }

  function handleView(name) {
    setView(name.message);
    setDisabled(!disabled)
  }

  function handleEdit() {
    
        setDisabled(false);
    
    
  }

  function handleEditeSave(){
    console.log('heee');
  }

  return (
    <div className="main_div_list">
      <div className="head">
        <h1>Below you will your Favorite npm-packages</h1>
        {list && (
          <button className="addbtn" onClick={() => navigate("/")}>
            Add more
          </button>
        )}
      </div>
      {list ? (
        <div className="mapTable">
          <table>
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {list.map((name, index) => {
                return (
                  <tr key={index}>
                    <td>{name.name}</td>

                    <td>
                      <GrFormView
                        className="icons"
                        onClick={() => handleView(name)}
                      />
                      <GrEdit className="icons" onClick={handleEdit} />
                      <AiFillDelete
                        className="icons"
                        onClick={() => handleDelete(name)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="noList">
          <p>No package found!</p> <br />
          <div>
            <button className="addbtn" onClick={() => navigate("/")}>
              Add
            </button>
          </div>
        </div>
      )}

      {view && (
        <div className="mapTable">
          <h4> why favorite..</h4>
          <textarea
            value={view}
            cols="80"
            rows="5"
            disabled = {disabled}
          ></textarea>
          <div>
            <button hidden= {disabled}  onClick={handleEditeSave} className="addbtn">Save</button>
          </div>
        </div>
      )}
    </div>
  );
}
