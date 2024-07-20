import React, { useState } from "react";

import { Input, Button, Tab,ReadMore } from "../../components";
import "./todoStyle.css";

export const Todo = () => {
  const [taskList, setTaskList] = useState([]);
  const [errMessage, setErrMessage] = useState("");
  const [tabName, setTabName] = useState("All");

  let records;

  const handleKeyPress = (event) => {
    let taskName = event.target.value.trim();

    if (!event.target.value) {
      return setErrMessage("please enter task");
    }

    setErrMessage("");
    if (!taskName.length) {
      return;
    }

    if (event.key === "Enter") {
      let taskItem = {
        id: Date.now(),
        value: taskName,
        status: false,
      };

      if (!taskList.length) {
        setTaskList([taskItem]);
      } else {
        setTaskList([...taskList, taskItem]);
      }
      event.target.value = "";
    }
  };

  const handleTab = (selectedTab) => {
    setTabName(selectedTab);
  };

  const handleStatus = (value) => {
    const newStatus = taskList.map((element) => {
      if (value.id === element.id) {
        return { ...element, status: !element.status };
      }
      return element;
    });

    setTaskList(newStatus);
  };

  const handleDeleteButton = (index) => {
    const delArray = taskList.filter((element) => {
      if (index === element.id) {
        return false;
      }
      return true;
    });
    setTaskList(delArray);
  };

  if (tabName === "Active") {
    records = taskList.filter((element) => element.status === false);
  } else if (tabName === "Complete") {
    records = taskList.filter((element) => element.status === true);
  } else {
    records = taskList.map((element) => element);
  }

  const renderHead = () => {
    return (
      <div className="head-container">
        <div className="head-item">S.NO</div>
        <div className="head-item">Status</div>
        <div className="head-item">Task</div>
        <div className="head-item">Remove Task</div>
      </div>
    );
  };

  const renderBody = () => {
    return (
      <div className="render-body">
        {records.length ? (
          records.map((element, idx) => (
            <div className="head-container">
              <div>{idx + 1}</div>
              <div>
                <Input
                  type="checkbox"
                  value={element.id}
                  onChange={() => handleStatus(element)}
                  checked={element.status}
                />
              </div>
              <div className="text-content">
                <p className="nameValue">
                  <ReadMore>{element.value}</ReadMore>
                </p>
              </div>
              <div>
                <Button
                  className=" btn-danger deletebtn"
                  label="X"
                  onClick={() => handleDeleteButton(element.id)}
                />
              </div>
            </div>
          ))
        ) : (
          <span className="emptyData">No Task Found</span>
        )}
      </div>
    );
  };

  return (
    <div>
      <h1 className="main-heading">Todo</h1>

      <Input
        className="input-field"
        placeholder="Enter Task"
        onKeyUp={handleKeyPress}
      />
      <span className="errorMessage" id="err">
        {errMessage}
      </span>
      <Tab
        tabLables={["All", "Active", "Complete"]}
        handleTab={handleTab}
        tabName={tabName}
        className="button-container"
      />

      <div className="Data-container">
        <table className="table table-striped">
          {renderHead()}
          {renderBody()}
         </table>
      </div>
    </div>
  );
};
