<template>
  <div class="hello">
    <h1>{{ msg }} im from other component</h1>
    <Button type="primary">{{store.state.count}}</Button>
  </div>
</template>

<script>
import { Button } from 'vant';
import {store} from '../store'

export default {
  name: 'HelloWorld',
  components: {Button},
  props: {
    msg: String
  },
  data() {
    return {
      store
    }
  }
}
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
