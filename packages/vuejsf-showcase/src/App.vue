<template>
  <div id="app">
    <SmeupFld
      id="fld1"
      type="Itx"
      initialValue="asd"
      label="InputText"
      showSubmit
      mobile
      clearValue
      @change="onFldChange"
      @click="onFldClick"
    />
  </div>
</template>

<script>
import importedData from "./mock/dataTable";

import { SmeupFld } from 'vuejsf'

export default {
  name: "app",

  data() {
    return {
      data: importedData
    };
  },

  components: {
    SmeupFld
  },

  methods: {
    onFldChange() {
      // TODO
    }, 

    onFldClick() {
      // TODO
    }
  }
};
</script>

<style>
</style>
