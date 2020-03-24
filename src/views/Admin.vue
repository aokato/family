<template>
  <div class="admin-container">
    <tr v-for="user in adminList" v-bind:key="user.id">
      <td>{{ user.name }}</td>
      <td>{{ user.course }}コース</td>
      <td>{{ user.term }}期</td>
      <td class="adminCheck">
        <input
          type="checkbox"
          id="checkbox"
          @click="toggleUser($event, user.id)"
        />
      </td>
    </tr>
    <button @click="commitChanges">完了</button>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  data() {
    return {
      adminList: [],
      userApprovingStatus: {},
    };
  },
  mounted() {
    db.collection("public-users")
      .where("status", "==", "unApproved")
      .get()
      .then(snapshot => {
        const array = [];
        snapshot.forEach(doc => {
          array.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        this.adminList = array;
      });
  },

  methods: {
    toggleUser(e, id) {
      this.userApprovingStatus[id] = e.target.value;
    },
    commitChanges() {
      const batch = db.batch();
      for (const id of Object.keys(this.userApprovingStatus)) {
        var userRef = db.collection("public-users").doc(id);
        if (this.userApprovingStatus[id]) {
          batch.update(userRef, { status: "approved" });
        } else {
          batch.update(userRef, { status: "unApproved" });
        }
      }
      batch
        .commit()
        .then(() => {
          console.log("追加完了");
          this.userApprovingStatus = {};
          alert("でけた");
        })
        .catch(error => {
          console.log(error.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-container {
  margin-top: 100px;
}
</style>
