import React from "react";
import Tree from "./Tree";
import { useEffect, useState } from "react";


 const treeData = 
 [
  {
    key: "0",
    label: "Documents",
    icon: "fa fa-folder",
    
    children: [
      {
        key: "0-0",
        label: "Document 1-1",
        icon: "fa fa-folder",
        
        children: [
          {
            key: "0-1-1",
            label: "Document-1.doc",
            icon: "fa fa-file",
         
          },
          {
            key: "0-1-2",
            label: "Document-2.doc",
            icon: "fa fa-file",
            
          },
          {
            key: "0-1-3",
            label: "Document-3.doc",
            icon: "fa fa-file",
       
          },
          {
            key: "0-1-4",
            label: "Document-4.doc",
            icon: "fa fa-file",
         
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Desktop",
    icon: "fa fa-desktop",
  
    children: [
      {
        key: "1-0",
        label: "document1.doc",
        icon: "fa fa-file",
      
      },
      {
        key: "0-0",
        label: "documennt-2.doc",
        icon: "fa fa-file",
        
      },
    ],
  },
  {
    key: "2",
    label: "Downloads",
    icon: "fa fa-download",
  
    children: [ {
      key: "0-0",
      label: "documennt-2.doc",
      icon: "fa fa-file",
    
    },],
  },
];

 

const TreeList = () => {
  const [parent,updateParent] = useState("");
  
  const [name,updateName] = useState("New Folder");
 function handleClick(){// eslint-disable-next-line
   if(parent==""){
    treeData.push({
      key: "1",
      label: name,
      icon: "fa fa-download",
      title: "New Folder",
      children: [ {
        key: "0-0",
        label: "a.doc",
        icon: "fa fa-file",
        title: "New Folder 2",
      },],
    },)
   }
   else {
     for (var i = 0; i < treeData.length; i++) {
      // eslint-disable-next-line
      if (parent == i ) {
       
       

      treeData[i].children.splice(0,0,{
        key: "1",
        label: name,
        icon: "fa fa-download",
        
        children: [ {
          key: "0-0",
          label: "a.doc",
          icon: "fa fa-file",
          
        },],
      },)
      break;
    }
  }
  
    
   }
    
       updateIndicator(!Indiacator);
    console.log(treeData);
    };
    const [Indiacator,updateIndicator] = useState(false)
  useEffect(()=>{

  },[Indiacator]);
  return (
    <>
    
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand text-light" href="/">File Explorer</a>
      </nav>
      <div className="row">
        <div className="col text-left">
          
          <p className="mt-3">
            <div className="row mt-3 d-flex justify-content-left">
              <div className="col-lg-8 text-left text-dark">
                <Tree data={treeData} handleClick={handleClick} />
                
              </div>
            </div>
          </p>
        </div>
      </div>
      <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Parent</span>
  <input type="number" className="form-control" onChange={(e)=>updateParent(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
      
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter Folder Name</span>
  <input type="text" className="form-control" onChange={(e)=>updateName(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
      {/* <label>Child:</label>
      <input type="number" onChange={(e)=>updateChildren(e.target.value)}/> */}
      <ul class="list-unstyled">
  
  <li><b>How to use the File Explorer?</b>
    <ul>
      <li>Click on Create Folder button to create folder in the root directory.</li>
      <li>Type the number in the Parent input starting from 0 to create folder inside any of the parent directory.</li>
      <li>Write any name you want to give to the folder in Enter folder name section.</li>
    </ul>
  </li>
  
</ul>
      
    </>
  );
};

export default TreeList;





// if(children == ""){
//   continue;
// }
// else
// { for(var j=0;j < treeData[i].children.length;j++){

//    if(children == j)
//   {console.log("read");
//     treeData[i].children[0].children[j].splice(0,0,{
//       key: "1",
//       label: name,
//       icon: "fa fa-download",
//       title: "New Folder",
//       children: [ {
//         key: "0-0",
//         label: "a.doc",
//         icon: "fa fa-file",
//         title: "New Folder 2",
//       },],
//     },)
//   }
   
// }}



// const folder = () =>
// {

//     var createFolder = {
//         a:{},
//         b:{}
//     }
//    function findPathsToKey(options) {
//         let results = [];
      
//         (function findKey({
//           key,
//           obj,
//           pathToKey,
//         }) {
//           const oldPath = `${pathToKey ? pathToKey + "." : ""}`;
//           if (obj.hasOwnProperty(key)) {
//             results.push(`${oldPath}${key}`);
//             return;
//           }
      
//           if (obj !== null && typeof obj === "object" && !Array.isArray(obj)) {
//             for (const k in obj) {
//               if (obj.hasOwnProperty(k)) {
//                 if (Array.isArray(obj[k])) {
//                   for (let j = 0; j < obj[k].length; j++) {
//                     findKey({
//                       obj: obj[k][j],
//                       key,
//                       pathToKey: `${oldPath}${k}[${j}]`,
//                     });
//                   }
//                 }
      
//                 if (obj[k] !== null && typeof obj[k] === "object") {
//                   findKey({
//                     obj: obj[k],
//                     key,
//                     pathToKey: `${oldPath}${k}`,
//                   });
//                 }
//               }
//             }
//           }
//         })(options);
      
//         return results;
//       }
      
//     //   findPathsToKey({ obj: objWithDuplicates, key: "d" })
    
    
//     function createDirectories(createFoler,key){
//         const path = findPathsToKey({ obj: createFoler, key: key })
//         const file =  Object.create(path);

//     }
//     return(
//         <div>
//             <button onClick={createDirectories()}>Create Folder</button>
//         </div>
//     );

// }
