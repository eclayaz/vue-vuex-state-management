<template>
  <div>
    Filter Todos
    <select @change="filterTodos($event)">
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="5">5</option>
      <option value="10">10</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FIlterTodos",
  methods: {
    ...mapActions(["filterTodos"])
  }
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>