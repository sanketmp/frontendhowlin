import React, { useState, useEffect } from "react";
//import "./Services.css";

const treeData = [
  {
    id: "4",
    text: "Consumer Research & Mapping",

    children: [
      {
        id: "86",
        text: "Consumer IQ",
        children: [
          {
            text: [
              "Audience Depth",
              "Interest Segregation",
              "Consumption Patterns",
              "Attention Behaviour",
              "Development Metrics",
              "Consumer Archetype",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "4",
    text: "Customer Experience Study & Strategy",

    children: [
      {
        id: "86",
        text: "Marketplace Data & Research",
      },
    ],
  },
  {
    id: "4",
    text: "Go To Market Strategy",

    children: [
      {
        id: "86",
        text: "Product/Service Category Data & Research",
      },
    ],
  },
  {
    id: "4",
    text: "Branding Framework Establishment",

    children: [
      {
        id: "86",
        text: "Brand Identity",
        children: [
          {
            id: "86",
            text: "first fisrtjfjsf",
          },
        ],
      },
      {
        id: "86",
        text: "Brand Communication",
        children: [
          {
            id: "86",
            text: "first fisrt",
          },
        ],
      },
    ],
  },
];

const Services = () => {
  const [state, setstate] = useState([]);
  // useEffect(() => {
  //     mapTree(treeData, state, setstate);
  // }, [])
  // useEffect(() => {
  //     console.log(state)
  // }, [state])
  // let arr = []
  // const mapTree = (treeData) =>{
  //     treeData.forEach((ele)=>{
  //         console.log(ele, state);
  //         setstate([...state, ele])
  //         arr.push(ele);
  //         const children = ele.children && JSON.parse(JSON.stringify(ele.children));
  //         delete ele.children && ele['children'];
  //         if(children && children.length){
  //             return mapTree(children)
  //         }
  //     })
  // }
  // console.log(arr);

  return (
    <section id="services">
      <div className="tree">
        {treeRendering(treeData)}
        {/* <ul>
		<li>
            <div><input type="checkbox"/> Main <br/> <button> Test Btn </button></div>
            <ul>
                <li>
                      <div>wqhdveghdf</div>

                </li>
                <li>
                    <div>efjejfg</div> 
                    <ul>
                      <li>
                            <div>wqhdveghdf</div>
      
                      </li>
                      <li>
                          <div>efjejfg</div> 
                          <ul>
                            <li>
                                  <div>wqhdveghdf</div>
                                  <ul>
                                    <li>
                                          <div>wqhdveghdf</div>
                    
                                    </li>
                                </ul>
            
                            </li>
                            <li>
                                <div>efjejfg</div> 
                                <ul>
                                  <li>
                                        <div>wqhdveghdf</div>
                  
                                  </li>
                              </ul>
                            </li>
                        </ul>
                      </li>
                  </ul>
                </li>
            </ul>
                        
		</li>
	</ul> */}
      </div>
    </section>
  );
};

const treeRendering = (treeData) => {
  return (
    <>
      <ul>
        {treeData.map((item) => (
          <li className={item.text + item.id}>
            <div>{item.text}</div>
            {item.children && item.children.length
              ? treeRendering(item.children)
              : ""}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Services;
