<template>
  <!-- ユーザー新規登録ページ -->
  <div class="register-container">
    <form>
      <div class="form-group">
        <label for="name1">名前</label>
        <div class="form-row">
          <div class="newName">
            <input
              v-model="newName"
              type="text"
              class="form-control"
              placeholder="ギーク 太郎"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="course1">コース</label>
        <div class="form-row">
          <div class="course">
            <select v-model="courseSelected">
              <option disabled value="">あなたのコースは？</option>
              <option>web</option>
              <option>game</option>
              <option>iphone</option>
              <option>webEx</option>
            </select>
            <span>コース</span>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="period1">期</label>
        <div class="form-row">
          <div class="period">
            <select v-model="periodSelected">
              <option disabled value="">何期生ですか？</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
            </select>
            <span>期</span>
          </div>
        </div>
      </div>
      <!-- v-bind:disabled="!isValid" -->
      <div class="btn-container">
        <button type="button" @click="doRegister" value="Submit">
          送信
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import router from "@/router/index.js";
import { db } from "@/firebase";
import store from "@/store";

export default {
  data() {
    return {
      newName: "",
      courseSelected: "",
      periodSelected: "",
      errorMessage: "",
      showError: false,
    };
  },

  methods: {
    doRegister() {
      db.collection("public-users")
        .doc(store.state.publicUser.id)
        .update({
          name: this.newName,
          course: this.courseSelected,
          term: this.periodSelected,
          status: "unApproved",
          role: "student",
        })
        .then(() => {
          db.collection("public-users")
            .doc(store.state.publicUser.id)
            .get()
            .then(doc => {
              const publicUser = {
                id: doc.id,
                ...doc.data(),
              };
              store.commit("setPublicUser", publicUser);
              alert("登録成功だお！おめでと～");
              router.push("/");
            });
        });
    },
  },
};
</script>

<style>
.register-container {
  margin-top: 300px;
}
</style>
