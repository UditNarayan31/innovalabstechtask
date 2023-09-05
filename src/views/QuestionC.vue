<template>
  <div>

    <h3>Question C</h3>
    <div>
      Person Name
      <input type="text" v-model="personName_vm" placeholder="john doe" required>
      <br>
      <div>
        Is Person Minor?
        <input type="checkbox" @click="setMinorTrue" value="yes" v-model="isMinorNo">Yes
        <input type="checkbox" @click="setMinorFalse" value="no" v-model="isMinorYes">No
      </div>
      <br>
      <div>
        Enter Your DOB?
        <input type="date" v-model="dob" placeholder="01/01/2000" required>
      </div>
    </div>
    <button class="submit__btn" @click="addForm">Submit</button>
    <div class="alert__msg">{{ alertMsg }}</div>
    <div class="json__bloc" v-if="(blocks.length > 0)">

      <div v-for="(item, i) in blocks" :key="i">
        <div class="detail__box">
          Person Name:
          {{ item.personName }} <br>
          Is Minor:
          {{ item.minor }} <br>
          Date Of Birth:
          {{ item.dob }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { isValidString } from '../function/common'
export default {
  data: () => ({
    personName_vm: null,
    isMinorYes: true,
    isMinorNo: false,
    dob: null,
    blocks: [],
    alertMsg: ''
  }),
  methods: {
    addForm() {
      if (!isValidString(this.personName_vm) || this.personName_vm === null) {
        this.alertMsg = 'Enter Your Name'
        setTimeout(() => {
          this.alertMsg = ''
        }, 2100);
      }
      else if (!isValidString(this.dob) || this.dob === null) {
        this.alertMsg = 'Enter Your DOB'
        setTimeout(() => {
          this.alertMsg = ''
        }, 2100);
      }
      else {
        let pl = {
          personName: this.personName_vm,
          minor: this.isMinorNo,
          dob: this.dob
        }
        this.blocks.push(pl)
        this.personName_vm = ''
        this.isMinorYes = true
        this.isMinorNo = false
        this.dob = ''
      }


    },
    setMinorTrue() {
      this.isMinorNo = true
      this.isMinorYes = false
    },
    setMinorFalse() {
      this.isMinorNo = false
      this.isMinorYes = true
    }
  }
}
</script>

<style>
.submit__btn {
  margin-top: 1rem;
}

.alert__msg {
  color: red;
  font-size: 12px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.json__bloc {
  margin-top: 2rem;
}

.detail__box {
  margin-top: 1rem;
}
</style>