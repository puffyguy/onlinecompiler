<template>
  <div class="container-fluid">
    <b-icon icon="code-square"></b-icon> <span>Code Here</span>
    <div>
      <textarea
        name="code"
        id="code"
        cols="40"
        rows="15"
        v-model="input"
      ></textarea>
    </div>
    <button class="btn btn-primary btn-sm" @click="getCode">Run</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      input: "",
    };
  },
  methods: {
    getCode() {
      // console.log(this.input);
      axios
        .post(`/getCode`, { userCode: this.input })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
