// https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3

import Vue from "vue";

// components
import Fld from "./src/components/SmeupFld.vue";
import Label from "./src/components/SmeupLabel.vue";
import Matrix from "./src/components/comp/mat/SmeupMatrix.vue";

const SmeupComponents = {
  Fld,
  Label,
  Matrix
};

Object.keys(SmeupComponents).forEach(name =>
  Vue.component(name, SmeupComponents[name])
);

export const SmeupFld = SmeupComponents.Fld;
export const SmeupLabel = SmeupComponents.Label;
export const SmeupMatrix = SmeupComponents.Matrix;

export default SmeupComponents;
