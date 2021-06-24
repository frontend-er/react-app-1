import React from "react";
import Status from "./Status";
import {create} from "react-test-renderer"

describe("Status component", () => {
   test("Status from props", () => {
      const component = create(<Status status="it-camasutra" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("it-camasutra");
   });

   test("Status from props should be in the state", () => {
      const component = create(<Status status="it-camasutra" />);
      const root = component.root;
      let span = root.findByType("span");
      expect(span.length).toBe(1);
   });

   test("Status from props should be in the stat de", () => {
      const component = create(<Status status="it-camasutra" />);
      const root = component.root;
      let span = root.findByType("span");
      expect(span.innerHTMLh).toBe("it-camasutra");
   });
});