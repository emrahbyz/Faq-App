import React from "react";

function Accordion({ title, active, setActive }) {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>Question</p>
          <span onClick={() => setActive(title)}>+</span>
        </div>
        <div className={(active === title ? "show" : "") + "accordionContent"}>
          <div className="container">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              consectetur cum eum. Hic magni nam reiciendis optio laborum!
              Consectetur, sapiente? Iusto ad ex iste vitae quam accusantium
              aliquid quis accusamus. Quibusdam obcaecati cum sed laudantium
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
