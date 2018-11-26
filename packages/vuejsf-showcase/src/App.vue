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

export default {
  name: "app",

  data() {
    return {
      data: importedData
    };
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
