import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./index.css";
import "./Fontawesomeicons/index.js"

const Tree = (props) => {
  let  data = props.data;
  const Change =()=> props.handleClick;
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} click={Change()} />
          
        ))}
      </ul>
      <button className="btn btn-primary" onClick={Change()}>Create Folder</button>
    </div>
  );
};


const TreeNode = (props) => {
  var node = props.node;
  const handleClick = props.click;
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.children ? true : false;
  
  return (
    <div>
    <li className="d-tree-node border-0">
      <div className="d-flex" onClick={(e) => {setChildVisiblity((v) => !v)}}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""             /* Iska matlab hai jab childvisible true hoga to active class dedenge div ko */
            }`}
          >
            <FontAwesomeIcon icon="caret-right" />
          </div>
        )}

        <div className="col d-tree-head">
          <i className={`mr-1 ${node.icon}`}> </i>
          {node.label}
        </div>
      </div>

      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={node.children} handleClick={handleClick}  />
          </ul>
        </div>
      )}
    </li>
    </div>
  );
};

export default Tree;