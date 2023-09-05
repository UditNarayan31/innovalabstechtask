<template>
  <div>
    <h3>Question B</h3>
    <input type="text" @input="usernameFilter" v-model="search_vm" placeholder="Search">
    <div class="pagination_main">
      <button @click="prev" v-if="current > 1">Prev</button>
      <button v-else disabled>Prev</button>
      {{ current }}
      <button @click="next" v-if="userList.length > current">Next</button>
      <button v-else disabled>Next</button>
    </div>
    <table id="customers">
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
      </tr>
      <tr v-for="(item, i) in userList.slice(0, 4)" :key="i">
        <td>{{ item.name }}</td>
        <td>{{ item.username }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.website }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    search_vm: '',
    current: 1,
  }),

  computed: {
    userList() {
      if (this.$store.state.filterCon.length == 0) {
        return this.$store.state.userData
      } else {
        return this.$store.state.filterCon
      }
    },
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapMutations([
      'filterUserList'
    ]),
    usernameFilter() {
      this.filterUserList(this.search_vm)
    },
    getData() {
      this.$store.dispatch('getUserList')
    },
    prev() {
      if (this.current == 0) {
        this.current = 1
      } else {
        this.$store.commit('prevPagination')
        this.current = this.$store.getters["getListCount"]
      }
    },
    next() {
      this.$store.commit('nextPagination')
      this.current = this.$store.getters["getListCount"]
    },
  }
}
</script>

<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

input[type=text],
select {
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.pagination_main {
  margin-bottom: 1rem;
  margin-top: 1rem;
}
</style>